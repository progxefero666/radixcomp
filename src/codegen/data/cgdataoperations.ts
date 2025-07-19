//src\codegen\data\cgdata.ts

import { Keyvalue } from "@/common/model/keyvalue";
import { TsTemplates } from "@/codegen/data/templates/typescript/tstemplates";
import { JsxTemplates } from "./templates/jsx/jsxtemplates";


/**
 *  class TsOps.getColl_BASIC
 */
export class TsOps {

    public static readonly MOD_ID: string = "typescript";

    public static BASIC: Keyvalue[] = [

        new Keyvalue("class",       TsTemplates.clas),
        new Keyvalue("class_static",TsTemplates.class_static),
        new Keyvalue("funct_void",          TsTemplates.funct_void),
        new Keyvalue("funct_return",        TsTemplates.funct_return),
        new Keyvalue("funct_static",        TsTemplates.funct_static),
        new Keyvalue("funct_promise",       TsTemplates.funct_promise),
        new Keyvalue("funct_async",         TsTemplates.funct_async),   
        new Keyvalue("funct_static_promise",TsTemplates.funct_static_promise),    
        //new Keyvalue("interface",       "TsTemplates.interface"),       
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