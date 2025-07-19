//src\codegen\data\cgdataconfig.ts

import { Keyvalue } from "@/common/model/keyvalue";
import { TextHelper } from "@/common/helper/texthelper";


/**
 * class CgDataProcessor
 */
export class CgDataProcessor {

    public static readonly WTEMPLATE: string = "template";
    public static readonly WCODE: string = "code";
    public static readonly MAX_LENGTH_DEF: number = 50;

    public static executeOperation(template:string,params:Keyvalue[]): string {
        console.log(params);
        let code: string = template;
        params.forEach((item) => {
            code =TextHelper.replaceAll(code, item.key, item.value);
        });
        console.log(code);
        return code;
    }//end 
        
};//end class