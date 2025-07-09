//src\codegen\operations\tsentfilesops.ts

import { Option } from "@/common/models";

//allEntitiesClass = CodeGenTsMotor.getArrayEntityClass(model_tables,true);

/**
 * class TsEntityFiles
 */
export class TsEntFilesOps {

    public static readonly OP_GET_DEF_CLASS: Option
        = new Option("get_def_class", "Get Def. Class", null, null, null);

    public static readonly OP_GET_ENT_CLASS: Option
        = new Option("get_entity_class", "Get Entity Class", null, null, null);

    public static readonly OP_GET_ALL_DEF_CLASS: Option
        = new Option("get_all_def_class", "Get All Def. Class", null, null, null);

    public static readonly OP_GET_ALL_ENT_CLASS: Option
        = new Option("get_all_entity_class", "Get All Entity Class", null, null, null);

    public static readonly OP_GET_LIST_DEF_CLASS: Option
        = new Option("get_list_def_class", "Get List Def. Class", null, null, null);        
        
    public static readonly OP_GET_LIST_ENT_CLASS: Option
        = new Option("get_list_entity_class", "Get List Entity Class", null, null, null);

    public static readonly Operations: Option[] = [
        TsEntFilesOps.OP_GET_DEF_CLASS,
        TsEntFilesOps.OP_GET_ENT_CLASS,
        TsEntFilesOps.OP_GET_ALL_DEF_CLASS,
        TsEntFilesOps.OP_GET_ALL_ENT_CLASS,
        TsEntFilesOps.OP_GET_LIST_DEF_CLASS,
        TsEntFilesOps.OP_GET_LIST_ENT_CLASS
    ]
    public static readonly ACTIVE_OPERATION: Option = TsEntFilesOps.OP_GET_DEF_CLASS

}//end class