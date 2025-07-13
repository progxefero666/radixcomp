// EditableOptionId


/**
 * class CollectionItem
 */
export class CollectionItem {

    public datatype: string;
    public id: number;
    public orden: number;
    public value: any;

    constructor(datatype:string,id: number, orden: number, value: string) {
        this.datatype = datatype;
        this.id = id;
        this.orden = orden;
        this.value = value;
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class