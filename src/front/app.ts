//src\front\app.ts

import { JsonResponse } from "@/common/model/jsonreponse";
import { initDatabase } from "@/db/services/databaseinit";
import { Proglanguage } from "@generated/prisma";


/**
 * Main AppGenerator.initDatabase();
 */
export class AppGenerator {

    public static async initDatabase(): Promise<boolean> {
        const result = await initDatabase();
        if(result == false){alert}
        return result;
    };//end

    public static async readProglanguages(): Promise<string | null> {
        const response = await fetch("/api/proglanguages");
        if (!response.ok) {
            console.error("Failed to fetch programming languages");
            return new JsonResponse("ERROR", "Programming languages read failed.", null).toJson();
        }
        const data = await response.json();
        return new JsonResponse("SUCCESS", "Programming languages read success.", data).toJson();
    
    };//end

}//end class