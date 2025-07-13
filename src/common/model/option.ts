//src\common\model\option.ts


/**
 * class Option
 */
export class Option {

    public id: string;
    public text: string;
    public icon: string | null = null;
    public path: string | null = null;
    public url: string | null = null;

    constructor(name: string, text: string,
        icon: string | null, path?: string | null, url?: string | null) {
        this.id = name;
        this.text = text;
        this.icon = icon;
        this.path = path ?? null;
        this.url = url ?? null;
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

    public static build(jsonString: string): Option {
        const obj = JSON.parse(jsonString);
        return new Option(obj.name, obj.title, obj.icon, null, null);
    }

}//end class



/**
 * class Editable Option
 */
export class EditableOption {

    public id: string;
    public orden: number;
    public text: string;

    constructor(id: string, orden: number, text: string) {
        this.id = id;
        this.orden = orden;
        this.text = text;
    }

}//end component

export class EditableCollection {

    public id: string;
    public label: string | null = null;
    public items: EditableOption[];

    constructor(id: string, items: EditableOption[], label: string | null) {
        this.id = id;
        this.items = items;
        this.label = label;
    }

}//end component