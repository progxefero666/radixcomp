//src\common\model\inputvalue.ts
;
import { Validation } from "@/common/model/validation";
import { FieldType } from "@/common/types";

/**
 * class InputValue
 * Represents a simple input value with an id and value. Validation.DEFAULT
 */
export class InputValue {

    public name:       string;
    public itype:      FieldType;
    public value:      any|null;
    public validation: Validation = Validation.DEFAULT;

    constructor(itype:FieldType,name:string,value:any|null,validation?:Validation) {
        this.itype = itype;
        this.name  = name;
        this.value = value;
        if(validation) {this.validation = validation;}
    }//end 

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

    public static build(jsonString: string): InputValue {
        const obj = JSON.parse(jsonString);
        return new InputValue(obj.id,obj.itype, obj.value);
    }

}//end class