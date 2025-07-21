//src\front\appworkflows.ts

import { InputField } from "@/common/model/inputfield";
import { Option } from "@/common/model/option";
import { parseResponseCollection, parseResponseItem } from "@/common/parsers/javascriptparser";
import { JsonResponse } from "@/common/model/jsonreponse";
import { DB_CONSTANTS} from "@/common/database/dbkernel";
import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/model/codelang";
import { Tasktype } from "@/db/model/tasktype";
import { Taskcategory } from "@/db/model/taskcategory";
import { Workflow } from "@/db/model/workflow";
import { Task } from "@/db/model/task";
import { getCountAllRows } from "@/db/services/generic/serviceread";
import { getAllTasktypes } from "@/db/services/read/srvmantasktypes";
import { getAllCodelang } from "@/db/services/read/srvcodelang";
import { insertTask } from "@/db/services/crud/srvcrudtask";
import { deleteWorkflow, insertWorkflow } from "@/db/services/crud/srvcrudworkflow";
import { insertTaskcategory } from "@/db/services/crud/srvcrudtaskcategory";
import { getWorkflow } from "@/db/services/read/srvworkflow";
import { getAllTaskcategory } from "@/db/services/read/srvtaskcategories";
import { ManagerCollectionById } from "@/common/manager/mancollection";
import { DB_COLL_CMD, DB_ITEM_CMD } from "@/common/database/dbkernel";

export const WK_EDITOR_VIEWS = {
    EDITOR_VIEW_DEFAULT: new Option("default", "Workflow", null),
    EDITOR_VIEW_TASKGROUPS: new Option("manager_taskgroups", "Task Groups", null)
} as const;


/**
 * # class AppWorkflows Configuration:
 *    - Module sections
 *    - Workflow editor views
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
 * class WorkflowActions
 */
export class WorkflowActions {

    public static UPDATE_MAIN: string   = "update_main";
    public static ADD_TASK: string      = "add_task";
    public static DELETE_TASK: string   = "delete_task";
    public static COPY_TASK: string     = "copy_task";
    public static MOVEUP_TASK: string   = "moveup_task";
    public static MOVEDOWN_TASK: string = "movedown_task";
    public static UPDATE_TASK: string   = "update_task";
    public static CLEAR_TASKS: string   = "clear_tasks";    

}//end class

/**
 * class AppWorkflows.getWorkflowIndex
 */
export class AppWorkflows {

    // constants
    //......................................................................................................    
    public static readonly FIRST_ITEM:number = 0;
    public static readonly FIRST_GROUP:number = 0;

    public static readonly TASKCAT_DEF_NAME: string = "default";    
    public static readonly TASKCAT_DEF_DESC: string = "default task category";
    public static readonly FIRST_TASK_NAME: string = "first task";
    public static readonly FIRST_TASK_DESC: string = "";

    // application forms definitions
    //......................................................................................................    

    public static readonly NEW_TASKTYPE_FIELDS:InputField[] = [
        new InputField("text","name", "type name", null, "Name"),
        new InputField("text","description", "type description", null, "Descripcion")
    ]

    public static readonly NEW_WK: Workflow = new Workflow(
        null,
        DB_CONSTANTS.NOT_DEF, 
        null,"", null, null);        

    public static readonly NEW_TASKCAT_FIELDS:InputField[] = [
        new InputField("text","item_0", "placeholder", "nacho", "Name"),
        new InputField("text","item_1", "placeholder", "desadasdas", "Descripcion")
    ];

    public static DLG_WK_NAME_INPUT: InputField 
        = new InputField("text", "workflow_name",
                        "workflow name", null, "Workflow Name", {min: 3, max: 50});
    
    public static getWorkflowIndex = (workflows:Workflow[],id:number):number => {
        let index: number = -1;
        for(let idx=0;idx<workflows.length;idx++) {
            if(workflows[idx].id === id) {
                index = idx;
                break;
            }
        }
        return index;
    };//end

    public static getNewTask = async (codelangId:number,tasktype_id:number,    
                                        workflowId:number,taskcategoryId:number,
                                        name:string,description:string,
                                        orden:number,groupIndex:number):Promise<Task> => {                                              
        return new Task(null,tasktype_id,codelangId,
                        workflowId,taskcategoryId,
                        orden,name,description,groupIndex,null,null);   
    };//end
    
};//end class


/**
 *  # class AppWorkflowsCreator
 *     - Create operations for workflows
 */
export class AppWorkflowsCreator {

    public static createCompleteWorkflow = async(name:string,
                                                 codelangs:Codelang[]|null,
                                                 tasktypes:Tasktype[]|null): Promise<number|null> => {

        if(codelangs === null){codelangs = await AppWorkflowsReader.read_codelangs(name);}
        if(tasktypes === null){tasktypes = await AppWorkflowsReader.read_tasktypes(name);}
        
        // 1. insert workflow
        const workflowId:number|null = await AppWorkflowsCrud.insert_workflow(name, AppWorkflows.FIRST_TASK_DESC); 
        console.log("workflowId: ", workflowId);
        if(workflowId === null) {return null;}

        // 2. insert default task category
        const taskcategoryId:number|null = await AppWorkflowsCrud.insert_taskcategory
                (workflowId!,AppWorkflows.TASKCAT_DEF_NAME, AppWorkflows.TASKCAT_DEF_DESC);
        if(taskcategoryId === null) {return null;}


        // 3. insert first task
        const taskId:number|null = await AppWorkflowsCrud.insert_task(
            tasktypes![0].id!,codelangs![0].id!,
            workflowId!,taskcategoryId!,AppWorkflows.FIRST_TASK_NAME,
            AppWorkflows.FIRST_TASK_DESC,AppWorkflows.FIRST_ITEM,AppWorkflows.FIRST_GROUP);
        if(taskId === null) {return null;}
    
        return workflowId;
    };//end

};//end class


