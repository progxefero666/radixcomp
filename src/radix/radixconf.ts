//src\radix\radixconf.ts

/*
| size | Uso común            | Equivalente visual aproximado |
| ---- | -------------------- | ----------------------------- |
| "1"  | pequeño              | \~12px font, \~4px padding    |
| "2"  | mediano (default)    | \~14px font, \~8px padding    |
| "3"  | grande               | \~16px font, \~12px padding   |
| "4"  | XL (solo en algunos) | \~18px+ font                  |*/

export class RadixConf {
    static readonly sizes = {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4"
    };

    static readonly variants = {
        solid: "solid",
        soft: "soft",
        ghost: "ghost"
    };

    static readonly radius = {
        none: "none",
        small: "small",
        medium: "medium",
        large: "large",
        full: "full"
    };

    static readonly type = {
        text: "text",
        email: "email",
        password: "password",
        search: "search",
        url: "url",
        tel: "tel"
    };

    
    public static readonly ALERT_SUCCESS_STYLE: string
        = "alert alert-success w-auto flex justify-center fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50";


}//end class