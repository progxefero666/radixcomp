//src\codegen\data\cgdatafunction.ts

import { Keyvalue } from "@/common/model/keyvalue";
import { TsOps } from "./cgdataoperations";


/**
 * class CgDataTsFunctions.replaceAll
 */
export class CgDataTsFunctions {
    
    public static replaceAll(content: string, searchValue: string, replaceValue: string): string {
        let found: boolean = true;
        while (found) {
            const position: number = content.indexOf(searchValue);
            if(position>= 0) {
                content = content.replace(searchValue, replaceValue);
            }
            else{found = false;}
        }
        return content;
    };//end


    public static executeOperation(template:string,params:Keyvalue[]): string {
        console.log(params);
        let code: string = template;
        params.forEach((item) => {
            code =CgDataTsFunctions.replaceAll(code, item.key, item.value);
        });
        console.log(code);
        return code;
    }//end 

}//end class

/*  

        for (let idx = 0; idx < params.length; idx++) {
            console.log(idx.toString + ":" +
                paramsValues[idx].key + ":" +
                paramsValues[idx].value);
        }

        if (operation === TsOps.OP_CLASS) {

        }
//content = content.replace(/_Table_/g, className);
    //CodeGenHelper.uncapitalize
    //CodeGenHelper.capitalize
    public static executeOperation(opId:string,template:string,params:Keyvalue[]): string {
        let code: string = "";
        if(opId === TsOps.OP_CLASS) {
        }
        else if(opId === TsOps.OP_FUNCT) {}
        else if(opId === TsOps.OP_FUNCT_STATIC) {}
        else if(opId === TsOps.OP_FUNCT_PROMISE) {}
        else if(opId === TsOps.OP_FUNCT_ASYNC) {}
        else if(opId === TsOps.OP_INTERFACE) {}
        else if(opId === TsOps.OP_TYPE) {}
        else if(opId === TsOps.OP_USE_STATE) {}
        else if(opId === TsOps.OP_USE_EFFECT) {}
    
        return code;
    }//end 
*/