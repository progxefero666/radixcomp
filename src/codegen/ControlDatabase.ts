//src\codegen\controldatabase.ts


import { Option } from "@/common/option";

/**
 * class ControlDatabase
 */
export class ControlDatabase {

    public static readonly ALL_SQUEMA: Option
        = new Option("complete_db_squema", "Full Squema", null, null, null);

    public static readonly Operations: Option[] = [
        ControlDatabase.ALL_SQUEMA
    ]
    
    public static readonly ACTIVE_OPERATION: Option = ControlDatabase.ALL_SQUEMA;

}//export class AppConfig

