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
    
    public static getJsonEntDefFieldRelations(relations: Relation[]): string {        
       
        let content = ``; 
        for (let idx = 0; idx < relations.length; idx++) {     
       
            content += `{`+ CgConfig.RET;
            content += CgConfig.TAB_4 + `"table": "${relations[idx].table}",`+ CgConfig.RET;
            content += CgConfig.TAB_4 + `"field": "${relations[idx].field}"`+ CgConfig.RET;
            content +=  `}`;            
            if (idx < relations.length - 1) {
                content += `, `;
                content += CgConfig.RET;
            }
            
        }
        content = CodeGenHelper.applyTabsToStringBlock(content,1);

        let result = `"relations": [` + CgConfig.RET;
        result += content +`]`;

        return result;
    }//end 

    public static getJsonEntDefField(field: ModelField): string {
        
        //attrs Block 
        let content   = `"name": "${field.name}",` + CgConfig.RET;
        content      += `"type": "${field.type}",` + CgConfig.RET;
        content      += `"required": ${field.required},` + CgConfig.RET;
        content      += `"generated": ${field.generated},` + CgConfig.RET;
        content      += `"default": ${field.default !== null ? `"${field.default}"` : null},` + CgConfig.RET;
        content      += `"format": ${field.format !== null ? `"${field.format}"` : null},` + CgConfig.RET;
        content      += `"pk": ${field.pk},` + CgConfig.RET;
        content      += `"fk": ${field.fk},` + CgConfig.RET;
        content      += `"minlen": ${field.minlen !== null ? field.minlen : null},` + CgConfig.RET;
        content      += `"maxlen": ${field.maxlen !== null ? field.maxlen : null},` + CgConfig.RET;
        content      += CodeGenJson.LINE_VALIDATION+CgConfig.CHAR_COMMA + CgConfig.RET;
        if (field.relations && field.relations.length > 0) {
            content += CodeGenJson.getJsonEntDefFieldRelations(field.relations);
        }
        else {
            content += `"relations": null`;
        }
        content = CodeGenHelper.applyTabsToStringBlock(content,1);

        let code = "{" + CgConfig.RET;
        code += content;        
        code += "}";
        return code;
    }//end 


    public static getJsonEntDef(table: ModelTable): string {
        let content:string = "";
        for (let idx = 0; idx < table.fields.length; idx++) {
            content += CodeGenJson.getJsonEntDefField(table.fields[idx]);
            if (idx<table.fields.length-1) {
                content+= ","+ CgConfig.RET;;
            }
        }
        content = CodeGenHelper.applyTabsToStringBlock(content,1);
   
        let code = '"name": "application",'+ CgConfig.RET;
        code    += '"fields":[' + CgConfig.RET;
        code    += content;
        code    +=  "]";  
        code     = CodeGenHelper.applyTabsToStringBlock(code,1);

        let result = "{" + CgConfig.RET;  
        result +=  code;
        result +=  "}" + CgConfig.RET; 
        return result;
    }//end

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
