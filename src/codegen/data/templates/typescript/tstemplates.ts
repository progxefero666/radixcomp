//src\codegen\templates\typescript\tstemplates.ts

/**
 * Templates TypeScript
 */
export class TsTemplates {

public static funct_void: string =
`const ^%v0%^ = (^%v1%^:string,^%v2%^:boolean) => {

};//end`;
    
public static funct_return: string =
`const ^%v0%^ = (^%v1%^:string,^%v2%^:boolean): ^%v3%^ => {
    const result: ^%v3%^ = null;

    return result;
};//end`;

public static funct_async: string =
`const ^%v0%^ = async (^%v1%^:string,^%v2%^:boolean) => {   
    
};//end `;

public static funct_promise: string =
`const ^%v0%^ = async (^%v1%^:string,^%v2%^:boolean): Promise<^%v3%^> => {
    const result: ^%v3%^ = null;
    
    return response;
};//end`;

public static funct_static: string = 
`public static ^%v0%^ = (^%v1%^:string,^%v2%^:boolean): ^%v3%^ => {
    const result: ^%v3%^ = null;
    
    return response;
};//end`; 

public static funct_static_promise: string = 
`public static ^%v0%^ = async (^%v1%^:string,^%v2%^:boolean): Promise<^%v3%^> => {
    const result: ^%v3%^ = null;
    
    return response;
};//end `; 

public static clas: string = 
`/**
 * class ^%v0%^
 */
export class ^%v0%^ {
    
    public static readonly DEF: string = "n";

    public ^¡v1¡^: number;
    public ^<v2>^: string;
    public ^[v3]^: boolean;

    constructor(^¡v1¡^: number, ^<v2>^: string, ^[v3]^: boolean) {
        this.^¡v1¡^ = ^¡v1¡^;
        this.^<v2>^ = ^<v2>^;
        this.^[v3]^ = ^[v3]^;
    };//end

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    };//end
    
}//end class`;

public static class_static: string = 
`/**
 * class ^%v0%^
 */
export class ^%v0%^ {

    public static _f1_ = (^%v1%^:string,^%v2%^:boolean): ^%v3%^ => {
        const response:^%v3%^ = null;
        
        return response;
    };//end  

}//end class`;

};//end class

