//src\codegen\data\cgdatafunction.ts

import { Keyvalue } from "@/common/model/keyvalue";
import { TsOps } from "@/codegen/data/cgdataoperations";
import { TextHelper } from "@/common/helper/texthelper";
import { TsTemplates } from "@/codegen/templates/typescript/tstemplates";

/**
 * class CgDataTsFunctions.getOpTemplate
 */
export class CgDataTsFunctions {


  

};//end class

export class CgDataTsJsxFunctions {

    public static getJsxTemplate(opId: string): string {
        if (opId === TsOps.OP_CLASS) {
            return TsTemplates.t_class;
        }
        return "";
    }//end
    
};//end class