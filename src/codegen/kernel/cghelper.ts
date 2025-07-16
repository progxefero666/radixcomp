//src\codegen\kernel\cghelper.ts

import { Option } from "@/common/model/option";
import { TOption } from "@/radix/radixtypes";
import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";
import { CodeGenSqlHelper } from "./cgsqlhelper";
import { CodeGenConfig } from "../cgconfig";

/**
 * CodeGenHelper.uncapitalize
 * CodeGenHelper.capitalize
 * class CodeGenHelper.getSelectModelTables(modelTables:ModelTable[],names:string[])
 */
export class CodeGenHelper {


    public static getDefaultValue(field: ModelField, tsType: string): string {    
        if (field.pk) {return 'null';}        
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

    public static getModelsTableNames(modelTables:ModelTable[]): string[] {
        const names: string[] = [];
        for (const table of modelTables) {            
                names.push(table.name);
        }
        return names;   
    }
    
    public static getModelsTableOptions(modelTables:ModelTable[]): Option[] {
        const options: Option[] = [];
        for (const table of modelTables) {            
            const option: Option = new Option(table.name, table.name, null, null, null);
            options.push(option);
        }
        return options;   
    }

    public static getModelsTableTOptions(modelTables:ModelTable[]): TOption[] {
        const options: TOption[] = [];
        for (const table of modelTables) {            
            const option = {
                name: table.name,
                text: table.name,
                selected: false
            }
            options.push(option);
        }
        return options;   
    }    

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

    public static getSelectModelTables(modelTables:ModelTable[],names:string[]): ModelTable[] {
        const selectedTables: ModelTable[] = [];
        for (const name of names) {
            const index = CodeGenHelper.getModelTableIndex(modelTables, name);
            if (index >= 0) {
                selectedTables.push(modelTables[index]);
            }
        }
        return selectedTables;  
    }


    public static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }//end

    public static uncapitalize(str: string): string {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }//end  

    public static getTabsSpace(countTabs:number): string {
        return CodeGenConfig.TAB_4.repeat(countTabs);
    }

    public static applyTabsToStringBlock(text:string,countTabs:number): string {

        //calculate total identation characters
        let spaceApply:string = "";
        for (let idx=0;idx<countTabs;idx++) {
            spaceApply += CodeGenConfig.TAB_4;
        }

        // apply indentation to each line
        const lines = text.split('\n');
        for (let idx=0;idx<lines.length;idx++) {
            lines[idx] = spaceApply + lines[idx];
        }
  
        return lines.join('\n');
    }
    
    //CodeGenHelper.getStringsJoined
    public static getStringsJoined(values:string[]): string {
        let result: string = "";
        for (let itemIdx=0;itemIdx<values.length;itemIdx++) {
            result+= values[itemIdx];
            if(itemIdx<(values.length-1)) {
                result+= "|";
            }
        }
        return result;   
    }
    

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
