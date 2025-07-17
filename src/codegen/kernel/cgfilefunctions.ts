//src\codegen\kernel\cgfilefunctions.ts

import { DocFormats } from "@/filesystem/fsconstants";
import { FileCode } from "@/filesystem/fsmodels";


/**
 * class CgFileFunctions.getListFilesCode
 */
export class CgFileFunctions {

    public static getFileCode(fileId:string,code:string): FileCode {
        return new FileCode(
                fileId,
                DocFormats.FORMAT_TYPESCRIPT.value,
                DocFormats.FORMAT_TYPESCRIPT.key,
                code);
    };//end

    public static getListFilesCode(filesIds:string[],code:string[]): FileCode[] {
        const listFiles:FileCode[] = [];
        for (let idx=0;idx<filesIds.length;idx++) {
            listFiles.push(CgFileFunctions.getFileCode(filesIds[idx],code[idx]));
        }
        return listFiles;
    };//end

}//end class