//src\front\app.ts

import { JsonResponse } from "@/common/model/jsonreponse";
import { parseResponseCollection } from "@/common/parsers/javascriptparser";
import { initDatabase } from "@/db/services/databaseinit";
import { Proglanguage } from "@generated/prisma";
import { AppMemmory } from "./appmemory";
import { getAllProglanguage } from "@/db/services/read/srvproglanguage";


/**
 * Main AppGenerator.initDatabase();
 */
export class AppGenerator {

    public static async initDatabase(): Promise<boolean> {
        const result = await initDatabase();
        if(result == false){alert}
        return result;
    };//end

    public static async saveInMemoryProglanguages(): Promise<void> {
        const response = await getAllProglanguage();
        if (response==null) {
            console.error("Failed to fetch programming languages");
            return;
        }
        //const proglanguages: Proglanguage[]|null = parseResponseCollection<Proglanguage>(response);
        //console.log( proglanguages);
        AppMemmory.saveProglanguages(response);    
    };//end

}//end class