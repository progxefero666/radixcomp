"use client";

import React, { useState } from "react";
import { Box,Text,Flex,IconButton,TextField, ScrollArea} from "@radix-ui/themes";

import { Pattern, TInputPattern } from "@/codegen/data/cgdatamodels";
import { Label } from "@radix-ui/react-label";
import { CgDataConstants } from "@/codegen/data/cgdata";

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
                <Flex width="100%" direction="row" py="1" >
                    {patterns.map((pattern, index) => (
                        <Box key={index.toString()}>
                            {index===0 ? '1️⃣':null} 
                        </Box>                 
                    ))}
                </Flex>                    
            </ScrollArea>   
        );
    };//end  

    return (
        <Flex width="100%" direction="column" px="2" py="1" >
            <Box>
                <Label>{input.label}</Label>
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