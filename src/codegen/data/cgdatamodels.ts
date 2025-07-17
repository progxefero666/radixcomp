//src\codegen\data\cgdatatypes.ts

export type TPattern = {
    start: string;
    end: string;
};


export type TInput = {
    key: string;
    value: any;
}

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