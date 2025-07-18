//src\codegen\templates\typescript\tstemplates.ts

import { CgDataConst } from "@/codegen/data/cgdata";
import { DocFormats } from "@/filesystem/fsconstants";


/**
 * class TmpTypeScript
 */
export class TsTemplates {
public static t_class: string = 
   `/**
 * class __$Template$__
 */
export class __$Template$__ {
    
    public static readonly DEF: string = "n";

    public field_0: number;
    public field_1: string;
    public field_2: boolean;

    constructor(field_0: number, field_1: string, field_2: boolean) {
        this.field_0 = field_0;
        this.field_1 = field_1;
        this.field_2 = field_2;
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }
    
}//end class`;

};//end class

