//src\app_front\workflows\appworkflows.ts

import { Option } from "@/common/models";
import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/model/codelang";
import { Tasktype } from "@/db/model/tasktype";
import { Workflow } from "@/db/model/workflow";
import { Taskgroup } from "@/db/model/taskgroup";
import { Task } from "@/db/model/task";
import { DB_CONSTANTS } from "@/db/dboperations";



/**
 * class AppWorkflows.getNewWorkflow
 */
export class AppWorkflows {

    public static getNewWorkflow(): Workflow {
        return new Workflow(
            Number(DB_CONSTANTS.NEW_ROW_ID),
            DB_CONSTANTS.NOT_DEF, 
            DB_CONSTANTS.NOT_DEF,
            DB_CONSTANTS.NOT_DEF, 
            null, null);
    }

}//end class

/*
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