// File: src/app/appstorage.service.ts

import { StorageService } from "@/common/storage";
import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/model/codelang";
import { getAllByTable } from "@/db/services/generic/serviceread";
import { parseResponseCollection } from "@/front/parser/javascriptparser";


/**
 * class AppMemmory.
 */

export class AppMemmory {

    static NOT_FOUND:string  = "not_found";
    static DB_ESQUEMA:string  = "dbsquema";
    static CODE_LANGS:string  = "codelangs";
    static WORKFLOW_ID:string  = "workflowid";
    
    public static saveDbSquema(sql_script: string): void {
        StorageService.save(AppMemmory.DB_ESQUEMA,sql_script);
    }

    public static readDbSquema(): string {
        if(!StorageService.exist(AppMemmory.DB_ESQUEMA)){
            return AppMemmory.NOT_FOUND; 
        }
        return StorageService.read(AppMemmory.DB_ESQUEMA)!;
    }

    public static saveCodelangs(codelangs:string): void {
        StorageService.save(AppMemmory.CODE_LANGS,codelangs);
    }

    public static readCodelangs(): string|null {
        if(!StorageService.exist(AppMemmory.CODE_LANGS)){
            return null; 
        }
        return StorageService.read(AppMemmory.CODE_LANGS)!;
    }

    public static saveWorkflowId(id: number): void {
        const obj = {value: id};
        StorageService.save(AppMemmory.WORKFLOW_ID,JSON.stringify(obj));
    }
    public static readWorkflowId(): number|null {
        if(!StorageService.exist(AppMemmory.WORKFLOW_ID)){
            return null; 
        }
        const objString = StorageService.read(AppMemmory.WORKFLOW_ID);
        if (objString) {
            const obj = JSON.parse(objString);
            return obj.value;
        }
        return null;
    }    
} //end class

export  async function saveMemmoryCodelangs(): Promise<void>  {
    const response = await getAllByTable(DbTables.codelang);
    if (response === null) {return;}
    const collection: Codelang[] | null = parseResponseCollection<Codelang>(response);
    AppMemmory.saveCodelangs(JSON.stringify(collection, null, 4)); 
}