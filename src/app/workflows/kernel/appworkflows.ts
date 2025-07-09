//src\app_front\workflows\appworkflows.ts


import { Option } from "@/common/models";
import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/model/codelang";

import { JSonConsole } from "@/common/jsonhelper";
import { getAllByTable } from "@/db/services/generic/serviceread";
import { Tasktype } from "@/db/model/tasktype";
import { Workflow } from "@/db/model/workflow";

import { parseCollection } from "@/front/parser/javascriptparser";
import { Apptype } from "@/db/model/apptype";

/*
	
	- Create Context
	- Add Main Task
	- Add Final Task	
	- Update Context	
	- Update Main Task
	- Update Final Task
	- Delete Main Task
	- Delete Final Task
	- Move Main Task
	- Move Final Task		
	- Duplicate Main Task
	- Duplicate Final Task		
	- Clear Main Tasks
	- Clear Final Tasks	
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

/*
export class AppIndexCode {
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
 */