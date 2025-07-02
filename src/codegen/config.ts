//src\app_front\codegen\cgcontroller.ts

import { Option } from "@/common/model/option";

/**
 * CodeGen Main App Controller
 */
export class CodeGenModuleConfig {
    
    public static readonly TYPESCRIPT_FORMATS:string = ".ts,.tsx"
    public static readonly SQL_FORMATS:string = ".sql,.txt"

    //module sections
    public static readonly OPT_CREATE_MODELS: Option = new Option
        ("create_models", "Table Models", null, null, null);

    public static readonly OPT_CREATES_SERVICES: Option = new Option
        ("create_services", "Table Services", null, null, null);
        
    public static readonly OPT_MODEL_CARDS: Option = new Option
        ("create_cards", "Entity Cards", null, null, null);

    public static readonly OPT_MODEL_FOLDER: Option = new Option
        ("create_folders", "Entity Folder", null, null, null);

    public static readonly MENU: Option[]=[
        CodeGenModuleConfig.OPT_CREATE_MODELS,
        CodeGenModuleConfig.OPT_CREATES_SERVICES,
        CodeGenModuleConfig.OPT_MODEL_CARDS,
        CodeGenModuleConfig.OPT_MODEL_FOLDER,
    ];
    public static readonly MENU_ACT_OPTION: Option = CodeGenModuleConfig.MENU[0];

    //module messages
    public static readonly MSG_EXPORT_SUCCESS: string = "!! export file success. !!";

}//end class

/**
 * CodeGen Create Models Config
 */
export class CodeGenCreateModelsConfig {

    public static readonly OP_SQL_ALLSQUEMA: Option = new Option
        ("export_sql_compschema", "Export SQL Complete Schema", null, null, null);


    public static readonly OP_TS_ENTITY_CLASS_DEF: Option = new Option
        ("export_entity_classdef", "Export Entity Def Class", null, null, null);     

    public static readonly OP_TS_ENTITY_CLASS: Option = new Option
        ("export_entity_class", "Export Entity Class", null, null, null);

    public static readonly OPERATIONS: Option[] = [
        
    ];
}//end class

/*
export enum CREATE_MODELS_OPERATIONS {
    TXT = "textplain",
    JSON = "json",
    TYPESCRIPT = "typescript",
    PYTHON = "pyhton",
    SQL = "sql",    
    JAVASCRIPT = "json",
    MD = "mardown",
    CSS = "css",
    HTML = "html"
}
*/
