"use client";

import React from "react";
import * as Collapsible from '@radix-ui/react-collapsible';
import { Button, Box, Text, Flex } from "@radix-ui/themes";
import { ChevronDownIcon, Cross2Icon, RowSpacingIcon } from "@radix-ui/react-icons";

interface ContCollapsibleProps {
    title:string;
    intro:string;
    opened?: boolean;    
    children?: React.ReactNode;
}
/**
 * https://github.com/progxefero666/radixcomp
 * radix-ui/themes
 * jsx Collapsible Component
 */
export default function ContCollapsible({title,intro,children,opened}:ContCollapsibleProps) {
    const [open, setOpen] = React.useState(opened);

    return (
		<Collapsible.Root
			className="CollapsibleRoot"
			open={open}
			onOpenChange={setOpen}>
			
            <Flex justify="between" align="center" >
                <Text size="2" >
                   {title}
                </Text>
	
				<Collapsible.Trigger asChild>
					<button className="IconButton">
						{open ? <Cross2Icon /> : <RowSpacingIcon />}
					</button>
				</Collapsible.Trigger>
			</Flex>

            <Box >
                <Text size="3" >
                    {intro}   
                </Text>                
            </Box>

            <Collapsible.Content>
                {children}
            </Collapsible.Content>
			
		</Collapsible.Root>
    );

}//end component


/*
    trigger?: React.ReactNode;
disabled?: boolean;
disabled={disabled}
*/