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

export enum RADIX_SIZES {
    size_1= "1",
    size_2= "2",
    size_3= "3",
    size_4= "4",
};

export enum RADIX_RADIUS  {
    none    = "none",
    small   = "small",
    medium  = "medium",
    large   = "large",
    full    = "full"
};

export enum RADIX_COLORS {
    gray= "gray",
    mauve= "mauve" ,
    slate= "slate" ,
    sage= "sage" ,
    olive= "olive" ,
    sand= "sand" ,
    tomato= "tomato" ,
    red= "red" ,
    ruby= "ruby" ,
    crimson= "crimson" ,
    pink= "pink" ,
    plum= "plum" ,
    purple= "purple" ,
    violet= "violet" ,
    iris= "iris" ,
    indigo= "indigo" ,
    blue= "blue" ,
    cyan= "cyan" ,
    teal= "teal" ,
    jade= "jade" ,
    green= "green" ,
    grass= "grass" ,
    lime= "lime" ,
    yellow= "yellow" ,
    amber= "amber" ,
    orange= "orange" ,
    brown= "brown" ,
    sky= "sky-7" , 
};

/**
 * class DbOperations
 */
export class DbOperations {   

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
    UPDATE  = "update",
    DELETE  = "delete",
    SELECT  = "select",
    MOVEUP  = "moveup",
    MOVEDOWN= "movedown"
}

export enum DB_ITEM_ACTION_TEXT {    
    EDIT    = "edit",
    OPEN    = "open",
    SAVE    = "Save",
    DELETE  = "delete",
    SELECT  = "select",
}
