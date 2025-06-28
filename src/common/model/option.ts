//src\common\model\option.ts

/**
 * class Option
 */
export class Option {

    public id: string;
    public text: string;
    public icon: string;

    constructor(name:string,text:string,icon?:string) {
        this.id = name;
        this.text = text;
        this.icon = icon ?? "undefined";
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

    public static build(jsonString: string): Option {
        const obj = JSON.parse(jsonString);
        return new Option(obj.name, obj.title, obj.icon);
    }

}//end class