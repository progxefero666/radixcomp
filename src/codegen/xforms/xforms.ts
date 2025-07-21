//src\radix\xforms\xforms.ts

import { CgConfig } from "@/codegen/cgconfig";
import { CodeGenHelper } from "../kernel/cghelper";
import { TextHelper } from "@/common/helper/texthelper";
import { InputValue } from "@/common/model/inputvalue";
import { useState } from "react";
import { Validation } from "@/common/model/validation";
import { Application } from "@/app/applications/application";


/**
 * XForms.import_form_inputs
 */
export class XForms {

    public static PATTERN: string = "^%v%^";
    public static t_tag_open: string = `<`;
    public static t_tag_close: string = ` />\n`;

    public static FT_TEXT: string = "text";
    public static FT_TEXTAREA: string = "textarea";
    public static FT_CHECK: string = "boolean";
    public static FT_NUMBER: string = "number";
    public static FT_DECIMAL: string = "decimal";
    public static FT_COLLECTION: string = "collection";
    public static FT_DATE: string = "date";
    public static FT_DATETIME: string = "datetime";
    public static FT_FILE: string = "file";

    public static tc_text: string = `XInputText`;
    public static tc_check: string = `XInputCheck`;
    public static tc_number: string = `XInputNumber`;
    public static tc_decimal: string = `XInputDecimal`;
    public static tc_collection: string = `XInputSelect`;
    public static tc_date: string = `XInputDate`;
    public static tc_textarea: string = `XInputTextArea`;
    public static tc_file: string = `XInputFile`;
    public static tc_datetime: string = `XInputDateTime`;

    public static TT_DEFAULT: string = "text";
    public static TT_URL: string = "url";
    public static TT_EMAIL: string = "email";
    public static TT_PASSWORD: string = "password";
    public static TT_TEL: string = "telephone";
    public static TT_HIDDEN: string = "hidden";

    public static t_refInput: string  = `const ^%v%^Ref = useRef<HTMLInputElement>(null);`;
    public static t_refSelect: string = `const ^%v%^Ref = useRef<HTMLSelectElement>(null);`;

    public static t_attr_ref: string = `ref={^%v%^Ref}`;
    public static t_attr_name: string = `name=\"^%v%^\"`;
    public static t_attr_label: string = `label="^%v%^"`;
    public static t_attr_collection: string = `collection={^%v%^}`;
    public static t_attr_default: string = `default=^%v%^`;
    public static t_attr_maxlen: string = `maxlen={^%v%^}`;
    public static t_attr_disabled: string = `disabled={^%v%^}`;

    public static t_attr_autocommit: string = `default={^%v%^}`;

    public static attr_inline: string = `inline={true}`;

    //import { InputValue } from "@/common/model/inputvalue";

    public static t_import_form_inputs: string 
        = `import { InputValue } from "@/common/model/inputvalue";`;
        
    public static t_form_inputs: string 
        = `const [formInputs,setFormInputs] = useState<InputValue[]>([]);`;

    public static t_useEffect_start: string = "useEffect(() => {";
    public static t_useEffect_end: string = "}, []);";
    
};//end class

export class XFormsGen {

    public static gen_FT_TEXT(field: any): string {
        let result: string = "";

        return result;
    };//end


    public static genStatesOld(): string {
        let result: string = `const [inputValues, setInputValues] = \n` +
                CgConfig.TAB_4 + "useState<Map<string,any>>(new Map<string,any>());";
        result += CgConfig.RETx2;
        return result;
    };//end

    public static genUseEffectOld(jsonTable: string): string {
        const jsonCollection = JSON.parse(jsonTable);

        let array_result =  CgConfig.TAB_4 +"const map = new Map<string, any>();"+ CgConfig.RET;
        for (let idx = 0; idx < jsonCollection.fields.length;idx++) {
            if(!jsonCollection.fields[idx].pk) {
                let value: string = "";
                if(jsonCollection.fields[idx].type === XForms.FT_COLLECTION) {
                    value = "collection[0]";
                }
                else if(jsonCollection.fields[idx].type === XForms.FT_CHECK) {
                    value = "false";
                }                
                else {
                    value = "null";
                }
                array_result += CgConfig.TAB_4 +`map.set("` + 
                                jsonCollection.fields[idx].name + `",item.` +
                                jsonCollection.fields[idx].name + ` || ` +
                                value + `);`;
                if( idx < jsonCollection.fields.length - 1) {
                    array_result += CgConfig.CHAR_COMMA;            
                }
                array_result += CgConfig.RET;
            }
        }
        array_result += CgConfig.TAB_4 +`setInputValues(map);`;

             
        let result =  XForms.t_useEffect_start + CgConfig.RET;
        result += array_result+ CgConfig.RET;
        result += XForms.t_useEffect_end + CgConfig.RET;        
        return CodeGenHelper.applyTabsToStringBlock(result,1);
    };//end
    //............................................................................

