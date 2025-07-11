//src\app\workflows\config.ts

import { Option } from "@/common/models";
import { Taskgroup } from "@/db/model/taskgroup";
import { Task } from "public/data/AllClases";

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

export const MOD_SECTIONS_ARRAY: Option[] = [
    MOD_SECTIONS.MANAGER_WORKFLOWS,
    MOD_SECTIONS.MANAGER_TASKTYPES
];

export const EDITOR_SECTIONS = {
    MANAGER_WORKFLOWS: new Option("manager_workflows", "Workflows", null),
    MANAGER_TASKTYPES: new Option("manager_tasktypes", "Task Types", null)
} as const;