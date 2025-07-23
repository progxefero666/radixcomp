//src\common\forms\xforms.ts


import { Validation } from "../model/validation";
import { Constants } from "@/common/constants";


/**
 * class XForms.FT_FILE
 */
export class XForms {

    public static FT_TEXT: string = "text";
    public static FT_TEXTAREA: string = "textarea";
    public static FT_CHECK: string = "boolean";
    public static FT_NUMBER: string = "number";
    public static FT_DECIMAL: string = "decimal";
    public static FT_COLLECTION: string = "collection";
    public static FT_DATE: string = "date";
    public static FT_DATETIME: string = "datetime";
    public static FT_FILE: string = "file";
    
    public static TT_DEFAULT: string = "text";
    public static TT_URL: string = "url";
    public static TT_EMAIL: string = "email";
    public static TT_PASSWORD: string = "password";
    public static TT_TEL: string = "telephone";
    public static TT_HIDDEN: string = "hidden";

    public static comp_text: string = `XInputText`;
    public static comp_check: string = `XInputCheck`;
    public static comp_number: string = `XInputNumber`;
    public static comp_decimal: string = `XInputDecimal`;
    public static comp_collection: string = `XInputSelect`;
    public static comp_date: string = `XInputDate`;
    public static comp_textarea: string = `XInputTextArea`;
    public static comp_file: string = `XInputFile`;
    public static comp_datetime: string = `XInputDateTime`;


    public static readonly VALIDATION_DEF: Validation 
            = new Validation(XForms.FT_TEXT,Constants.SUCCESS);
                
}//end class

/**
 * class XFormsUtil
 */
export class XFormsUtil {

    public static genInitTag(field: any): string {

        let result: string =  `<`;

        if (field.fk) {
            result += XForms.comp_collection;
        }
        else {
            if (field.type === XForms.FT_TEXT) {
                result += XForms.comp_text;
            }
            else if (field.type === XForms.FT_TEXTAREA) {
                result += XForms.comp_textarea;
            }
            else if (field.type === XForms.FT_NUMBER) {
                if (field.format.split(":")[1] == "0") {
                    result += XForms.comp_number;
                }
                else { result += XForms.comp_decimal; }
            }
            else if (field.type === XForms.FT_CHECK) {
                result += XForms.comp_check;
            }
            else if (field.type === XForms.FT_DATE) {
                result += XForms.comp_date;
            }
            else if (field.type === XForms.FT_DATETIME) {
                result += XForms.comp_datetime;
            }
            else if (field.type === XForms.FT_FILE) {
                result += XForms.comp_file;
            }
        }

        return result + " ";
    };//end 

}//end class