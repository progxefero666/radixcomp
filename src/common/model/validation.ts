//src\common\model\validation.ts

import { DB_CONSTANTS } from "@/common/database/dbkernel";
import { Constants } from "../constants";
import { XForms } from "@/codegen/forms/cgforms";



/**
 * Validation.DEFAULT
 */
export class Validation {

    public field: string;
    public result: string;
    public message: string | null = null;

    constructor(field: string,result:string,message?:string) {
        this.field = field;
        this.result = result;
        this.message = message ?? null;
    }

    public toJson(): string {
        return JSON.stringify(this,null,4);
    }


}//end class