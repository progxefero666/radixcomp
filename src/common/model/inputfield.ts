//src\common\model\inputfield.ts

import { TypeInput } from "@/common/types";
import { Option } from "@/common/model/option";


export class InputField {

    public id: string;
    public itype: TypeInput;
    public placeholder: string;
    public value: any;
    public label: string | null = null;
    public maxlength: number | null = null;

    constructor(itype: TypeInput, id: string,
        placeholder: string, value: string,
        label: string | null, maxlength?: number) {

        this.itype = itype;
        this.id = id;

        this.placeholder = placeholder;
        this.value = value;
        this.label = label;
        if (maxlength) { this.maxlength = maxlength }
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

    public static build(jsonString: string): Option {
        const obj = JSON.parse(jsonString);
        return new Option(obj.name, obj.title, obj.icon, null, null);
    }

}//end class
