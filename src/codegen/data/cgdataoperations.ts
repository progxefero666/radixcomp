//src\codegen\data\cgdata.ts

import { Keyvalue } from "@/common/model/keyvalue";
import { TsTemplates } from "@/codegen/templates/typescript/tstemplates";
import { JsxTemplates } from "../templates/jsx/jsxtemplates";


/**
 *  class TsOps.getColl_BASIC
 */
export class TsOps {

    public static readonly MOD_ID: string = "typescript";

    public static BASIC: Keyvalue[] = [
        new Keyvalue("class",           TsTemplates.class),
        new Keyvalue("type",            "TsTemplates.type"),
        new Keyvalue("function",        "TsTemplates.function"),
        new Keyvalue("function_static", "TsTemplates.function_static"),
        new Keyvalue("function_promise","TsTemplates.function_promise"),
        new Keyvalue("function_async",  "TsTemplates.function_async"),       
        new Keyvalue("interface",       "TsTemplates.interface"),        
        new Keyvalue("use_state",       "TsTemplates.use_state"),
        new Keyvalue("use_effect",      "TsTemplates.use_effect"),        
    ];

    public static getColl_BASIC(): Keyvalue[] {
        const coll: Keyvalue[] = [];
        for (let idx:number=0;idx<TsOps.BASIC.length;idx++) {            
            coll.push(new Keyvalue(TsOps.BASIC[idx].key,TsOps.BASIC[idx].key));            
        }
        return coll;
    };

    public static getOperationIndex(opId: string): number {
        let index: number = -1;
        for (let idx:number=0;idx<TsOps.BASIC.length;idx++) {
            if (TsOps.BASIC[idx].key === opId) {
                index = idx;
                break;
            }
        }
        return index;
    };

    public static getTemplate(opId: string): string {
         const operationIndex: number = TsOps.getOperationIndex(opId);
        return TsOps.BASIC[operationIndex].value;
    };//end

};//end class


/**
 * class JsxOps.OPS_BASIC
 */
export class JsxOps {

    public static readonly MOD_ID: string = "typescript_jsx";

    public static BASIC: Keyvalue[] = [        
        new Keyvalue("component",        JsxTemplates.component),
        new Keyvalue("function",         "JsxTemplates.function"),
        new Keyvalue("component_ref",    "JsxTemplates.component ref"),
        new Keyvalue("button",           "JsxTemplates.button"),
        new Keyvalue("iconbutton",       "JsxTemplates.icon_button"),
        new Keyvalue("grid",             "JsxTemplates.grid"),
        new Keyvalue("page",             "JsxTemplates.page"),
        new Keyvalue("page_header",      "JsxTemplates.page_header"),
        new Keyvalue("page_primary_bar", "JsxTemplates.page_primary_bar"),
        new Keyvalue("page_second_bar",  "JsxTemplates.page_second_bar"),
        new Keyvalue("page_main_content","JsxTemplates.page_main_content"),
    ];

    public static getTemplate(opId: string): string {
        const operationIndex: number = JsxOps.getOperationIndex(opId);
        return JsxOps.BASIC[operationIndex].value;
    };

    public static getColl_BASIC(): Keyvalue[] {
        const coll: Keyvalue[] = [];
        for (let idx:number=0;idx<JsxOps.BASIC.length;idx++) {            
            coll.push(new Keyvalue(JsxOps.BASIC[idx].key,JsxOps.BASIC[idx].key));            
        }
        return coll;
    };    

    public static getOperationIndex(opId: string): number {
        let index: number = -1;
        for (let idx:number=0;idx<JsxOps.BASIC.length;idx++) {
            if (JsxOps.BASIC[idx].key === opId) {
                index = idx;
                break;
            }
        }
        return index;
    };


}//end class