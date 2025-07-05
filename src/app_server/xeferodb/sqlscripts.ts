"use server";

//src\app_server\xeferodb\sqlscripts.ts

import { ServerFileUtil } from "@/app_server/lib/serverfileutil";
import { ServerReader } from "@/app_server/config";

//    public static readonly DBSQUEMA_FILE: string = "dbsquema.sql";

export enum SqlScripts {
    DBSQUEMA_FILE = "dbsquema.sql",
    DB_INIT_FILE = "dbinit.sql",
    DB_TEST_FILE = "dbtest.sql"
}

/**
 * Server action to get the content of a text file.
 * @param fname 
 * @returns file content as a string
 */
export async function getSqlSquema(): Promise<string> {
    const filePath: string = ServerReader.getXeferoDbPath(SqlScripts.DBSQUEMA_FILE);    
    console.log("filePath: ", filePath);
    const fileContent: string = await ServerFileUtil.readFile(filePath);
    return fileContent;
}//end action