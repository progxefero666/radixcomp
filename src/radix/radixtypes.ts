//src\radix\radixmodels.ts

import { Flex } from '@radix-ui/themes';
import type { ComponentProps } from 'react';


type FlexProps = ComponentProps<typeof Flex>;
export type radixTypeDirection = FlexProps['direction'];

export type radixTypeComp = {
    color: any; 
    size: any;
    variant: any;
    radius: any;
}

