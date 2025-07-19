//src\codegen\data\cgdataconfig.ts

import { Keyvalue } from "@/common/model/keyvalue";
import { InputPattern } from "@/codegen/data/model/inputpattern";
import { Pattern } from "@/codegen/data/model/pattern";
import { TextHelper } from "@/common/helper/texthelper";


/**
 * class CgDataPatterns
 */
export class CgDataPatterns {

    public static readonly COUNT_PARAMETERS_DEF: number = 1;
    public static readonly MAX_COUNT_PARAMETERS: number = 8;
    public static readonly FACTOR_INC_PARAMETERS: number = 12; // 12, 24, 36, 48, 60, 72, 84, 96

    public static readonly PATT_0: Pattern = new Pattern("^%","%^",null,"/icons/uno.png");
    public static readonly PATT_1: Pattern = new Pattern("^¡","¡^",null, "/icons/dos.png");
    public static readonly PATT_2: Pattern = new Pattern("^<",">^",null, "/icons/tres.png");
    public static readonly PATT_3: Pattern = new Pattern("^[","]^",null, "/icons/cuatro.png");
    public static readonly PATT_4: Pattern = new Pattern("^+","+^",null, "/icons/cinco.png");
    public static readonly PATT_5: Pattern = new Pattern("*^","*^",null, "/icons/seis.png");
    public static readonly PATT_6: Pattern = new Pattern("^-","^-",null, "/icons/siete.png");
    public static readonly PATT_7: Pattern = new Pattern("^:",":^",null, "/icons/ocho.png");


    public static readonly PATTERNS: Pattern[] = [
        CgDataPatterns.PATT_0,  
        CgDataPatterns.PATT_1,
        CgDataPatterns.PATT_2,
        CgDataPatterns.PATT_3,
        CgDataPatterns.PATT_4,
        CgDataPatterns.PATT_5,        
        CgDataPatterns.PATT_6,
        CgDataPatterns.PATT_7
    ];

    public static PARAMS_EMPTY: InputPattern[] = [
        new InputPattern(0,CgDataPatterns.PATT_0.start, CgDataPatterns.PATT_0.end,null),
        new InputPattern(1,CgDataPatterns.PATT_1.start, CgDataPatterns.PATT_1.end,null),
        new InputPattern(2,CgDataPatterns.PATT_2.start, CgDataPatterns.PATT_2.end,null),
        new InputPattern(3,CgDataPatterns.PATT_3.start, CgDataPatterns.PATT_3.end,null),
        new InputPattern(4,CgDataPatterns.PATT_4.start, CgDataPatterns.PATT_4.end,null),
        new InputPattern(5,CgDataPatterns.PATT_5.start, CgDataPatterns.PATT_5.end,null),
        new InputPattern(6,CgDataPatterns.PATT_6.start, CgDataPatterns.PATT_6.end,null),
        new InputPattern(7,CgDataPatterns.PATT_7.start, CgDataPatterns.PATT_7.end,null),
    ]

};//end class

