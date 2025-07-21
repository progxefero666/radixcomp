//src\server\database\databaseinit.ts
"use server";


import path from "path";
import * as fs from "fs/promises";
import { promisify } from "util";

import { exec } from 'child_process';
import dotenv from 'dotenv';
import { insertProglanguage } from "./crud/srvcrudproglanguage";
dotenv.config();

/**
 * Action Server Init Database.
 *  - Excute al start session
 */
    /*
    public static Codelangs: TCodelang[] = [
        { id: 1, cgname: "typescript", icon: "tsicon" },
        { id: 2, cgname: "python", icon: "pyicon" },
        { id: 3, cgname: "sql", icon: "sqlicon" },
        { id: 4, cgname: "javascript", icon: "jsicon" },
        { id: 5, cgname: "css", icon: "cssicon" },
        { id: 6, cgname: "java", icon: "javaicon" },
        { id: 7, cgname: "c++", icon: "cppicon" }
    ];
    */
export async function initDatabase(): Promise<boolean> {

    const proglanguages = [
        { id: "typescript", name: "TypeScript" },
        { id: "python", name: "Python" },
        { id: "sql", name: "SQL" },
        { id: "javascript", name: "JavaScript" },
        { id: "css", name: "CSS" },
        { id: "java", name: "Java" },
        { id: "c++", name: "C++" }
    ];

    let result:boolean = true;
    for (const lang of proglanguages) {
        const item_serial = JSON.stringify(lang);
        const resultInsert = await insertProglanguage(item_serial);
        if (resultInsert !== "success") {
            result = false;
            console.error(`Error inserting language ${lang.name}: ${resultInsert}`);
           break;
        }
    }
    if (result) {
        console.error("Database initialization success.");
    }
    else {
        console.error("Database initialization failed.");
    }
    return result;
};//end