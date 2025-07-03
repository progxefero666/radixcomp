//src\common\util\showalerts.ts

/**
 * class ShowAlerts.show
 */
export class ShowAlerts {
    
    public static readonly SEPARATOR: string = " : ";

    static show(message: string): void {
        alert(message);
    }
    
    static showCouple(valueA:string,valueB:string): void {
        const message = valueA.concat(ShowAlerts.SEPARATOR).concat(valueB);
        alert(message);
    }

    static showError(message: string): void {
        alert(`Error: ${message}`);
    }    

    static showSuccess(message: string): void {
        alert(message);
    }

    static showJson(message: string): void {
        //JsonHelper.toJsonString
        alert(message);
    }

}//end class