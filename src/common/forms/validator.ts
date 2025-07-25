//src\common\forms\validator.ts


import { Validation } from "@/common/model/validation";
import { Constants } from "@/common/constants";
import { XForms } from "@/common/forms/xforms";


/**
 * Validator.showErrorMessage
 */
export class Validator {

    public static ValidateItem = (ftype:string,value:any,format:any|null,min:number|null,max:number|null):Validation => {
        
        const validation:Validation = new Validation(ftype,Constants.SUCCESS);
        
        switch(ftype) {
            case XForms.FT_TEXT: break;
            case XForms.FT_TEXTAREA: break;
            case XForms.FT_NUMBER: break;
            case XForms.FT_DECIMAL: break;
            case XForms.FT_COLLECTION: break;                
            case XForms.FT_DATE: break;
            case XForms.FT_DATETIME: break;
        }//end switch

        return validation;
    };//end

    public static showErrorMessage(fieldName: string, errorMessage: string): boolean {
        alert(`Error in field "${fieldName}": ${errorMessage}`);
        return true;
    }

    public static validateForm(formData: any): boolean {
        // Implement form validation logic here
        return true;
    }

};//end class