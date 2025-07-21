//src\common\types.ts


export type FieldType = "text" |"textarea" | "check" | "number" | "decimal" | 
                        "date" | "datetime" | "collection" | "hidden" |  "file";
                        
//"url" | "email"  | "password" | "tel"  

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
    format?:TNumeric,
    pk?: boolean,
    fk?: boolean,
    fxattrs?:TFxDecorator;
}    