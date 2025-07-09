//src\front\collections\appcodelang.ts

//export type TCodelang = {id:number;cgname:string;description:string;};

/**
 * - front-end application common collection
 * - for codelang db table
 */
export class AppCollCodelang { 
    public id: number;
    public cgname: string;
    public icon: string;

    constructor(id:number,cgname:string,icon:string) {
        this.id = id;
        this.cgname = cgname;
        this.icon = icon;
    }

}//end class

interface CompProps {
    value?: string;
}

export const XPopOverA = ({ value}: CompProps) => {

}


/*
<IconButton>
	<MagnifyingGlassIcon width="18" height="18" />
</IconButton>
*/