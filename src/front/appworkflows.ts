//src\app\workflows\config.ts

import { Option } from "@/common/models";
import { NEW_ROW_ID, DB_CONSTANTS } from "@/db/dboperations";
import { Taskgroup } from "@/db/model/taskgroup";
import { Workflow } from "@/db/model/workflow";


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


//	constructor(id:number,workflow_id:number,tpname:string,description:string,tasks?:Task[]) 	
export const TASKGOUP_DEFAULT : Taskgroup = new Taskgroup(
	0,0,"tpname","description");
    
export const TASKGROUP_DEFAULT: Taskgroup = new Taskgroup(
    0, 0, "default", "taskgroup default");

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

export const NEW_WK: Workflow = new Workflow(
    Number(NEW_ROW_ID),
    DB_CONSTANTS.NOT_DEF, 
    DB_CONSTANTS.NOT_DEF,
    DB_CONSTANTS.NOT_DEF, 
    null, null);

export const WK_EDITOR_VIEWS = {
    EDITOR_VIEW_DEFAULT: new Option("default", "Workflow", null),
    EDITOR_VIEW_TASKGROUPS: new Option("manager_taskgroups", "Task Groups", null)
} as const;
