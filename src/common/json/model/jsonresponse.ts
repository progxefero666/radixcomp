//src\common\json\model\jsonresponse.ts

import { JsonConstant } from "@/common/json/jsonconstant";

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
        return JSON.stringify(this,null,JsonConstant.TAB);
    }

    public isSuccess(): boolean {
        return this.result === JsonConstant.SUCCESS;
    }

    public isError(): boolean {
        return this.result === JsonConstant.ERROR;
    }
    
    public static success(message:string|null,data:any|null): JsonResponse {
        return new JsonResponse("success", message, data);
    }

    public static error(message:string|null): JsonResponse {
        return new JsonResponse("error", message, null);
    }


}//end class