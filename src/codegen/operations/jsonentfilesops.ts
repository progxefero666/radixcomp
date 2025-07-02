//src\codegen\operations\jsonentfilesops.ts

import { Option } from "@/common/model/option";


/**
 * class Json EntityFiles
 */
export class JsonEntFilesOperations {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        JsonEntFilesOperations.OP_A,
        JsonEntFilesOperations.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = JsonEntFilesOperations.OP_A;

}//end class