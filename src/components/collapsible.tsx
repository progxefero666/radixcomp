"use client";

import React from "react";
import * as Collapsible from '@radix-ui/react-collapsible';
import { Button, Box, Text } from "@radix-ui/themes";
import { ChevronDownIcon } from "@radix-ui/react-icons";

interface CollapsibleProps {
    defaultOpen?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    trigger?: React.ReactNode;
}

export default function CollapsibleComponent({defaultOpen,disabled,children,trigger}:CollapsibleProps) {

    return (
        <Collapsible.Root defaultOpen={defaultOpen} disabled={disabled}>
            <Collapsible.Trigger asChild>
                {trigger || (
                    <Button variant="ghost">
                        Toggle content
                        <ChevronDownIcon />
                    </Button>
                )}
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
