// File: src/app/appstorage.service.ts

import { StorageService } from "@/common/storage";
import { DbTables } from "@/db/dbcatalog";


import { parseResponseCollection } from "@/common/parsers/javascriptparser";
import { Proglanguage } from "@/db/model/proglanguage";



/**
 * class AppMemmory.saveProglanguages
 */

export class AppMemmory {

    static NOT_FOUND:string  = "not_found";
    static DB_ESQUEMA:string  = "dbsquema";
    static PROGLANGUAGES:string  = "proglanguages";

    
    public static saveDbSquema(sql_script: string): void {
        StorageService.save(AppMemmory.DB_ESQUEMA,sql_script);
    }

    public static readDbSquema(): string {
        if(!StorageService.exist(AppMemmory.DB_ESQUEMA)){
            return AppMemmory.NOT_FOUND; 
        }
        return StorageService.read(AppMemmory.DB_ESQUEMA)!;
    }

    public static saveProglanguages(proglanguages:string): void {
        StorageService.save(AppMemmory.PROGLANGUAGES,proglanguages);
    }


    public static readProglanguages(): Proglanguage[]  {
        if(!StorageService.exist(AppMemmory.PROGLANGUAGES)){
            return []; 
        }
        const json = StorageService.read(AppMemmory.PROGLANGUAGES);
        return parseResponseCollection<Proglanguage>(json)!;
    }   

} //end class

/*

    public static readProglanguages(): string|null {
        if(!StorageService.exist(AppMemmory.PROGLANGUAGES)){
            return null; 
        }
        return StorageService.read(AppMemmory.PROGLANGUAGES)!;
    }

*/