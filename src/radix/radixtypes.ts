
import { Flex } from '@radix-ui/themes';
import type { ComponentProps } from 'react';

export type TValueProps = {
    tvalue: string,
    tcolor: string,
    iname: string,
    icolor: string,
    ialign: string
};


export type TSelected = {
    id: string,
    value: boolean
};

export type TSelection = {
    id: string,
    items: TSelected[]
};

export type TOption = {
    name: string,
    text: string,
    selected: boolean
};

export type TMenu = {
    name?: string,
    items: TOption[]
};


type FlexProps = ComponentProps<typeof Flex>;
export type radixTypeDirection = FlexProps['direction'];

export type radixTypeComp = {
    color: any; 
    size: any;
    variant: any;
    radius: any;
}

export type TRange = {
    min: number;
    max: number;
}
export type TInputText ={
    id: string;
    length: TRange;
    placeholder?: string;
    value?:string;
    label?: string;    
    //onsubmit: (value:string,id?:string) => void;
}