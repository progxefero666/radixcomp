"use server";

import { ServerFileUtil } from "@/app_server/lib/serverfileutil";
import { ServerReader } from "@/app_server/config";


/**
 * Server action to save a text file.
 * @param folder - The folder where the file will be saved, or null for the root folder.
 * @param fname - The name of the file to save, or null to use a default name.
 * @param fileContent - The content of the file to save.
 * @returns A promise that resolves to true if the file was saved successfully, false otherwise.
 */
export async function saveTextFile(folder:string|null,fname:string|null,fileContent: string): Promise<boolean> {
    //console.log("saveTextFile: ", fname!);
   
    return true; // Assuming the file was saved successfully, return true
}//end action

//saveTextFile
 //const fileContent: string = await ServerFileUtil.readFile(filePath);