//src\app\gencode\config.ts

import { TsEntitiesFiles, JsonEntitiesFiles, TsxEntitiesForms, TsEntitiesServiceFiles, PyEntitiesServiceFiles, ControlDatabase } from "@/codegen/kernel/cgconfig";
import { Option } from "@/common/model/option";

/**
 * class ModuleConfig.GC_CONTROL_LAYOUT_STYLE
 */
export class ModuleConfig {


    public static readonly INDEX: Option
        = new Option("./", "Home", null, null, null);

    public static readonly DBSQUEMA_FILE: string = "dbsquema.sql";

    public static readonly SC_TS_ENTITY_FILES: Option
        = new Option("typescript_entityfiles", "TS Entity Files", null, null, null);

    public static readonly SC_JSON_ENTITY_FILES: Option
        = new Option("json_files", "JSon Entity Files", null, null, null);

    public static readonly SC_TSX_ENTITY_FORMS: Option
        = new Option("typescript_entityform", "TS Entity Forms", null, null, null);

    public static readonly SC_TS_SERVICES_FILES: Option
        = new Option("typescript_servicefiles", "TS Entity Files", null, null, null);

    public static readonly SC_PY_SERVICES_FILES: Option
        = new Option("python_serverfiles", "Python Server Files", null, null, null);

    public static readonly SC_DB_SQUEMA: Option
        = new Option("db_control", "Database Squema", null, null, null);

    public static readonly SECTIONS: Option[] = [
        ModuleConfig.SC_TS_ENTITY_FILES,
        ModuleConfig.SC_JSON_ENTITY_FILES,
        ModuleConfig.SC_TSX_ENTITY_FORMS,
        ModuleConfig.SC_TS_SERVICES_FILES,
        ModuleConfig.SC_PY_SERVICES_FILES,
        ModuleConfig.SC_DB_SQUEMA
    ]

    public static readonly ACTIVE_SECTION: Option = ModuleConfig.SC_TS_ENTITY_FILES;

    public static readonly GC_CONTROL_LAYOUT_STYLE = {
        padding: '6px 8px 0px 8px'
    };

    public static getSectionOperations(sectionName: string): Option[] {

        if (sectionName === ModuleConfig.SC_TS_ENTITY_FILES.id) {
            return TsEntitiesFiles.Operations;
        }
        else if (sectionName === ModuleConfig.SC_JSON_ENTITY_FILES.id) {
            return JsonEntitiesFiles.Operations;
        }
        else if (sectionName === ModuleConfig.SC_TSX_ENTITY_FORMS.id) {
            return TsxEntitiesForms.Operations;
        }
        else if (sectionName === ModuleConfig.SC_TS_SERVICES_FILES.id) {
            return TsEntitiesServiceFiles.Operations;
        }
        else if (sectionName === ModuleConfig.SC_PY_SERVICES_FILES.id) {
            return PyEntitiesServiceFiles.Operations;
        }
        else if (sectionName === ModuleConfig.SC_DB_SQUEMA.id) {
            return ControlDatabase.Operations;
        }        
        return [];
    }


}//export class AppConfig

