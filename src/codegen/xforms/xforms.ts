//src\radix\xforms\xforms.ts

import { CgConfig } from "@/codegen/cgconfig";



/**
 * XForms.tempAttr_name
 */
export class XForms {

    public static readonly PATTERN:string = "^%v%^";

    public static readonly FT_TEXT: string = "text";
    public static readonly FT_TEXTAREA: string = "textarea";
    public static readonly FT_CHECK: string = "check";
    public static readonly FT_NUMBER: string = "number";
    public static readonly FT_DECIMAL: string = "decimal";
    public static readonly FT_COLLECTION: string = "collection";
    public static readonly FT_DATE: string = "date";
    public static readonly FT_DATETIME: string = "datetime";
    public static readonly FT_FILE: string = "file";

    public static readonly TT_DEFAULT: string = "text";
    public static readonly TT_URL: string = "url";
    public static readonly TT_EMAIL: string = "email";
    public static readonly TT_PASSWORD: string = "password";
    public static readonly TT_TEL: string = "telephone";
    public static readonly TT_HIDDEN: string = "hidden";

    public static tempRefInput: string = `const ^%v%^Ref = useRef<HTMLInputElement>(null);\n`;
    public static tempRefSelect: string = `const dateRef = useRef<HTMLSelectElement>(null);\n`;

    public static tempAttr_name: string = `name={^%v%^}\n`;
    public static tempAttr_label: string = `label={^%v%^}\n`;
    public static tempAttr_default: string = `default={^%v%^}\n`;
    public static tempAttr_maxlen: string = `maxlen={^%v%^}\n`;
    public static tempAttr_readonly: string = `readonly={^%v%^}\n`;
    public static tempAttr_disabled: string = `disabled={^%v%^}\n`;
    public static tempAttr_ref: string = `ref={^%v%^}\n`;
    public static tempAttr_inline: string = `inline={^%v%^}\n`;
    public static tempAttr_collection: string = `collection={^%v%^}\n`;
    public static tempAttr_autocommit: string = `default={^%v%^}\n`;

    public static tempTag_open: string = `<`;
    public static tempTag_close: string = ` />\n`;

    public static tempComp_text: string = `XInputText`;
    public static tempComp_check: string = `XInputCheck`;
    public static tempComp_number: string = `XInputNumber`;
    public static tempComp_decimal: string = `XInputDecimal`;
    public static tempComp_collection: string = `XInputSelect`;
    public static tempComp_date: string = `XInputDate`;
    public static tempComp_textarea: string = `XInputTextArea`;
    public static tempComp_file: string = `XInputFile`;
    public static tempComp_datetime: string = `XInputDateTime`;

    /*XInputNumber
     
               <XInputText
                name="opsystem"jsonApp
                ref={osystemRef}
                label="system"
                default={item.osystem}
                maxlen={AppDef.OSSYSTEM_MAXLEN}
                readonly={readonly}
                disabled={disabled} /> 
    */
};//end class

export class XFormsGen {

    public static gen_FT_TEXT(field: any): string {
        let result: string = "";

        return result;
    };//

    public static genRefs(jsonTable: string): string {
        const jsonCollection = JSON.parse(jsonTable);
        let result: string = "";
        for (let idx = 0; idx < jsonCollection.fields.length; idx++) {
            if (!jsonCollection.fields[idx].pk) {
                if (jsonCollection.fields[idx].fk) {
                    result += XForms.tempRefSelect
                        .replace(XForms.PATTERN, jsonCollection.fields[idx].name) + CgConfig.RET;
                }
                else {
                    result += XForms
                        .tempRefInput.replace(XForms.PATTERN, jsonCollection.fields[idx].name) + CgConfig.RET;
                }
            }
        }//end for

        return result;
    };//end 

    public static genInitTags(jsonTable: string): string {
        const jsonApp = JSON.parse(jsonTable);
        
        let result: string = "";

        for (let idx = 0; idx < jsonApp.fields.length; idx++) {

            if (!jsonApp.fields[idx].pk) {
                result += XForms.tempTag_open;

                if (jsonApp.fields[idx].fk) {
                    result += XForms.tempComp_collection;
                }
                else {
                    if (jsonApp.fields[idx].type === XForms.FT_TEXT) {

                    }
                    else if (jsonApp.fields[idx].type === XForms.FT_TEXTAREA) {
                        result += XForms.tempComp_textarea;
                    }                    
                    else if (jsonApp.fields[idx].type === XForms.FT_NUMBER) {
                        if (jsonApp.fields[idx].format.split(":")[1] == "0") {
                            result += XForms.tempComp_number;
                        }
                        else {result += XForms.tempComp_decimal;}
                    }
                    else if (jsonApp.fields[idx].type === XForms.FT_CHECK) {
                        result += XForms.tempComp_check;
                    }
                    else if (jsonApp.fields[idx].type === XForms.FT_DATE) {
                        result += XForms.tempComp_date;
                    }
                    else if (jsonApp.fields[idx].type === XForms.FT_DATETIME) {
                        result += XForms.tempComp_datetime;
                    }                    
                    else if (jsonApp.fields[idx].type === XForms.FT_FILE) {
                        result += XForms.tempComp_file;
                    }
                }
            }
        }//end for

        return result + CgConfig.CHAR_SPACE;
    };//end 

