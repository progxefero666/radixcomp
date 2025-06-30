//src\app_front\codegen\cgcontroller.ts

import { Option } from "@/common/model/option";

/**
 * CodeGen Main App Controller
 */
export class ModuleCodeGenConfig {
    
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
        ModuleCodeGenConfig.OPT_CREATE_MODELS,
        ModuleCodeGenConfig.OPT_CREATES_SERVICES,
        ModuleCodeGenConfig.OPT_MODEL_CARDS,
        ModuleCodeGenConfig.OPT_MODEL_FOLDER,
    ];
    public static readonly MENU_ACT_OPTION: Option = ModuleCodeGenConfig.MENU[0];

    //module messages
    public static readonly MSG_EXPORT_SUCCESS: string = "!! export file success. !!";

}//end class


