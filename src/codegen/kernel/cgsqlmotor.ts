//src\codegen\kernel\cgsqlmotor.ts

import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";
import { CodeGenConfig } from "@/codegen/cgconfig";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { CodeGenSqlHelper } from "@/codegen/kernel/cgsqlhelper";
import numericTypesData from "@/codegen/kernel/sqltypesnumber.json";


/**
 * CodeGen Sql Process
 *    info data sQL types:
 *       file: src/app_front/codegen/appdbmotor.ts
 *
 *       import sqlTypesData from "@/app_front/codegen/sql/sqltypes.json";
 *       export interface SqlTypes {fieldtypes: {[key:string]:string[];};}
 *       export const SqlFieldtypes = (sqlTypesData as SqlTypes).fieldtypes; 
 *
 * class CodeGen Sql
 */

//CodeGenSql.getEsquemaTable
export class CodeGenSql {

    /**
     * Implementation function for parse SQL script.
     * @param sqlScript El contenido del script de esquema d la bbdd en SQL.
     * @returns ModelTable Array with the tables included in the script
     *      and store in a single model clases:
     *          Relation
     *          ModelField
     *          ModelTable
     */
    public static getEsquemaTables(sqlScript: string): ModelTable[] {
        const tablesMap = new Map<string, ModelTable>();

        // 1. Step 1: Parsear CREATE TABLE para obtener tablas y campos básicos
        const createTableRegex = /CREATE TABLE public\.(\w+)\s*\(([\s\S]*?)\);/g;
        let tableMatch;
        while ((tableMatch = createTableRegex.exec(sqlScript)) !== null) {
            const tableName = tableMatch[1];
            const fieldsBlock = tableMatch[2];
            
            const table = new ModelTable(tableName);
            
            const fieldLines = fieldsBlock.split('\n').filter(line => line.trim() && !line.trim().startsWith('--'));

            for (const line of fieldLines) {
                const trimmedLine = line.trim().replace(/,$/, '');
                const fieldRegex = /^(\w+)\s+((?:character varying|timestamp without time zone|[\w]+)(?:\(\d+\))?)/;
                const fieldMatch = trimmedLine.match(fieldRegex);

                if (!fieldMatch) continue;

                const fieldName = fieldMatch[1];
                const fullType = fieldMatch[2];

                const required = trimmedLine.toUpperCase().includes('NOT NULL');
                const modelType = CodeGenSqlHelper.mapPgTypeToModelType(fullType);

                let maxlen: number | null = null;
                const maxlenMatch = fullType.match(/\((\d+)\)/);
                if (maxlenMatch) {
                    maxlen = parseInt(maxlenMatch[1], 10);
                }

                // Parse DEFAULT value from SQL
                let defaultValue: string | null = null;
                const defaultMatch = trimmedLine.match(/DEFAULT\s+([^,\s]+(?:\s+[^,\s]*)*)/i);
                if (defaultMatch) {
                    let rawDefault = defaultMatch[1].trim();
                    // Clean up common patterns
                    rawDefault = rawDefault.replace(/::[\w\s]+$/g, ''); // Remove type casting like ::character varying
                    rawDefault = rawDefault.replace(/^'(.*)'$/, '$1'); // Remove outer quotes if present
                    
                    // For date fields with CURRENT_DATE/NOW()/etc., don't set defaultValue
                    if (modelType.toLowerCase() === 'date' && 
                        (rawDefault.toUpperCase().includes('CURRENT_DATE') || 
                         rawDefault.toUpperCase().includes('NOW()') || 
                         rawDefault.toUpperCase().includes('CURRENT_TIMESTAMP'))) {
                        defaultValue = null; // Let date fields with current date handle this specially
                    } else {
                        defaultValue = rawDefault;
                    }
                }
                if(defaultValue){
                    if(defaultValue.includes('NOT NULL')){
                        defaultValue = defaultValue.replace('NOT NULL','').trim();
                    }
                }


                // Determine format for numeric types using the JSON
                let format: string | null = null;
                const numericType = numericTypesData.types.find((t: any) => 
                    t.name.toUpperCase() === fullType.toUpperCase() ||
                    modelType.toLowerCase() === 'numeric' || 
                    modelType.toLowerCase() === 'decimal'
                );
                if (numericType) {
                    format = `${numericType.maxdiginteger}:${numericType.maxdigdecimal}`;
                }
                
                const field = new ModelField(
                    fieldName, // name
                    modelType, // type
                    false, // pk (se determina después)
                    false, // generated (se determina después)
                    required, // required
                    defaultValue, // defaultValue parseado del SQL
                    format, // format basado en sqltypesnumber.json
                    null, // minlen
                    maxlen, // maxlen
                    false // fk (se determina después)
                );
                table.addField(field);
            }
            tablesMap.set(tableName, table);
        }

        // 2. Step 2: Parsear PRIMARY KEYs
        const pkRegex = /ALTER TABLE ONLY public\.(\w+)\s+ADD CONSTRAINT \w+_pkey PRIMARY KEY \((\w+)\);/g;
        let pkMatch;
        while ((pkMatch = pkRegex.exec(sqlScript)) !== null) {
            const tableName = pkMatch[1];
            const pkFieldName = pkMatch[2];
            const table = tablesMap.get(tableName);
            if (table) {
                const field = table.fields.find(f => f.name === pkFieldName);
                if (field) field.pk = true;
            }
        }

        // 3. Step 3: Parsear campos autogenerados (GENERATED ALWAYS AS IDENTITY)
        const generatedRegex = /ALTER TABLE public\.(\w+) ALTER COLUMN (\w+) ADD GENERATED ALWAYS AS IDENTITY/g;
        let genMatch;
        while ((genMatch = generatedRegex.exec(sqlScript)) !== null) {
            const tableName = genMatch[1];
            const fieldName = genMatch[2];
            const table = tablesMap.get(tableName);
            if (table) {
                const field = table.fields.find(f => f.name === fieldName);
                if (field) field.generated = true;
            }
        }

        // 4. Step 4: Parsear FOREIGN KEYs y crear las relaciones
        const fkRegex = /ALTER TABLE ONLY public\.(\w+)\s+ADD CONSTRAINT \w+_fkey FOREIGN KEY \((\w+)\) REFERENCES public\.(\w+)\((\w+)\)/g;
        let fkMatch;
        while ((fkMatch = fkRegex.exec(sqlScript)) !== null) {
            const [_, localTableName, localFieldName, foreignTableName, foreignFieldName] = fkMatch;
            
            const table = tablesMap.get(localTableName);
            if (table) {
                const field = table.fields.find(f => f.name === localFieldName);
                if (field) {
                    field.fk = true;
                    if (!field.relations) field.relations = [];
                    field.relations.push(new Relation(foreignTableName, foreignFieldName));
                }
            }
        }

        return Array.from(tablesMap.values());
    }//end method getEsquemaTables

    public static getEsquemaTable(sqlScript:string,tableName:string): ModelTable|null {
        //temp code
        const allTableModels :ModelTable[] = CodeGenSql.getEsquemaTables(sqlScript);
        let index = -1;
        for (let itemIdx=0;itemIdx<allTableModels.length;itemIdx++) {
            if (tableName == allTableModels[itemIdx].name) {
                index = itemIdx;
                break;
            }
        }
        if (index>=0) {return allTableModels[index];}
        return null;
    }

}//end class CodeGenSql
