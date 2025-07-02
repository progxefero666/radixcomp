"use client";

import React, { useState } from "react";
import * as Collapsible from '@radix-ui/react-collapsible';
import { Button, Box, Text, Flex, Separator, IconButton, Container, Section } from "@radix-ui/themes";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { BarButtonsCfg } from "@/common/modelui/barbuttonscfg";
import { RadixConf } from "@/radix/radixconf";
import BarButtons from "@/radix/cbars/btbar";
import { BARCFG_EXPORT } from "@/app_front/ui/appbars";
import { XInputTextArea } from "@/radix/input/inptextarea";


/**
 * https://github.com/progxefero666/radixcomp
 * radix-ui/themes
 * jsx Collapsible Component
 */
interface CompProps {
    title: string;
    code?: string;    
}

export default function CardCode({ title, code }: CompProps) {

    const [barButtons, setBarbuttons] = useState<BarButtonsCfg>(BARCFG_EXPORT);

    const onClick = (operation: string) => {        
    }

    const boxStyle = {
         background: 'rgb(35, 35, 39)',
        borderRadius: "0px",
        border: "1px solidrgb(75, 75, 75)",
        padding: "0px 0px 0px 0px",
    };

    return (

        <Flex direction="column" style={boxStyle} >

            <Flex width={"100%"} justify="between" px="2" pt="1" align="start" >
                <Text size="4" align="left">{title}</Text>
                <BarButtons barconfig={barButtons} onclick={onClick} />
            </Flex>

            <Separator orientation="horizontal" size="4" mb="2" />


            <Box width={"100%"}  px="2" >
                <XInputTextArea value={code} />                

            </Box>

        </Flex>

    );

}//end component


/*
    trigger?: React.ReactNode;
disabled?: boolean;
disabled={disabled}
*/