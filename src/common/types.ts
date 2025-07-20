//src\common\types.ts

export type TLengthRange = {
    min: number;
    max: number;
}

export type TKeyvalue = {
    key: string;
    value: any;
}

export type TFxDecorator = {
    table?: string;
    tableId: string;
    tableName: string;
}

export type TFieldDecorator = {
    ftype: string;
	name: string;
    generated?: boolean;
    required?: boolean;
	len: TLengthRange,
    pk?: boolean,
    fk?: boolean,
    fxattrs?:TFxDecorator;
}    