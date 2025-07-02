//src\codegen\operations\tsxentformsops.ts

import { Option } from "@/common/model/option";

/**
 * class TsxEntityForms
 */
export class TsxEntFormsOperations {

    public static readonly OP_A: Option
        = new Option("option_a", "Option A", null, null, null);

    public static readonly OP_B: Option
        = new Option("option_b", "Option B", null, null, null);

    public static readonly Operations: Option[] = [
        TsxEntFormsOperations.OP_A,
        TsxEntFormsOperations.OP_B
    ]
    public static readonly ACTIVE_OPERATION: Option = TsxEntFormsOperations.OP_A;

}//end class
