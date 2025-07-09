//src\app_front\appconfig.ts

import { Option } from "@/common/models";


/**
 * AppConfig.DBSQUEMA_FPATH
 */
export class AppConfig {
    

    public static readonly DBSQUEMA_FPATH: string 
        = "C:\claudeapps\nextapps\aigenerator\public\data\dbsquema.sql";

    public static readonly INDEX: Option = new Option("./","Home",null,null,null);

    // list modules
    public static readonly MOD_WORKFLOWS: Option 
        = new Option("./workflows","WorkFlows Man.",null,null,null);

    public static readonly MOD_APPLICATIONS: Option 
        = new Option("./applications","Applications",null,null,null);

    public static readonly MOD_PLATFORM: Option 
        = new Option("./platform","Pc Platform",null,null,null);

    public static readonly MODULES: Option[] = [
        AppConfig.MOD_WORKFLOWS,        
        AppConfig.MOD_APPLICATIONS,        
        AppConfig.MOD_PLATFORM        
    ]
    
}//export class AppConfig


/*
    public static readonly MOD_SERVICES: Option 
        = new Option("./services","Services",null,null,null);

    public static readonly MOD_SERVERS: Option 
        = new Option("./servers","Servers",null,null,null);

      public static readonly MOD_AGENTS: Option 
        = new Option("./agents","Agents",null,null,null);
*/
