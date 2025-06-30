//src\radix\radixmodels.ts

import { Flex } from '@radix-ui/themes';
import type { ComponentProps } from 'react';
import { Option } from "@/common/model/option";

type FlexProps = ComponentProps<typeof Flex>;
export type radixTypeDirection = FlexProps['direction'];

export type radixTypeComp = {
    color: any; 
    size: any;
    variant: any;
    radius: any;
}

export interface GroupCompProps {
    autocommit?: boolean;
    name?: string;
    options: Option[];
    label?: string;
    direction?: radixTypeDirection;
    value?: any;
    onselect: (value: string,compname?:string) => void;
    autofocus?: boolean;
}