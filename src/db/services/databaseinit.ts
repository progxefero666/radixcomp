"use server";

//import * as fs from "fs/promises";
import path from "path";

import dotenv from 'dotenv';
dotenv.config();

import { insertProglanguage } from "@/db/services/crud/srvcrudproglanguage";
import { GenerateKeys } from "@/common/helper/generatekeys";
import { Tasktype } from "@generated/prisma";
import { insertTasktype } from "@/db/services/crud/srvcrudtasktype";



const tasktypes: Tasktype[] = [
  {id: GenerateKeys.genAlphaNum16(), name: "create", description: "create files" },
  {id: GenerateKeys.genAlphaNum16(), name: "edit", description: "edit files" },
  {id: GenerateKeys.genAlphaNum16(), name: "delete", description: "delete files" },
  {id: GenerateKeys.genAlphaNum16(), name: "exec-scripts", description: "execute scripts" },
  {id: GenerateKeys.genAlphaNum16(), name: "gen-docs", description: "generate docs" },
  {id: GenerateKeys.genAlphaNum16(), name: "update-docs", description: "update docs" },
  {id: GenerateKeys.genAlphaNum16(), name: "exec-tests", description: "execute tests" },
  {id: GenerateKeys.genAlphaNum16(), name: "repository", description: "execute repository actions" },
];

const proglanguages = [
    { id: GenerateKeys.genAlphaNum16(), name: "TypeScript" },
    { id: GenerateKeys.genAlphaNum16(), name: "Python" },
    { id: GenerateKeys.genAlphaNum16(), name: "SQL" },
    { id: GenerateKeys.genAlphaNum16(), name: "JavaScript" },
    { id: GenerateKeys.genAlphaNum16(), name: "CSS" },
    { id: GenerateKeys.genAlphaNum16(), name: "Java" },
    { id: GenerateKeys.genAlphaNum16(), name: "C++" }
];

const workflows = [
    { id: GenerateKeys.genAlphaNum16(), name: "Workflow 1", description: "First workflow" },
    { id: GenerateKeys.genAlphaNum16(), name: "Workflow 2", description: "Second workflow" },
    { id: GenerateKeys.genAlphaNum16(), name: "Workflow 3", description: "Third workflow" }
];

/**
 * Action Server Init Database.
 *  - Excute al start session
 */
export async function initDatabase(): Promise<boolean> {

    let res_proglanguages:boolean = await load_proglanguages();
    let res_tasktype:boolean      = await load_tasktype();

    return true;
};//end

export async function load_proglanguages(): Promise<boolean> {
    let result:boolean = true;
    try {
        for (const lang of proglanguages) {
            const resultInsert = await insertProglanguage(JSON.stringify(lang));
            if (resultInsert == null) {result=false;break;}
        }
        if (!result) {result = false;}
    }
    catch (error) {result = false;}
    if(!result) {
        console.error("Database initialization failed.");
    }
    return result;
};//

export async function load_tasktype(): Promise<boolean> {
    let result:boolean = true;
    try {
        for (const tasktype of tasktypes) {
            const resultInsert = await insertTasktype(JSON.stringify(tasktype));
            if (resultInsert == null) {result=false;break;}
        }
    }    
    catch (error) {result = false;}
    if (!result) {
        console.error("Database initialization failed.");
    }
    return result;
};//end

export async function load_workflows(): Promise<boolean> {
    let result:boolean = true;
    try {
        for (const tasktype of tasktypes) {
            const resultInsert = await insertTasktype(JSON.stringify(tasktype));
            if (resultInsert == null) {result=false;break;}
        }
    }    
    catch (error) {result = false;}
    if (!result) {
        console.error("Database initialization failed.");
    }
    return result;
};//end