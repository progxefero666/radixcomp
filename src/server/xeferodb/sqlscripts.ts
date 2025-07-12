//src\app_server\xeferodb\sqlscripts.ts
"use server";

import path from "path";
import * as fs from "fs/promises";


/**
 * Server action to get the content of a text file.
 * @param fname 
 * @returns file content as a string
 */
export async function readDbSqlScriptFile(id:string): Promise<string|null> {
    
    let fname:string|null = null;
    if(id === "dbsquema") {fname = "dbsquema.sql";}
    if(fname == null) {return null;}

    const environment:string = process.env.NODE_ENV;
    console.log(environment);

    const FOLDER_ROOT: string = "C:\\Development\\apps\\aigenerator\\public";
    const SUBFOLDER_DATA: string = "data";
    const XEFERODB_PATH =  path.join(FOLDER_ROOT,SUBFOLDER_DATA);

    let content:string = "";

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

/*
export async function getDbSqlSquema(): Promise<string> {
    const fileName:string = "dbsquema.sql";
    return path.join(ServerConfig.XEFERODB_PATH, fname);
    const filePath: string = ServerReader.getFilePath(fileName);
    console.log("getTextFile: ", filePath);
    const fileContent: string = await ServerFileUtil.readFile(filePath);
    return fileContent;
}//end action
*/