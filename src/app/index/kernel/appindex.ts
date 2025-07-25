//src\app_front\manapplications\manappscfg.ts


import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/model/codelang";
import { JSonConsole } from "@/common/helper/jsonhelper";
import { getAllRows } from "@/db/services/generic/serviceread";
import { Tasktype } from "@/db/model/tasktype";
import { Workflow } from "@/db/model/workflow";
import { Apptype } from "@/db/model/apptype";
import { parseCollection } from "@/common/parsers/javascriptparser";

/**
 * App Main in Home Page
 *    - This class is responsible for managing the application index,
 *    - Include load init collections and display them.
 */
export class AppIndex {

    public codelangs: Codelang[] = [];

    constructor() {}

    public async loadInitCollections(): Promise<boolean> {

        const codelang_response = await getAllRows(DbTables.codelang);
        const codelang_coll:Codelang[]|null= parseCollection<Codelang>(codelang_response);        
        if(codelang_coll === null) {return false;}

        const tasktype_response = await getAllRows(DbTables.tasktype);
        const tasktype_coll:Tasktype[]|null = parseCollection<Tasktype>(tasktype_response);        
        if(tasktype_coll === null) {return false;}
         
               
        /*
        const workflow_response = await GetAll(DbTables.workflow);
        const workflow_coll = parseCollection<Workflow>(workflow_response);        
        if(workflow_coll === null) {return false;}
        */

        return true;
    }
  
}//end class

/**
 * class AppIndexCode
 */
export class AppIndexCode {
    public codelangs: Codelang[] = [];

    constructor() {}
    public async loadInitCollections(): Promise<boolean> {

        const codelang_response = await getAllRows(DbTables.codelang);
        const codelang_coll= parseCollection<Codelang>(codelang_response);        
        if(codelang_coll === null) {return false;}

        const tasktype_response = await getAllRows(DbTables.tasktype);
        const tasktype_coll = parseCollection<Tasktype>(tasktype_response);        
        if(tasktype_coll === null) {return false;}
         
        const workflow_response = await getAllRows(DbTables.workflow);
        const workflow_coll = parseCollection<Workflow>(workflow_response);        
        if(workflow_coll === null) {return false;}

         
        const apptype_response = await getAllRows(DbTables.apptype);
        const apptype_coll = parseCollection<Apptype>(apptype_response);        
        if(apptype_coll === null) {return false;}

        const task_response = await getAllRows(DbTables.task);
        const task_coll = parseCollection<Apptype>(task_response);  
        if(task_coll === null) {return false;}

        const application_response = await getAllRows(DbTables.application);
        const application_coll = parseCollection<Apptype>(application_response); 
        if(application_coll === null) {return false;}

        return true;
    }

}//end class



