//src\codegen\data\cgdataconfig.ts

import { Keyvalue } from "@/common/model/keyvalue";
import { InputPattern } from "@/codegen/data/model/inputpattern";
import { Pattern } from "@/codegen/data/model/pattern";
import { TextHelper } from "@/common/helper/texthelper";

/**
 * class CgDataPatterns.PATTERNS
 */
export class CgDataPatterns {

    public static INSTANCE: CgDataPatterns = new CgDataPatterns();
    public static readonly PATTERNS: Pattern[] = [
        new Pattern("^%","%^","/icons/uno.png"),  
        new Pattern("^¡","¡^","/icons/dos.png"),
        new Pattern("^<",">^","/icons/tres.png"),
        new Pattern("^[","]^","/icons/cuatro.png"),
        new Pattern("^+","+^","/icons/cinco.png"),
        new Pattern("*^","*^","/icons/seis.png"),        
        new Pattern("^-","^-","/icons/siete.png"),
        new Pattern("^:",":^","/icons/ocho.png")
    ];

    public static readonly COUNT_PARAMETERS_DEF: number = 1;
    public static readonly MAX_PARAMETERS: number = 8;

    public inputs_basic:InputPattern[] = [];
    public inputs_v0v7:InputPattern[] = [];

    constructor() {
        this.genInputPatts_basic();
    };//end

    public genInputPatts_basic = () => {
        for (let idx=0;idx<CgDataPatterns.MAX_PARAMETERS;idx++) {
           this.inputs_basic.push(
                new InputPattern(idx,CgDataPatternsOld.PATT_0.start, 
                                   CgDataPatternsOld.PATT_0.end,null)
           );
        }        
    };//end

    public genPatterns_v0v7 = () => {
        for (let idx=0;idx<CgDataPatterns.MAX_PARAMETERS;idx++) {
            const variable = "v" + idx;
            const input = new InputPattern(idx,CgDataPatternsOld.PATT_0.start, 
                                   CgDataPatternsOld.PATT_0.end,variable)
            this.inputs_v0v7.push(input);
        }        
    };//end

}//end class


export class CgDataPatternsOld {


    public static readonly PATT_0: Pattern = new Pattern("^%","%^","/icons/uno.png");
    public static readonly PATT_1: Pattern = new Pattern("^¡","¡^", "/icons/dos.png");
    public static readonly PATT_2: Pattern = new Pattern("^<",">^", "/icons/tres.png");
    public static readonly PATT_3: Pattern = new Pattern("^[","]^", "/icons/cuatro.png");
    public static readonly PATT_4: Pattern = new Pattern("^+","+^", "/icons/cinco.png");
    public static readonly PATT_5: Pattern = new Pattern("*^","*^", "/icons/seis.png");
    public static readonly PATT_6: Pattern = new Pattern("^-","^-", "/icons/siete.png");
    public static readonly PATT_7: Pattern = new Pattern("^:",":^", "/icons/ocho.png");


    public static readonly PATTERNS: Pattern[] = [
        new Pattern("^%","%^","/icons/uno.png"),  
        new Pattern("^¡","¡^","/icons/dos.png"),
        new Pattern("^<",">^","/icons/tres.png"),
        new Pattern("^[","]^","/icons/cuatro.png"),
        new Pattern("^+","+^","/icons/cinco.png"),
        new Pattern("*^","*^","/icons/seis.png"),        
        new Pattern("^-","^-","/icons/siete.png"),
        new Pattern("^:",":^","/icons/ocho.png")
    ];



  
};//end class

