
//table_application.ts

import { field } from "src/common/decorators";
import { TFieldDecorator } from "src/common/types";
/**
 * Db Table Entity Class Application
 **/
export class Test {

    @field({ftype:"number",pk: true,name:"id",required:true})
    public id:number|null = null;

    @field({ftype:"number",name:"codelang_id",fk:true,fxattrs:{table:"codelang"}})
    public codelang_id: number;

    @field({ftype:"text",name:"name",required:true})
    public name:        string;

    @field({ftype:"text",name:"description",required:true,length:{min:0,max:255}})
    public description: string;

    @field({ftype:"numeric",name:"description",required:true,length:{min:0,max:255}})
    public osystem:     number|null = null;
    public appurl:      string|null = null;
    public localdev:    boolean = true;
    public usedocker:   boolean = false;
    public controluser: boolean = false;
    public updated:     Date;//generated

    constructor(id:number|null,
                codelang_id:number,
                name:string,
                description:string,
                osystem:number|null,    
                appurl:string|null,
                localdev:boolean,
                updated:Date ) {

        this.id = id;
        this.codelang_id = codelang_id;
        this.name = name;
        this.description = description;
        this.osystem = osystem;
        this.appurl = appurl;
        this.localdev = localdev;
 
        this.updated = updated;
    }


  
}//end class
