//src\app_front\appconfig.ts

import { Option } from "@/common/model/option";


/**
 * AppConfig.getModulesMenu
 */
export class AppConfig {
    
    public static readonly INDEX: Option 
        = new Option("./","Home",null,null,null);

    public static readonly MOD_DBMODEL_TOOLS: Option 
        = new Option("./dbmodeltools","Db Model Tools",null,null,null);

    public static readonly MOD_APPLICATIONS_TOOLS: Option 
        = new Option("./applications","App. Generator",null,null,null);

    public static readonly MOD_MOTORS_TOOLS: Option 
        = new Option("./motors","create_motors",null,null,null);

    public static readonly MOD_COMP_TOOLS: Option 
        = new Option("./components","Comp. Creator",null,null,null);
  
    public static readonly MODULES: Option[] = [
        AppConfig.INDEX,
        AppConfig.MOD_DBMODEL_TOOLS,
        AppConfig.MOD_APPLICATIONS_TOOLS,
        AppConfig.MOD_MOTORS_TOOLS,
        AppConfig.MOD_COMP_TOOLS
    ]

    public static readonly ACT_MODULE: Option = AppConfig.MODULES[1];


    
}//export class AppConfig