    public static genImports(): string {
        let result: string = `import { useState, useEffect, useRef } from "react";`+ CgConfig.RET;
        result += `import { Validation } from "@/common/model/validation";` + CgConfig.RETx2;
        return result;
    };//end

    // capitalize no necessary v2 if entityName begins with a capital letter
    public static genStates(entityName:string): string {
        let template: string = `const [^%v1%^, set^%v2%^] = useState<^%v2%^>(new ^%v2%^());`;
        template = template.replace("^%v1%^", (TextHelper.uncapitalize(entityName)));
        template = TextHelper.replaceAll(template,"^%v2%^",TextHelper.capitalize(entityName));//
        let result = template + CgConfig.RET;
        result += `const [validations,setValidations] = useState<Validation[]>([]);` ;
        result =CodeGenHelper.applyTabsToStringBlock(result,1);
        return result+ CgConfig.RET;
    };//end

    public static genRefs(jsonObj: any): string {
       
        let result: string = "";
        for (let idx = 1; idx < jsonObj.fields.length; idx++) {           
            if (jsonObj.fields[idx].fk) {
                result += XForms.t_refSelect
                    .replace(XForms.PATTERN, jsonObj.fields[idx].name) + CgConfig.RET;
            }
            else {
                result += XForms
                    .t_refInput.replace(XForms.PATTERN, jsonObj.fields[idx].name) + CgConfig.RET;
            }            
        }//end for

        return CodeGenHelper.applyTabsToStringBlock(result,1);
    };//end 

    public static genFuncValidateItem(): string {
        let params: string = "(ftype:string,value:any,format:any|null,min:number|null,max:number|null)"; 
        let result: string = 
            "const validateItem =" + params + ": boolean => {" + CgConfig.RET;
        result += CgConfig.TAB_4 + "return true;"+ CgConfig.RET;
        result += "};//end"+ CgConfig.RET;    
        result = CodeGenHelper.applyTabsToStringBlock(result,1) + CgConfig.RET;
        return result;
    };//end

    public static genFuncValidation(jsonObj: any): string {

        //const validations:Validation[] = [];

        let content:string = "const validations:Validation[] = [];" + CgConfig.RETx2;

        for(let idx=1;idx<jsonObj.fields.length; idx++) {
            //if(jsonObj.fields[idx].type === XForms) {continue;}

            
            //format
            let format:string|null = null;
            if(jsonObj.fields[idx].type === XForms.FT_NUMBER || 
                jsonObj.fields[idx].type === XForms.FT_DECIMAL) {
                format = jsonObj.fields[idx].format;
            }
         
            //min and max
            let min:string|null = null;
            let max:string|null = null;
            if(jsonObj.fields[idx].type === XForms.FT_TEXT || 
               jsonObj.fields[idx].type === XForms.FT_TEXTAREA) {
                if(jsonObj.fields[idx].minlen !== null) {
                    min = jsonObj.fields[idx].minlen.toString();
                }
                if(jsonObj.fields[idx].maxlen !== null) {
                    max = jsonObj.fields[idx].maxlen.toString();
                }
            } 

            const fieldName: string = jsonObj.fields[idx].name;
            content += "if(!validateItem("+jsonObj.fields[idx].type + CgConfig.CHAR_COMMA;            
            content += "format:"+format + CgConfig.CHAR_COMMA +"min:" + min;
            content += CgConfig.CHAR_COMMA + "max:" + max + CgConfig.CHAR_COMMA;
            content += ")) {" +CgConfig.RET
            content += CgConfig.TAB_4 + `alert(`+ CodeGenHelper.getIntoSingleQuotes(fieldName);
            content +=  + ` incorrect.);` +CgConfig.RET;
            content += CgConfig.TAB_4 + `return false;` + CgConfig.RET;
            content += `}`            
            content = CodeGenHelper.applyTabsToStringBlock(content,1) + CgConfig.RETx2;

        }//end for

        content = CodeGenHelper.applyTabsToStringBlock(content,1) + CgConfig.RET;

        let result: string = "const validate = (): boolean => {"+ CgConfig.RET;
        result += content;
        result += "    return true;" + CgConfig.RET;
        result += "};//end";
        result = CodeGenHelper.applyTabsToStringBlock(result,1) + CgConfig.RET;
        return result;
    };//end

