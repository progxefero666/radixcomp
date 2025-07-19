//src\codegen\data\inputpattern.ts


/**
 * class TInputPattern
 */
export class InputPattern  {
    
    public id:      number;
    public patternStart:string;
    public patternEnd:  string;   
    public variable:    string|null = null;
    public label:       string|null;

    constructor(id: number,patternStart:string,patternEnd:string,variable:string|null) {
        this.id = id;
        this.patternStart = patternStart;
        this.patternEnd = patternEnd;
        this.variable = variable;

        this.label = "Parameter " + id;
    };//end

    public getValue(): string {
        return this.patternStart + this.patternEnd;
    };//end
    
}//end class
