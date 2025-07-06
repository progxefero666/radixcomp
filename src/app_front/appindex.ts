//src\app_front\manapplications\manappscfg.ts


import { Option } from "@/common/model/option";
import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/dmmodels/codelang";

import { JSonConsole, JsonHelper } from "@/common/util/jsonhelper";

import { ShowAlerts } from "@/common/util/showalerts";
import { GetAll } from "@/db/services/srvreadcmcollections";
import { TypeCodelang } from "@/db/dmmodels/codelang";
import { JsonResponse } from "@/db/operations/model/jsonresponse";
import { parseCollection } from "@/common/parsers/javascriptparser";

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
        const response = parseCollection<Codelang>(coll);
        
        if(response) {
            this.codelangs = response;
        }
        return true;
    }
  
}//end class