    public static genInitTag(field: any): string {

        let result: string =  XForms.t_tag_open;

        if (field.fk) {
            result += XForms.tc_collection;
        }
        else {
            if (field.type === XForms.FT_TEXT) {
                result += XForms.tc_text;
            }
            else if (field.type === XForms.FT_TEXTAREA) {
                result += XForms.tc_textarea;
            }
            else if (field.type === XForms.FT_NUMBER) {
                if (field.format.split(":")[1] == "0") {
                    result += XForms.tc_number;
                }
                else { result += XForms.tc_decimal; }
            }
            else if (field.type === XForms.FT_CHECK) {
                result += XForms.tc_check;
            }
            else if (field.type === XForms.FT_DATE) {
                result += XForms.tc_date;
            }
            else if (field.type === XForms.FT_DATETIME) {
                result += XForms.tc_datetime;
            }
            else if (field.type === XForms.FT_FILE) {
                result += XForms.tc_file;
            }
        }

        return result + CgConfig.CHAR_SPACE;
    };//end 

    public static genFormFields(jsonObj: any): string {
        let result: string = "";
        for (let idx = 1; idx < jsonObj.fields.length; idx++) {

            result += XFormsGen.genInitTag(jsonObj.fields[idx]) + CgConfig.RET;
            //tempAttr_ref
            result += CgConfig.TAB_4 + XForms.t_attr_ref
                .replace(XForms.PATTERN, jsonObj.fields[idx].name) + CgConfig.RET;
            //tempAttr_name
            result += CgConfig.TAB_4 + XForms.t_attr_name
                .replace(XForms.PATTERN,jsonObj.fields[idx].name) + CgConfig.RET;
            //tempAttr_label
            const label = TextHelper.capitalize(jsonObj.fields[idx].name);
            result += CgConfig.TAB_4 +  XForms.t_attr_label.replace(XForms.PATTERN,label);
            //tempAttr_maxlen         
            if (jsonObj.fields[idx].type === XForms.FT_TEXT && 
                jsonObj.fields[idx].maxlen !== null) { 
                result += CgConfig.RET;
                result +=  CgConfig.TAB_4 + XForms.t_attr_maxlen
                    .replace(XForms.PATTERN, jsonObj.fields[idx].maxlen);                     
            }
            //XForms.tempAttr_inline  
            if(jsonObj.fields[idx].type === XForms.FT_NUMBER ||
                jsonObj.fields[idx].type === XForms.FT_DECIMAL ||
                jsonObj.fields[idx].type === XForms.FT_CHECK||
                jsonObj.fields[idx].type === XForms.FT_FILE) {
                result += CgConfig.RET;
                result +=  CgConfig.TAB_4 + XForms.attr_inline;       
            }     
            // default value
            if (jsonObj.fields[idx].fk) {    
                result += XForms.t_attr_collection
                    .replace(XForms.PATTERN, "collection")+ CgConfig.RET;
                result += CgConfig.TAB_4 + XForms.t_attr_default
                    .replace(XForms.PATTERN, "collection[0]");                     
            }
            else {
                if(XForms.PATTERN, jsonObj.fields[idx].default!== null) {                     
                    if(jsonObj.fields[idx].type === XForms.FT_TEXT||                            
                        jsonObj.fields[idx].type === XForms.FT_TEXTAREA)  {
                        const defaultValue = CodeGenHelper
                            .getIntoSingleQuotes(jsonObj.fields[idx].default);    
                        result += CgConfig.RET;    
                        result +=  CgConfig.TAB_4 + XForms.t_attr_default.replace
                            (XForms.PATTERN,defaultValue); 
                    }    
                    else if(jsonObj.fields[idx].type === XForms.FT_DATE ||
                        jsonObj.fields[idx].type === XForms.FT_DATETIME) {
                        const defaultValue = CodeGenHelper
                            .getIntoSingleQuotes(jsonObj.fields[idx].default);                                   
                        result += CgConfig.RET;    
                        if(CodeGenHelper.isGeneratedDate(jsonObj.fields[idx].default)) {   
                            result += XForms.t_attr_default
                                .replace(XForms.PATTERN,defaultValue);                                 
                        }                            
                    } 
                    else if(jsonObj.fields[idx].type === XForms.FT_NUMBER ||
                            jsonObj.fields[idx].type === XForms.FT_DECIMAL ||
                            jsonObj.fields[idx].type === XForms.FT_CHECK) {  
                        const defaultValue = CodeGenHelper
                            .getIntoKeys(jsonObj.fields[idx].default);                                     
                        result += CgConfig.RET;        
                        result += CgConfig.TAB_4 + XForms.t_attr_default
                            .replace(XForms.PATTERN,defaultValue);                                                              
                    }                                         
                }                    
            }
            result += XForms.t_tag_close + CgConfig.RET;
        }//end for
        result = CodeGenHelper
            .applyTabsToStringBlock(result,2)+ CgConfig.RET;
        return result;     
    };//end

