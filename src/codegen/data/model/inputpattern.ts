//src\codegen\data\inputpattern.ts

import { TPattern } from "src/codegen/data/model/pattern";

/**
 * class TInputPattern
 * public value:   string;
 */
export class InputPattern  {
    public id:      number;
    public pattern: TPattern;
    public label:   string|null;
    public variable:string|null = null;

    constructor(id: number,pattern:TPattern) {
        this.id = id;
        this.pattern = pattern;
        this.label = "Parameter " + id;
    };//end

    public getValue(): string {
        return this.pattern.start + this.pattern.end;
    };//end
    
}//end class
