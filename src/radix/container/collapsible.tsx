"use client";

import React from "react";
import * as Collapsible from '@radix-ui/react-collapsible';
import { Button, Box, Text } from "@radix-ui/themes";
import { ChevronDownIcon } from "@radix-ui/react-icons";

interface CollapsibleProps {
    opened?: boolean;    
    children?: React.ReactNode;
}
/**
 * radix-ui/themes
 * jsx Collapsible Component
 */
export default function CollapsibleComponent({opened,children}:CollapsibleProps) {

    return (
        <Collapsible.Root defaultOpen={opened} >

            <Collapsible.Trigger asChild>
                <Button variant="ghost">
                    Toggle content
                    <ChevronDownIcon />
                </Button>              
            </Collapsible.Trigger>

            <Collapsible.Content>
                {children || (
                    <Box p="3" style={{ backgroundColor: "var(--gray-a3)" }}>
                        <Text>This is the collapsible content.</Text>
                    </Box>
                )}
            </Collapsible.Content>

        </Collapsible.Root>
    );

}//end component


/*
    trigger?: React.ReactNode;
disabled?: boolean;
disabled={disabled}
*/