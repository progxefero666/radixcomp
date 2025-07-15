//src\common\types.ts

export type TKeyvalue = {
    key: string;
    value: any;
}

export type TypeInput = "number" | "search" | "time" | "text" | "hidden" | 
                        "date" | "datetime-local" | "email" | "month" | "password" |
                        "tel" | "url" | "week" | undefined;

                        