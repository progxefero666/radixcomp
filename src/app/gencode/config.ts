//src\app\gencode\config.ts

import { Option } from "@/common/model/option";

export class ModuleConfig {
    
    public static readonly INDEX: Option 
        = new Option("./","Home",null,null,null);

    public static readonly SECTION_SQUEMA: Option 
        = new Option("dbschema","Db Squema",null,null,null);

    public static readonly SECTION_FORMS: Option 
        = new Option("forms","Forms",null,null,null);

    public static readonly SECTIONS: Option[] = [
        ModuleConfig.SECTION_SQUEMA,
        ModuleConfig.SECTION_FORMS
    ]
    
    public static readonly ACTIVE_SECTION: Option = ModuleConfig.SECTION_SQUEMA;

}//export class AppConfig

export class EditorConfig {
    
    public static readonly TABLES: Option 
        = new Option("table","Tables",null,null,null);

    public static readonly SERVICES: Option 
        = new Option("services","Services",null,null,null);

    public static readonly SECTIONS: Option[] = [
        EditorConfig.TABLES,
        EditorConfig.SERVICES
    ]
    
    public static readonly ACTIVE_SECTION: Option = EditorConfig.TABLES;

}//export class AppConfig
