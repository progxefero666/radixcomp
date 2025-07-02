//src\codegen\kernel\cghelper.ts

import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";
import { CodeGenSqlHelper } from "./cgsqlhelper";

export class CodeGenHelper {

    public static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }//end

    public static uncapitalize(str: string): string {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }//end  

    public static getDefaultValue(field: ModelField, tsType: string): string {    
        if (field.pk || field.name.toLowerCase() === 'id') {return 'null';}        
        if (tsType.includes('number')) {return 'null';}
        
        if (tsType === 'boolean') {return 'false';}        
        if (tsType === 'Date')    {return 'new Date()';}
        if (tsType === 'string')  {return '"undefined"'; }        
        return 'null';
    }//end

    public static getClassType(tableModel: ModelTable): string {
        const className = CodeGenHelper.capitalize(tableModel.name);
        const typeName = `Type${className}`;
        let content = `/**\n`;
        content += ` * Type definition for ${className} entity\n`;
        content += ` */\n`;
        content += `export type ${typeName} = {\n`;
        for (const field of tableModel.fields) {
            const tsType = CodeGenSqlHelper.mapSqlTypeToTypeScript(field.type);
            content += `    ${field.name}: ${tsType};\n`;
        }        
        content += `};\n`;        
        return content;
    }//end

    
    public static getModelTableIndex(modelTables:ModelTable[],name:string): number {
        let tableIndex:number = -1;
        for (let idx=0;idx<modelTables.length;idx++) {
            console.log(modelTables[idx].name);
            if (modelTables[idx].name==name) {
                tableIndex = idx;
                break;
            }
        }
        return tableIndex;
    }//end  

}//end class


    /*
    public static genFileContentEntityType(tableModel: ModelTable): string {
        let content: string = "";        
        const typeName = CodeGenUtil.capitalize(tableModel.name);
        const fileName = `type_${tableModel.name.toLowerCase()}.ts`;        
        content += `//${fileName}\n\n`;        
        content += `export type ${typeName} = {\n`;        
        //properties
        for (const field of tableModel.fields) {
            const tsType = CodeGenSql.mapSqlTypeToTypeScript(field.type);
            content += `    ${field.name}: ${tsType};\n`;
        }        
        content += `};\n`;        
        return content;
    }
    */
