//src\codegen\kernel\cgfilefunctions.ts

import { DocFormats } from "@/filesystem/fsconstants";
import { FileCode } from "@/filesystem/fsmodels";


/**
 * class CgFileFunctions.getJsonArrayFilesCode
 */
export class CgFileFunctions {

    public static getTypeScriptFileCode(fileId:string,code:string): FileCode {
        return new FileCode(
                fileId,
                DocFormats.FORMAT_TYPESCRIPT.value,
                DocFormats.FORMAT_TYPESCRIPT.key,
                code);
    };//end

    public static getTypeScriptArrayFilesCode(filesIds:string[],code:string[]): FileCode[] {
        const listFiles:FileCode[] = [];
        for (let idx=0;idx<filesIds.length;idx++) {
            listFiles.push(CgFileFunctions.getTypeScriptFileCode(filesIds[idx],code[idx]));
        }
        return listFiles;
    };//end

    public static getJsonFileCode(fileId:string,code:string): FileCode {
        return new FileCode(
                fileId,
                DocFormats.FORMAT_JSON.value,
                DocFormats.FORMAT_JSON.key,
                code);
    };//end    

    public static getJsonArrayFilesCode(filesIds:string[],code:string[]): FileCode[] {
        const listFiles:FileCode[] = [];
        for (let idx=0;idx<filesIds.length;idx++) {
            listFiles.push(CgFileFunctions.getJsonFileCode(filesIds[idx],code[idx]));
        }
        return listFiles;
    };//end    


}//end class