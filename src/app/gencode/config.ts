//src\app\gencode\config.ts

import { Option } from "@/common/model/option";

import { OP_CATEGORIES } from "@/codegen/cgconfig";
import { ServClientEntities } from "./gcmodentities";



/**
 * class ModuleConfig.ACTIVE_SECTION
 */
export class GenCodeModuleConfig {

    public static readonly ACT_OPEN:string = "open";
    public static readonly ACT_SAVE:string = "copy";        
    public static readonly ACT_EXPORT:string = "export";
    public static readonly ACT_COPY:string = "copy";   

    public static readonly NOT_DEF:string = "NOT_DEFINED";

    public static readonly INDEX: Option
        = new Option("./", "Home", null, null, null);

    public static readonly DBSQUEMA_FILE: string = "dbsquema.sql";

    public static readonly CLIENT_ENTITY_FILES: Option
        = new Option(ServClientEntities.ID,
            ServClientEntities.OPTION_VALUE, null, null, null);

};//export class AppConfig

