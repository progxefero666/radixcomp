//src\app\workflows\config.ts

import { InputField } from "@/common/model/inputfield";
import { Option } from "@/common/model/option";
import { DB_CONSTANTS, DbOps } from "@/common/database/dbkernel";
import { Taskcategory } from "@/db/model/taskcategory";
import { Workflow } from "@/db/model/workflow";




export const MOD_SECTIONS = {
    MANAGER_WORKFLOWS: new Option("manager_workflows", "Workflows", null),
    MANAGER_TASKTYPES: new Option("manager_tasktypes", "Task Types", null)
} as const;

export enum VIEWER_MODE {
    DEFAULT = "default",
    JSON = "json",
    SQL = "sql",
    PROMPT = "prompt",
    GRAPH = "go_graph"
}

export const MAN_WFS_SECTIONS_ARRAY: Option[] = [
    MOD_SECTIONS.MANAGER_WORKFLOWS,
    MOD_SECTIONS.MANAGER_TASKTYPES
];

export const MAN_WFS_SECTIONS = {
    MANAGER_WORKFLOWS: new Option("manager_workflows", "Workflows", null),
    MANAGER_TASKTYPES: new Option("manager_tasktypes", "Task Types", null)
} as const;


export const WK_EDITOR_VIEWS = {
    EDITOR_VIEW_DEFAULT: new Option("default", "Workflow", null),
    EDITOR_VIEW_TASKGROUPS: new Option("manager_taskgroups", "Task Groups", null)
} as const;

export enum WF_EDITOR_TASK_ACTION {
    UPDATE_MAIN = "update_main",
    ADD_TASK = "add_task",
    DELETE_TASK = "delete_task",
    COPY_TASK = "copy_task",
    MOVEUP_TASK = "moveup_task",
    MOVEDOWN_TASK = "movedown_task", 
    UPDATE_TASK = "update_task",   
    CLEAR_TASKS = "clear_tasks"
}

export const TASKCATEGORY_DEFAULT: Taskcategory = new Taskcategory(
    0, 0, "default", "taskgroup default");

export const NEW_WK: Workflow = new Workflow(
    Number(DbOps.NEW_ROW_ID),
    DB_CONSTANTS.NOT_DEF, 
    null,"", null, null);


/**
 * class AppWorkflows.NEW_TASKCAT_FIELDS
 */
export class AppWorkflows {

    public static readonly NEW_TASKCAT_FIELDS:InputField[] = [
        new InputField("text","item_0", "placeholder", "nacho", "Name"),
        new InputField("text","item_1", "placeholder", "desadasdas", "Descripcion")
    ];
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
