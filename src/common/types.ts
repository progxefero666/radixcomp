//src\common\types.ts

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
    ftype: string ; //default type
	name: string;
    generated?: boolean;
    required?: boolean;
	len?: TLengthRange,
    numeric?:TNumeric,
    pk?: boolean,
    fk?: boolean,
    fxattrs?:TFxDecorator;
}    