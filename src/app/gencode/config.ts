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
