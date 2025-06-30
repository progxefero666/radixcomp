//src\codegen\kernel\cghelper.ts

import { ModelTable } from "../cgmodel";

export class CodeGenUtil {

    public static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }//end

    public static uncapitalize(str: string): string {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }//end  

    public static getModelTableIndex(modelTables:ModelTable[],name:string): number {
        let tableIndex:number = -1;
        for (let idx=0;idx<modelTables.length;idx++) {
            if (modelTables[idx].name==name) {
                tableIndex = idx;
            }
        }
        return tableIndex;
    }//end  

}//end class
