//src\app_front\appconfig.ts

import { Option } from "@/common/model/option";


/**
 * AppConfig.getModulesMenu
 */
export class AppConfig {
    
    public static readonly INDEX: Option 
        = new Option("./","Home",null,null,null);

    public static readonly MOD_APPLICATIONS_TOOLS: Option 
        = new Option("./applications","Applications",null,null,null);

    public static readonly MOD_SERVICES: Option 
        = new Option("./services","Services",null,null,null);

    public static readonly MOD_SERVERS: Option 
        = new Option("./servers","Servers",null,null,null);

      public static readonly MOD_AGENTS: Option 
        = new Option("./agents","Agents",null,null,null);

    public static readonly MODULES: Option[] = [
        AppConfig.MOD_APPLICATIONS_TOOLS,
        AppConfig.MOD_SERVICES,
        AppConfig.MOD_SERVERS,
        AppConfig.MOD_AGENTS,
    ]

    
}//export class AppConfig