//src\app\workflows\config.ts

import { InputField } from "@/common/model/inputfield";
import { Option } from "@/common/model/option";
import { DB_CONSTANTS, DbOps } from "@/common/database/dbkernel";
import { Taskcategory } from "@/db/model/taskcategory";
import { Workflow } from "@/db/model/workflow";
import { TKeyvalue } from "@/common/types";
import { TInputText } from "@/radix/radixtypes";
import { Task } from "@/db/model/task";

export const WK_EDITOR_VIEWS = {
    EDITOR_VIEW_DEFAULT: new Option("default", "Workflow", null),
    EDITOR_VIEW_TASKGROUPS: new Option("manager_taskgroups", "Task Groups", null)
} as const;


/**
 * class AppWorkflowsConfig
 */
export class AppWorkflowsConfig {

    public static readonly VIEW_DEFAULT: string = "default";
    public static readonly VIEW_JSON: string = "json";
    public static readonly VIEW_SQL: string = "sql";
    public static readonly VIEW_PROMPT: string = "prompt";
    public static readonly VIEW_GRAPH: string = "go_graph";


    public static readonly MOD_SECTIONS = {
        MANAGER_WORKFLOWS: new Option("manager_workflows", "Workflows", null),
        MANAGER_TASKTYPES: new Option("manager_tasktypes", "Task Types", null)
    } as const;


    public static readonly MAN_WFS_SECTIONS_ARRAY: Option[] = [
        AppWorkflowsConfig.MOD_SECTIONS.MANAGER_WORKFLOWS,
        AppWorkflowsConfig.MOD_SECTIONS.MANAGER_TASKTYPES
    ];

    public static readonly MAN_WFS_SECTIONS = {
        MANAGER_WORKFLOWS: new Option("manager_workflows", "Workflows", null),
        MANAGER_TASKTYPES: new Option("manager_tasktypes", "Task Types", null)
    } as const;

    public static readonly WK_EDITOR_VIEWS = {
        EDITOR_VIEW_DEFAULT: new Option("default", "Workflow", null),
        EDITOR_VIEW_TASKGROUPS: new Option("manager_taskgroups", "Task Groups", null)
    } as const;

}//end class

/**
 * class AppWorkflows.TASKCATEGORY_DEF
 */
export class AppWorkflows {

    public static readonly NEW_TASKTYPE_FIELDS:InputField[] = [
        new InputField("text","name", "type name", null, "Name"),
        new InputField("text","description", "type description", null, "Descripcion")
    ]

    public static readonly NEW_WK: Workflow = new Workflow(
        Number(DbOps.NEW_ROW_ID),
        DB_CONSTANTS.NOT_DEF, 
        null,"", null, null);        

    public static readonly NEW_TASKCAT_FIELDS:InputField[] = [
        new InputField("text","item_0", "placeholder", "nacho", "Name"),
        new InputField("text","item_1", "placeholder", "desadasdas", "Descripcion")
    ];

    public static readonly TASKCATEGORY_DEF: Taskcategory 
        = new Taskcategory(0, 0, "default", "taskgroup default");

    public static DLG_WORKFLOW_NAME_INPUT: TInputText = {
        id:"workflow_name",
        placeholder:"Workflow Name",
        label:"Name",value:null,length:{min:3,max:50}
    };

    public static DLG_TASK_NAME_INPUT: TInputText = {
        id:"taskname_name",
        placeholder:"task name",
        label:"Name",value:null,length:{min:3,max:50}
    };

    public static  getNewTask = (workflowId:number,
                                 codelangId:number,tasktypeId:number,
                                 orden:number):Task => {               
        return new Task(
            DbOps.NEW_ROW_ID,
            tasktypeId,codelangId,workflowId, 
            AppWorkflows.TASKCATEGORY_DEF.id,
            orden,null,null,0,null,null);    
    };//end
        
}//end class

/**
 * class WorkflowActions
 */
export class WorkflowActions {

    public static UPDATE_MAIN: string = "update_main";
    public static ADD_TASK: string = "add_task";
    public static DELETE_TASK: string = "delete_task";
    public static COPY_TASK: string = "copy_task";
    public static MOVEUP_TASK: string = "moveup_task";
    public static MOVEDOWN_TASK: string = "movedown_task";
    public static UPDATE_TASK: string = "update_task";
    public static CLEAR_TASKS: string = "clear_tasks";    
}//end class

/*
ModelField


    -------------------------------------------------------
	## Workflow Operations
    - Create Workflow
    -------------------------------------------------------
	- Create Context
	- Add Main Task
	- Update Context	
	- Update Main Task
	- Delete Main Task
	- Move Main Task
	- Duplicate Main Task
	- Clear Main Tasks
     -------------------------------------------------------
*/
