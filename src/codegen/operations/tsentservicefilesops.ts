//src\codegen\operations\tsentservicefilesops.ts

import { Option } from "@/common/models";

/**
 * class TsEntityFiles
 */
export class TsEntServiceFilesOps {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        TsEntServiceFilesOps.OP_A,
        TsEntServiceFilesOps.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = TsEntServiceFilesOps.OP_A;

}//end class
