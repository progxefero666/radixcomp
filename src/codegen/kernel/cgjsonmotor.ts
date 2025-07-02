//src\codegen\kernel\cgjsonmotor.ts

import { ModelField, ModelTable, Relation } from "@/codegen/kernel/cgmodel";
import types from "@/codegen/kernel/sqltypesnumber.json";
import { CodeGenConfig } from "./cgconfig";
import { CodeGenTsMotor } from "./cgtsmotor";
import { CodeGenHelper } from "./cghelper";

/**
 * Class CodeGenJson
 */
export class CodeGenJson {

    public static getJsonEntityDef(table: ModelTable): string {
        //const className = CodeGenHelper.capitalize(table.name)
        //                 .concat(CodeGenConfig.DEF_CLASS_NAMEADD);//Def
        let code = "{";
        code += CodeGenConfig.RETURN;
        code += CodeGenConfig.TAB_4;
        code += "fields:[";
        code += CodeGenConfig.RETURN;
        for (let idx = 0; idx < table.fields.length; idx++) {
            code += CodeGenConfig.TAB_4;
            code += CodeGenConfig.TAB_4;
            code += CodeGenJson.getJsonEntityDefField(table.fields[idx]);
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

    public static getJsonEntityDefField(field: ModelField): string {
        let code = "{";
        code += `"name": "${field.name}", `;
        code += `"type": "${field.type}", `;
        code += `"required": ${field.required}, `;
        code += `"generated": ${field.generated}, `;
        code += `"default": ${field.default !== null ? `"${field.default}"` : null}, `;
        code += `"format": ${field.format !== null ? `"${field.format}"` : null}, `;
        code += `"pk": ${field.pk}, `;
        code += `"fk": ${field.fk}, `;

        code += `"minlen": ${field.minlen !== null ? field.minlen : null}, `;
        code += `"maxlen": ${field.maxlen !== null ? field.maxlen : null}`;
        if (field.relations && field.relations.length > 0) {
            code += `, "relations": [`;
            for (let idx = 0; idx < field.relations.length; idx++) {
                const relation = field.relations[idx];
                code += `{ "table": "${relation.table}", "field": "${relation.field}" }`;
                if (idx < field.relations.length - 1) {
                    code += `, `;
                }
            }
            code += `]`;
        }
        code += "}";

        return code;
    }//end 

    public static getJsonEntityDefFieldRelations(relations: Relation[]): string {
        let code = `, "relations": [`;
        for (let idx = 0; idx < relations.length; idx++) {
            const relation = relations[idx];
            code += `{ "table": "${relation.table}", "field": "${relation.field}" }`;
            if (idx < relations.length - 1) {
                code += `, `;
            }
        }
        code += `]`;
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