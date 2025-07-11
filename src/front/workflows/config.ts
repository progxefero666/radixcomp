//src\app\workflows\config.ts

import { Option } from "@/common/models";

export const MOD_SECTIONS = {
    MANAGER_WORKFLOWS: new Option("manager_workflows", "Workflows", null),
    MANAGER_TASKTYPES: new Option("manager_tasktypes", "Task Types", null)
} as const;

export enum VIEWER_MODE {
    DEFAULT = "default",
    JSON = "json",
    SQL = "sql",
    PROMPT = "prompt"
}

export const MOD_SECTIONS_ARRAY: Option[] = [
    MOD_SECTIONS.MANAGER_WORKFLOWS,
    MOD_SECTIONS.MANAGER_TASKTYPES
];

export class WorkflowsConfig {

}//end class
