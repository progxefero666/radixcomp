// File: src/app/appstorage.service.ts

import { StorageService } from "@/common/storage";
import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/model/codelang";
import { getAllByTable } from "@/db/services/generic/serviceread";
import { parseResponseCollection } from "@/common/javascriptparser";
import { Tasktype } from "@/db/model/tasktype";


/**
 * class AppMemmory.
 */

export class AppMemmory {

    static NOT_FOUND:string  = "not_found";
    static DB_ESQUEMA:string  = "dbsquema";
    static CODELANGS:string  = "codelangs";
    static TASKTYPES:string  = "tasktypes";
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
        StorageService.save(AppMemmory.CODELANGS,codelangs);
    }

    public static readCodelangs(): string|null {
        if(!StorageService.exist(AppMemmory.CODELANGS)){
            return null; 
        }
        return StorageService.read(AppMemmory.CODELANGS)!;
    }

    public static saveTasktypes(tasktypes:string): void {
        StorageService.save(AppMemmory.TASKTYPES,tasktypes);
    }

    public static readTasktypes(): string|null {
        if(!StorageService.exist(AppMemmory.TASKTYPES)){
            return null; 
        }
        return StorageService.read(AppMemmory.TASKTYPES)!;
    }
    public static saveWorkflowId(id: number): void {
        const obj = {value: id.toString};
        StorageService.save(AppMemmory.WORKFLOW_ID,JSON.stringify(obj));
    }

    public static readWorkflowId(): number {
        const objString = StorageService.read(AppMemmory.WORKFLOW_ID)!;
        const obj = JSON.parse(objString);
        return obj.value;
    }    

} //end class

export  async function saveMemmoryCodelangs(): Promise<void>  {
    const response = await getAllByTable(DbTables.codelang);
    if (response === null) {return;}
    const collection: Codelang[] | null = parseResponseCollection<Codelang>(response);
    AppMemmory.saveCodelangs(JSON.stringify(collection, null, 4)); 
}

export function readMemmoryCodelangs(): Codelang[]  {
    const codelangsJson = AppMemmory.readCodelangs();
    return parseResponseCollection<Codelang>(codelangsJson)!;
}

export  async function saveMemmoryTasktypes(): Promise<void>  {
    const response = await getAllByTable(DbTables.tasktype);
    if (response === null) {return;}
    const collection: Tasktype[] | null = parseResponseCollection<Tasktype>(response);
    console.log("saveMemmoryTasktypes", collection);
    AppMemmory.saveTasktypes(JSON.stringify(collection, null, 4)); 
}

export function readMemmoryTasktypes(): Tasktype[]  {
    const tasktypesJson = AppMemmory.readTasktypes();
    return parseResponseCollection<Tasktype>(tasktypesJson)!;
}
