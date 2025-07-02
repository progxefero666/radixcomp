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

    public static readonly DBSQUEMA_FILE: string = "dbsquema.sql";

    public static readonly SC_TS_ENTITY_FILES: Option 
        = new Option("typescript_entityfiles","TS Entity Files",null,null,null);

    public static readonly SC_JSON_ENTITY_FILES: Option 
        = new Option("json_files","JSon Entity Files",null,null,null);

    public static readonly SC_TSX_ENTITY_FORMS: Option 
        = new Option("typescript_entityform","TS Entity Forms",null,null,null);

    public static readonly SC_TS_SERVICES_FILES: Option 
        = new Option("typescript_servicefiles","TS Entity Files",null,null,null);

    public static readonly SC_PY_SERVICES_FILES: Option 
        = new Option("python_serverfiles","Python Server Files",null,null,null);

    public static readonly SECTIONS: Option[] = [
        ModuleConfig.SC_TS_ENTITY_FILES,
        ModuleConfig.SC_JSON_ENTITY_FILES,
        ModuleConfig.SC_TSX_ENTITY_FORMS,
        ModuleConfig.SC_TS_SERVICES_FILES,
        ModuleConfig.SC_PY_SERVICES_FILES
    ]
    
    public static readonly ACTIVE_SECTION: Option = ModuleConfig.SC_TS_ENTITY_FILES;

}//export class AppConfig

/**
 * class EditorConfig
 */
export class S_ENTITY_FILES {
    

    

    /*
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
    */
    public static readonly LAYOUT_STYLE = {
        padding: '6px 8px 0px 8px'
    };

}//export class AppConfig
