//src\codegen\kernel\cgtsfunctions.ts

import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";
import { CgConfig } from "@/codegen/cgconfig";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { CodeGenSqlHelper } from "@/codegen/kernel/cgsqlhelper";
import { XForms } from "@/common/forms/xforms";


/**
 * class CodeGenTsFunctions
 */
export class CodeGenTsFunctions {

    public static getClassHeader(tableName:string): string {
        //top comment path
        const className = CodeGenHelper.capitalize(tableName);
        const fileName = `table_${tableName.toLowerCase()}.ts`;  
        let content: string = `//${fileName}` + CgConfig.RETx2;

        // Class info
        content += `/**\n`;
        content += ` * Entity Class ${className}` + CgConfig.RET;
        content += ` */`+CgConfig.RET;
        content += `export class ${className} {`; 
        content += CgConfig.RETx2; 
        return content;
    };//end     

    public static getDefaultValue(field: ModelField):string {
        if(field.pk || field.fk ) { return "";}
        if(field.default === null) { return "";}
        if(field.type === XForms.FT_FILE) { return "";}

        let defaultValue: string = ""; 
        switch(field.type){
            case "text":
            case "textarea":
            case "hidden":    
                defaultValue = `"${field.default}"`;
                break;
            case "number":
            case "decimal":
            case "check":    
                defaultValue = field.default.toString();
                break;
            case "date":
            case "datetime":
                if (!field.generated) {defaultValue = `"${field.default}"`;} 
                else {defaultValue = '"CURRENT_DATE"';}
                break;
            default:
                return "";
        }//end switch

        let result: string = CgConfig.DEC_DEFAULT_START+ defaultValue + 
                             CgConfig.DEC_DEFAULT_END + CgConfig.RET;
        return result;
    };//end

    public static getListAttributes(fields: ModelField[]):string {
        let content: string = ""; 

        let fieldIndex:number = 0;
        fields.forEach((field) => {
            const tsType = CodeGenSqlHelper.mapSqlTypeToTypeScript(field.type); 

            //...................................................................................
            // step 1: create decorator 
            //...................................................................................
            content += CgConfig.DEC_FIELD_START;
            content += `ftype:"${field.type}"` + CgConfig.CHAR_COMMA;
            content += `name:"${field.name}"` + CgConfig.CHAR_COMMA;
            if (field.pk) {
                content += `pk:true`;
            }
            else if(field.fk) {
                content += `fk:true` + CgConfig.CHAR_COMMA;
                content += 'fxattrs:{table:"' + 
                                field.relations?.[0].table + CgConfig.CHAR_QUOTE + 
                                CgConfig.CHAR_COMMA+'"id:'+ field.relations?.[0].field + CgConfig.CHAR_QUOTE + 
                                CgConfig.CHAR_COMMA + 'name":' + field.relations?.[0].field + CgConfig.CHAR_QUOTE;
                content += CgConfig.CHAR_KEY_CLOSE;                
            }  
            else {
                 switch(field.type){
                    case "text":
                    case "textarea":
                        if(field.required){content += `required:true`}
                        if(field.minlen || field.maxlen){ 
                            if(field.required){
                                content += CgConfig.CHAR_COMMA;
                            }                           
                            content += "length:{min:" + (field.minlen??0) + CgConfig.CHAR_COMMA;                          
                            content += "max:" + (field.maxlen??-1) + CgConfig.CHAR_KEY_CLOSE ;
                        }                      
                        break;
                    case "number":
                        if(field.required){content += `required:true`; }
                        break;
                    case "decimal":
                        if(field.required){content += `required:true`+ CgConfig.CHAR_COMMA }
                        const numberFormat = field.format?.split(':')!;
                        content += "format:{cntint:" + (numberFormat[0].toString()) + CgConfig.CHAR_COMMA;                          
                        content += "cntdec:" + (numberFormat[1].toString()) ;                        
                        break;    
                    case "date":
                    case "datetime":
                        if(field.required){content += `required:true`}
                        break;   
                    case "file":
                        if(field.required){content += `required:true` }  
                        break;
                 }//end switch
            }//end else
            content += CgConfig.CHAR_KEY_CLOSE + CgConfig.RET;

            //...................................................................................
            // step 2: create fieldValue
            //...................................................................................
            content += CodeGenTsFunctions.getDefaultValue(field);


            //...................................................................................
            // step 3: create attribute
            //...................................................................................
            if (field.pk || field.fk ) { 
                content += `public ${field.name}: ${tsType} | null = null;`;
            }
            else {
                switch(field.type){
                    case "text":
                    case "textarea":
                        if(field.required){
                            if(field.default!=null){
                                content += `public ${field.name}: ${tsType}= "${field.default}";`; 
                            }
                            else {
                                content += `public ${field.name}: ${tsType};`; 
                            }                            
                        }
                        else {
                            content += `public ${field.name}: ${tsType} | null = null;`;
                        }
                        break;              
                    case "number":
                    case "decimal":    
                        if(field.default!=null){
                            content += `public ${field.name}: ${tsType}= ${field.default};`; 
                        }
                        else {
                            if(field.required){
                                content += `public ${field.name}: ${tsType};`; 
                            }
                            else {
                               content += `public ${field.name}: ${tsType} = null;`; 
                            }                            
                        }
                        break;
                    case "check":
                        if(field.default!=null){
                            content += `public ${field.name}: ${tsType} = ${field.default};`; 
                        }
                        else {
                            if(field.required){
                                content += `public ${field.name}: ${tsType};`; 
                            }
                            else {
                                content += `public ${field.name}: ${tsType} = false;`; 
                            }                            
                        }  
                        break;  
                    case "date":
                    case "datetime":   
                        if(field.default!=null){
                            content += `public ${field.name}: ${tsType}= "${field.default}";`; 
                        }    
                        else {
                            if(field.required){
                                content += `public ${field.name}: ${tsType};`; 
                            }
                            else {
                                content += `public ${field.name}: ${tsType}= null;`; 
                            }
                        }
                        break;
                    case "file":    
                        content += `public ${field.name}: ${tsType}= null;`;
                        break;
                    case "hidden":    
                        if(field.default!=null){
                            content += `public ${field.name}: ${tsType} = "${field.default}";`; 
                        }
                        else {
                            content += `public ${field.name}: ${tsType} = null;`; 
                        }  
                        break;
                }//end switch

            }  
            
            if(fieldIndex < fields.length - 1) {
                content += CgConfig.RETx2;
            }
            else {
                content += CgConfig.RET;    
            }              
            
            fieldIndex++;
        });//end forEach
     
        content = CodeGenHelper.applyTabsToStringBlock(content, 1);
        return content;
    };//end 

