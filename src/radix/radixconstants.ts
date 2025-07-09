// File: src\radix\radixconstants.ts

export enum CONTROL_TYPES {
    TEXT     = "text",
    CHECKBOX = "checkbox",
    EMAIL    = "email",
    NUMBER   = "number",
    DATE     = "date",    
    RANGE    = "range",
    URL      = "url",
    COLOR    = "color",
    PASSWORD = "password",    
    SEARCH   = "search",
    FILE     = "file"   
}

/*
- FormControl` es un wrapper sobre el elemento nativo `<input>`, 
        soporta todos los atributos HTML estándar como:
- `required` 
- `disabled` 
- `readOnly` 
- `placeholder` 
- `maxLength`
- `minLength`
- `min`
- `max`
- `step` 
- `pattern` 
- `accept`
- `multiple`
*/


/**
 * class RadixConstants.ITEM_CHECKED RadixConstants.ITEM_UNCHECKED
 *  
 */
export class RadixConstants {   

    public static readonly RADIX_VERSION: string = "0.1.0";
    public static readonly RADIX_NAME: string = "Radix UI";
    public static readonly RADIX_AUTHOR: string = "NextApps";
    public static readonly RADIX_URL: string = "https://nextapps.dev/radixui";
    public static readonly RADIX_LICENSE: string = "MIT License";

    public static readonly RADIX_THEME_LIGHT: string = "light";
    public static readonly RADIX_THEME_DARK: string = "dark";

    public static readonly ITEM_CHECKED: string = "1";
    public static readonly ITEM_UNCHECKED: string = "2";

}//end class 


/**
 * class RadixKeys.KEY_INTRO
 */
export class RadixKeys {   

    public static readonly KEY_INTRO: string = "Enter";


}//end class 


export enum DB_ITEM_ACTION {    
    EDIT    = "edit",
    OPEN    = "open",
    UPDATE    = "update",
    DELETE  = "delete",
    SELECT  = "select",
    MOVEUP  = "moveup",
    MOVEDOWN= "movedown"
}

/**
 * class DbOperations
export class DbOperations {   
}//end class 
 */