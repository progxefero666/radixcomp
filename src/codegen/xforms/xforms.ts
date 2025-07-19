//src\radix\xforms\xforms.ts

import { CgConfig } from "@/codegen/cgconfig";
import { CodeGenHelper } from "../kernel/cghelper";



/**
 * XForms.FT_TEXT
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
    public static t_attr_name: string = `name="^%v%^"`;
    public static t_attr_label: string = `label="^%v%^"`;
    public static t_attr_collection: string = `collection={^%v%^}`;
    public static t_attr_default: string = `default={^%v%^}`;
    public static t_attr_maxlen: string = `maxlen={^%v%^}`;
    public static t_attr_disabled: string = `disabled={^%v%^}`;

    public static t_attr_autocommit: string = `default={^%v%^}`;

    public static attr_inline: string = `inline={true}`;

    /*    
        <XInputText
        name="opsystem"jsonApp
        ref={osystemRef}
        label="system"
        default={item.osystem}
        maxlen={AppDef.OSSYSTEM_MAXLEN}
        readonly={readonly}
        disabled={disabled} />  */
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
                    result += XForms.t_refSelect
                        .replace(XForms.PATTERN, jsonCollection.fields[idx].name) + CgConfig.RET;
                }
                else {
                    result += XForms
                        .t_refInput.replace(XForms.PATTERN, jsonCollection.fields[idx].name) + CgConfig.RET;
                }
            }
        }//end for

        return result;
    };//end 

    public static genInitTag(field: any): string {

        let result: string =  XForms.t_tag_open;

        if (field.fk) {
            result += XForms.tc_collection;
        }
        else {
            console.log(field.type);
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

    public static genDefault(fieldType: any): string {
        let result: string = "";

        return result;
    };//end 

    public static generateForm(jsonTable: string): string {

        let result: string = "";
        result += XFormsGen.genRefs(jsonTable) + CgConfig.RETx2;
       

        //............................................................................

        const jsonObj = JSON.parse(jsonTable);

        for (let idx = 0; idx < jsonObj.fields.length; idx++) {

            if (!jsonObj.fields[idx].pk) {

                result += XFormsGen.genInitTag(jsonObj.fields[idx]) ;

                //tempAttr_ref
                result += XForms.t_attr_ref
                    .replace(XForms.PATTERN, jsonObj.fields[idx].name) + CgConfig.RET;

                /*    
                //tempAttr_name
                result += XForms.t_attr_name
                    .replace(XForms.PATTERN, jsonApp.fields[idx].name)+ CgConfig.RET;
    
                //tempAttr_label
                result += XForms.t_attr_name
                    .replace(XForms.PATTERN, jsonApp.fields[idx].label)+ CgConfig.RET;

                //tempAttr_maxlen         
                if (jsonApp.fields[idx].type === XForms.FT_TEXT && 
                    jsonApp.fields[idx].maxlen !== null) { 
                    result += XForms.t_attr_maxlen
                        .replace(XForms.PATTERN, jsonApp.fields[idx].maxlen)+ CgConfig.RET;                     
                }
                
                //collection for fks
                if (jsonApp.fields[idx].fk) {    
                    result +=  XForms.t_attr_collection
                        .replace(XForms.PATTERN, "collection")+ CgConfig.RET;
                    result += XForms.t_attr_default
                        .replace(XForms.PATTERN, "collection[0]")+ CgConfig.RET;                     
                }
                else {
                    if(XForms.PATTERN, jsonApp.fields[idx].default!== null) {                     
                        if(jsonApp.fields[idx].type === XForms.FT_TEXT||
                            jsonApp.fields[idx].type === XForms.FT_TEXTAREA)  {
                            result += '"'+ XForms.t_attr_default.replace
                                (XForms.PATTERN,jsonApp.fields[idx].default)+'"'+ CgConfig.RET; 
                        }    
                        else if(jsonApp.fields[idx].type === XForms.FT_DATE ||
                            jsonApp.fields[idx].type === XForms.FT_DATETIME) {
                            if(!CodeGenHelper.isGeneratedDate(jsonApp.fields[idx].default)) {   
                                result += '"'+ XForms.t_attr_default.replace
                                    (XForms.PATTERN,jsonApp.fields[idx].default)+'"'+ CgConfig.RET;                                 
                            }                            
                        } 
                        else if(jsonApp.fields[idx].type === XForms.FT_NUMBER ||
                                jsonApp.fields[idx].type === XForms.FT_DECIMAL ||
                                jsonApp.fields[idx].type === XForms.FT_CHECK) {
                            result += XForms.t_attr_default.replace
                                (XForms.PATTERN,jsonApp.fields[idx].default)+ CgConfig.RET;       
                            result += XForms.t_attr_default.replace
                                (XForms.PATTERN,jsonApp.fields[idx].default)+ CgConfig.RET;                                                              
                        }                                         
                    }                    
                }
                
                //XForms.tempAttr_inline  
                if(jsonApp.fields[idx].type === XForms.FT_NUMBER ||
                   jsonApp.fields[idx].type === XForms.FT_DECIMAL ||
                   jsonApp.fields[idx].type === XForms.FT_CHECK||
                   jsonApp.fields[idx].type === XForms.FT_FILE) {
                    result += XForms.attr_inline + CgConfig.RET;       
                }
                 */

                result += XForms.t_tag_close + CgConfig.RET;

            }//end if pk

        }//end for


        //............................................................................

        return result;
    }//end


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
            "type": "text",
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
            "type": "text",
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
            "type": "number",
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

