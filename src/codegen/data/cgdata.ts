//src\codegen\data\cgdata.ts

import { Keyvalue } from "@/common/model/keyvalue";

import { InputPattern } from "@/codegen/data/inputpattern";
import { Pattern } from "@/codegen/data/model/pattern";


//................................................................................
// constants
//................................................................................

/**
 * class CgDataConstants.COUNT_PARAMETERS_DEF
 */
export class CgDataConstants {

    public static readonly MAX_LENGTH_DEF: number = 50;
    public static readonly MAX_COUNT_PARAMETERS: number = 8;
    public static readonly FACTOR_INC_PARAMETERS: number = 12; // 12, 24, 36, 48, 60, 72, 84, 96

    public static readonly COUNT_PARAMETERS_DEF: number = 1;

    //public static PATTERN_VAR_A: string = "__^A^__";

    public static readonly PATTERN_0: Pattern = new Pattern({start:"^%", end:"%^"},"/icons/uno.png","/icons/uno_red.png");
    public static readonly PATTERN_1: Pattern = new Pattern({start:"^¡", end:"¡^"}, null, "/icons/dos_red.png");
    public static readonly PATTERN_2: Pattern = new Pattern({start:"^<", end:">^"}, null, "/icons/tres_red.png");
    public static readonly PATTERN_3: Pattern = new Pattern({start:"^[", end:"]^"}, null, "/icons/cuatro_red.png");
    public static readonly PATTERN_4: Pattern = new Pattern({start:"^+", end:"+^"}, null, "/icons/cinco_red.png");
    public static readonly PATTERN_5: Pattern = new Pattern({start:"*^", end:"*^"}, null, "/icons/seis_red.png");
    public static readonly PATTERN_6: Pattern = new Pattern({start:"^-", end:"-^"}, null, "/icons/siete_red.png");
    public static readonly PATTERN_7: Pattern = new Pattern({start:"^:", end:":^"}, null, "/icons/ocho_red.png");


    public static readonly LIST_PATTERNS: Pattern[] = [
        CgDataConstants.PATTERN_0,  
        CgDataConstants.PATTERN_1,
        CgDataConstants.PATTERN_2,
        CgDataConstants.PATTERN_3,
        CgDataConstants.PATTERN_4,
        CgDataConstants.PATTERN_5,        
        CgDataConstants.PATTERN_6,
        CgDataConstants.PATTERN_7
    ];

    public static LIST_PARAMETERS: InputPattern[] = [

        new InputPattern("0",{start:"^%",end:"%^"},null,"Parameter 0",null),
        new InputPattern("1",{start:"^¡",end:"¡^"},null,"Parameter 1",null),
        new InputPattern("2",{start:"^<",end:">^"},null,"Parameter 2",null),
        new InputPattern("3",{start:"^[",end:"]^"},null,"Parameter 3",null),   
        new InputPattern("4",{start:"^+",end:"+^"},null,"Parameter 4",null),
        new InputPattern("5",{start:"^*",end:"*^"},null,"Parameter 5",null),   
        new InputPattern("6",{start:"^-",end:"-^"},null,"Parameter 6",null), 
        new InputPattern("7",{start:"^:",end:":^"},null,"Parameter 7",null),     
        new InputPattern("8",{start:"^/",end:"\^"},null,"Parameter 8",null),     
    ]

};//end class


//class TsOps.OP_CLASS
export class TsOps {
    public static readonly MOD_ID: string = "typescript";

    public static readonly OP_CLASS: string = "class";
    public static readonly OP_FUNCT: string = "function";
    public static readonly OP_FUNCT_STATIC: string = "function_static";
    public static readonly OP_FUNCT_PROMISE: string = "function_promise";
    public static readonly OP_FUNCT_ASYNC: string = "function_promise";
    public static readonly OP_INTERFACE: string = "interface";
    public static readonly OP_TYPE: string = "type";
    public static readonly OP_USE_STATE: string = "use_state";
    public static readonly OP_USE_EFFECT: string = "use_effect";


    public static BASIC: Keyvalue[] = [
        new Keyvalue(TsOps.OP_CLASS,         "class"),
        new Keyvalue(TsOps.OP_FUNCT,         "const function"),
        new Keyvalue(TsOps.OP_FUNCT_STATIC,  "static function"),
        new Keyvalue(TsOps.OP_FUNCT_ASYNC,   "async function"),
        new Keyvalue(TsOps.OP_FUNCT_PROMISE, "Promise function"),
        new Keyvalue(TsOps.OP_USE_EFFECT,    "foreachs"),
        new Keyvalue(TsOps.OP_INTERFACE,     "Interface"),
        new Keyvalue(TsOps.OP_TYPE,          "Type"),
        new Keyvalue(TsOps.OP_USE_STATE,     "Use State"),
        new Keyvalue(TsOps.OP_USE_EFFECT,    "Use Effect"),
    ];

};//end class
export class JsxOps {

    public static readonly MOD_ID: string = "typescript_jsx";

    public static readonly OP_BUTTONS: string           = "buttons";
    public static readonly OP_FUNC_JSX: string          = "func_jsx";
    public static readonly OP_COMPONENT: string         = "component";
    public static readonly OP_COMPONENT_REF: string     = "component_ref";

    
    public static readonly OP_ICON_BUTTONS: string      = "iconbuttons";
    public static readonly OP_GRID: string              = "iconbuttons";

    public static readonly OP_PAGE: string              = "page_geader";
    public static readonly OP_PAGE_HEADER: string       = "page_geader";
    public static readonly OP_PAGE_PRIMARY_BAR: string  = "page_primary_bar";
    public static readonly OP_PAGE_SECOND_BAR: string   = "page_main_content";
    public static readonly OP_PAGE_MAINCONTENT: string  = "page_main_content";

    public static BASIC: Keyvalue[] = [
        new Keyvalue(JsxOps.OP_FUNC_JSX,         "func_jsx"),
        new Keyvalue(JsxOps.OP_COMPONENT,        "component"),
        new Keyvalue(JsxOps.OP_COMPONENT_REF,    "component ref"),
        new Keyvalue(JsxOps.OP_BUTTONS,          "buttons"),
        new Keyvalue(JsxOps.OP_ICON_BUTTONS,     "icon buttons"),
        new Keyvalue(JsxOps.OP_GRID,             "grids"),
        new Keyvalue(JsxOps.OP_PAGE,             "page"),
        new Keyvalue(JsxOps.OP_PAGE_HEADER,      "page header"),
        new Keyvalue(JsxOps.OP_PAGE_PRIMARY_BAR, "page primary bar"),
        new Keyvalue(JsxOps.OP_PAGE_SECOND_BAR,  "page second bar"),
        new Keyvalue(JsxOps.OP_PAGE_MAINCONTENT, "page main content"),
    ];

};//end class

export class TypeScriptStyleModule {

    public static readonly OP_OBJ: string = "func_def";
    public static readonly OP_THEME: string = "func_def";

};//end class