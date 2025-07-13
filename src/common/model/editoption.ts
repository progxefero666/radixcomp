// EditableOptionId


/**
 * 
 */
export class EditableOptionId {

    public id: number;
    public orden: number;
    public value: string;

    constructor(id: number, orden: number, value: string) {
        this.id = id;
        this.orden = orden;
        this.value = value;
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class