//src\codegen\data\cgdatafunction.ts

import { Keyvalue } from "@/common/model/keyvalue";
import { TsOps } from "./cgdataoperations";


/**
 * class CgDataTsFunctions
 */
export class CgDataTsFunctions {
    
    public static executeOperation(template:string,params:Keyvalue[]): string {
        let code: string = template;
        params.forEach((item) => {
            code = code.replace(item.key,item.value);
        });
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