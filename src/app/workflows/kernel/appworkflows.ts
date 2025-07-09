//src\app_front\workflows\appworkflows.ts


import { Option } from "@/common/option";
import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/model/codelang";

import { JSonConsole } from "@/common/jsonhelper";
import { getAllByTable } from "@/db/services/generic/serviceread";

import { JsonResponse } from "@/common/jsonresponse";
import { parseCollection } from "@/common/parsers/javascriptparser";
import { Tasktype } from "@/db/model/tasktype";
import { Workflow } from "@/db/model/workflow";
import { Apptype } from "@/db/model/apptype";
import { insert } from "@/db/services/crud/srvcrudapptype";

//const dbSquema = await readDbSqlScriptFile("dbsquema");  
//if(codelang_coll === null) {return false;}

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

        const codelang_response = await getAllByTable(DbTables.codelang);
        if(codelang_response === null) {return false;}
             
        const tasktype_response = await getAllByTable(DbTables.tasktype);
        if(tasktype_response === null) {return false;}

        const workflow_response = await getAllByTable(DbTables.workflow);
        if(workflow_response === null) {return false;}

        const codelang_coll:Codelang[]|null= parseCollection<Codelang>(codelang_response);   
        const tasktype_coll:Tasktype[]|null = parseCollection<Tasktype>(tasktype_response);        
        const workflow_coll:Workflow[]|null = parseCollection<Workflow>(workflow_response);        
        
        return true;
    }
  
}//end class

/**
 * class AppIndexCode
 */
export class AppIndexCode {

    /*
        //const appType:Apptype = new Apptype("test_2","nuevo registro 2");
        //const appType_obj = JSON.stringify(appType);
        //const op_response = await insert(appType_obj);
        //const op_response = await insert("item");
        
        //JSonConsole.logArray(codelang_coll);alert("finish");    
    */
    public codelangs: Codelang[] = [];

    constructor() {}

    public async loadInitCollections(): Promise<boolean> {

        const codelang_response = await getAllByTable(DbTables.codelang);
        const codelang_coll:Codelang[]|null= parseCollection<Codelang>(codelang_response);        
        if(codelang_coll === null) {return false;}

        const tasktype_response = await getAllByTable(DbTables.tasktype);
        const tasktype_coll:Tasktype[]|null = parseCollection<Tasktype>(tasktype_response);        
        if(tasktype_coll === null) {return false;}
                  
        const apptype_response = await getAllByTable(DbTables.apptype);
        const apptype_coll = parseCollection<Apptype>(apptype_response);        
        if(apptype_coll === null) {return false;}       
 
        const workflow_response = await getAllByTable(DbTables.workflow);
        const workflow_coll = parseCollection<Workflow>(workflow_response);        
        if(workflow_coll === null) {return false;}

        const task_response = await getAllByTable(DbTables.task);
        const task_coll = parseCollection<Apptype>(task_response);  
        if(task_coll === null) {return false;}      
                
        JSonConsole.logArray(task_coll);
        return true;
    }

}//end class
