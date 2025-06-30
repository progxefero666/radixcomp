//src\app\gencode\config.ts

import { Option } from "@/common/model/option";

export class ModuleConfig {
        public static readonly LAYOUT_STYLE = {
        backgroundColor: 'var(--gray-a2)',
        borderRadius: 'var(--radius-3)',
        border: '2px solid var(--blue-7)',
        padding: '0px 8px',
        boxShadow: '0px 0px 5px rgba(222, 251, 137, 0.9)' 
    };
    public static readonly INDEX: Option 
        = new Option("./","Home",null,null,null);

    public static readonly SECTION_SQUEMA: Option 
        = new Option("front","Front",null,null,null);

    public static readonly SECTION_FORMS: Option 
        = new Option("server","Server",null,null,null);

    public static readonly SECTIONS: Option[] = [
        ModuleConfig.SECTION_SQUEMA,
        ModuleConfig.SECTION_FORMS
    ]
    
    public static readonly ACTIVE_SECTION: Option = ModuleConfig.SECTION_SQUEMA;

}//export class AppConfig

/**
 * class EditorConfig
 */
export class EditorConfig {
    

    public static readonly DBSQUEMA_FILE: string = "dbsquema.sql";

    public static readonly TABLES: Option 
        = new Option("table","Tables",null,null,null);

    public static readonly SERVICES: Option 
        = new Option("services","Services",null,null,null);

    public static readonly ALL_SQUEMA: Option 
        = new Option("fullsquema","Full Squema",null,null,null);

    public static readonly SECTIONS: Option[] = [
        EditorConfig.TABLES,
        EditorConfig.SERVICES
    ]
    
    public static readonly ACTIVE_SECTION: Option = EditorConfig.TABLES;

    public static readonly LAYOUT_STYLE = {
        padding: '4px 8px 0px 8px'
    };

}//export class AppConfig
