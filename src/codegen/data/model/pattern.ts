//src\codegen\data\model\pattern.ts


/**
 * class Pattern
 */
export class Pattern {

    public start:   string;
    public end:     string;   
    public defIcon: string;
    public actIcon: string;

    constructor(start:string,end:string,defIcon:string) {
        this.start    = start;
        this.end      = end;
        this.defIcon = defIcon;
        this.actIcon = this.defIcon.concat("_active");
    };//end

};//end class

