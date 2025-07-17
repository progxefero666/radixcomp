"use client";

import React, { useState } from "react";
import Image from 'next/image'
import { Box,Text,Flex,IconButton,TextField, ScrollArea} from "@radix-ui/themes";

import { Pattern, TInputPattern } from "@/codegen/data/cgdatamodels";
import { Label } from "@radix-ui/react-label";
import { CgDataConstants } from "@/codegen/data/cgdata";
import { COMP_BORDER_STYLE } from "@/radix/radixtheme";

const compStyle = {
    background: 'rgb(35, 35, 39)',
    borderRadius: "0px",
    border: "1px solidrgb(75, 75, 75)",
    padding: "0px 0px 0px 0px",
 };//style={boxStyle}

/**
 * CardCode Component
 */
interface CompProps {
    patterns: Pattern[];
    input: TInputPattern;
    maxlength?: number;  
}
export default function CardInputParam({patterns, input, maxlength }: CompProps) {

    const renderPatterns = () => {
        return (
            <ScrollArea type="always" scrollbars="horizontal" style={{height:"auto"}}>
                <Flex width="100%" direction="row" py="2" gapX="1" align="center" justify="center" >
                    {patterns.map((pattern, index) => (
                        <Box key={index.toString()}>
                            {index===0 && <Image src="/icons/uno.png"    width={24} height={24} alt="icon-1" />} 
                            {index===1 && <Image src="/icons/dos.png"    width={24} height={24} alt="icon-2" />}
                            {index===2 && <Image src="/icons/tres.png"   width={24} height={24} alt="icon-3" />} 
                            {index===3 && <Image src="/icons/cuatro.png" width={24} height={24} alt="icon-4" />}
                            {index===4 && <Image src="/icons/cinco.png"  width={24} height={24} alt="icon-5" />} 
                            {index===5 && <Image src="/icons/seis.png"   width={24} height={24} alt="icon-6" />}
                            {index===6 && <Image src="/icons/siete.png"  width={24} height={24} alt="icon-7" />} 
                            {index===7 && <Image src="/icons/ocho.png"   width={24} height={24} alt="icon-8" />}
                            {index===9 && <Image src="/icons/nueve.png"  width={24} height={24} alt="icon-9" />}                            
                        </Box>                 
                    ))}
                </Flex>                    
            </ScrollArea>   
        );
    };//end  

    return (
        <Flex width="100%" direction="column" px="2" py="1"  style={COMP_BORDER_STYLE} >
            <Box>
                <Flex width="100%" direction="row" py="2" gapX="1" align="center" justify="between" >
                    <Label>{input.label}</Label>
                    <Flex direction="row" justify="end" align="center">
                        {input.pattern.start + input.pattern.end }
                    </Flex>
                </Flex>
                
                <TextField.Root 
                    maxLength={maxlength ?? CgDataConstants.MAX_LENGTH_DEF}
                    name = {input.id}
                    placeholder = {input.id}
                    radius = "medium" />
            </Box>
            <Box>
                {renderPatterns()}
            </Box>

        </Flex>
    );

}//end component


/*
    trigger?: React.ReactNode;
disabled?: boolean;
disabled={disabled}
*/
