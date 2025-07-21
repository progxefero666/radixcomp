//src\codegen\kernel\cgjsonmotor.ts

import { ModelField, ModelTable, Relation } from "@/codegen/kernel/cgmodel";
import types from "@/codegen/kernel/sqltypesnumber.json";
import { CgConfig } from "../cgconfig";
import { CodeGenTsMotor } from "./cgtsmotor";
import { CodeGenHelper } from "./cghelper";
import { CodeGenSql } from "./cgsqlmotor";

/**
 * Class CodeGenJson.LINE_VALIDATION
 */
export class CodeGenJson {

    public static LINE_VALIDATION: string = `"validation":{"result":true,"message":null}`;
    

    public static getJsonEntDefField(field: ModelField): string {
        
        //attrs Block 
        let attrsBlock   = `"name": "${field.name}",` + CgConfig.RET;
        attrsBlock      += `"type": "${field.type}",` + CgConfig.RET;
        attrsBlock      += `"required": ${field.required},` + CgConfig.RET;
        attrsBlock      += `"generated": ${field.generated},` + CgConfig.RET;
        attrsBlock      += `"default": ${field.default !== null ? `"${field.default}"` : null},` + CgConfig.RET;
        attrsBlock      += `"format": ${field.format !== null ? `"${field.format}"` : null},` + CgConfig.RET;
        attrsBlock      += `"pk": ${field.pk},` + CgConfig.RET;
        attrsBlock      += `"fk": ${field.fk},` + CgConfig.RET;
        attrsBlock      += `"minlen": ${field.minlen !== null ? field.minlen : null},` + CgConfig.RET;
        attrsBlock      += `"maxlen": ${field.maxlen !== null ? field.maxlen : null},` + CgConfig.RET;
        attrsBlock      += CodeGenJson.LINE_VALIDATION + CgConfig.CHAR_COMMA + CgConfig.RET;

        //applyTabsToStringBlock 3
        //let attrsBlockIndent = CodeGenHelper.applyTabsToStringBlock(attrsBlock,3);

        //let code = CodeGenHelper.getTabsSpace(1) + "{" + CgConfig.RET;
        //code += attrsBlockIndent;
        /*
        if (field.relations && field.relations.length > 0) {
            //applyTabsToStringBlock 3
            const relationssBlock = CodeGenJson.getJsonEntDefFieldRelations(field.relations);
            code = CodeGenHelper.applyTabsToStringBlock(relationssBlock,3);
        }
        else {code += `"relations": null`+CgConfig.RET;}
        code += CodeGenHelper.getTabsSpace(2) + "}";        
        */
        return attrsBlock;
    }//end 

    public static getJsonEntDefFieldRelations(relations: Relation[]): string {        
        const tabspace:string = CodeGenHelper.getTabsSpace(2);
        let code = `"relations": [` + CgConfig.RET;
        for (let idx = 0; idx < relations.length; idx++) {            
            code += CgConfig.TAB_4 + `{`+ CgConfig.RET;
            code += tabspace + `"table": "${relations[idx].table}",`+ CgConfig.RET;
            code += tabspace + `"field": "${relations[idx].field}"`+ CgConfig.RET;
            code += CgConfig.TAB_4 + `}`;            
            if (idx < relations.length - 1) {
                code += `, `;
            }
            code += CgConfig.RET;
        }
        code += `]` + CgConfig.RET;
        return code;
    }//end 

    public static getJsonEntDef(table: ModelTable): string {
        let code = "";    
        for (let idx = 0; idx < table.fields.length; idx++) {
            code += CodeGenJson.getJsonEntDefField(table.fields[idx]);
            if (idx<table.fields.length-1) {code+= `, `;}
            code += CgConfig.RET;
        }        
        return code;
    }//end

    public static getJsonEntDefOld(table: ModelTable): string {
        let code = "{" + CgConfig.RET;    
        code += CgConfig.TAB_4 + "\"name\": \"" + table.name + "\"," + CgConfig.RET;
        code += CgConfig.TAB_4 + "\"fields\":[" + CgConfig.RET;
        for (let idx = 0; idx < table.fields.length; idx++) {
            code += CgConfig.TAB_4 + CodeGenJson.getJsonEntDefField(table.fields[idx]);
            if (idx<table.fields.length-1) {code+= `, `;}
            code += CgConfig.RET;
        }
        code += CgConfig.TAB_4 + `]` + CgConfig.RET;
        code += `}`;
        return code;
    }//end

    //code += CodeGenJson.getJsonEntDef(table);
    public static getJsonArrayEntDef(tables: ModelTable[]): string {
        let code = "[" + CgConfig.RET;            
        for (let idx = 0; idx < tables.length; idx++) {
            const tableCode: string = CodeGenJson.getJsonEntDef(tables[idx]);
            code += CodeGenHelper.applyTabsToStringBlock(tableCode,1);
            if (idx<tables.length-1) {code+= `, `;}
            code += CgConfig.RET;
        }
        code += CgConfig.RET + "]" + CgConfig.RET;
        return code;
    };//


    public static getAllJsonTables(dbSquema:string):string[]{
        const tables: ModelTable[]  = CodeGenSql.getEsquemaTables(dbSquema!);
        const jsontables: string[] = [];
        tables.forEach((table) => {
            jsontables.push(CodeGenJson.getJsonEntDef(table));
        });
        return jsontables;
    };//end


} //end class
