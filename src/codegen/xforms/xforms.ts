//src\radix\xforms\xforms.ts

import { CgConfig } from "@/codegen/cgconfig";
import { CodeGenHelper } from "../kernel/cghelper";
import { TextHelper } from "@/common/helper/texthelper";
import { InputValue } from "@/common/model/inputvalue";



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
    };//

    public static genImports(): string {
        let result: string = "";
        result += XForms.t_import_form_inputs + CgConfig.RETx2;
        return result;
    };//

    public static genUseEffect(jsonTable: string): string {
        const jsonCollection = JSON.parse(jsonTable);

        let array_result =  "setFormInputs(["+ CgConfig.RET;
        for (let idx = 0; idx < jsonCollection.fields.length;idx++) {
            if(!jsonCollection.fields[idx].pk) {
                array_result += CgConfig.TAB_4 +`new InputValue("` + jsonCollection.fields[idx].name + `", null)`;
                if( idx < jsonCollection.fields.length - 1) {
                    array_result += CgConfig.CHAR_COMMA;            
                }
                array_result += CgConfig.RET;
            }
        }
        array_result +=  "]);";
        array_result = CodeGenHelper.applyTabsToStringBlock(array_result, 2);
             
        let result: string = XForms.t_form_inputs + CgConfig.RET;
        result +=  XForms.t_useEffect_start + CgConfig.RET;
        result += array_result;
        result += XForms.t_useEffect_end + CgConfig.RET;        
        return CodeGenHelper.applyTabsToStringBlock(result,1);
    };//



    //const validate = (formData:InputValue[]): boolean => {
    public static functValidate(formData:InputValue[]): string {
        let result: string = "const validate = (formData:InputValue[]): boolean => {";
        
        for (let idx = 0; idx < formData.length; idx++) {

        }
        result += "}";
        return result;
    };

    public static genFuncValidation(): string {
        return "";
    };//end

    public static genFuncSubmit(): string {
        return "";
    };//end
    
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

        return CodeGenHelper.applyTabsToStringBlock(result,1);
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

    public static generateForm(jsonTable: string): string {

        //............................................................................
        let resultImports: string = XFormsGen.genImports();
        let resultInputs: string  = XFormsGen.genUseEffect(jsonTable);
        let resultRefs: string = XFormsGen.genRefs(jsonTable);
        //............................................................................

        //............................................................................
        const jsonObj = JSON.parse(jsonTable);
        let resultFields: string = "";
        for (let idx = 0; idx < jsonObj.fields.length; idx++) {

            if (!jsonObj.fields[idx].pk) {

                resultFields += XFormsGen.genInitTag(jsonObj.fields[idx]) + CgConfig.RET;

                //tempAttr_ref
                resultFields += CgConfig.TAB_4 + XForms.t_attr_ref
                    .replace(XForms.PATTERN, jsonObj.fields[idx].name) + CgConfig.RET;

                //tempAttr_name
                resultFields += CgConfig.TAB_4 + XForms.t_attr_name
                    .replace(XForms.PATTERN,jsonObj.fields[idx].name) + CgConfig.RET;
    
                //tempAttr_label
                const label = TextHelper.capitalize(jsonObj.fields[idx].name);
                resultFields += CgConfig.TAB_4 +  XForms.t_attr_label.replace(XForms.PATTERN,label);

                //tempAttr_maxlen         
                if (jsonObj.fields[idx].type === XForms.FT_TEXT && 
                    jsonObj.fields[idx].maxlen !== null) { 
                    resultFields += CgConfig.RET;
                    resultFields +=  CgConfig.TAB_4 + XForms.t_attr_maxlen
                        .replace(XForms.PATTERN, jsonObj.fields[idx].maxlen);                     
                }
                
                //XForms.tempAttr_inline  
                if(jsonObj.fields[idx].type === XForms.FT_NUMBER ||
                   jsonObj.fields[idx].type === XForms.FT_DECIMAL ||
                   jsonObj.fields[idx].type === XForms.FT_CHECK||
                   jsonObj.fields[idx].type === XForms.FT_FILE) {
                    resultFields += CgConfig.RET;
                    resultFields +=  CgConfig.TAB_4 + XForms.attr_inline;       
                }     

                // default value
                if (jsonObj.fields[idx].fk) {    
                    resultFields += XForms.t_attr_collection
                        .replace(XForms.PATTERN, "collection")+ CgConfig.RET;
                    resultFields += CgConfig.TAB_4 + XForms.t_attr_default
                        .replace(XForms.PATTERN, "collection[0]");                     
                }
                else {
                    if(XForms.PATTERN, jsonObj.fields[idx].default!== null) {                     
                        if(jsonObj.fields[idx].type === XForms.FT_TEXT||                            
                            jsonObj.fields[idx].type === XForms.FT_TEXTAREA)  {
                            const defaultValue = CodeGenHelper
                                .getIntoSingleQuotes(jsonObj.fields[idx].default);    
                            resultFields += CgConfig.RET;    
                            resultFields +=  CgConfig.TAB_4 + XForms.t_attr_default.replace
                                (XForms.PATTERN,defaultValue); 
                        }    
                        else if(jsonObj.fields[idx].type === XForms.FT_DATE ||
                            jsonObj.fields[idx].type === XForms.FT_DATETIME) {
                            const defaultValue = CodeGenHelper
                                .getIntoSingleQuotes(jsonObj.fields[idx].default);                                   
                            resultFields += CgConfig.RET;    
                            if(CodeGenHelper.isGeneratedDate(jsonObj.fields[idx].default)) {   
                                resultFields += XForms.t_attr_default
                                    .replace(XForms.PATTERN,defaultValue);                                 
                            }                            
                        } 
                        else if(jsonObj.fields[idx].type === XForms.FT_NUMBER ||
                                jsonObj.fields[idx].type === XForms.FT_DECIMAL ||
                                jsonObj.fields[idx].type === XForms.FT_CHECK) {  
                            const defaultValue = CodeGenHelper
                                .getIntoKeys(jsonObj.fields[idx].default);                                     
                            resultFields += CgConfig.RET;        
                            resultFields += CgConfig.TAB_4 + XForms.t_attr_default
                                .replace(XForms.PATTERN,defaultValue);                                                              
                        }                                         
                    }                    
                }
                
                resultFields += XForms.t_tag_close + CgConfig.RET;

            }//end if pk

        }//end for
        resultFields = CodeGenHelper.applyTabsToStringBlock(resultFields,2)+ CgConfig.RET;;
        //............................................................................        

        let result:string = resultImports + resultInputs + resultRefs + resultFields;
        return result;
    }//end

    //ouputFormatRef.current!.value
    //applyTransRef.current!.checked

};//end class


/*
    const validate = (): boolean => {
        return true;
    };//end
    const onSubmit = () => {

    };//end
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
            "default": "nachete",
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

