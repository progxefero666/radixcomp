"use client";

import React, { useState } from "react";
import { Button,Box,Text,Flex,IconButton} from "@radix-ui/themes";
import { XInputTextArea } from "@/radix/input/inptextarea";

/**
 * CardCode Component
 */
interface CompProps {
    title: string;
    code?: string;    
}
export default function CardCode({ title, code }: CompProps) {

    const boxStyle = {
         background: 'rgb(35, 35, 39)',
        borderRadius: "0px",
        border: "1px solidrgb(75, 75, 75)",
        padding: "0px 0px 0px 0px",
    };
    return (
        <Flex direction="column" style={boxStyle} >
            <Box width={"100%"}  px="2" >
                <XInputTextArea defaul={code} />                
            </Box>
        </Flex>
    );

}//end component


/*
    trigger?: React.ReactNode;
disabled?: boolean;
disabled={disabled}
*/