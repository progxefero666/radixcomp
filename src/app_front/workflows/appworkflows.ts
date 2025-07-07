//src\app_front\workflows\appworkflows.ts


import { Option } from "@/common/model/option";
import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/dmmodels/codelang";

import { JSonConsole } from "@/common/util/jsonhelper";
import { GetAll } from "@/db/services/read/srvreadcmcollections";

import { JsonResponse } from "@/common/json/models/jsonresponse";
import { parseCollection } from "@/common/parsers/javascriptparser";
import { Tasktype } from "@/db/dmmodels/tasktype";
import { Workflow } from "@/db/dmmodels/workflow";
import { Apptype } from "@/db/dmmodels/apptype";

/**
 * App Main in Home Page
 *    - This class is responsible for managing the application index,
 *    - Include load init collections and display them.
 */
export class AppWorkflows {

    public codelangs: Codelang[] = [];

    constructor() {}

    public async loadInitCollections(): Promise<boolean> {

        const codelang_response = await GetAll(DbTables.codelang);
        const codelang_coll:Codelang[]|null= parseCollection<Codelang>(codelang_response);        
        if(codelang_coll === null) {return false;}

        const tasktype_response = await GetAll(DbTables.tasktype);
        const tasktype_coll:Tasktype[]|null = parseCollection<Tasktype>(tasktype_response);        
        if(tasktype_coll === null) {return false;}
         
         
        const apptype_response = await GetAll(DbTables.apptype);
        const apptype_coll = parseCollection<Apptype>(apptype_response);        
        if(apptype_coll === null) {return false;}       
        JSonConsole.logArray(apptype_coll);
        /*
        const workflow_response = await GetAll(DbTables.workflow);
        const workflow_coll = parseCollection<Workflow>(workflow_response);        
        if(workflow_coll === null) {return false;}
        */
        //JSonConsole.logArray(tasktype_coll);
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

        const codelang_response = await GetAll(DbTables.codelang);
        const codelang_coll= parseCollection<Codelang>(codelang_response);        
        if(codelang_coll === null) {return false;}

        const tasktype_response = await GetAll(DbTables.tasktype);
        const tasktype_coll = parseCollection<Tasktype>(tasktype_response);        
        if(tasktype_coll === null) {return false;}
         
        const workflow_response = await GetAll(DbTables.workflow);
        const workflow_coll = parseCollection<Workflow>(workflow_response);        
        if(workflow_coll === null) {return false;}

         
        const apptype_response = await GetAll(DbTables.apptype);
        const apptype_coll = parseCollection<Apptype>(apptype_response);        
        if(apptype_coll === null) {return false;}

        const task_response = await GetAll(DbTables.task);
        const task_coll = parseCollection<Apptype>(task_response);  
        if(task_coll === null) {return false;}

        const application_response = await GetAll(DbTables.application);
        const application_coll = parseCollection<Apptype>(application_response); 
        if(application_coll === null) {return false;}

        return true;
    }

}//end class
