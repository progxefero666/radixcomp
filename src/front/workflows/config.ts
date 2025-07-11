//src\app\workflows\config.ts

import { Option } from "@/common/models";

export const MOD_SECTIONS = {
    MANAGER_WORKFLOWS: new Option("manager_workflows", "Workflows", null, null, null),
    TASKTYPES: "tasktypes"
} as const;

export enum VIEWER_MODE {
    EMPTY       = "empty",
    TASKGROUPS       = "taskgroups",
    WORKFLOW_PREVIEW = "workflow_preview",
    WORKFLOW_JSON    = "workflow_json",
    WORKFLOW_SQL     = "workflow_sql"
}

/*
export class WorkflowsConfig {
    public static getSectionOperations(sectionName: any): Option[]|null {
        if (sectionName === MOD_SECTIONS.WORKFLOWS) {
            return [];
        }
        else if (sectionName === MOD_SECTIONS.TASKTYPES) {            
            return [];
        }
        return null;
    }

}//end class
*/