    public static genDefault(fieldType: any): string {
        let result: string = "";

        return result;
    };//end 

    public static generateForm(jsonTable: string): string {

        let result: string = "";
        result += XFormsGen.genRefs(jsonTable) + CgConfig.RETx2;
        result += XFormsGen.genInitTags(jsonTable) + CgConfig.RETx2;
        //............................................................................
        const jsonApp = JSON.parse(jsonTable);

        //XForms.tempAttr_default
        //XForms.tempAttr_maxlen 
        //XForms.tempAttr_readonly 
        //XForms.tempAttr_disabled        
        //XForms.tempAttr_inline
        //XForms.tempAttr_collection
        //XForms.tempAttr_autocommit        
        for (let idx = 0; idx < jsonApp.fields.length; idx++) {

            if (!jsonApp.fields[idx].pk) {

                //tempAttr_ref
                result += XForms.tempAttr_ref
                    .replace(XForms.PATTERN, jsonApp.fields[idx].name)+ CgConfig.RET;

                //tempAttr_name
                result += XForms.tempAttr_name
                    .replace(XForms.PATTERN, jsonApp.fields[idx].name)+ CgConfig.RET;
    
                //tempAttr_label
                result += XForms.tempAttr_name
                    .replace(XForms.PATTERN, jsonApp.fields[idx].label)+ CgConfig.RET;

                //tempAttr_default
                result += XForms.tempAttr_default
                    .replace(XForms.PATTERN, jsonApp.fields[idx].default)+ CgConfig.RET;      
                
                if (jsonApp.fields[idx].fk) {    
                     result += "{collection[0]}" + CgConfig.RET;
                }
                else {
                    result += XFormsGen.genDefault(jsonApp.fields[idx].type) + CgConfig.RET;
                }
            }
        }//end for

        return result;
    }//end


};//end class


/*
ç
    public static generateForm(): string {

        let result: string = "";

        for(let idx=0; idx < jsonApp.fields.length; idx++) {

            //pk
            if(jsonApp.fields[idx].pk){
                console.log("pk :", jsonApp.fields[idx].name);
            } 
            //fkey
            else if(jsonApp.fields[idx].fk) {
                console.log("fKey:", jsonApp.fields[idx].name);
                const data:string = XForms.tempRefSelect
                    .replace("^%v%^",jsonApp.fields[idx].name)+ CgConfig.RET;
          
            }
            //default
            else {
                if(jsonApp.fields[idx].type === "text"){
                    const data:string = XForms
                        .tempRefInput.replace("^%v%^",jsonApp.fields[idx].name)+ CgConfig.RET;
                }
                else if(jsonApp.fields[idx].type === "number"){
                    const format: string = jsonApp.fields[idx].format || "5:0";
                    const chars = jsonApp.fields[idx].format.split(":");
                    if(chars[1] == "0") {

                    }
                    else {

                    }
                }   
                else if(jsonApp.fields[idx].type === "boolean"){
                    
                }
                else if(jsonApp.fields[idx].type === "date"){
                    
                } 
            }

        }//end for
        return result;
    }//end


*/

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
            "relations": null
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
            ]
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
            "maxlen": 50,
            "relations": null
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
            "relations": null
        }, 
        {
            "name": "repository",
            "type": "url",
            "required": false,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": 250,
            "relations": null
        }, 
        {
            "name": "author",
            "type": "password",
            "required": false,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": 100,
            "relations": null
        }, 
        {
            "name": "version",
            "type": "decimal",
            "required": false,
            "generated": false,
            "default": 0.0,
            "format": "6:3",
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": 100,
            "relations": null
        }, 
        {
            "name": "telephone",
            "type": "tel",
            "required": false,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": 500,
            "relations": null
        }, 
        {
            "name": "email",
            "type": "email",
            "required": false,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": 500,
            "relations": null
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
            "relations": null
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
            "relations": null
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
            "relations": null
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
            "relations": null
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
            "relations": null
        }
    ]
}`;

