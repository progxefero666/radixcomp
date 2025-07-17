//src\codegen\filesystem\fsfunctions.ts

import { FsConstants } from "./fsconfig";
import { DocFormats } from "./fsconstants";

/**
 * class FsFunctions.chargeDownloadFile
 */
export class FsFunctions {

    public static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }//end

    public static uncapitalize(str: string): string {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }//end 

    public static getFilename(id:string,format:string): string {
        let fname: string = id + ".";
        if(format === DocFormats.FORMAT_TYPESCRIPT.key) {
            fname += DocFormats.FORMAT_TYPESCRIPT.value;
        }
        else if(format === DocFormats.FORMAT_JSON.key) {
            fname += DocFormats.FORMAT_JSON.value;
        }
        else if(format === DocFormats.FORMAT_SQL.key) {
            fname += DocFormats.FORMAT_SQL.value;
        }
        else if(format === DocFormats.FORMAT_JAVASCRIPT.key) {
            fname += DocFormats.FORMAT_JAVASCRIPT.value;
        }
        return fname;
    };//end

    public static generateFile(id:string,format:string,content:string): File{        
        const fname: string = FsFunctions.getFilename(id,format);
        const mimetype: string = DocFormats.getMimetype(format);
        const file:File =  new File([content], fname, { type: mimetype });
        //alert(file.name);
        console.log("File generated: ", file);
        return file;
    };//end
        
    public static chargeDownloadFile(file:File){
        const url: string = URL.createObjectURL(file);
        
        const a: HTMLAnchorElement = document.createElement("a");
        a.href = url;
        a.download = file.name;
        a.click();
        URL.revokeObjectURL(url);
    };//end

    public static chargeDownloadListFile(listFiles:File[]){
        for (let idx=0;idx<listFiles.length;idx++) {
            FsFunctions.chargeDownloadFile(listFiles[idx]);
        }
    }    

}//end class
