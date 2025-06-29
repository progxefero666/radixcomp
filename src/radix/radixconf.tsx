//src\radix\radixconf.ts

import { MagnifyingGlassIcon, PersonIcon, LockClosedIcon } from "@radix-ui/react-icons";

/*
| size | Uso común            | Equivalente visual aproximado |
| ---- | -------------------- | ----------------------------- |
| "1"  | pequeño              | \~12px font, \~4px padding    |
| "2"  | mediano (default)    | \~14px font, \~8px padding    |
| "3"  | grande               | \~16px font, \~12px padding   |
| "4"  | XL (solo en algunos) | \~18px+ font                  |*/

/**
 * RadixConf.VARIANTS
 */
export class RadixConf {

    public static readonly SIZES = {
        size_1: "1" as any,
        size_2: "2" as any,
        size_3: "3" as any,
        size_4: "4" as any,
    };

    //variant="plain"
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

    public static readonly RADIUS = {
        none: "none" as any,
        small: "small" as any,
        medium: "medium" as any,
        large: "large" as any,
        full: "full" as any,
    };

    //placeholder = "Enter text..." 
    public static readonly INPUT_TEXT_TYPES = {
        text: "text" as any,
        email: "email" as any,
        password: "password" as any,
        search: "search" as any,
        url: "url" as any,
        tel: "tel" as any,
    };

    public static readonly INPUT_TEXT_ICONS = {
        search: "search" as any,
        person: "person" as any,
        lock: "lock" as any
    };

    public static readonly ALERT_SUCCESS_STYLE: string
        = "alert alert-success w-auto flex justify-center fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50";


    public static getIcon = (inputType: any) => {
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

}//end class