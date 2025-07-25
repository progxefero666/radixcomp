//src\radix\radixconf.tsx

import { MagnifyingGlassIcon, PersonIcon, LockClosedIcon } from "@radix-ui/react-icons";

/*
| size | Uso común            | Equivalente visual aproximado |
| ---- | -------------------- | ----------------------------- |
| "1"  | pequeño              | \~12px font, \~4px padding    |
| "2"  | mediano (default)    | \~14px font, \~8px padding    |
| "3"  | grande               | \~16px font, \~12px padding   |
| "4"  | XL (solo en algunos) | \~18px+ font                  |*/

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
    sky= "sky" , 
};

export enum INPUT_TEXT_TYPES {
    text = "text" as any,
    email = "email" as any,
    password = "password" as any,
    search = "search" as any,
    url = "url" as any,
    tel = "tel" as any,
};

export enum INPUT_TEXT_ICONS {
    search = "search" as any,
    person = "person" as any,
    lock = "lock" as any
};


export const getInputTextIcon = (inputType: any) => {
    switch (inputType) {
        case "search":
            return () => <MagnifyingGlassIcon height="16" width="16" />;
        case "person":
            return () => <PersonIcon height="16" width="16" />;
        case "lock":
            return () => <LockClosedIcon height="16" width="16" />;
        default:
            return null;
    }
};

/**
 * RadixConstants.KEY_INTRO
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

     public static readonly KEY_INTRO: string = "Enter";

}//end class 


/**
 * RadixConf.SIZES
 */
export class RadixConf {

    public static readonly SIZES = {
        size_1: "1" as any,
        size_2: "2" as any,
        size_3: "3" as any,
        size_4: "4" as any,
    };

    public static readonly RADIUS = {
        none:    "none" as any,
        small:   "small" as any,
        medium:  "medium" as any,
        large:   "large" as any,
        full:    "full" as any
    };
    
    public static readonly VARIANTS = {
        plain: "plain" as any,
        classic: "classic" as any,
        solid: "solid" as any,
        soft: "soft" as any,
        surface: "surface" as any,
        ghost: "ghost" as any,
        outlined: "outlined" as any,
        subtle: "subtle" as any,
    };

    public static readonly ALERT_SUCCESS_STYLE: string
        = "alert alert-success w-auto flex justify-center fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50";



    public static readonly ICON_COLLAPSE_OFF: string = "ti-angle-up";
    public static readonly ICON_COLLAPSE_ON: string = "ti-angle-down";
    public static readonly ICON_COLLAPSE_COLOR: string = "black";
    public static readonly ICON_OPEN: string = "ti-eye";
    public static readonly ICON_DELETE: string = "ti-trash";
    public static readonly ICON_MODE_EDITION: string = "ti-write";
    public static readonly ICON_SAVE: string = "ti-save";
    public static readonly ICON_RUN: string = "ti-control-play";
    public static readonly ICON_EXPORT: string = "ti-export";
    public static readonly ICON_COPY: string = "ti-save";

};//end class