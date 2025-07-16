//src\codegen\data\cgdata.ts

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

export class TypeScriptModule {
    public static readonly OP_CLASS: string = "class";
    public static readonly OP_FUNC: string = "func_def";
    public static readonly OP_FUNC_STATIC: string = "func_static";
    public static readonly OP_FUNC_PROMISE: string = "func_promise";
    public static readonly OP_INTERFACE: string = "interface";
    public static readonly OP_TYPE: string = "type";
    public static readonly OP_STATES: string = "func_def";
    public static readonly OP_USE_EFFECT: string = "func_def";

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