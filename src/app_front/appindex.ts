//src\app_front\manapplications\manappscfg.ts


import { Option } from "@/common/model/option";
import { DbTables } from "@/db/dbesquema";
import { Codelang } from "@/db/model/codelang";

import { JSonConsole, JsonHelper } from "@/common/util/jsonhelper";

import { ShowAlerts } from "@/common/util/showalerts";
import { GetAll } from "@/db/services/srvreadcmcollections";
import { TypeCodelang } from "@/db/model/codelang";
import { JsonResponse } from "@/db/operations/model/jsonresponse";
import { toArrayObjectsClass } from "@/db/functions/modelutil";

/**
 * App Main in Home Page
 *    - This class is responsible for managing the application index,
 *    - Include load init collections and display them.
 */
export class AppIndex {

    public codelangs: Codelang[] = [];

    constructor() {}

    public async loadInitCollections(): Promise<boolean> {
        const coll = await GetAll(DbTables.codelang);
        const jsonData = JSON.parse(coll);
        const response = new JsonResponse(jsonData.result, jsonData.message, jsonData.data);
        
        if(response.isSuccess() && response.data) {
            this.codelangs = response.data as Codelang[];
        }
        return true;
    }
  
}//end class



