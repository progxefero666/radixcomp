//src\common\types.ts


export type FieldType = "text" |"textarea" | "check"    | "number" | "collection" | "url" | "decimal" | 
                        "date" | "datetime" | "email"  | "password" | "file"  | "tel"  | "hidden";
                        
export type TKeyvalue = {
    key: string;
    value: any;
}

//types
export type TLengthRange = {
    min: number;
    max: number;
}

export type TNumeric = {
    type: string;
    cntint: number;
    cntdec: number;
}

export type TFxDecorator = {
    table?: string;
    id?: string;
    name?: string;
}

export type TFieldDecorator = {
    ftype: string ; 
	name: string;
    generated?: boolean;
    required?: boolean;
	length?: TLengthRange, //!!!!!!
    numeric?:TNumeric,
    pk?: boolean,
    fk?: boolean,
    fxattrs?:TFxDecorator;
}    