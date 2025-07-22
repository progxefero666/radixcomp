//src\front\app.ts

import { JsonResponse } from "@/common/model/jsonreponse";
import { parseResponseCollection } from "@/common/parsers/javascriptparser";
import { initDatabase } from "@/db/services/databaseinit";
import { Proglanguage } from "@generated/prisma";
import { AppMemmory } from "./appmemory";


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
        const response = await fetch("/api/proglanguages");
        if (!response.ok) {
            console.error("Failed to fetch programming languages");
            return;
        }
        const data = await response.json();
        const proglanguages: Proglanguage[]|null = await parseResponseCollection<Proglanguage>(data);
        AppMemmory.saveProglanguages(JSON.stringify(proglanguages));    
    };//end

}//end class