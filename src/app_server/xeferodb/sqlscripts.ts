//src\app_server\xeferodb\sqlscripts.ts
"use server";

import { ServerFileUtil } from "@/app_server/lib/serverfileutil";
import { ServerReader } from "@/app_server/config";


/**
 * Server action to get the content of a text file.
 * @param fname 
 * @returns file content as a string
 */
export async function readDbSqlScriptFile(id:string): Promise<string|null> {
    let fileName:string|null = null;
    if(id === "dbsquema") {
        fileName = "dbsquema.sql";
    }
    if(fileName!=null) {
        const filePath: string = ServerReader.getFilePath(fileName);
        const fileContent: string = await ServerFileUtil.readFile(filePath);
        return fileContent;        
    }
    else {
        return null
    }
}//end action

/**
 * Server action to get the content of a text file.
 * @param fname 
 * @returns file content as a string
 */
export async function getDbSqlSquema(): Promise<string> {
    const fileName:string = "dbsquema.sql";
    const filePath: string = ServerReader.getFilePath(fileName);
    console.log("getTextFile: ", filePath);
    const fileContent: string = await ServerFileUtil.readFile(filePath);
    return fileContent;
}//end action