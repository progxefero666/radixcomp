"use client";

import React, { useState } from "react";
import Image from 'next/image'
import { Box,Text,Flex,IconButton,TextField, ScrollArea} from "@radix-ui/themes";

import { Pattern, TInputPattern } from "@/codegen/data/cgdatamodels";
import { Label } from "@radix-ui/react-label";
import { CgDataConstants } from "@/codegen/data/cgdata";
import { COMP_BORDER_STYLE } from "@/radix/radixtheme";
import { RADIX_COLORS } from "@/radix/radixconstants";
import { RadixConf } from "@/radix/radixconf";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

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
    pattindex: number;
    maxlength?: number;  
}
export default function CardInputParam({patterns, input,pattindex, maxlength }: CompProps) {

   const [collapse, setCollapse] = useState<boolean>(false);

    const onHandlerOnClick = (index:number) => {
    };

    const renderPatterns = () => {
        return (
            <ScrollArea type="always" scrollbars="horizontal" style={{height:"auto"}}>
            <Flex width="100%" direction="row" py="2" gapX="1" align="center" justify="center" >
                {patterns.map((pattern, index) => (
                <Box key={index.toString()}>
                    {index===pattindex ? 
                        <>
                            {index===0 && <Image src="/icons/uno_red.png"    width={24} height={24} alt="icon-1" onClick={() => onHandlerOnClick(0)} />} 
                            {index===1 && <Image src="/icons/dos_red.png"    width={24} height={24} alt="icon-2" onClick={() => onHandlerOnClick(1)} />}
                            {index===2 && <Image src="/icons/tres_red.png"   width={24} height={24} alt="icon-3" onClick={() => onHandlerOnClick(2)} />} 
                            {index===3 && <Image src="/icons/cuatro_red.png" width={24} height={24} alt="icon-4" onClick={() => onHandlerOnClick(3)} />}
                            {index===4 && <Image src="/icons/cinco_red.png"  width={24} height={24} alt="icon-5" onClick={() => onHandlerOnClick(4)} />} 
                            {index===5 && <Image src="/icons/seis_red.png"   width={24} height={24} alt="icon-6" onClick={() => onHandlerOnClick(5)} />}
                            {index===6 && <Image src="/icons/siete_red.png"  width={24} height={24} alt="icon-7" onClick={() => onHandlerOnClick(6)} />} 
                            {index===7 && <Image src="/icons/ocho_red.png"   width={24} height={24} alt="icon-8" onClick={() => onHandlerOnClick(7)} />}
                            {index===8 && <Image src="/icons/nueve_red.png"  width={24} height={24} alt="icon-9" onClick={() => onHandlerOnClick(8)} />}                         
                        </>                    
                    : 
                        <>
                            {index===0 && <Image src="/icons/uno.png"    width={24} height={24} alt="icon-1" onClick={() => onHandlerOnClick(0)} />} 
                            {index===1 && <Image src="/icons/dos.png"    width={24} height={24} alt="icon-2" onClick={() => onHandlerOnClick(1)} />}
                            {index===2 && <Image src="/icons/tres.png"   width={24} height={24} alt="icon-3" onClick={() => onHandlerOnClick(2)} />} 
                            {index===3 && <Image src="/icons/cuatro.png" width={24} height={24} alt="icon-4" onClick={() => onHandlerOnClick(3)} />}
                            {index===4 && <Image src="/icons/cinco.png"  width={24} height={24} alt="icon-5" onClick={() => onHandlerOnClick(4)} />} 
                            {index===5 && <Image src="/icons/seis.png"   width={24} height={24} alt="icon-6" onClick={() => onHandlerOnClick(5)} />}
                            {index===6 && <Image src="/icons/siete.png"  width={24} height={24} alt="icon-7" onClick={() => onHandlerOnClick(6)} />} 
                            {index===7 && <Image src="/icons/ocho.png"   width={24} height={24} alt="icon-8" onClick={() => onHandlerOnClick(7)} />}
                            {index===8 && <Image src="/icons/nueve.png"  width={24} height={24} alt="icon-9" onClick={() => onHandlerOnClick(8)} />}                         
                        </>                    
                    }                           
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
                    <Box>
                       <IconButton variant={RadixConf.VARIANTS.ghost} 
                             onClick={() => setCollapse(!collapse)} >
                             {!collapse ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        </IconButton>
                    </Box>
                    <Box>
                        <Label>{input.label}</Label>                        
                    </Box>                    

                    <Flex direction="row" justify="end" align="center">
                        <Text size="3" color={RADIX_COLORS.amber} >
                            {input.pattern.start + input.pattern.end}
                        </Text>                        
                    </Flex>
                </Flex>
            </Box>
            {!collapse ? 
            <>
                <Box>      
                    <TextField.Root 
                        maxLength={maxlength ?? CgDataConstants.MAX_LENGTH_DEF}
                        name = {input.id}
                        placeholder = {input.id}
                        radius = "medium" />
                </Box>
                <Box>
                    {renderPatterns()}
                </Box>            
            </>            
            :null}


        </Flex>
    );

}//end component


/*
    trigger?: React.ReactNode;
disabled?: boolean;
disabled={disabled}
*/
