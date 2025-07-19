//src\codegen\data\cgdata.ts

import { Keyvalue } from "@/common/model/keyvalue";
import { TsTemplates } from "@/codegen/templates/typescript/tstemplates";
import { JsxTemplates } from "../templates/jsx/jsxtemplates";


/**
 * 
 */
export class TsOps {
    public static readonly MOD_ID: string = "typescript";

    public static readonly OP_CLASS: string = "class";
    public static readonly OP_FUNCT: string = "function";
    public static readonly OP_FUNCT_STATIC: string = "function_static";
    public static readonly OP_FUNCT_PROMISE: string = "function_promise";
    public static readonly OP_FUNCT_ASYNC: string = "function_promise";
    public static readonly OP_INTERFACE: string = "interface";
    public static readonly OP_TYPE: string = "type";
    public static readonly OP_USE_STATE: string = "use_state";
    public static readonly OP_USE_EFFECT: string = "use_effect";


    public static BASIC: Keyvalue[] = [
        new Keyvalue(TsOps.OP_CLASS,         TsTemplates.t_class),
        new Keyvalue(TsOps.OP_FUNCT,         "const function"),
        new Keyvalue(TsOps.OP_FUNCT_STATIC,  "static function"),
        new Keyvalue(TsOps.OP_FUNCT_ASYNC,   "async function"),
        new Keyvalue(TsOps.OP_FUNCT_PROMISE, "Promise function"),
        new Keyvalue(TsOps.OP_USE_EFFECT,    "foreachs"),
        new Keyvalue(TsOps.OP_INTERFACE,     "Interface"),
        new Keyvalue(TsOps.OP_TYPE,          "Type"),
        new Keyvalue(TsOps.OP_USE_STATE,     "Use State"),
        new Keyvalue(TsOps.OP_USE_EFFECT,    "Use Effect"),
    ];

    public static getOperationIndex(opId: string): number {
        let index: number = -1;
        for (let idx:number=0;idx<JsxOps.OPS_BASIC.length;idx++) {
            if (JsxOps.OPS_BASIC[idx].key === opId) {
                index = idx;
                break;
            }
        }
        return index;
    };

    public static getTemplate(opId: string): string {
         const operationIndex: number = TsOps.getOperationIndex(opId);
        return JsxOps.OPS_BASIC[operationIndex].value;
    };//end

};//end class


/**
 * class JsxOps.OPS_BASIC
 */
export class JsxOps {

    public static readonly MOD_ID: string = "typescript_jsx";

    public static OPS_BASIC: Keyvalue[] = [
        new Keyvalue("function",         "t_function"),
        new Keyvalue("component",        "t_component"),
        new Keyvalue("component_ref",    "t_component ref"),
        new Keyvalue("button",           "t_button"),
        new Keyvalue("iconbutton",       "t_icon_button"),
        new Keyvalue("grid",             "t_grid"),
        new Keyvalue("page",             "t_page"),
        new Keyvalue("page_header",      "t_page_header"),
        new Keyvalue("page_primary bar", "t_page_primary bar"),
        new Keyvalue("page_second bar",  "t_page_second bar"),
        new Keyvalue("page_main content","t_page_main content"),
    ];

    public static getTemplate(opId: string): string {
        const operationIndex: number = JsxOps.getOperationIndex(opId);
        return JsxOps.OPS_BASIC[operationIndex].value;
    };

    public static getOperationIndex(opId: string): number {
        let index: number = -1;
        for (let idx:number=0;idx<JsxOps.OPS_BASIC.length;idx++) {
            if (JsxOps.OPS_BASIC[idx].key === opId) {
                index = idx;
                break;
            }
        }
        return index;
    };


}//end class