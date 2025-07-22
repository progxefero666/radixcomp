//src\common\model\inputfield.ts


import { Option } from "@/common/model/option";
import { TRange } from "@/radix/radixtypes";
import { FieldType } from "../types";



export class InputField {

    public id: string;
    public itype: FieldType;
    public placeholder: string;
    public value: any|null;
    public label: string | null = null;
    public length: TRange | null = null;

    constructor(itype: FieldType, id: string,
        placeholder: string, value: any|null,
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
        return new Option(obj.name, obj.title, obj.icon);
    }

}//end class
