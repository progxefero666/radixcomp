//src\codegen\filesystem\fsfunctions.ts

import { FsConstants } from "./fsconfig";

/**
 * class FsFunctions.chargeDownloadFile
 */
export class FsFunctions {

    //CodeGenHelper.uncapitalize
    //CodeGenHelper.capitalize
    
    public static chargeDownloadFile(file:File){
        const url: string = URL.createObjectURL(file);
        
        const a: HTMLAnchorElement = document.createElement("a");
        a.href = url;
        a.download = file.name;
        a.click();
        URL.revokeObjectURL(url);
    }

}//end class
