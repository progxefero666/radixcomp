//src\codegen\data\inputpattern.ts

import { TPattern } from "src/codegen/data/model/pattern";

/**
 * class TInputPattern
 */
export class InputPattern  {
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
