"use client";

import React, { useState } from "react";
import Image from 'next/image'
import { Box,Text,Flex,IconButton,TextField,Link, ScrollArea, Table, Checkbox} from "@radix-ui/themes";

import { InputPattern } from "@/codegen/data/inputpattern";
import { Label } from "@radix-ui/react-label";
import { CgDataConstants } from "@/codegen/data/cgdata";
import { COMP_BORDER_STYLE } from "@/radix/radixtheme";
import { RADIX_COLORS } from "@/radix/radixconstants";
import { RadixConf } from "@/radix/radixconf";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { XInputCheck } from "@/radix/input/inputcheck";
import { XInputText } from "@/radix/input/inptext";
import { Pattern } from "@/codegen/data/model/pattern";

const compStyle = {
    background: 'rgb(35, 35, 39)',
    borderRadius: "0px",
    border: "1px solidrgb(75, 75, 75)",
    padding: "0px 0px 0px 0px",
 };//style={boxStyle}

const iconStyle = {
    cursor: 'pointer',
};
 

/**
 * CardCode Component
 */
interface CompProps {
    patterns: Pattern[];
    input: InputPattern;
    pattindexInit: number;
    maxlength?: number;  
}
export default function CardInputParam({patterns, input,pattindexInit, maxlength }: CompProps) {

    const [collapse, setCollapse] = useState<boolean>(false);
    const [useVariable, setUseVariable] = useState<boolean>(true);
    const [variable, setVariable] = useState<string>("");
    const [pattindex, setPattindex] = useState<number>(pattindexInit);

    const onHandlerOnClick = (index:number) => {
        setPattindex(index);
        input.pattern.start = patterns[index].patt.start;
        input.pattern.end = patterns[index].patt.end;
    };

    const onChangeUseVariable = () => {  
        const useOstias:boolean = !useVariable;
        if(useOstias== false) {    
                
            setVariable(" ");
        }        
        setUseVariable(useOstias);
    };

    const renderPatterns = () => {
        return (
            <ScrollArea type="always" scrollbars="horizontal" style={{height:"auto"}}>
            <Flex width="100%" direction="row" py="2" gapX="2" align="center" justify="center" >
                {patterns.map((pattern, index) => (
                <Box key={index.toString()}  >
                    {index===pattindex ? 
    <>
        {index===0 && <Link href="#"><Image src="/icons/uno_red.png"   
                            width={24} height={24} alt="1" onClick={()=>onHandlerOnClick(0)}/></Link>} 
        {index===1 && <Link href="#"><Image src="/icons/dos_red.png"    
                            width={24} height={24} alt="2" onClick={()=>onHandlerOnClick(1)} /></Link>}
        {index===2 && <Link href="#"><Image src="/icons/tres_red.png"   width={24} height={24} alt="3" onClick={()=>onHandlerOnClick(2)}/></Link>} 
        {index===3 && <Link href="#"><Image src="/icons/cuatro_red.png" width={24} height={24} alt="4" onClick={()=>onHandlerOnClick(3)}/></Link>}
        {index===4 && <Link href="#"><Image src="/icons/cinco_red.png"  width={24} height={24} alt="5" onClick={()=>onHandlerOnClick(4)}/></Link>} 
        {index===5 && <Link href="#"><Image src="/icons/seis_red.png"   width={24} height={24} alt="6" onClick={()=>onHandlerOnClick(5)}/></Link>}
        {index===6 && <Link href="#"><Image src="/icons/siete_red.png"  width={24} height={24} alt="7" onClick={()=>onHandlerOnClick(6)}/></Link>} 
        {index===7 && <Link href="#"><Image src="/icons/ocho_red.png"   width={24} height={24} alt="8" onClick={()=>onHandlerOnClick(7)}/></Link>}
    </>                    
: 
    <>
        {index===0 && <Link href="#"><Image src="/icons/uno.png"    width={24} height={24} alt="1" onClick={() => onHandlerOnClick(0)}/></Link>} 
        {index===1 && <Link href="#"><Image src="/icons/dos.png"    width={24} height={24} alt="2" onClick={() => onHandlerOnClick(1)}/></Link>}
        {index===2 && <Link href="#"><Image src="/icons/tres.png"   width={24} height={24} alt="3" onClick={() => onHandlerOnClick(2)}/></Link>} 
        {index===3 && <Link href="#"><Image src="/icons/cuatro.png" width={24} height={24} alt="4" onClick={() => onHandlerOnClick(3)}/></Link>}
        {index===4 && <Link href="#"><Image src="/icons/cinco.png"  width={24} height={24} alt="5" onClick={() => onHandlerOnClick(4)}/></Link>} 
        {index===5 && <Link href="#"><Image src="/icons/seis.png"   width={24} height={24} alt="6" onClick={() => onHandlerOnClick(5)}/></Link>}
        {index===6 && <Link href="#"><Image src="/icons/siete.png"  width={24} height={24} alt="" onClick={() => onHandlerOnClick(6)}/></Link>} 
        {index===7 && <Link href="#"><Image src="/icons/ocho.png"   width={24} height={24} alt="" onClick={() => onHandlerOnClick(7)}/></Link>}
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
                <Flex width="100%" direction="row" py="1" align="center" justify="start" >
                    <Box >
                        <IconButton variant={RadixConf.VARIANTS.ghost} 
                            onClick={() => setCollapse(!collapse)} >
                            {!collapse ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        </IconButton>
                    </Box>
                    <Flex width="100%"  direction="row" justify="between" align="center" pl="2" pr="2">
                        <Text>
                            {input.label}
                        </Text>                    
                    
                        <Text size="3" color={RADIX_COLORS.amber} >
                            {input.pattern.start + input.pattern.end}
                        </Text>                        
                    </Flex>
                </Flex>
            </Box>
            {!collapse ? 
            <>
                <Table.Root >    
                    <Table.Body >

                        <Table.Row>
                            <Table.Cell>value:</Table.Cell>
                            <Table.Cell>
                                <TextField.Root 
                                    maxLength={maxlength ?? CgDataConstants.MAX_LENGTH_DEF}
                                    name = {input.id}
                                    placeholder = {input.id}
                                    radius = "medium" />
                            </Table.Cell>
                            <Table.Cell>
                                cl
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row >
                            <Table.Cell>var:</Table.Cell>
                            <Table.Cell>
                                <XInputText key={variable}
                                            defaul={variable}
                                            inline={true}
                                            autocommit={true}
                                            disabled={!useVariable} />
                            </Table.Cell>
                            <Table.Cell>
                                <Box pt="2">
                                    <XInputCheck name="useVariable"
                                                 autocommit={true} 
                                                 inline={true} 
                                                 value={useVariable}
                                                 onchange={() => onChangeUseVariable()} />
                                </Box>                                
                            </Table.Cell>                            
                        </Table.Row> 

                    </Table.Body>  

                </Table.Root>

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
