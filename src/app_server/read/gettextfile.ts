"use server";

import { ServerFileUtil } from "@/app_server/lib/serverfileutil";
import { ServerReader } from "@/app_server/config";


/**
 * Server action to get the content of a text file.
 * @param fname 
 * @returns file content as a string
 */
export async function getTextFile(fname: string): Promise<string> {
    const filePath: string = ServerReader.getFilePath(fname);
    console.log("getTextFile: ", filePath);
    const fileContent: string = await ServerFileUtil.readFile(filePath);
    return fileContent;
}//end action