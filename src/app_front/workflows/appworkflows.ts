//src\app_front\workflows\appworkflows.ts


import { Option } from "@/common/model/option";
import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/dmmodels/codelang";

import { JSonConsole } from "@/common/util/jsonhelper";
import { getAll } from "@/db/services/generic/srvreadcmcollections";

import { JsonResponse } from "@/common/json/models/jsonresponse";
import { parseCollection } from "@/common/parsers/javascriptparser";
import { Tasktype } from "@/db/dmmodels/tasktype";
import { Workflow } from "@/db/dmmodels/workflow";
import { Apptype } from "@/db/dmmodels/apptype";
import { insert } from "@/db/services/crud/srvcrudapptypes";

//const dbSquema = await readDbSqlScriptFile("dbsquema");  

/**
 * App Main in Home Page
 *    - This class is responsible for managing the application index,
 *    - Include load init collections and display them.
 * //parseItem = <T>(obj: string): T | null => {     
 */
export class AppWorkflows {

    public codelangs: Codelang[] = [];

    constructor() {}

    public async loadInitCollections(): Promise<boolean> {

        const codelang_response = await getAll(DbTables.codelang);
        const codelang_coll:Codelang[]|null= parseCollection<Codelang>(codelang_response);        
        if(codelang_coll === null) {return false;}
        JSonConsole.logArray(codelang_coll);

        //const appType:Apptype = new Apptype("test_2","nuevo registro 2");
        //const appType_obj = JSON.stringify(appType);
        //const op_response = await insert(appType_obj);
        //const op_response = await insert("item");
        
        alert("finish");
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

        const codelang_response = await getAll(DbTables.codelang);
        const codelang_coll:Codelang[]|null= parseCollection<Codelang>(codelang_response);        
        if(codelang_coll === null) {return false;}

        const tasktype_response = await getAll(DbTables.tasktype);
        const tasktype_coll:Tasktype[]|null = parseCollection<Tasktype>(tasktype_response);        
        if(tasktype_coll === null) {return false;}
                  
        const apptype_response = await getAll(DbTables.apptype);
        const apptype_coll = parseCollection<Apptype>(apptype_response);        
        if(apptype_coll === null) {return false;}       
 
        const workflow_response = await getAll(DbTables.workflow);
        const workflow_coll = parseCollection<Workflow>(workflow_response);        
        if(workflow_coll === null) {return false;}

        const task_response = await getAll(DbTables.task);
        const task_coll = parseCollection<Apptype>(task_response);  
        if(task_coll === null) {return false;}      
                
        JSonConsole.logArray(task_coll);
        return true;
    }

}//end class
