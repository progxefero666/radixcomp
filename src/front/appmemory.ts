// File: src/app/appstorage.service.ts

import { StorageService } from "@/common/storage";
import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/model/codelang";
import { getAllByTable } from "@/db/services/generic/serviceread";
import { parseResponseCollection } from "@/front/parser/javascriptparser";


/**
 * class AppMemmory.saveCodelangs
 * - manage application memory
 * 
 */

export class AppSessionStorage {

    static NOT_FOUND:string  = "not_found";

    static DB_ESQUEMA:string  = "dbsquema";
    static CODE_LANGS:string  = "codelangs";
    static WORKFLOW_ID:string  = "workflowid";
    

    public static isUserLogin(): boolean {
       return StorageService.exist(AppSessionStorage.DB_ESQUEMA);
    }
    public static saveDbSquema(sql_script: string): void {
        StorageService.save(AppSessionStorage.DB_ESQUEMA,sql_script);
    }
    public static readDbSquema(): string {
        if(!StorageService.exist(AppSessionStorage.DB_ESQUEMA)){
            return AppSessionStorage.NOT_FOUND; 
        }
        return StorageService.read(AppSessionStorage.DB_ESQUEMA)!;
    }

    public static saveCodelangs(codelangs:string): void {
        StorageService.save(AppSessionStorage.CODE_LANGS,codelangs);
    }

    public static readCodelangs(): string|null {
        if(!StorageService.exist(AppSessionStorage.CODE_LANGS)){
            return null; 
        }
        return StorageService.read(AppSessionStorage.CODE_LANGS)!;
    }

    public static saveWorkflowId(id: number): void {
        const obj = {value: id};
        StorageService.save(AppSessionStorage.WORKFLOW_ID,JSON.stringify(obj));
    }
    public static readWorkflowId(): number|null {
        if(!StorageService.exist(AppSessionStorage.WORKFLOW_ID)){
            return null; 
        }
        const objString = StorageService.read(AppSessionStorage.WORKFLOW_ID);
        if (objString) {
            const obj = JSON.parse(objString);
            return obj.value;
        }
        return null;
    }    
} //end class

/**
 * class AppMemmory.saveCodelangs()
 */
export class AppMemmory {

    public static async saveCodelangs(): Promise<void>  {
        const response = await getAllByTable(DbTables.codelang);
        if (response === null) {return;}
        const collection: Codelang[] | null = parseResponseCollection<Codelang>(response);
        AppSessionStorage.saveCodelangs(JSON.stringify(collection, null, 4)); 
    }

}//end class 
