//src\codegen\filesystem\fsconstants.ts

import { TKeyvalue } from "@/common/types";

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