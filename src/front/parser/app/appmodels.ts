// src\front\parser\app\apptypes.ts


//..............................................................................................
// front-end application base => classes, interfaces and types
//..............................................................................................


//export type TCodelang = {id:number;cgname:string;description:string;};
export class Codelang { 
    public id: number;
    public cgname: string;
    public description: string;

    constructor(id:number,cgname:string,description:string) {
        this.id = id;
        this.cgname = cgname;
        this.description = description;
    }

}//end class

