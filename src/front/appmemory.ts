// File: src/app/appstorage.service.ts

import { StorageService } from "@/common/storage";
import { DbTables } from "@/db/dbcatalog";


import { parseResponseCollection } from "@/common/parsers/javascriptparser";



/**
 * class AppMemmory.
 */

export class AppMemmory {

    static NOT_FOUND:string  = "not_found";
    static DB_ESQUEMA:string  = "dbsquema";
    static PROGLANGUAGES:string  = "proglanguage";

    
    public static saveDbSquema(sql_script: string): void {
        StorageService.save(AppMemmory.DB_ESQUEMA,sql_script);
    }

    public static readDbSquema(): string {
        if(!StorageService.exist(AppMemmory.DB_ESQUEMA)){
            return AppMemmory.NOT_FOUND; 
        }
        return StorageService.read(AppMemmory.DB_ESQUEMA)!;
    }


} //end class

/*

    public static saveCodelangs(codelangs:string): void {
        StorageService.save(AppMemmory.CODELANGS,codelangs);
    }

    public static readCodelangs(): string|null {
        if(!StorageService.exist(AppMemmory.CODELANGS)){
            return null; 
        }
        return StorageService.read(AppMemmory.CODELANGS)!;
    }
export  async function saveMemmoryCodelangs(): Promise<void>  {
    const response = await getAllRows(DbTables.codelang);
    if (response === null) {return;}
    const collection: Codelang[] | null = parseResponseCollection<Codelang>(response);
    AppMemmory.saveCodelangs(JSON.stringify(collection, null, 4)); 
}

export function readMemmoryCodelangs(): Codelang[]  {
    const codelangsJson = AppMemmory.readCodelangs();
    return parseResponseCollection<Codelang>(codelangsJson)!;
}
*/