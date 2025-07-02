//src\codegen\operations\tsentservicefilesops.ts

import { Option } from "@/common/model/option";

/**
 * class TsEntityFiles
 */
export class TsEntServiceFilesOperations {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        TsEntServiceFilesOperations.OP_A,
        TsEntServiceFilesOperations.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = TsEntServiceFilesOperations.OP_A;

}//end class
