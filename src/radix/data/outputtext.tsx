//src\radix\data\outputtext.tsx

import React from "react";
import { Box, Flex,Text,TextArea  } from "@radix-ui/themes";
import { Label } from "radix-ui";
import { RadixConf } from "@/radix/radixconf";
//React.CSSProperties | undefined

const comppStyle = {
    borderRadius: '14px',
    border: '1px  rgba(40, 144, 255, 0.9)',
    padding: 'var(--space-2)',
    boxShadow: '0px 0px 1px rgba(39, 39, 39, 0.9)' 
};

const dataStyle = {
    borderRadius: '4px',
    border: '1px  rgba(121, 119, 118, 0.9)',
};

interface CompProps {
    inline?: boolean;
    label?: string;
    bigsize?: boolean;
    data: string;
}
export default function ({bigsize,inline,label,data}: CompProps) {

    const label_color   = label ? RadixConf.COLORS.gray : null;
    const data_size    = label ? RadixConf.SIZES.size_2 : null;

    let showInline: boolean = inline ?? false;
    let isTextArea: boolean = false;
    if(bigsize) {showInline = false;isTextArea = true;}
    const compDirection = showInline ? "row" : "column";

    return (
        <Flex as="div" width="100%" direction={compDirection} style={comppStyle} px="1" py="1"  >
            {label ? 
            <Label.Root htmlFor="firstName"  color={label_color} >
                {label}
            </Label.Root>:null}                
            <Flex as="div" width="100%" direction="column" >
                {!isTextArea ?
                    <Text size={data_size}>{data}</Text>:
                    <TextArea size={data_size}>{data}</TextArea>}
            </Flex>                         
        </Flex>
    )

}//end component