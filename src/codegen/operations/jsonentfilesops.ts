//src\codegen\operations\jsonentfilesops.ts

import { Option } from "@/common/option";


/**
 * class Json EntityFiles
 */
export class JsonEntFilesOps {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        JsonEntFilesOps.OP_A,
        JsonEntFilesOps.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = JsonEntFilesOps.OP_A;

}//end class