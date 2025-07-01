//src\codegen\kernel\cgsqlhelper.ts

import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";

import sqlTypesData from "@/codegen/kernel/sqltypes.json";
import types from "@/codegen/kernel/sqltypesnumber.json";

export interface SqlTypes {fieldtypes: {[key:string]:string[];};}
export const SqlFieldtypes = (sqlTypesData as SqlTypes).fieldtypes;

export class CodeGenSqlHelper {

    public static typeMap: Map<string, string> = CodeGenSqlHelper.buildTypeMap();

    public static mapSqlTypeToTypeScript(sqlType: string): string {
        const type = sqlType.toLowerCase();
        
        // Check text types
        if (type.includes('text') || type.includes('varchar') || type.includes('character')) {
            return 'string';
        }
        
        // Check numeric types - TODOS los números como number | null
        if (type.includes('integer') || type.includes('int') || type.includes('serial')) {
            return 'number | null';
        }
        
        // Check decimal types - también number | null para consistencia
        if (type.includes('decimal') || type.includes('numeric') || type.includes('real') || 
            type.includes('float') || type.includes('double')) {
            return 'number | null';
        }
        
        // Check date types
        if (type.includes('date') || type.includes('timestamp') || type.includes('time')) {
            return 'Date';
        }
        
        // Check boolean types
        if (type.includes('boolean')) {
            return 'boolean';
        }
        
        // Default to string
        return 'string';
    }//end

    public static buildTypeMap(): Map<string, string> {
        const map = new Map<string, string>();
        for (const genericType in SqlFieldtypes) {
            for (const pgType of SqlFieldtypes[genericType]) {
                const key = pgType.split('(')[0].trim().toUpperCase();
                if (key) {
                    map.set(key, genericType);
                }
            }
        }
        return map;
    }//end


    public static mapPgTypeToModelType(pgType: string): string {
        const normalizedType = pgType.split('(')[0].trim().toUpperCase();
        return CodeGenSqlHelper.typeMap.get(normalizedType) || 'unknown';
    }//end

    public static isNumericType(sqlType: string): boolean {
        const type = sqlType.toLowerCase();
        return type.includes('integer') || type.includes('int') || type.includes('serial') ||
               type.includes('decimal') || type.includes('numeric') || type.includes('real') ||
               type.includes('float') || type.includes('double');
    }//end

    public static getMaxDigitsForNumericType(sqlType: string): number {
        const type = sqlType.toLowerCase();
        
        // SMALLINT: -32,768 to 32,767 → 5 dígitos
        if (type.includes('smallint')) {
            return 5;
        }
        
        // INTEGER/INT: -2,147,483,648 to 2,147,483,647 → 10 dígitos
        if (type.includes('integer') || type === 'int') {
            return 10;
        }
        
        // BIGINT: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 → 19 dígitos
        if (type.includes('bigint')) {
            return 19;
        }
        
        // SERIAL (INTEGER): mismo que INTEGER → 10 dígitos
        if (type.includes('serial') && !type.includes('big')) {
            return 10;
        }
        
        // BIGSERIAL: mismo que BIGINT → 19 dígitos
        if (type.includes('bigserial')) {
            return 19;
        }
        
        // DECIMAL/NUMERIC: depende de la precisión, por defecto 15 dígitos
        if (type.includes('decimal') || type.includes('numeric')) {
            return 15;
        }
        
        // REAL: ~7 dígitos significativos
        if (type.includes('real')) {
            return 7;
        }
        
        // DOUBLE PRECISION/FLOAT: ~15 dígitos significativos
        if (type.includes('double') || type.includes('float')) {
            return 15;
        }
        
        // Por defecto
        return 10;
    }//end
    }//end class