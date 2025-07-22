//src\app_front\appconfig.ts

import { Option } from "@/common/model/option";


/**
 * AppConfig.DBSQUEMA_FPATH
 */
export class AppConfig {
    

    public static readonly DBSQUEMA_FPATH: string 
        = "C:\claudeapps\nextapps\aigenerator\public\data\dbsquema.sql";

    public static readonly INDEX: Option = new Option("./","Home");

    // list modules
    public static readonly MOD_GENCODE: Option = new Option("./gencode","Code Generator");
    public static readonly MOD_APPLICATIONS: Option = new Option("./applications","Applications");
    public static readonly MOD_PLATFORM: Option = new Option("./platform","Pc Platform");

    public static readonly MODULES: Option[] = [
        AppConfig.MOD_GENCODE,        
        AppConfig.MOD_APPLICATIONS,        
        AppConfig.MOD_PLATFORM        
    ]
    
}//export class AppConfig

