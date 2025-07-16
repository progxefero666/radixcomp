//src\app\workflows\config.ts

import { InputField } from "@/common/model/inputfield";
import { Option } from "@/common/model/option";
import { DB_CONSTANTS, DbOps } from "@/common/database/dbkernel";
import { Taskcategory } from "@/db/model/taskcategory";
import { Workflow } from "@/db/model/workflow";
import { TKeyvalue } from "@/common/types";
import { TInputText } from "@/radix/radixtypes";
import { Task } from "@/db/model/task";
import { getCountWorkflowsById } from "@/db/services/read/srvworkflow";
import { JsonResponse } from "@/common/model/jsonreponse";
import { getCountAllRows } from "@/db/services/generic/serviceread";
import { DbTables } from "@/db/dbcatalog";
import { insertWorkflow } from "@/db/services/crud/srvcrudworkflow";
import { insertTaskcategory } from "@/db/services/crud/srvcrudtaskcategory";
import { getAllTasktypes } from "@/db/services/read/srvmantasktypes";
import { Tasktype } from "@/db/model/tasktype";
import { parseResponseCollection } from "@/common/parsers/javascriptparser";
import { Codelang } from "@/db/model/codelang";
import { getAllCodelang } from "@/db/services/read/srvcodelang";
import { insertTask } from "@/db/services/crud/srvcrudtask";

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
 * class AppWorkflows.TASKCATEGORY_DEF_NAME
 */
export class AppWorkflows {

    public static readonly TASKCATEGORY_DEF_NAME: string = "default";

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



      
    public static DLG_WK_NAME_INPUT: InputField 
        = new InputField("text", "workflow_name",
                        "workflow name", null, "Workflow Name", {min: 3, max: 50});
    
                        /*
    constructor(id: number,
                tasktype_id: number,
                codelang_id: number,
                workflow_id: number,
                taskcategory_id: number,
                orden: number,
                name: string|null,
                description: string|null,
                tkgroup: number,
                files: string|null,
                folders: string|null) 
            setTasktypes(parseResponseCollection<Tasktype>
                    (await getAllByTable(DbTables.tasktype))!);                
                */

    public static  getNewTask = async ( tasktype_id: number,
                                        codelangId:number,      
                                        workflowId:number,                                 
                                        taskcategoryId:number,
                                        orden:number,
                                        groupIndex:number):Promise<Task|null> => {       
                                       
        const tasktypeId:number = 0; 
        /*
            tasktypeId,
            codelangId,
            workflowId,
            0 ,0,
            AppWorkflows.TASKCATEGORY_DEF_NAME,
            null,orden,null,null);    
        */    
        return null;    
    };//end
       
    public static existWorkflow = async (name: string): Promise<boolean> => {
        const response = await getCountAllRows(DbTables.workflow,name);
        if (response === null) { return false; }
        const jsonParsed:JsonResponse = JSON.parse(response) as JsonResponse;
        const count = Number(jsonParsed.data);
        alert(count);
        if(count > 0) {return true;}
        return false;
    }//end
    
    public static createNewWorkflow = async (name: string): Promise<boolean> => {

        const responsCl = await getAllCodelang();
        if(responsCl=== null) {
            alert("Error getting code langs.");
            return false;
        }
        const codelangs:Codelang[] = parseResponseCollection<Codelang>(responsCl)!;

        const responsTt = await getAllTasktypes();
        if(responsTt=== null) {
            alert("Error getting task types.");
            return false;
        }
        const tasktypes: Tasktype[] = parseResponseCollection<Tasktype>(responsTt)!;
        const tasktypeFirstId: number = tasktypes[0].id;
        
        const workflow: Workflow = new Workflow(DbOps.NEW_ROW_ID,name, null,"", null, null);
        const responseIw = await insertWorkflow(JSON.stringify(workflow));
        const reponseIwObj:JsonResponse = JSON.parse(responseIw) as JsonResponse;
        if(reponseIwObj.isError()) {
            return false;
        }
        const workflowId = Number(reponseIwObj.data);
        const taskCategory: Taskcategory = new Taskcategory
            (DbOps.NEW_ROW_ID,workflowId,AppWorkflows.TASKCATEGORY_DEF_NAME,"default task category");

        const resposeItc = await insertTaskcategory(JSON.stringify(taskCategory));    
        const resposeItcObj:JsonResponse = JSON.parse(responseIw) as JsonResponse;
        if(reponseIwObj.isError()) {
            return false;
        }        
        const taskcategoryId = Number(resposeItcObj.data);

        const task:Task = new Task(
            DbOps.NEW_ROW_ID,tasktypes[0].id,codelangs[0].id,
            workflowId,taskcategoryId,0,"first task","",0,null,null);       
        
        
        const resposeItask = await insertTask(JSON.stringify(task));
        if(resposeItask === null) {
            alert("Error inserting task.");
            return false;
        }
        
        return true;
    }//end

    /*
        public static readonly TASKCATEGORY_DEF: Taskcategory 
        = new Taskcategory(0, 0, "default", "taskgroup default");
    */
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
