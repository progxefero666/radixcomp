
//table_application.ts

import { defaultValue, field } from "@/common/decorators";
import { TFieldDecorator } from "@/common/types";
/**
 * Db Table Entity Class Application
 **/
export class Test {

    @field({ftype:"number",name:"id",pk:true})
    public id:number|null = null;

    @field({ftype:"number",name:"codelang_id",fk:true,fxattrs:{table:"codelang",id:"id",name:"name" }})
    public codelang_id: number;

    @field({ftype:"text",name:"name",required:true})
    public name: string;

    @field({ftype:"text",name:"description",required:true,length:{min:0,max:255}})
    public description: string;

    @field({ftype:"decimal",name:"importe",format:{cntint:10,cntdec:2}})
    public importe: number|null = null;

    @field({ftype:"number",name:"version",required:true,length:{min:0,max:255}})
    public version: number|null = null;

    @field({ftype:"text",name:"appurl",required:false,length:{min:19,max:500}})
    public appurl: string|null = null;
    
    @field({ftype:"check",name:"localdev"})
    @defaultValue(false)
    public localdev: boolean;

    @field({ftype:"date",name:"updated",required:true})
    public updated: Date;

    constructor(id:number|null,
                codelang_id:number,
                name:string,
                description:string,
                importe:number|null,  
                version:number|null,  
                appurl:string|null,
                localdev:boolean,
                updated:Date ) {

        this.id          = id;
        this.codelang_id = codelang_id;
        this.name        = name;
        this.description = description;
        this.importe     = importe;
        this.version     = version; 
        this.appurl      = appurl;
        this.localdev    = localdev;
        this.updated     = updated;
    }//end constructor


  
}//end class
