//src\app\workflows\config.ts

import { Option } from "@/common/option";

/**
 * class ModuleConfig.ACTIVE_SECTION
 */
export class WorkflowsConfig {

    public static readonly SC_WORKFLOWS:Option 
        = new Option("workflows","Workflows",null,null,null);

    public static readonly SC_TASKTYPES:Option 
        = new Option("tasktypes","Task Types",null,null,null);

    public static readonly SC_WORKFLOW_JSON:Option 
        = new Option("workflow_json","JSon Viewer",null,null,null);

    public static readonly SC_WORKFLOW_SQL:Option 
        = new Option("workflow_sql","Sql Script",null,null,null);

    public static readonly MODULES: Option[] = [
        WorkflowsConfig.SC_WORKFLOWS,        
        WorkflowsConfig.SC_TASKTYPES,
        WorkflowsConfig.SC_WORKFLOW_JSON,
        WorkflowsConfig.SC_WORKFLOW_SQL   
    ]

    public static getSectionOperations(sectionName: string): Option[]|null {
        if (sectionName === WorkflowsConfig.SC_WORKFLOWS.id) {
            return [];
        }
        else if (sectionName === WorkflowsConfig.SC_TASKTYPES.id) {
            return [];
        }
        return null;
    }

}//end class

