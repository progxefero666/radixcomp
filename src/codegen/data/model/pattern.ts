//src\codegen\data\model\pattern.ts

export type TPattern = {
    start: string;
    end: string;
};

export class Pattern {

    public patt:        TPattern;
    public defIcon: string;
    public actIcon: string;

    public varname: string | null = null;    

    constructor(patt:TPattern,defIcon:string,actIcon:string) {
        this.patt    = patt;
        this.defIcon = defIcon;
        this.actIcon = actIcon;
    };//end

};//end class


/*
export class Pattern {

    public patt:    TPattern;
    public id:      string | null;    
    public varname: string | null = null;
    public icon:    string | null = null;

    constructor(patt:TPattern,id: string|null, varname:string|null,icon:string|null = null) {
        this.patt    = patt;
        this.id      = id;
        this.varname = varname;
        this.icon    = icon;
    };//end

};//end class
*/