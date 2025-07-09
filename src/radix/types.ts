
import { Flex } from '@radix-ui/themes';
import type { ComponentProps } from 'react';

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

