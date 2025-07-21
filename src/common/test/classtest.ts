
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
    @defaultValue(null)
    public name: string;

    @field({ftype:"text",name:"description",required:true,length:{min:0,max:255}})
    @defaultValue("default description")
    public description: string;

    @field({ftype:"textarea",name:"context",required:false,length:{min:0,max:-1}})
    @defaultValue("default context")
    public context: string|null = null;

    @field({ftype:"decimal",name:"importe",required:true,format:{cntint:10,cntdec:2}})
    @defaultValue("25.667")
    public importe: number|null = null;

    @field({ftype:"number",name:"version",required:true,length:{min:0,max:255}})
    @defaultValue(null)
    public version: number|null = null;

    @field({ftype:"text",name:"appurl",length:{min:19,max:500}})
    @defaultValue(null)
    public appurl: string|null = null;
    
    @field({ftype:"check",name:"localdev"})
    @defaultValue(false)
    public localdev: boolean;

    @field({ftype:"date",name:"updated",required:true,generated:true})
    @defaultValue(null)
    public updated: Date;

    constructor(id:number|null,
                codelang_id:number,
                name:string,
                description:string,
                context:string|null,
                importe:number|null,  
                version:number|null,  
                appurl:string|null,
                localdev:boolean,
                updated:Date ) {

        this.id          = id;
        this.codelang_id = codelang_id;
        this.name        = name;
        this.description = description;
        this.context    = context;
        this.importe     = importe;
        this.version     = version; 
        this.appurl      = appurl;
        this.localdev    = localdev;
        this.updated     = updated;
    }//end constructor


  
}//end class
