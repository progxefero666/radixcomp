//src\app\workflows\config.ts

import { Option } from "@/common/models";

//seState<string>("taskgroups");

export enum MOD_SECTIONS {
    WORKFLOWS       = "workflows" ,
    TASKTYPES       = "tasktypes",
    WORKFLOW_EDITOR = "workflow_editor"
}

export enum UiSecondPanels {
    EMPTY       = "empty",
    TASKGROUPS       = "taskgroups",
    WORKFLOW_PREVIEW = "workflow",
    WORKFLOW_JSON    = "workflow_json",
    WORKFLOW_SQL     = "workflow_sql"
}


/*
    Option = new Option("workflow_json","JSon Viewer",null,null,null);
    Option = new Option("workflow_sql","Sql Script",null,null,null);
*/

/**
 * class Workflows Config
 */
export class WorkflowsConfig {

    public static readonly SC_WORKFLOWS:Option 
        = new Option(MOD_SECTIONS.WORKFLOWS,"Workflows",null,null,null);

    public static readonly SC_TASKTYPES:Option 
        = new Option(MOD_SECTIONS.TASKTYPES,"Task Types",null,null,null);

    public static readonly SC_EDITOR:Option 
        = new Option(MOD_SECTIONS.WORKFLOW_EDITOR,"Task Types",null,null,null);

    public static readonly MODULES: Option[] = [
        WorkflowsConfig.SC_WORKFLOWS,        
        WorkflowsConfig.SC_TASKTYPES
    ]

    public static getSectionOperations(sectionName: any): Option[]|null {
        if (sectionName === MOD_SECTIONS.WORKFLOWS) {
            return [];
        }
        else if (sectionName === MOD_SECTIONS.TASKTYPES) {            
            return [];
        }
        else if (sectionName === MOD_SECTIONS.WORKFLOW_EDITOR) {
            return [];
        }
        return null;
    }

}//end class

