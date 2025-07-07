//src\common\json\models\jsonresponse.ts

import { JsonOpConstants } from "@/common/json/jsonconstant";
import { DbOps } from "@/db/dboperations";

/**
 * Model: JsonResponse
 *    for back services responses.
 */
export class JsonResponse {

    public result: string;
    public message: string | null = null;
    public data: any | null = null;

    constructor(status:string,message:string|null,data:any|null) {
        this.result = status;
        if(message !== null) {this.message = message;}
        if(data !== null) {this.data = data;}
    }

    public toJson(): string {
        return JSON.stringify(this,null,JsonOpConstants.TAB);
    }

    public isSuccess(): boolean {
        return this.result === DbOps.SUCCESS;
    }

    public isError(): boolean {
        return this.result === DbOps.ERROR;
    }

    public static SUCCESS(message:string|null,data:any|null): string {
        const jsonResponse:JsonResponse = new JsonResponse(DbOps.SUCCESS, message, data);
        return jsonResponse.toJson();
    }

    public static ERROR(message:string|null): string {
        const jsonResponse:JsonResponse = new JsonResponse(DbOps.ERROR, message, null);
        return jsonResponse.toJson();
    }


}//end class