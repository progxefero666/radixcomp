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
        backgroundColor: "rgb(55, 55, 57)",
        borderRadius: "10px",
        border: "1px solidrgb(75, 75, 75)",
        padding: "var(--space-2)",
    };

    return (

        <Flex direction="column" style={boxStyle} gap="2">

            <Flex width={"100%"} justify="between" align="start" >
                <Text size="4" align="left">{title}</Text>
                <BarButtons barconfig={barButtons} onclick={onClick} />
            </Flex>

            <Separator orientation="horizontal" size="4" mb="2" />


            <Box width={"100%"}>
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