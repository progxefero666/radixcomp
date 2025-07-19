//src\codegen\data\model\pattern.ts


/**
 * class Pattern
 */
export class Pattern {

    public start:   string;
    public end:     string;   
    public varname: string | null = null;  
    public defIcon: string;
    public actIcon: string;

    constructor(start:string,end:string,varname:string|null,defIcon:string) {
        this.start    = start;
        this.end      = end;
        this.varname = varname;
        this.defIcon = defIcon;
        this.actIcon = this.defIcon.concat("_active");
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