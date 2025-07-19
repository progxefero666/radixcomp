//src\codegen\data\model\pattern.ts


/**
 * class Pattern
 */
export class Pattern {

    public start:   string;
    public end:     string;   
    public defIcon: string;
    public actIcon: string;

    constructor(start:string,end:string,icon:string) {
        this.start    = start;
        this.end      = end;
        this.defIcon = icon+ ".png";
        this.actIcon = icon.concat("_active.png");
    };//end

};//end class

