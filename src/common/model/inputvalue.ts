//src\common\model\inputvalue.ts

import { Validation } from "@/common/model/validation";

/**
 * class InputValue
 * Represents a simple input value with an id and value. Validation.DEFAULT
 */
export class InputValue {

    public name:       string;
    public value:      any|null;
    public validation: Validation = Validation.DEFAULT;

    constructor(name:string,value:any|null,validation?:Validation) {
        this.name  = name;
        this.value = value;
        if(validation) {this.validation = validation;}
    }//end 

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

    public static build(jsonString: string): InputValue {
        const obj = JSON.parse(jsonString);
        return new InputValue(obj.id, obj.value);
    }

}//end class