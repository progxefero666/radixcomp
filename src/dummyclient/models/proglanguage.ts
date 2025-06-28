//src\client\models\proglanguage.ts


/**
 * Class Proglanguage
 */
export class Proglanguage {

    public id: number | null = null;
    public name: string = "undefined";
    public description: string = "undefined";

    constructor(id:number|null,name:string,description:string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

}//end class