/**
 * class Xefero
 */
export class Xefero {
    
    public static readonly DEF: string = "n";

    public id: number;
    public name: string;
    public selected: boolean;

    constructor(id: number, name: string, selected: boolean) {
        this.id = id;
        this.name = name;
        this.selected = selected;
    };//end

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    };//end
    
}//end class