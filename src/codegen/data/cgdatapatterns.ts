//src\codegen\data\cgdataconfig.ts

import { Keyvalue } from "@/common/model/keyvalue";
import { InputPattern } from "@/codegen/data/model/inputpattern";
import { Pattern } from "@/codegen/data/model/pattern";
import { TextHelper } from "@/common/helper/texthelper";


/**
 * class CgDataPatterns
 */
export class CgDataPatterns {

    public static readonly MAX_COUNT_PARAMETERS: number = 8;
    public static readonly FACTOR_INC_PARAMETERS: number = 12; // 12, 24, 36, 48, 60, 72, 84, 96

    public static readonly COUNT_PARAMETERS_DEF: number = 1;

    //public static PATTERN_VAR_A: string = "__^A^__";

    public static readonly PATT_0: Pattern = new Pattern({start:"^%", end:"%^"},"/icons/uno.png","/icons/uno_red.png");
    public static readonly PATT_1: Pattern = new Pattern({start:"^¡", end:"¡^"}, "/icons/dos.png", "/icons/dos_red.png");
    public static readonly PATT_2: Pattern = new Pattern({start:"^<", end:">^"}, "/icons/tres.png" , "/icons/tres_red.png");
    public static readonly PATT_3: Pattern = new Pattern({start:"^[", end:"]^"}, "/icons/cuatro.png", "/icons/cuatro_red.png");
    public static readonly PATT_4: Pattern = new Pattern({start:"^+", end:"+^"}, "/icons/cinco.png", "/icons/cinco_red.png");
    public static readonly PATT_5: Pattern = new Pattern({start:"*^", end:"*^"}, "/icons/seis.png", "/icons/seis_red.png");
    public static readonly PATT_6: Pattern = new Pattern({start:"^-", end:"-^"}, "/icons/siete.png", "/icons/siete_red.png");
    public static readonly PATT_7: Pattern = new Pattern({start:"^:", end:":^"}, "/icons/ocho.png", "/icons/ocho_red.png");


    public static readonly LIST_PATTERNS: Pattern[] = [
        CgDataPatterns.PATT_0,  
        CgDataPatterns.PATT_1,
        CgDataPatterns.PATT_2,
        CgDataPatterns.PATT_3,
        CgDataPatterns.PATT_4,
        CgDataPatterns.PATT_5,        
        CgDataPatterns.PATT_6,
        CgDataPatterns.PATT_7
    ];

    public static LIST_PARAMS: InputPattern[] = [
        new InputPattern(0,CgDataPatterns.PATT_0.patt),
        new InputPattern(1,CgDataPatterns.PATT_1.patt),
        new InputPattern(2,CgDataPatterns.PATT_2.patt),
        new InputPattern(3,CgDataPatterns.PATT_3.patt),
        new InputPattern(4,CgDataPatterns.PATT_4.patt),
        new InputPattern(5,CgDataPatterns.PATT_5.patt),
        new InputPattern(6,CgDataPatterns.PATT_6.patt),
        new InputPattern(7,CgDataPatterns.PATT_7.patt),  
    ]

};//end class

