//src\radix\xforms\xforms.ts

import {CgConfig} from "@/codegen/cgconfig";



/**
 * XForms constants, types and templates
 */
export class XForms {

    public static readonly FT_TEXT: string = "text";
    public static readonly FT_CHECK: string = "check";
    public static readonly FT_NUMBER: string = "number";
    public static readonly FT_DECIMAL: string = "decimal";
    public static readonly FT_COLLECTION: string = "collection";    
    public static readonly FT_DATE: string = "date";
    public static readonly FT_DATETIME: string = "datetime";


    public static readonly TT_DEFAULT: string = "text";
    public static readonly TT_URL: string = "url";
    public static readonly TT_EMAIL: string = "email";
    public static readonly TT_PASSWORD: string = "password";
    public static readonly TT_TEL: string = "telephone";
    public static readonly TT_HIDDEN: string = "hidden";

    public static tempRefInput:string = `const dateRef = useRef<HTMLInputElement>(null);\n`;
    public static tempRefSelect:string = `const dateRef = useRef<HTMLSelectElement>(null);\n`;

    public static tempAttr_name:string       = `name={value}\n`;
    public static tempAttr_label: string     = `label={value}\n`;
    public static tempAttr_default: string   = `default={value}\n`;
    public static tempAttr_maxlen: string    = `maxlen={value}\n`;
    public static tempAttr_readonly: string  = `readonly={value}\n`;
    public static tempAttr_disabled: string  = `disabled={value}\n`;
    public static tempAttr_ref: string       = `ref={string}\n`;
    public static tempAttr_inline: string    = `inline={true}\n`;
    public static tempAttr_collection:string = `collection={collection}\n`;
    public static tempAttr_autocommit:string = `default={autocommit}\n`;

    public static tempTag_open:string   = `<`;
    public static tempTag_close:string  = ` />\n`;

    public static tempComp_text:string       = `XInputText`;
    public static tempComp_check:string      = `XInputCheck`;
    public static tempComp_number:string     = `XInputNumber`;
    public static tempComp_collection:string = `XInputSelect`;
    public static tempComp_date:string       = `XInputDate`;
    public static tempComp_textarea:string   = `XInputTextArea`;
    public static tempComp_file:string       = `XInputFile`;
    public static tempComp_datetime:string   = `XInputDateTime`;

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

export class XFormsGenerator {


    public static generateForm(jsonTable:string): string {         
        let result: string = "";

        return result;
    }//end


};//end class


/*
ç
    public static generateForm(): string {

        let result: string = "";

        for(let idx=0; idx < jsonApp.fields.length; idx++) {

            console.log("...........................................");
            console.log("type:", jsonApp.fields[idx].type);
            
            if(jsonApp.fields[idx].pk){
                console.log("pk :", jsonApp.fields[idx].name);
            } 
            else if(jsonApp.fields[idx].fk) {
                console.log("fKey:", jsonApp.fields[idx].name);
            }
            else {
                if(jsonApp.fields[idx].type === "text"){

                }
                else if(jsonApp.fields[idx].type === "number"){
                    
                }   
                else if(jsonApp.fields[idx].type === "boolean"){
                    
                }
                else if(jsonApp.fields[idx].type === "date"){
                    
                }                 
                console.log("default:", jsonApp.fields[idx].name);
            }     
        }//end for
        return result;
    }//end


*/

export const jsonTemplate:string = 
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

