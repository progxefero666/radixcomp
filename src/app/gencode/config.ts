//src\app\gencode\config.ts

import { Option } from "@/common/model/option";

import { OP_CATEGORIES} from "@/codegen/cgconfig";


/**
 * class ModuleConfig.ACTIVE_SECTION
 */
export class ModuleConfig {


    public static readonly INDEX: Option
        = new Option("./", "Home", null, null, null);

    public static readonly DBSQUEMA_FILE: string = "dbsquema.sql";


    public static readonly SC_JSON_ENTITY_FILES: Option
        = new Option(OP_CATEGORIES.json_entityfiles, "JSon Entity Files", null, null, null);

    public static readonly SC_TS_ENTITY_FILES: Option
        = new Option(OP_CATEGORIES.typescript_entityfiles, "TS Entity Files", null, null, null);

    public static readonly SC_TSX_ENTITY_FORMS: Option
        = new Option(OP_CATEGORIES.typescript_entityforms, "TSX Entity Forms", null, null, null);

    public static readonly SC_TS_SERVICES_FILES: Option
        = new Option(OP_CATEGORIES.typescript_servicefiles, "TS Entity Files", null, null, null);

    public static readonly SC_PY_SERVICES_FILES: Option
        = new Option(OP_CATEGORIES.python_serverfiles, "Python Server Files", null, null, null);

    public static readonly SC_DB_SQUEMA: Option
        = new Option(OP_CATEGORIES.sql_db_squema, "Database Squema", null, null, null);

    public static readonly SC_TEST_COMP: Option
        = new Option(OP_CATEGORIES.test_components, "Test Components", null, null, null);
                
    public static readonly SECTIONS: Option[] = [
        ModuleConfig.SC_TS_ENTITY_FILES,
        ModuleConfig.SC_JSON_ENTITY_FILES,
        ModuleConfig.SC_TSX_ENTITY_FORMS,
        ModuleConfig.SC_TS_SERVICES_FILES,
        ModuleConfig.SC_PY_SERVICES_FILES,
        ModuleConfig.SC_DB_SQUEMA,
        ModuleConfig.SC_TEST_COMP
    ]


}//export class AppConfig

