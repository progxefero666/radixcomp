//src\codegen\data\cgdatatypes.ts

export type TPattern = {
    start: string;
    end: string;
};

export class Pattern {

    public patt:    TPattern;
    public id:      string | null;    
    public varname: string | null = null;;

    constructor(patt:TPattern,id: string|null, varname:string|null) {
        this.patt    = patt;
        this.id      = id ?? null;
        this.varname = varname ?? null;
    };//end

};//end class


/**
 * class TInputPattern
 */
export class TInputPattern  {
    public id:      string;
    public pattern: TPattern;
    public value:   string;
    public variable:string|null = null;
    public label:   string|null;

    constructor(id: string,pattern:TPattern,variable:string|null,label: string|null,value:string|null) {
        this.id = id;
        this.pattern = pattern;
        this.variable = variable ?? null;
        this.label = label ?? null;
        this.value = value ?? "";        
    };//end


}//end class

/*
export class TInputPattern  {
    public id:     string;
    public label:  string;
    public value:  string;
    public pattId: string;
    public pattValue:TPattern|null = null;

    constructor(id: string, label: string, value:string, pattId:string, pattValue?:TPattern ) {
        this.id = id;
        this.label = label;
        this.value = value;
        this.pattId = pattId;
        if(pattValue) {this.pattValue = pattValue;}
    };//end

    public setPattvalue(pattvalue: TPattern) {
        this.pattValue = pattvalue;
    };//end

}//end class
*/