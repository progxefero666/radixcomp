
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


type FlexProps = ComponentProps<typeof Flex>;
export type radixTypeDirection = FlexProps['direction'];

export type TRadixComponent = {
    color: any; 
    size: any;
    variant: any;
    radius: any;
}

export type TRange = {
    min: number;
    max: number;
}
