//src\common\types.ts

export type TKeyvalue = {
    key: string;
    value: any;
}

export type TypeInput = "text" | "check"    | "number" | "collection" | "password" | "url"  |
                        "date" | "datetime" | "email"  | "password"   | "tel"  | "hidden";

                        