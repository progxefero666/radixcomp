//src\common\model\validation.ts

import { DB_CONSTANTS } from "@/common/database/dbkernel";



/**
 * Validation.DEFAULT
 */
export class Validation {
    
    public static readonly DEFAULT: Validation = new Validation(true, null);
    public result: boolean;
    public message: string | null = null;

    constructor(result:boolean,message:string|null) {
        this.result = result;
        if(message !== null) {this.message = message;}
    }

    public toJson(): string {
        return JSON.stringify(this,null,4);
    }


}//end class