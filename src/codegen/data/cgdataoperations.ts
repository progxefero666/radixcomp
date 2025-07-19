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

    public static getTsTemplate(opId: string): string {
         const operationIndex: number = TsOps.getOperationIndex(opId);
        return JsxOps.OPS_BASIC[operationIndex].value;
    };//end

};//end class


/**
 * class JsxOps.OPS_BASIC
 */
export class JsxOps {

    public static readonly MOD_ID: string = "typescript_jsx";

    
    public static readonly OP_FUNC_JSX: string          = "function";
    public static readonly OP_COMPONENT: string         = "component";
    public static readonly OP_COMPONENT_REF: string     = "component_ref";
    public static readonly OP_BUTTONS: string           = "buttons";
    public static readonly OP_ICON_BUTTONS: string      = "iconbuttons";
    public static readonly OP_GRID: string              = "iconbuttons";

    public static readonly OP_PAGE: string              = "page_geader";
    public static readonly OP_PAGE_HEADER: string       = "page_geader";
    public static readonly OP_PAGE_PRIMARY_BAR: string  = "page_primary_bar";
    public static readonly OP_PAGE_SECOND_BAR: string   = "page_main_content";
    public static readonly OP_PAGE_MAINCONTENT: string  = "page_main_content";

    public static OPS_BASIC: Keyvalue[] = [
        new Keyvalue(JsxOps.OP_FUNC_JSX,         "function"),
        new Keyvalue(JsxOps.OP_COMPONENT,        "component"),
        new Keyvalue(JsxOps.OP_COMPONENT_REF,    "component ref"),
        new Keyvalue(JsxOps.OP_BUTTONS,          "buttons"),
        new Keyvalue(JsxOps.OP_ICON_BUTTONS,     "icon buttons"),
        new Keyvalue(JsxOps.OP_GRID,             "grids"),
        new Keyvalue(JsxOps.OP_PAGE,             "page"),
        new Keyvalue(JsxOps.OP_PAGE_HEADER,      "page header"),
        new Keyvalue(JsxOps.OP_PAGE_PRIMARY_BAR, "page primary bar"),
        new Keyvalue(JsxOps.OP_PAGE_SECOND_BAR,  "page second bar"),
        new Keyvalue(JsxOps.OP_PAGE_MAINCONTENT, "page main content"),
    ];

    public static getTsTemplate(opId: string): string {
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