//src\common\model\inputfield.ts

import { TypeInput } from "@/common/types";
import { Option } from "@/common/model/option";
import { TRange } from "@/radix/radixtypes";


export class InputField {

    public id: string;
    public itype: TypeInput;
    public placeholder: string;
    public value: any;
    public label: string | null = null;
    public length: TRange | null = null;

    constructor(itype: TypeInput, id: string,
        placeholder: string, value: string,
        label: string | null, length?: TRange) {

        this.itype = itype;
        this.id = id;

        this.placeholder = placeholder;
        this.value = value;
        this.label = label;
        if (length) { this.length = length }
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

    public static build(jsonString: string): Option {
        const obj = JSON.parse(jsonString);
        return new Option(obj.name, obj.title, obj.icon, null, null);
    }

}//end class
