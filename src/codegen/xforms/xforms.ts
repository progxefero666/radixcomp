//src\radix\xforms\xforms.ts

import {CgConfig} from "@/codegen/cgconfig";
//import jsonApp from "@/db/modeljson/application.json";

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

    
    public static generateForm(jsonFields: object[]): string {

        let result: string = "";

        for(let idx=0; idx < jsonFields.length; idx++) {
        
        }//end for

        return result;
    }//end

jsonAppjsonAppjsonApp
    /*
jsonApp  
    */
};//end class

