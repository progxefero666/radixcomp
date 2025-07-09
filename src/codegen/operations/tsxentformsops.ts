//src\codegen\operations\tsxentformsops.ts

import { Option } from "@/common/models";

/**
 * class TsxEntityForms
 */
export class TsxEntFormsOps {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        TsxEntFormsOps.OP_A,
        TsxEntFormsOps.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = TsxEntFormsOps.OP_A;

}//end class
