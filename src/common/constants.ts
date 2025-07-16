//src\common\constants.ts

import { Keyvalue } from "./model/keyvalue";
import { TKeyvalue } from "./types";


/**
 * class DbConstants.EMPTY_VALUE
 */
export class DataConstants{
    
    public static readonly EMPTY: string = "";
    public static readonly UNDEFINED: string = "undefined";

};//end class


/**
 * class DocFormats
 */
export class DocFormats{
    public static FORMAT_ZIP:TKeyvalue          = {key: "application/zip", value: ".zip"};
    public static FORMAT_TEXTPLAIN:TKeyvalue    = {key: "text/plain", value: ".txt"};
    public static FORMAT_TYPESCRIPT:TKeyvalue   = {key: "text/typescript", value: ".ts"};
    public static FORMAT_JSON:TKeyvalue         = {key: "application/json", value: ".json"};
    public static FORMAT_JSX:TKeyvalue          = {key: "text/jsx", value: ".jsx"};
    public static FORMAT_SQL:TKeyvalue          = {key: "text/x-sql", value: ".sql"};
    public static FORMAT_JAVASCRIPT:TKeyvalue   = {key: "text/javascript", value: ".js"};   
    public static FORMAT_PYTHON:TKeyvalue       = { key: "text/python", value: ".py"};
    public static FORMAT_MARKDOWN:TKeyvalue     = { key: "text/plain", value: ".md"};
    public static FORMAT_HTML:TKeyvalue         = { key: "text/html", value: ".html"};
    public static FORMAT_CSS:TKeyvalue          = { key: "text/css", value: ".css"};
    public static FORMAT_PDF:TKeyvalue          = { key: "application/pdf", value: ".pdf"};
};//end class


/**
 * class OpConstants
 */
export class OpConstants{
    
    public static readonly OP_OPEN: string ="open";
    public static readonly OP_CLOSE: string ="close";
    public static readonly OP_SAVE: string ="save";
    public static readonly OP_DELETE: string ="delete";
    public static readonly OP_CANCEL: string ="cancel";
    public static readonly OP_COPY: string ="cancel";
    public static readonly OP_OK: string ="confirm";
    public static readonly OP_IMPORT: string ="import";
    public static readonly OP_EXPORT: string ="export";
    public static readonly OP_EXIT: string ="exit";
    public static readonly OP_NAV_BACK: string ="navigation_back";
    public static readonly OP_NAV_HOME: string ="navigation_home";
    public static readonly OP_PREVIOUS: string ="previous";
    public static readonly OP_NEXT: string ="next";
    public static readonly OP_MOVE_FIRST: string ="move_first";
    public static readonly OP_MOVE_LAST: string ="move_last";
    public static readonly OP_MOVE_UP: string ="move_up";
    public static readonly OP_CLEAR: string ="clear";

    public static readonly OP_TEXT_OPEN: string ="Open";
    public static readonly OP_TEXT_CLOSE: string ="Close";
    public static readonly OP_TEXT_SAVE: string ="Save";
    public static readonly OP_TEXT_CANCEL: string ="Cancel";
    public static readonly OP_TEXT_COPY: string ="Copy";
    public static readonly OP_TEXT_IMPORT: string ="Import";
    public static readonly OP_TEXT_EXPORT: string ="Export";
    public static readonly OP_TEXT_DELETE: string ="Delete";
    public static readonly OP_TEXT_YES: string ="Yes";
    public static readonly OP_TEXT_NO: string ="No";
    public static readonly OP_TEXT_OK: string ="Ok";
    public static readonly OP_TEXT_EXIT: string ="Exit";
    public static readonly OP_TEXT_NAV_BACK: string ="Back";
    public static readonly OP_TEXT_NAV_HOME: string ="Home";
    public static readonly OP_TEXT_NAV_NEXT: string ="Next";
    public static readonly OP_TEXT_NAV_PREV: string ="Previous";
    public static readonly OP_TEXT_MOVE_FIRST: string ="Move First";
    public static readonly OP_TEXT_MOVE_LAST: string ="Move Last";
    public static readonly OP_TEXT_MOVE_UP: string ="Move Up";
    public static readonly OP_TEXT_MOVE_DOWN: string ="Move Down";
    public static readonly OP_TEXT_CLEAR: string ="Clear";

};//end class


    /*
    public static getFilename(id:string,format:string): string {
        let fname: string = id + ".";
        if(format === CodeGenConfig.FORMAT_TYPESCRIPT) {
            fname += "ts";
        }
        else if(format === CodeGenConfig.FORMAT_JSON) {
            fname += "json";
        }
        else if(format === CodeGenConfig.FORMAT_SQL) {
            fname += "sql";
        }
        else if(format === CodeGenConfig.FORMAT_JAVASCRIPT) {
            fname += "js";
        }
        return fname;
    };    
    */