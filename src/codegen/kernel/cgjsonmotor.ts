//src\codegen\kernel\cgjsonmotor.ts

import { ModelField, ModelTable, Relation } from "@/codegen/kernel/cgmodel";
import types from "@/codegen/kernel/sqltypesnumber.json";
import { CodeGenConfig } from "./cgconfig";
import { CodeGenTsMotor } from "./cgtsmotor";
import { CodeGenHelper } from "./cghelper";

/**
 * Class CodeGenJson.getJsonEntDef
 */
export class CodeGenJson {

    public static getJsonEntDef(table: ModelTable): string {
        //const className = CodeGenHelper.capitalize(table.name)
        //                 .concat(CodeGenConfig.DEF_CLASS_NAMEADD);//Def
        let code = "{";
        code += CodeGenConfig.RETURN;
        code += CodeGenConfig.TAB_4;
        code += "\"name\": \"" + table.name + "\",";
        code += CodeGenConfig.RETURN;
        code += CodeGenConfig.TAB_4;
        code += "\"fields\":[";
        code += CodeGenConfig.RETURN;
        for (let idx = 0; idx < table.fields.length; idx++) {
            code += CodeGenConfig.TAB_4;
            code += CodeGenJson.getJsonEntDefField(table.fields[idx]);
            if (idx < table.fields.length - 1) {
                code += `, `;
            }
            code += CodeGenConfig.RETURN;
        }
        code += CodeGenConfig.TAB_4;
        code += `]`;
        code += CodeGenConfig.RETURN;
        code += `}`;
        return code;
    }//end

    public static getJsonEntDefField(field: ModelField): string {
        
        //applyTabsToStringBlock 3......................................................
        //
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
        let attrsBlockIndent = CodeGenHelper.applyTabsToStringBlock(attrsBlock,3);
        //..............................................................................

        let code = CodeGenHelper.getTabsSpace(1) + "{\n";
        code += attrsBlockIndent;
        if (field.relations && field.relations.length > 0) {
            //applyTabsToStringBlock 3......................................................
            const relationssBlock = CodeGenJson.getJsonEntDefFieldRelations(field.relations);
            const relationssBlockIndent = CodeGenHelper.applyTabsToStringBlock(relationssBlock,3);
            code += relationssBlockIndent;
            //..............................................................................
        }
        else {
            code += `"relations": null`;
            code += CodeGenConfig.RETURN;
        }
        code += CodeGenHelper.getTabsSpace(2) + "}";
        
        return code;
    }//end 

    public static getJsonEntDefFieldRelations(relations: Relation[]): string {
        let code = `"relations": [`;
        code += CodeGenConfig.RETURN;
        const tabElem:string = CodeGenHelper.getTabsSpace(2);

        for (let idx = 0; idx < relations.length; idx++) {
            const relation = relations[idx];

            code += CodeGenConfig.TAB_4;
            code += `{ `;
            code += CodeGenConfig.RETURN;

            code += tabElem;
            code += `"table": "${relation.table}",`;
            code += CodeGenConfig.RETURN;

            code += tabElem;
            code += `"field": "${relation.field}"`;
            code += CodeGenConfig.RETURN;

            code += CodeGenConfig.TAB_4;
            code += ` }`;
            if (idx < relations.length - 1) {
                code += `, `;
            }
            code += CodeGenConfig.RETURN;
        }
        code += `]`;
        code += CodeGenConfig.RETURN;
        return code;
    }//end 


    /*
    public static getEntityJson(tableModel: ModelTable): string {
        return JSON.stringify(tableModel, null, 4);
    }
    
    public static getArrayEntityJson(tableModels: ModelTable[]): string {
        return JSON.stringify(tableModels, null, 4);
    }
    
    public static getEntityDefJson(tableModel: ModelTable): string {
        return JSON.stringify(tableModel, null, 4);
    }
    
    public static getArrayEntityDefJson(tableModels: ModelTable[]): string {
        return JSON.stringify(tableModels, null, 4);
    }
    
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

} //end class