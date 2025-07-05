//src\app\gencode\config.ts

import { Option } from "@/common/model/option";

import { OP_CATEGORIES} from "@/codegen/cgconfig";
import { ServClientTScriptEntities } from "./module/client_tscriptentities";
import { ServiceClientJsxForms } from "./module/client_jsxforms";
import { ServClientTScriptServices } from "./module/client_tscriptservices";
import { ServiceClientJson } from "./module/client_json";
import { ServiceClientSqlScripts } from "./module/client_sqlscripts";


/**
 * class ModuleConfig.ACTIVE_SECTION
 */
export class ModuleConfig {


    public static readonly INDEX: Option
        = new Option("./", "Home", null, null, null);

    public static readonly DBSQUEMA_FILE: string = "dbsquema.sql";


    public static readonly SC_JSON_ENTITY_FILES: Option
        = new Option(ServiceClientJson.ID, 
                     ServiceClientJson.OPTION_VALUE, null, null, null);

    public static readonly SC_TS_ENTITY_FILES: Option
        = new Option(ServClientTScriptEntities.ID,
                     ServClientTScriptEntities.OPTION_VALUE, null, null, null);

    public static readonly SC_TS_SERVICES_FILES: Option
        = new Option(ServClientTScriptServices.ID,
                     ServClientTScriptServices.OPTION_VALUE, null, null, null);

    public static readonly SC_TSX_ENTITY_FORMS: Option
        = new Option(ServiceClientJsxForms.ID,
                     ServiceClientJsxForms.OPTION_VALUE, null, null, null);

    public static readonly SC_SQL_SCRIPTS: Option
        = new Option(ServiceClientSqlScripts.ID, 
                     ServiceClientSqlScripts.OPTION_VALUE, null, null, null);

    public static readonly SC_TEST_COMP: Option
        = new Option(OP_CATEGORIES.test_components, "Test Components", null, null, null);
                
    public static readonly SECTIONS: Option[] = [
        ModuleConfig.SC_TS_ENTITY_FILES,
        ModuleConfig.SC_JSON_ENTITY_FILES,
        ModuleConfig.SC_TSX_ENTITY_FORMS,
        ModuleConfig.SC_TS_SERVICES_FILES,
        ModuleConfig.SC_SQL_SCRIPTS,
        ModuleConfig.SC_TEST_COMP
    ]


}//export class AppConfig

