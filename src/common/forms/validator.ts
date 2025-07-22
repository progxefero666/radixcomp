//src\common\forms\validator.ts


import { Validation } from "@/common/model/validation";
import { Constants } from "../constants";
import { XForms } from "@/codegen/forms/xforms";


/**
 * Validator class for form validation
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

    public static validateForm(formData: any): boolean {
        // Implement form validation logic here
        return true;
    }

};//end class