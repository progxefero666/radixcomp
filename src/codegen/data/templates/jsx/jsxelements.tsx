
import { useEffect, useRef, useState } from "react";
import { Flex, Box, Text, Button, IconButton } from "@radix-ui/themes";
import { TOption } from "@/radix/radixtypes";
import { Accordion } from "radix-ui";
import { ChevronDownIcon, } from "@radix-ui/themes";
import { ButtonsStyle, COMP_BORDER_STYLE } from "@/radix/radixtheme";
import { AccordionContent, AccordionTrigger } from '@radix-ui/react-accordion';
import React from 'react';
import { SeparatorH } from "@/radix/container/separatorh";
import { TrashIcon } from "@radix-ui/react-icons";


// template component
//............................................................................
export interface CompProps {
    name: string;
    inline?: boolean;
    callback: (value: string) => void;
}
export default function TemplateComp({name, inline, callback }: CompProps) {

    const inputRef = useRef<HTMLInputElement>(null);
    const [ready, setReady] = useState<boolean>(false);

    useEffect(() => {
        if(ready) {return;}
        
        setReady(true);
    }, []);


    const runCommand = (commId:string) => {

    };//end

    return (
        <Flex width="100%" direction="column" px="2" py="1" align="center" justify="center">
            <Button size={ButtonsStyle.BTN_DEF_SIZE}
                    radius={ButtonsStyle.BTN_DEF_RADIUS}
                    color={ButtonsStyle.COLOR_CLEAR} 
                    onClick={() => runCommand("clear")}>
                <TrashIcon />
                <Text size="3">clear</Text>
            </Button>
        </Flex>
    )
};//end component

/**
 * Accordion template
 */
interface AccordionProps {
    text?: string;
    options: TOption[];
};
export const XAccordion = ({ options }: AccordionProps) => {

    return (
        <Box width="100%">
            <Accordion.Root type="single" defaultValue={options[0].name} collapsible>
                {options.map((option, index) => (
                    <Flex key={index.toString()}
                          width="100%" direction="column" 
                          style={COMP_BORDER_STYLE} >

                        <Accordion.Item value={option.name}>

                            <Accordion.Header >
                                <Accordion.Trigger style={{ width: '100%' }} >
                                    <Flex width="100%" direction="row" justify="start" align="center" px="2" py="1">
                                        <Flex width="70%" justify="start">
                                            {option.text}
                                        </Flex>
                                        <Flex width="30%" justify="end" >
                                            <ChevronDownIcon className="AccordionChevron" aria-hidden />
                                        </Flex>
                                    </Flex>
                                    <SeparatorH />
                                </Accordion.Trigger>
                            </Accordion.Header>

                            <AccordionContent>
                                {option.text}
                            </AccordionContent>

                        </Accordion.Item>

                    </Flex>
                ))}
            </Accordion.Root>
        </Box>


    )
};//end