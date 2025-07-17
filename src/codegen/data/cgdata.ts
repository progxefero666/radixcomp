//src\codegen\data\cgdata.ts

import { Keyvalue } from "@/common/model/keyvalue";
import { CgEntityOperations } from "../cgoperations";

//................................................................................
// models
//................................................................................
export type TPattern = {
    start: string;
    end: string;
};

export class Pattern {

    public id: number;
    public patt: TPattern;
    public varname?: string;
    public value?: string;

    constructor(id:number,patt:TPattern,varname?:string) {
        this.id = id;
        this.patt = patt;
        if(varname) {
            this.value = patt.start + varname + patt.end;
        }
    };//end

};//end class

//................................................................................
// constants
//................................................................................
export class CgDataConstants {

    public static readonly PATTERN_0: Pattern = new Pattern(0,{start:"__[", end:"]__"});
    public static readonly PATTERN_1: Pattern = new Pattern(1,{start:"^¡", end:"¡^"});
    public static readonly PATTERN_2: Pattern = new Pattern(2,{start:"^<", end:">^"});
    public static readonly PATTERN_3: Pattern = new Pattern(3,{start:"^[", end:"]^"});

    public static STRPATTERN_A: string = "__[A]__";
    public static STRPATTERN_B: string = "__[A]__";
    public static STRPATTERN_C: string = "__[A]__";
    public static STRPATTERN_D: string = "__[A]__";

};//end class


export class TsOperations {

    public static readonly OP_CLASS: string = "class";
    public static readonly OP_FUNCT: string = "function";
    public static readonly OP_FUNCT_STATIC: string = "function_static";
    public static readonly OP_FUNCT_PROMISE: string = "function_promise";
    public static readonly OP_FUNCT_ASYNC: string = "function_promise";
    public static readonly OP_INTERFACE: string = "interface";
    public static readonly OP_TYPE: string = "type";
    public static readonly OP_USE_STATE: string = "use_state";
    public static readonly OP_USE_EFFECT: string = "use_effect";
    public static readonly OP_FUNC_JSX: string = "func_jsx";
    public static readonly OP_COMPONENT: string = "component";
    public static readonly OP_COMPONENT_REF: string = "component_ref";

    public static BASIC: Keyvalue[] = [
        new Keyvalue(TsOperations.OP_CLASS,         "class"),
        new Keyvalue(TsOperations.OP_FUNCT,         "const function"),
        new Keyvalue(TsOperations.OP_FUNCT_STATIC,  "static function"),
        new Keyvalue(TsOperations.OP_FUNCT_ASYNC,   "async function"),
        new Keyvalue(TsOperations.OP_FUNCT_PROMISE, "Promise function"),
        new Keyvalue(TsOperations.OP_INTERFACE,     "Interface"),
        new Keyvalue(TsOperations.OP_TYPE,          "Type"),
        new Keyvalue(TsOperations.OP_USE_STATE,     "Use State"),
        new Keyvalue(TsOperations.OP_USE_EFFECT,    "Use Effect"),
    ];

};//end class
export class TypeScriptJsxModule {

    public static readonly OP_FUNC_JSX: string = "func_jsx";
    public static readonly OP_COMP: string = "component";
    public static readonly OP_COMP_REF: string = "component_ref";


};//end class

export class TypeScriptStyleModule {

    public static readonly OP_OBJ: string = "func_def";
    public static readonly OP_THEME: string = "func_def";

};//end class