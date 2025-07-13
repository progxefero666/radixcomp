//src\app\gencode\config.ts

import { Option } from "@/common/model/option";

import { OP_CATEGORIES } from "@/codegen/cgconfig";
import { ServClientTScriptEntities } from "./module/client_tscriptentities";
import { ServiceClientJsxForms } from "./module/client_jsxforms";
import { ServClientTScriptServices } from "./module/client_tscriptservices";

import { ServiceClientSqlScripts } from "./module/client_sqlscripts";



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
        = new Option(ServClientTScriptEntities.ID,
            ServClientTScriptEntities.OPTION_VALUE, null, null, null);

    public static readonly CLIENT_TS_SERVICES: Option
        = new Option(ServClientTScriptServices.ID,
            ServClientTScriptServices.OPTION_VALUE, null, null, null);

    public static readonly CLIENT_JSX_FORMS: Option
        = new Option(ServiceClientJsxForms.ID,
            ServiceClientJsxForms.OPTION_VALUE, null, null, null);

    public static readonly CLIENT_SQL_SCRIPTS: Option
        = new Option(ServiceClientSqlScripts.ID,
            ServiceClientSqlScripts.OPTION_VALUE, null, null, null);

  /*

    public static readonly CLIENT_SERVICES: Option[] = [
        GenCodeModuleConfig.CLIENT_TS_ENTITY_FILES,
        GenCodeModuleConfig.CLIENT_JSX_FORMS,
        GenCodeModuleConfig.CLIENT_TS_SERVICES,
        GenCodeModuleConfig.CLIENT_SQL_SCRIPTS
    ]

  
    public static getServCliOperations(sectionName: string): Option[] {

        if (sectionName === ServClientTScriptEntities.ID) {
            return TsEntFilesOps.Operations;
        }
        else if (sectionName === ServiceClientJsxForms.ID) {
            return TsxEntFormsOps.Operations;
        }
        else if (sectionName === ServClientTScriptServices.ID) {
            return TsEntServiceFilesOps.Operations;
        }
        else if (sectionName === ServiceClientSqlScripts.ID) {
            return JsonEntFilesOps.Operations;
        }

        return [];
    }
    */
}//export class AppConfig

