//src\codegen\operations\tsentfilesops.ts

import { Option } from "@/common/model/option";


/**
 * class TsEntityFiles
 */
export class TsEntFilesOperations {

    public static readonly OP_GET_DEF_CLASS: Option
        = new Option("get_def_class", "Get Def. Class", null, null, null);

    public static readonly OP_GET_ENT_CLASS: Option
        = new Option("get_entity_class", "Get Entity Class", null, null, null);

    public static readonly OP_GET_ARRAY_DEF_CLASS: Option
        = new Option("get_array_def_class", "Get Array Def. Class", null, null, null);

    public static readonly OP_GET_ARRAY_ENT_CLASS: Option
        = new Option("get_array_entity_class", "Get Array Entity Class", null, null, null);

    public static readonly Operations: Option[] = [
        TsEntFilesOperations.OP_GET_DEF_CLASS,
        TsEntFilesOperations.OP_GET_ENT_CLASS,
        TsEntFilesOperations.OP_GET_ARRAY_DEF_CLASS,
        TsEntFilesOperations.OP_GET_ARRAY_ENT_CLASS
    ]
    public static readonly ACTIVE_OPERATION: Option = TsEntFilesOperations.OP_GET_DEF_CLASS

}//end class