//src\codegen\kernel\cgjsonmotor.ts

import { ModelField, ModelTable, Relation } from "@/codegen/kernel/cgmodel";
import types from "@/codegen/kernel/sqltypesnumber.json";
import { CodeGenConfig } from "../cgconfig";
import { CodeGenTsMotor } from "./cgtsmotor";
import { CodeGenHelper } from "./cghelper";

/**
 * Class CodeGenJson.getJsonEntDef
 */
export class CodeGenJson {

    public static getJsonEntDef(table: ModelTable): string {
        let code = "{" + CodeGenConfig.RETURN;    
        code += CodeGenConfig.TAB_4 + "\"name\": \"" + table.name + "\"," + CodeGenConfig.RETURN;
        code += CodeGenConfig.TAB_4 + "\"fields\":[" + CodeGenConfig.RETURN;
        for (let idx = 0; idx < table.fields.length; idx++) {
            code += CodeGenConfig.TAB_4 + CodeGenJson.getJsonEntDefField(table.fields[idx]);
            if (idx<table.fields.length-1) {code+= `, `;}
            code += CodeGenConfig.RETURN;
        }
        code += CodeGenConfig.TAB_4 + `]` + CodeGenConfig.RETURN;
        code += `}`;
        return code;
    }//end

    public static getJsonEntDefField(field: ModelField): string {
        
        //attrs Block 
        let attrsBlock = `"name": "${field.name}",\n`;
        attrsBlock  += `"type": "${field.type}",\n`;
        attrsBlock += `"required": ${field.required},\n`;
        attrsBlock += `"generated": ${field.generated},\n`;
        attrsBlock += `"default": ${field.default !== null ? `"${field.default}"` : null},\n`;
        attrsBlock += `"format": ${field.format !== null ? `"${field.format}"` : null},\n`;
        attrsBlock += `"pk": ${field.pk},\n`;
        attrsBlock += `"fk": ${field.fk},\n`;
        attrsBlock += `"minlen": ${field.minlen !== null ? field.minlen : null},\n`;
        attrsBlock += `"maxlen": ${field.maxlen !== null ? field.maxlen : null},\n`;

        //applyTabsToStringBlock 3
        let attrsBlockIndent = CodeGenHelper.applyTabsToStringBlock(attrsBlock,3);

        let code = CodeGenHelper.getTabsSpace(1) + "{" + CodeGenConfig.RETURN;
        code += attrsBlockIndent;
        if (field.relations && field.relations.length > 0) {
            //applyTabsToStringBlock 3
            const relationssBlock = CodeGenJson.getJsonEntDefFieldRelations(field.relations);
            code += CodeGenHelper.applyTabsToStringBlock(relationssBlock,3);
        }
        else {code += `"relations": null`+CodeGenConfig.RETURN;}
        code += CodeGenHelper.getTabsSpace(2) + "}";        
        return code;
    }//end 

    public static getJsonEntDefFieldRelations(relations: Relation[]): string {        
        const tabspace:string = CodeGenHelper.getTabsSpace(2);
        let code = `"relations": [` + CodeGenConfig.RETURN;
        for (let idx = 0; idx < relations.length; idx++) {            
            code += CodeGenConfig.TAB_4 + `{`+ CodeGenConfig.RETURN;
            code += tabspace + `"table": "${relations[idx].table}",`+ CodeGenConfig.RETURN;
            code += tabspace + `"field": "${relations[idx].field}"`+ CodeGenConfig.RETURN;
            code += CodeGenConfig.TAB_4 + `}`;            
            if (idx < relations.length - 1) {
                code += `, `;
            }
            code += CodeGenConfig.RETURN;
        }
        code += `]` + CodeGenConfig.RETURN;
        return code;
    }//end 

    //code += CodeGenJson.getJsonEntDef(table);
    public static getJsonArrayEntDef(tables: ModelTable[]): string {
        let code = "[" + CodeGenConfig.RETURN;            
        for (let idx = 0; idx < tables.length; idx++) {
            const tableCode: string = CodeGenJson.getJsonEntDef(tables[idx]);
            code += CodeGenHelper.applyTabsToStringBlock(tableCode,1);
            if (idx<tables.length-1) {code+= `, `;}
            code += CodeGenConfig.RETURN;
        }
        code += CodeGenConfig.RETURN + "]" + CodeGenConfig.RETURN;
        return code;
    }

} //end class

   /*    
    public static getCompEntityJson(tableModel: ModelTable): string {
        const compEntity = {
            classdef: tableModel,
            class: tableModel
        };
        return JSON.stringify(compEntity, null, 4);
    }
    
    public static getArrayCompEntityJson(tableModels: ModelTable[]): string {
        const compEntities = tableModels.map(tableModel => ({
            classdef: tableModel,
            class: tableModel
        }));
        return JSON.stringify(compEntities, null, 4);
    }
    */