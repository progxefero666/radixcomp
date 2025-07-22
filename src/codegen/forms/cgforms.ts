//src\radix\xforms\xforms.ts

import { CgConfig } from "@/codegen/cgconfig";
import { CodeGenHelper } from "../kernel/cghelper";
import { TextHelper } from "@/common/helper/texthelper";
import { useState } from "react";
import { Validation } from "@/common/model/validation";
import { Constants } from "@/common/constants";
import { XForms, XFormsUtil } from "@/common/forms/xforms";


/**
 * XForms.FT_TEXT
 */
export class XFormsTemp {

    public static PATTERN: string = "^%v%^";
    
    public static t_useEffect_start: string = "useEffect(() => {";
    public static t_useEffect_end: string = "}, []);";

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
    public static t_attr_inline: string = `inline={true}`;
    
};//end class

export class XFormsGenerator {

    public static gen_FT_TEXT(field: any): string {
        let result: string = "";

        return result;
    };//end

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
                result += XFormsTemp.t_refSelect
                    .replace(XFormsTemp.PATTERN, jsonObj.fields[idx].name) + CgConfig.RET;
            }
            else {
                result += XFormsTemp
                    .t_refInput.replace(XFormsTemp.PATTERN, jsonObj.fields[idx].name) + CgConfig.RET;
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

            const fieldNameIncorrect: string = jsonObj.fields[idx].name + " incorrect."
            content += "if(!validateItem("+jsonObj.fields[idx].type + CgConfig.CHAR_COMMA;            
            content += "format:"+format + CgConfig.CHAR_COMMA +"min:" + min;
            content += CgConfig.CHAR_COMMA + "max:" + max + ")) {" +CgConfig.RET
            content += CgConfig.TAB_4 + `alert(`+ CodeGenHelper.getIntoSingleQuotes(fieldNameIncorrect);
            content += `);` +CgConfig.RET;
            content += CgConfig.TAB_4 + `return false;` + CgConfig.RET;
            content += `}`+ CgConfig.RET;            

        }//end for

        content = CodeGenHelper.applyTabsToStringBlock(content,1);

        let result: string = "const validate = (): boolean => {"+ CgConfig.RET;
        result += content;
        result += "    return true;" + CgConfig.RET;
        result += "};//end";
        result = CodeGenHelper.applyTabsToStringBlock(result,1) + CgConfig.RET;
        return result;
    };//end


    public static genFormFields(jsonObj: any): string {
        let result: string = "";
        for (let idx = 1; idx < jsonObj.fields.length; idx++) {

            result += XFormsUtil.genInitTag(jsonObj.fields[idx]) + CgConfig.RET;
            //tempAttr_ref
            result += CgConfig.TAB_4 + XFormsTemp.t_attr_ref
                .replace(XFormsTemp.PATTERN, jsonObj.fields[idx].name) + CgConfig.RET;
            //tempAttr_name
            result += CgConfig.TAB_4 + XFormsTemp.t_attr_name
                .replace(XFormsTemp.PATTERN,jsonObj.fields[idx].name) + CgConfig.RET;
            //tempAttr_label
            const label = TextHelper.capitalize(jsonObj.fields[idx].name);
            result += CgConfig.TAB_4 +  XFormsTemp.t_attr_label.replace(XFormsTemp.PATTERN,label);
            //tempAttr_maxlen         
            if (jsonObj.fields[idx].type === XForms.FT_TEXT && 
                jsonObj.fields[idx].maxlen !== null) { 
                result += CgConfig.RET;
                result +=  CgConfig.TAB_4 + XFormsTemp.t_attr_maxlen
                    .replace(XFormsTemp.PATTERN, jsonObj.fields[idx].maxlen);                     
            }
            //XForms.tempAttr_inline  
            if(jsonObj.fields[idx].type === XForms.FT_NUMBER ||
                jsonObj.fields[idx].type === XForms.FT_DECIMAL ||
                jsonObj.fields[idx].type === XForms.FT_CHECK||
                jsonObj.fields[idx].type === XForms.FT_FILE) {
                result += CgConfig.RET;
                result +=  CgConfig.TAB_4 + XFormsTemp.t_attr_inline;       
            }     
            // default value
            if (jsonObj.fields[idx].fk) {    
                result += XFormsTemp.t_attr_collection
                    .replace(XFormsTemp.PATTERN, "collection")+ CgConfig.RET;
                result += CgConfig.TAB_4 + XFormsTemp.t_attr_default
                    .replace(XFormsTemp.PATTERN, "collection[0]");                     
            }
            else {
                if(XFormsTemp.PATTERN, jsonObj.fields[idx].default!== null) {                     
                    if(jsonObj.fields[idx].type === XForms.FT_TEXT||                            
                        jsonObj.fields[idx].type === XForms.FT_TEXTAREA)  {
                        const defaultValue = CodeGenHelper
                            .getIntoSingleQuotes(jsonObj.fields[idx].default);    
                        result += CgConfig.RET;    
                        result +=  CgConfig.TAB_4 + XFormsTemp.t_attr_default.replace
                            (XFormsTemp.PATTERN,defaultValue); 
                    }    
                    else if(jsonObj.fields[idx].type === XForms.FT_DATE ||
                        jsonObj.fields[idx].type === XForms.FT_DATETIME) {
                        const defaultValue = CodeGenHelper
                            .getIntoSingleQuotes(jsonObj.fields[idx].default);                                   
                        result += CgConfig.RET;    
                        if(CodeGenHelper.isGeneratedDate(jsonObj.fields[idx].default)) {   
                            result += XFormsTemp.t_attr_default
                                .replace(XFormsTemp.PATTERN,defaultValue);                                 
                        }                            
                    } 
                    else if(jsonObj.fields[idx].type === XForms.FT_NUMBER ||
                            jsonObj.fields[idx].type === XForms.FT_DECIMAL ||
                            jsonObj.fields[idx].type === XForms.FT_CHECK) {  
                        const defaultValue = CodeGenHelper
                            .getIntoKeys(jsonObj.fields[idx].default);                                     
                        result += CgConfig.RET;        
                        result += CgConfig.TAB_4 + XFormsTemp.t_attr_default
                            .replace(XFormsTemp.PATTERN,defaultValue);                                                              
                    }                                         
                }                    
            }
            result += ` />\n`+ CgConfig.RET;
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
        content = CodeGenHelper.applyTabsToStringBlock(content,1);

        let result: string = "const onSubmit = () => {"+ CgConfig.RET;
        result += content;
        result += "};//end";
        result =CodeGenHelper.applyTabsToStringBlock(result,1);
        return result+ CgConfig.RET;
    };//end

    public static generateForm(jsonTable: string): string {

        const jsonObj = JSON.parse(jsonTable);
  
        let resImports: string      = XFormsGenerator.genImports();
        let resStates: string       = XFormsGenerator.genStates(jsonObj.name);
        let resRefs: string         = XFormsGenerator.genRefs(jsonObj);
        let resFunctValItem: string = XFormsGenerator.genFuncValidateItem();
        let resFunctValForm: string = XFormsGenerator.genFuncValidation(jsonObj);
        let resFunctSubmit: string  = XFormsGenerator.genFuncSubmit(jsonObj);
        let resFields: string       = XFormsGenerator.genFormFields(jsonObj);
      
        let result:string = resImports + resStates + resRefs +
                            resFunctValItem + resFunctValForm + 
                            resFunctSubmit + resFields;
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
            "type": "text",
            "required": true,
            "generated": false,
            "default": null,
            "format": null,
            "pk": true,
            "fk": false,
            "minlen": null,
            "maxlen": 16,
            "validation":{"result":true,"message":null},
            "relations": null
        },
        {
            "name": "name",
            "type": "text",
            "required": true,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": 100,
            "validation":{"result":true,"message":null},
            "relations": null
        },
        {
            "name": "proglanguage_id",
            "type": "text",
            "required": true,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": true,
            "minlen": null,
            "maxlen": 16,
            "validation":{"result":true,"message":null},
            "relations": [
                {
                    "table": "proglanguage",
                    "field": "id"
                }
            ]
        },
        {
            "name": "datacode",
            "type": "text",
            "required": true,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": null,
            "validation":{"result":true,"message":null},
            "relations": null
        }
    ]
}
`;
