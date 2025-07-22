//src\front\app.ts

import { initDatabase } from "@/db/services/databaseinit";



/**
 * Main AppGenerator.initDatabase();
 */
export class AppGenerator {

    public static async initDatabase(): Promise<boolean> {
        const result = await initDatabase();
        if(result == false){alert}
        return result;
    };//end

}//end class