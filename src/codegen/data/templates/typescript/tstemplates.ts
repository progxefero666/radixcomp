//src\codegen\templates\typescript\tstemplates.ts



/**
 * class TmpTypeScript
 */
export class TsTemplates {

public static funct_void: string =
`const ^%f0%^ = (^%f1%^:string,^%f2%^:boolean) => {

};//end`;
    
public static funct_return: string =
`const ^%f0%^ = (^%f1%^:string,^%f2%^:boolean): ^%f3%^ => {
    const result: ^%f3%^ = null;

    return result;
};//end`;

public static funct_async: string =
`const _f0_ = async (^%f1%^:string,^%f2%^:boolean) => {   
    
};//end `;

public static funct_promise: string =
`const ^%f0%^ = async (^%f1%^:string,^%f2%^:boolean): Promise<^%f3%^> => {
    const result: ^%f3%^ = null;
    
    return response;
};//end`;

public static funct_static: string = 
`public static ^%f0%^ = (^%f1%^:string,^%f2%^:boolean): ^%f3%^ => {
    const result: ^%f3%^ = null;
    
    return response;
};//end`; 

public static funct_static_promise: string = 
`public static ^%f0%^ = async (^%f1%^:string,^%f2%^:boolean): Promise<^%f3%^> => {
    const result: ^%f3%^ = null;
    
    return response;
};//end `; 

public static clas: string = 
`/**
 * class ^%f0%^
 */
export class ^%f0%^ {
    
    public static readonly DEF: string = "n";

    public ^¡f1¡^: number;
    public ^<f2>^: string;
    public ^[f3]^: boolean;

    constructor(^¡f1¡^: number, ^<f2>^: string, ^[f3]^: boolean) {
        this.^¡f1¡^ = ^¡f1¡^;
        this.^<f2>^ = ^<f2>^;
        this.^[f3]^ = ^[f3]^;
    };//end

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    };//end
    
}//end class`;

public static class_static: string = 
`/**
 * class ^%f0%^
 */
export class ^%f0%^ {

    public static _f1_ = (^%f1%^:string,^%f2%^:boolean): ^%f3%^ => {
        const response:^%f3%^ = null;
        
        return response;
    };//end  

}//end class`;

};//end class

