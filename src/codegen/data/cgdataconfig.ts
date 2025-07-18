//src\codegen\data\cgdataconfig.ts

import { Keyvalue } from "@/common/model/keyvalue";
import { InputPattern } from "@/codegen/data/model/inputpattern";
import { Pattern } from "@/codegen/data/model/pattern";


/**
 * class CgDataConst
 */
export class CgDataConst {

    public static readonly WTEMPLATE: string = "template";
    public static readonly WCODE: string = "code";

    public static readonly MAX_LENGTH_DEF: number = 50;
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
        CgDataConst.PATT_0,  
        CgDataConst.PATT_1,
        CgDataConst.PATT_2,
        CgDataConst.PATT_3,
        CgDataConst.PATT_4,
        CgDataConst.PATT_5,        
        CgDataConst.PATT_6,
        CgDataConst.PATT_7
    ];

    public static LIST_PARAMS: InputPattern[] = [

        new InputPattern("0",{start:"^%",end:"%^"}),
        new InputPattern("1",{start:"^¡",end:"¡^"}),
        new InputPattern("2",{start:"^<",end:">^"}),
        new InputPattern("3",{start:"^[",end:"]^"}),   
        new InputPattern("4",{start:"^+",end:"+^"}),
        new InputPattern("5",{start:"^*",end:"*^"}),   
        new InputPattern("6",{start:"^-",end:"-^"}), 
        new InputPattern("7",{start:"^:",end:":^"}),     
        new InputPattern("8",{start:"^/",end:"\^"}),     
    ]

};//end class
