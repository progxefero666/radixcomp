//src\codegen\data\cgdataconfig.ts

import { Keyvalue } from "@/common/model/keyvalue";
import { InputPattern } from "@/codegen/data/model/inputpattern";
import { Pattern } from "@/codegen/data/model/pattern";
import { TextHelper } from "@/common/helper/texthelper";

/**
 * class CgDataPatterns.VARNAME_v0v7
 */
export class CgDataPatterns {

    public static readonly VARNAME_v0v7: string = "v";
   
    public static readonly PATTERNS: Pattern[] = [
        new Pattern("^%","%^","/icons/uno"),  
        new Pattern("^¡","¡^","/icons/dos"),
        new Pattern("^<",">^","/icons/tres"),
        new Pattern("^[","]^","/icons/cuatro"),
        new Pattern("^+","+^","/icons/cinco"),
        new Pattern("*^","*^","/icons/seis"),        
        new Pattern("^-","^-","/icons/siete"),
        new Pattern("^:",":^","/icons/ocho")
    ];

    public static readonly COUNT_PARAMETERS_DEF: number = 1;
    public static readonly MAX_PARAMETERS: number = 8;

    public inputs_basic:InputPattern[] = [];
    public inputs_v0v7:InputPattern[] = [];

    constructor() {
        this.genInputPatts_basic();
        this.genPatterns_v0v7();
    };//end

    public genInputPatts_basic = () => {
        for (let idx=0;idx<CgDataPatterns.MAX_PARAMETERS;idx++) {
           this.inputs_basic.push(
                new InputPattern(idx,CgDataPatterns.PATTERNS[0].start, 
                                   CgDataPatterns.PATTERNS[0].end,null,null)
           );
        }        
    };//end

    public genPatterns_v0v7 = () => {
        for (let idx=0;idx<CgDataPatterns.MAX_PARAMETERS;idx++) {
            const variable = CgDataPatterns.VARNAME_v0v7 + idx;
            const input = new InputPattern(idx,CgDataPatterns.PATTERNS[0].start, 
                                   CgDataPatterns.PATTERNS[0].end,variable,null)
            this.inputs_v0v7.push(input);
        }        
    };//end

}//end class

