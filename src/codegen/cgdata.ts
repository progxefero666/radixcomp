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

    public static readonly STRPATTERN_A: string = "__[A]__";

    //public static readonly PATTERN_B: Pattern = {start:"^[", end:"]^"};
    //public static readonly PATTERN_C: Pattern = {start:"^¡", end:"¡^"};
    //public static readonly PATTERN_D: Pattern = {start:"^<", end:">^"};

   

};//end class