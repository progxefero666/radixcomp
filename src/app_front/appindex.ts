//src\app_front\manapplications\manappscfg.ts


import { Option } from "@/common/model/option";
import { DbTables } from "@/db/dbesquema";
import { Codelang } from "@/db/model/codelang";

import { JSonConsole, JsonHelper } from "@/common/util/jsonhelper";

import { ShowAlerts } from "@/common/util/showalerts";
import { GetAll } from "@/db/services/srvreadcmcollections";

/**
 * App Main in Home Page
 *    - This class is responsible for managing the application index,
 *    - Include load init collections and display them.
 */
export class AppIndex {

    public codelangs: Codelang[] = [];

    constructor() {
        //this.loadInitCollections();     
    }

    public async loadInitCollections(): Promise<boolean> {
        const coll = await GetAll(DbTables.codelang);
        const coll_json = JsonHelper.toJsonString(coll);
        ShowAlerts.showJson(coll_json);
        return true;
    }

    public outputConsole() {
        //console.log(this.codelangs);
    }

}//end class



