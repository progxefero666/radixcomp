//src\codegen\templates\typescript\tstemplates.ts



/**
 * class TmpTypeScript
 */
export class TsTemplates {
public static t_class: string = 
   `/**
 * class ^%classname%^
 */
export class ^%classname%^ {
    
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

};//end class

