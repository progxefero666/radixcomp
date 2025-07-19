//src\common\model\inputvalue.ts

/**
 * class InputValue
 * Represents a simple input value with an id and value.
 */
export class InputValue {

    public id: string;
    public value: any|null;

    constructor(id: string, value: any|null) {
        this.id = id;
        this.value = value;
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

    public static build(jsonString: string): InputValue {
        const obj = JSON.parse(jsonString);
        return new InputValue(obj.id, obj.value);
    }

}//end class