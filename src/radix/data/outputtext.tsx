//src\radix\data\outputtext.tsx

import React from "react";
import { Box, Flex,Text,TextArea  } from "@radix-ui/themes";
import { Label } from "radix-ui";
import { RadixConf } from "@/radix/radixconf";

const labelBoxStyle = {
    borderBottom: '1px solid rgba(54, 56, 54, 0.9)',
};
const dataStyle = {
    background: ' rgba(25, 25, 25, 0.9)',    
    borderRadius: '8px',
    border: '1px solid rgba(91, 129, 225, 0.9)',
};
interface CompProps {
    inline?: boolean;
    label?: string;
    bigsize?: boolean;
    data: string|null;
}
export function OutputText ({bigsize,inline,label,data}: CompProps) {

    if(!data || data==null) {data = 'undefined';}

    const label_color   = label ? RadixConf.COLORS.orange : null;
    const data_size    = label ? RadixConf.SIZES.size_2 : null;
    let showInline: boolean = inline ?? false;
    let isTextArea: boolean = false;
    if(bigsize) {showInline = false;isTextArea = true;}
    const compDirection = showInline ? "row" : "column";

    return (
        <Flex as="div" width="100%" direction={"column"} >
            {label ? 
                <Box as="div" width="100%" mb="2" style={labelBoxStyle} >
                   <Label.Root htmlFor="firstName">
                        <Text color={label_color} >
                            {label}
                        </Text>                    
                    </Label.Root> 
                </Box>
            :null}       

            <Flex width="100%" direction="column" px="2" py="2" style={dataStyle}>
                <Text size={data_size}>{data}</Text>
            </Flex>                    
        
                     
        </Flex>
    )

}//end component

/*
            <Flex width="100%" direction="column">
                {!isTextArea ?                
                    <Text size={data_size}>{data}</Text>:
                    <TextArea size={data_size}>{data}</TextArea>}
            </Flex>                         
*/