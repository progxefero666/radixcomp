//src\app_front\workflows\appworkflows.ts

import { Option } from "@/common/models";
import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/model/codelang";
import { Tasktype } from "@/db/model/tasktype";
import { Workflow } from "@/db/model/workflow";
import { Taskgroup } from "@/db/model/taskgroup";
import { Task } from "@/db/model/task";
import { DB_CONSTANTS, NEW_ROW_ID } from "@/db/dboperations";


//	constructor(id:number,workflow_id:number,tpname:string,description:string,tasks?:Task[]) 	
export const TASKGOUP_DEFAULT : Taskgroup = new Taskgroup(
	0,0,"tpname","description");

/*
export class AppWorkflows {}//end class
    -------------------------------------------------------
	## Workflow Operations
    - Create Workflow
    -------------------------------------------------------
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
     -------------------------------------------------------
*/