    public static genFuncSubmit(jsonObj: any): string {        
        const entityName: string = TextHelper.uncapitalize(jsonObj.name);
        let content:string ="";
        for (let idx=1;idx<jsonObj.fields.length;idx++) { 
            const fieldRefName: string = jsonObj.fields[idx].name + "Ref";
            if(!jsonObj.fields[idx].generated && jsonObj.fields[idx].type !== "hidden") {
                content+= entityName + "." + jsonObj.fields[idx].name + " = " + 
                          fieldRefName + ".current.";                                        
                if(jsonObj.fields[idx].type === XForms.FT_CHECK) {
                    content += "checked;" + CgConfig.RET;
                }
                else {
                    content += "value;" + CgConfig.RET;
                }                           
            }          
        }//end for
        content += CgConfig.RET;
        content += "if(!validate()) {return;}" + CgConfig.RET;
        content = CodeGenHelper.applyTabsToStringBlock(content,1)+ CgConfig.RET;

        let result: string = "const onSubmit = () => {"+ CgConfig.RET;
        result += content;
        result += "};//end"+ CgConfig.RET;
        result =CodeGenHelper.applyTabsToStringBlock(result,1)+ CgConfig.RET;
        return result;
    };//end

    public static generateForm(jsonTable: string): string {

        const jsonObj = JSON.parse(jsonTable);
  
        let resImports: string      = XFormsGen.genImports();
        let resStates: string       = XFormsGen.genStates(jsonObj.name);
        let resRefs: string         = XFormsGen.genRefs(jsonObj);
        let resFunctValItem: string = XFormsGen.genFuncValidateItem();
        let resFunctValForm: string = XFormsGen.genFuncValidation(jsonObj);
        let resFunctSubmit: string  = XFormsGen.genFuncSubmit(jsonObj);
        let resFields: string       = XFormsGen.genFormFields(jsonObj);
      
        let result:string = resImports + resStates + resRefs +
                            resFunctValItem + resFunctValForm;
                            //+ resFunctSubmit + resFields;
        return result;
    }//end

    //ouputFormatRef.current!.value
    //applyTransRef.current!.checked

};//end class



export const jsonTemplate: string =
    `{
    "name": "application",
    "fields":[
        {
            "name": "id",
            "type": "number",
            "required": true,
            "generated": false,
            "default": null,
            "format": "5:0",
            "pk": true,
            "fk": false,
            "minlen": null,
            "maxlen": null,
            "relations": null,
            "validation": {"result":true,"message":null}
        }, 
        {
            "name": "codelang_id",
            "type": "number",
            "required": true,
            "generated": false,
            "default": null,
            "format": "5:0",
            "pk": false,
            "fk": true,
            "minlen": null,
            "maxlen": null,
            "relations": [
                {
                    "table": "codelang",
                    "field": "id"
                }
            ],
            "validation": {"result":true,"message":null}
        },  
        {
            "name": "name",
            "type": "text",
            "required": true,
            "generated": false,
            "default": "nachete",
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": 50,
            "relations": null,
            "validation": {"result":true,"message":null}
        }, 
        {
            "name": "description",
            "type": "text",
            "required": false,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": 255,
            "relations": null,
            "validation": {"result":true,"message":null}
        }, 
        {
            "name": "repository",
            "type": "text",
            "required": false,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": 250,
            "relations": null,
            "validation": {"result":true,"message":null}
        }, 
        {
            "name": "author",
            "type": "text",
            "required": false,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": 100,
            "relations": null,
            "validation": {"result":true,"message":null}
        }, 
        {
            "name": "version",
            "type": "number",
            "required": false,
            "generated": false,
            "default": 0.0,
            "format": "6:3",
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": 100,
            "relations": null,
            "validation": {"result":true,"message":null}
        }, 
        {
            "name": "email",
            "type": "text",
            "required": false,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": 500,
            "relations": null,
            "validation": {"result":true,"message":null}
        }, 
        {
            "name": "usedocker",
            "type": "boolean",
            "required": true,
            "generated": false,
            "default": "false",
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": null,
            "relations": null,
            "validation": {"result":true,"message":null}
        }, 
        {
            "name": "controlusers",
            "type": "boolean",
            "required": true,
            "generated": false,
            "default": "false",
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": null,
            "relations": null,
            "validation": {"result":true,"message":null}
        }, 
        {
            "name": "consumedb",
            "type": "boolean",
            "required": true,
            "generated": false,
            "default": "false",
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": null,
            "relations": null,
            "validation": {"result":true,"message":null}
        }, 
        {
            "name": "consumeapi",
            "type": "boolean",
            "required": true,
            "generated": false,
            "default": "false",
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": null,
            "relations": null,
            "validation": {"result":true,"message":null}
        }, 
        {
            "name": "updated",
            "type": "date",
            "required": true,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": null,
            "relations": null,
            "validation": {"result":true,"message":null}
        }
    ]
}`;

