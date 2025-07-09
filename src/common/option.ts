//src\common\model\option.ts

/**
 * class Option
 */
export class Option {

    public id:   string;
    public text: string;
    public icon: string|null = null;
    public path: string|null = null;
    public url:  string|null = null;

    constructor(name:string,text:string,
                icon:string|null,path:string|null,url:string|null) {
        this.id = name;
        this.text = text;
        this.icon = icon;
        this.path = path;
        this.url = url;
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

    public static build(jsonString: string): Option {
        const obj = JSON.parse(jsonString);
        return new Option(obj.name, obj.title, obj.icon,null, null);
    }

}//end class