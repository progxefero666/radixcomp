//src\app_server\xeferodb\sqlscripts.ts
"use server";

import path from "path";
import * as fs from "fs/promises";
import { promisify } from "util";

import { exec } from 'child_process';
import dotenv from 'dotenv';
dotenv.config();
/**
 * Server action to get the content of a text file.
 * @param fname 
 * @returns file content as a string
 */
export async function readDbSqlScriptFile(id: string): Promise<string | null> {

    let fname: string | null = null;
    if (id === "dbsquema") { fname = "dbsquema.sql"; }
    if (fname == null) { return null; }

    const environment: string = process.env.NODE_ENV;
    console.log(environment);

    const FOLDER_ROOT: string = "C:\\Development\\apps\\aigenerator\\public";
    const SUBFOLDER_DATA: string = "data";
    const XEFERODB_PATH = path.join(FOLDER_ROOT, SUBFOLDER_DATA);

    let content: string = "";

    const filePath: string = path.join(XEFERODB_PATH, fname);
    try {
        await fs.access(filePath, fs.constants.F_OK);
        content = await fs.readFile(filePath, { encoding: "utf-8" });
    }
    catch (error) {
        return null;
    }
    finally {
    }
    return content;

}//end action


//process.env.DB_PASSWORD
const execAsync = promisify(exec);

export async function readDbSqlScript(): Promise<string|null> {

    //const command = `pg_dump -h localhost -U postgres -d xeferodb -s`;
    const command = "pg_dump -h "+ 
                     process.env.DB_HOST + " -U " + 
                     process.env.DB_USER + " -d " + 
                     process.env.DB_NAME + " -s";
    let content: string = "";
    try {
        const { stdout } = await execAsync(command, 
            {  env: { ...process.env, PGPASSWORD: process.env.DB_PASSWORD } });
        content = stdout; 
    } 
    catch (error) {
        return null;
    }
    return content;
}//end action