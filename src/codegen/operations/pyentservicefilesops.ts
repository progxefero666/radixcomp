//src\codegen\operations\pyentdervicefilesops.ts

import { Option } from "@/common/option";

/**
 * class TsEntityFiles
 */
export class PyEntServiceFilesOps {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        PyEntServiceFilesOps.OP_A,
        PyEntServiceFilesOps.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = PyEntServiceFilesOps.OP_A;

}//end class
