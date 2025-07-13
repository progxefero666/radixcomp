//src\common\json\models\jsonresponse.ts

import { DB_CONSTANTS } from "@/common/database/dbkernel";



/**
 * Model: JsonResponse
 *    for back services responses.
 */
export class JsonResponse {
    
    public static readonly TAB: number = 4;

    public result: string;
    public message: string | null = null;
    public data: any | null = null;

    constructor(status:string,message:string|null,data:any|null) {
        this.result = status;
        if(message !== null) {this.message = message;}
        if(data !== null) {this.data = data;}
    }

    public toJson(): string {
        return JSON.stringify(this,null,JsonResponse.TAB);
    }

    public isSuccess(): boolean {
        return this.result === DB_CONSTANTS.SUCCESS;
    }

    public isError(): boolean {
        return this.result === DB_CONSTANTS.ERROR;
    }

    public static SUCCESS(message:string|null,data:any|null): string {
        const jsonResponse:JsonResponse = new JsonResponse(DB_CONSTANTS.SUCCESS, message, data);
        return jsonResponse.toJson();
    }

    public static ERROR(message:string|null): string {
        const jsonResponse:JsonResponse = new JsonResponse(DB_CONSTANTS.ERROR, message, null);
        return jsonResponse.toJson();
    }


}//end class