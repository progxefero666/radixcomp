//src\common\util\showalerts.ts

import { JsonHelper } from "./jsonhelper";

/**
 * class ShowAlerts.show
 */
export class ShowAlerts {
    
    public static readonly SEPARATOR: string = " : ";

    static show(message: string): void {
        alert(message);
    }
    
    static showCouple(valueA:string,valueB:string): void {
        alert(valueA.concat(ShowAlerts.SEPARATOR).concat(valueB));
    }

    static showError(message: string): void {
        alert("Error: ".concat(message));
    }    

    static showSuccess(message: string): void {
        alert(message);
    }

    static showJson(json: string): void {       
        alert( JsonHelper.toJsonString(json));
    }

}//end class