/**
 * # class AppWorkflowsReader.read_workflow
 *    - Read operations for workflows
 */
export class AppWorkflowsReader {

    public static read_codelangs = async (name: string): Promise<Codelang[]|null> => {
        const response = await getAllCodelang();
        if(response=== null){return null;}
        return parseResponseCollection<Codelang>(response);
    };//end
    
    public static read_tasktypes = async (name: string): Promise<Tasktype[]|null> => {
        const response = await getAllTasktypes();
        if(response=== null){return null;}
        return parseResponseCollection<Tasktype>(response);
    };//end

    //getWorkflow
    public static read_workflow = async (id: number): Promise<Workflow|null> => {
        const response = await getWorkflow(id);
        if(response=== null){return null;}
        const workflow: Workflow|null = parseResponseItem<Workflow>(response);
        return workflow;
    };//end

    public static existWorkflow = async (name: string): Promise<boolean> => {
        const response = await getCountAllRows(DbTables.workflow,name);
        if (response === null) { return false; }
        const jsonParsed:JsonResponse = JSON.parse(response) as JsonResponse;
        const count = Number(jsonParsed.data);
        alert(count);
        if(count > 0) {return true;}
        return false;
    };//end    

    public static read_taskcategories = async (workflow_id:number,includeTasks?:boolean): Promise<Taskcategory[]|null> => {
        const response = await getAllTaskcategory(workflow_id,includeTasks);
        if(response=== null){return null;}
        return parseResponseCollection<Taskcategory>(response);
    };//end

};//end class


/**
 * # class AppWorkflowsCrud.delete_workflow
 *    - CRUD operations for workflows
 */
export class AppWorkflowsCrud {

    public static insert_taskcategory = async (workflowId:number,
                                               name:string,
                                               description:string): Promise<number|null> => {
        const taskCategory: Taskcategory 
            = new Taskcategory(null,workflowId,name,description);

        const response = await insertTaskcategory(JSON.stringify(taskCategory));      
        if(response === null) {return null;}
        const responseObj:JsonResponse = JSON.parse(response) as JsonResponse;
        if(responseObj.result === DB_CONSTANTS.SUCCESS) {return Number(responseObj.data);}
        return null;
        //if(taskcategoryId === null) {alert("Error inserting new task category");return;}

    };//end

    public static insert_workflow = async (name:string,description:string): Promise<number|null> => {
        const workflow: Workflow = new Workflow(null,name, null,description, null, null);
        const response = await insertWorkflow(JSON.stringify(workflow));
        if(response === null) {return null;}
        const responseObj:JsonResponse = JSON.parse(response) as JsonResponse;        
        if(responseObj.result === DB_CONSTANTS.SUCCESS) {return Number(responseObj.data);}
        return null;
    };//end

    public static insert_task = async (codelangId:number,tasktype_id:number,    
                                        workflowId:number,taskcategoryId:number,
                                        name:string,description:string,
                                        orden:number,groupIndex:number):Promise<number|null> => {                                              
        const task:Task = new Task(null,tasktype_id,codelangId,
                        workflowId,taskcategoryId,
                        orden,name,description,groupIndex,null,null);   
        const response = await insertTask(JSON.stringify(task));   
        const responseObj:JsonResponse = JSON.parse(response) as JsonResponse;        
        if(responseObj.result === DB_CONSTANTS.SUCCESS) {return Number(responseObj.data);}                     
        return null; 
    };//end

    //const response = await getCountWorkflowsById(name);
    //if (response === null) { return false; }
    //const jsonParsed:JsonResponse = JSON.parse(response) as JsonResponse;
    //const count = Number(jsonParsed.data);
    //if(count <= 0) {return false;}    
    public static delete_workflow = async (id:number): Promise<boolean> => {
        const response = await deleteWorkflow(id);   
        if(response === null) {return false;}
        const responseObj:JsonResponse = JSON.parse(response) as JsonResponse;
        if(responseObj.result === DB_CONSTANTS.SUCCESS) {return true;}
        return false;
    };//end

};//end class


export class ManagerTaskcategories extends ManagerCollectionById<Taskcategory> {

    constructor(collection: Taskcategory[]) {
        super(collection);
    }

    public execOp = (id: string,item:Taskcategory): boolean => {
        
        alert(item.id);

        let result = false;
        if (id == DB_ITEM_CMD.INSERT) {
            result = super.insert(item!);
        }
        else if (id == DB_ITEM_CMD.UPDATE) {
            result = super.update(item.id!,item)
        }
        return result;
    }//end 

    public execOpCollection = (opId: string,id?:number): boolean => {
        let result = false;

        if (opId == DB_ITEM_CMD.DELETE) {
            result = super.delete(id!);
        } 
        else if (opId == DB_COLL_CMD.DELETE_ALL) {
            result = super.deleteAll();
        }
        else if (opId == DB_ITEM_CMD.MOVEUP) {
            super.moveUp(id!);
        }        
        else if (opId == DB_ITEM_CMD.MOVEDOWN) {
            super.moveDown(id!);
        }            
        return result;
    }//end 

    

}//end class