    public static getConstructorCode(fields: ModelField[]):string {
        let content: string = ""; 
        for (let idx=0;idx<fields.length;idx++) {
            content += `this.${fields[idx].name} = ${fields[idx].name};`;
            if(idx<fields.length-1) {content += CgConfig.RET;}
        }
        content = CodeGenHelper.applyTabsToStringBlock(content, 1);
        return content;
    };//end 

    public static getConstructor(fields: ModelField[]):string {
        let result = `constructor(`;
        for (let idx=0;idx<fields.length;idx++) {
            const tsType = CodeGenSqlHelper.mapSqlTypeToTypeScript(fields[idx].type);
            if(!fields[idx].required ){
                if(tsType === 'boolean'){
                    result += `${fields[idx].name}: ${tsType}`;
                }
                else {
                    result += `${fields[idx].name}: ${tsType} | null`;
                }                 
            }
            else {
                result += `${fields[idx].name}: ${tsType}`;
            }
            if(idx<fields.length-1) {result += CgConfig.CHAR_COMMA;}
                       
        }//end for 
        result += `) {` + CgConfig.RET; 
        result += CodeGenTsFunctions.getConstructorCode(fields);
        result += `};//end` + CgConfig.RET;
        result = CodeGenHelper.applyTabsToStringBlock(result, 1);
        return result;
    };//end 

    public static getFunctiontMinLen(fields: ModelField[]):string {
    
        let fieldContent = "";  
        for (const field of fields) {
            if (field.minlen !== null) {
                fieldContent += `if (fieldName === "${field.name}") {` + CgConfig.RET;
                fieldContent += CgConfig.TAB_4 + `return ${field.minlen};` + CgConfig.RET;
                fieldContent += `}`+ CgConfig.RET;
            }
        }
        fieldContent = CodeGenHelper.applyTabsToStringBlock(fieldContent, 1);

        let content = `public minlen(fieldName: string): number | null {`+ CgConfig.RET;
        content += fieldContent;
        content += `}`;
        content = CodeGenHelper.applyTabsToStringBlock(content, 1);
        content += CgConfig.RET; 
        return content;
    };//end

    public static getFunctiontMaxLen(fields: ModelField[]):string {
        let fieldsContent = "";
        for (const field of fields) {
            if (field.maxlen !== null) {
                fieldsContent += `if (fieldName === "${field.name}") {`+ CgConfig.RET;
                fieldsContent += CgConfig.TAB_4 + `return ${field.maxlen};`+ CgConfig.RET;
                fieldsContent += `}`+ CgConfig.RET;
            } 
            else if (field.type.toLowerCase().includes('text') && field.maxlen === null) {
                
                fieldsContent += `if (fieldName === "${field.name}") {`+ CgConfig.RET;
                fieldsContent += CgConfig.TAB_4 + `return -1;`+ CgConfig.RET;
                fieldsContent += `}`+ CgConfig.RET;
            } 
            else if (CodeGenSqlHelper.isNumericType(field.type)) {                
                const maxDigits = CodeGenSqlHelper.getMaxDigitsForNumericType(field.type);
                fieldsContent += `if (fieldName === "${field.name}") {`+ CgConfig.RET;
                fieldsContent += CgConfig.TAB_4 + `return ${maxDigits};`+ CgConfig.RET;
                fieldsContent += `}`+ CgConfig.RET;
            }
        }
        fieldsContent += `return null;`;
        fieldsContent = CodeGenHelper.applyTabsToStringBlock(fieldsContent, 1);

        let content = `public maxlen(fieldName: string): number | null {`+ CgConfig.RET;
        content += fieldsContent;
        content += `};//end`+ CgConfig.RET;
        content = CodeGenHelper.applyTabsToStringBlock(content, 1);          
        return content;
    };//end

}//end class

