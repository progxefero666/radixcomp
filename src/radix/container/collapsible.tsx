"use client";

import React from "react";
import * as Collapsible from '@radix-ui/react-collapsible';
import { Button, Box, Text, Flex, Separator, IconButton } from "@radix-ui/themes";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { BarButtonsCfg } from "@/common/modelui/barbuttonscfg";
import BarButtons from "../cbars/btbar";

/**
 * https://github.com/progxefero666/radixcomp
 * radix-ui/themes
 * jsx Collapsible Component
 */
interface ContCollapsibleProps {
    id: number;
    title: string;
    intro: string;
    opened?: boolean;
    children?: React.ReactNode;
    barbuttonscfg?: BarButtonsCfg;
}

export default function ContCollapsible({ id, barbuttonscfg, title, intro, children, opened }: ContCollapsibleProps) {
    const [open, setOpen] = React.useState(opened);

    const onClick = (operation: string) => {

    }

    return (
        <Box as="div" px="4"py="2" width={"100%"} 
            style={{
                backgroundColor: 'var(--gray-a2)',
                borderRadius: 'var(--radius-3)',
                border: '1px solid var(--red-a6)',
                overflow: 'hidden'
            }}  >

            <Collapsible.Root
                className="CollapsibleRoot"
                open={open}
                onOpenChange={setOpen}>

                <Flex align="start"  width={"100%"} gapX={"2"} >

                    <Collapsible.Trigger asChild>
                        <IconButton variant="soft">
	                         {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        </IconButton>
                    </Collapsible.Trigger>   

                    <Flex  width={"100%"} justify="between" align="start" >
                        <Text size="4" align="left">{title}</Text>     
                        {barbuttonscfg? <
                            BarButtons  barconfig={barbuttonscfg} onclick={onClick}/>
                        : null}       
                    </Flex>                 
                </Flex>
                
                <Separator orientation="horizontal" size="4" mb="2"/>

                <Box >
                    <Text size="3" >
                        {intro}
                    </Text>
                </Box>

                <Collapsible.Content>
                    {children}
                </Collapsible.Content>

            </Collapsible.Root>

        </Box>
    );

}//end component


/*
    trigger?: React.ReactNode;
disabled?: boolean;
disabled={disabled}
*/