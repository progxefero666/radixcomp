"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image'
import { Box, Text, Flex, IconButton, TextField, Link, ScrollArea, Table, Checkbox } from "@radix-ui/themes";

import { InputPattern } from "@/codegen/data/model/inputpattern";
import { COMP_BORDER_STYLE, TextStyle } from "@/radix/radixtheme";
import { RADIX_COLORS } from "@/radix/radixconstants";
import { RadixConf } from "@/radix/radixconf";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { XInputCheck } from "@/radix/input/inputcheck";
import { XInputText } from "@/radix/input/inptext";
import { Pattern } from "@/codegen/data/model/pattern";
import { CgDataProcessor } from "@/codegen/data/cgdataproc";


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
    pattindexInit?: number;
    onchange?: (id: number, pattern: string, value: string) => void;
}
export default function CardInputParam({input,patterns,onchange}:CompProps) {

    const [useVariable, setUseVariable] = useState<boolean>(true);
    const [variable, setVariable] = useState<string>("");
    const [pattindex, setPattindex] = useState<number>(0);
    const [pattern, setPattern] = useState<string>(input.getValue());
    const [value, setValue] = useState<string>("");

    useEffect(() => {
        if(input.variable !== null) {
            const new_pattern: string = input.patternStart + input.variable + input.patternEnd;
            setVariable(input.variable);
            setPattern(new_pattern);
        }
    }, []);

    const onHandlerOnClick = (index: number) => {
        input.patternStart = patterns[index].start;
        input.patternEnd = patterns[index].end;
        const new_pattern: string = input.patternStart + variable + input.patternEnd;
        setPattindex(index);
        setPattern(new_pattern);
    };

    const onChangeUseVariable = () => {
        const useOstias: boolean = !useVariable;
        if (!useOstias) {
            setVariable(" ");
        }
        setUseVariable(useOstias);
    };

    const onchangeVarValue = (varvalue: string) => {
        const new_pattern: string = input.patternStart + varvalue + input.patternEnd;
        setVariable(varvalue);
        setPattern(new_pattern);
        if (onchange) {
            onchange(input.id, new_pattern, value);
        }
    };//end

    const onChangeValue = (value: string) => {
        setValue(value);
        if (onchange) {
            onchange(input.id, pattern, value);
        }
    };

    const renderPatterns = () => {
        return (
            <ScrollArea type="always" scrollbars="horizontal" style={{ height: "auto" }}>
                <Flex width="100%" direction="row" py="2" gapX="2" align="center" justify="center" >
                    {patterns.map((pattern, index) => (
                        <Box key={index.toString()}  >
                            <Link href="#">
                                {index == pattindex ?
                                    <Image src={pattern.actIcon} width={24} height={24} alt="alt"
                                        onClick={() => onHandlerOnClick(index)} /> :
                                    <Image src={pattern.defIcon} width={24} height={24} alt="alt"
                                        onClick={() => onHandlerOnClick(index)} />}
                            </Link>
                        </Box>
                    ))}
                </Flex>
            </ScrollArea>
        );
    };//end  

    return (
        <Box width="100%"  px="2" py="1" >

            <Table.Root  >
                <Table.Body >

                    <Table.Row >
                        <Table.Cell px="2" maxWidth="20%">
                            <Text size={TextStyle.SIZE_DEF}
                                color={TextStyle.COLOR_DEF} >
                                Variable
                            </Text>
                        </Table.Cell>
                        <Table.Cell>
                            <XInputText inline={true} autocommit={true} autofocus={true}
                                value={variable}
                                onchange={onchangeVarValue}
                                disabled={!useVariable} />
                        </Table.Cell>
                        <Table.Cell>
                            <Box pt="2">
                                <XInputCheck inline={true} autocommit={true}
                                    name="useVariable" value={useVariable}
                                    onchange={() => onChangeUseVariable()} />
                            </Box>
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell px="2" maxWidth="20%">
                            <Text size={TextStyle.SIZE_DEF}
                                color={TextStyle.COLOR_DEF} >
                                Pattern
                            </Text>
                        </Table.Cell>
                        <Table.Cell>
                            <TextField.Root style={TextStyle.COLOR_SPECIAL}
                                maxLength={CgDataProcessor.MAX_LENGTH_DEF}
                                name={input.id.toString()}
                                defaultValue={pattern}
                                key={pattern}
                                radius="medium" />
                        </Table.Cell>
                        <Table.Cell>
                           
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell px="2" maxWidth="20%">
                            <Text size={TextStyle.SIZE_DEF}
                                color={TextStyle.COLOR_DEF} >
                                Value
                            </Text>
                        </Table.Cell>
                        <Table.Cell>
                            <TextField.Root
                                onChange={(e) => onChangeValue(e.target.value)}
                                maxLength={CgDataProcessor.MAX_LENGTH_DEF}
                                name={input.id.toString()}
                                placeholder={input.id.toString()}
                                radius="medium" />
                        </Table.Cell>
                        <Table.Cell>
                            
                        </Table.Cell>
                    </Table.Row>

                </Table.Body>

            </Table.Root>

            <Box>
                {renderPatterns()}
            </Box>

        </Box>
    );

}//end component


/*
            <Flex width="100%" direction="row" py="1" align="center" justify="start" >
                <Box>
                    <Text color={TextStyle.COLOR_DEF} size={TextStyle.SIZE_DEF}>{input.label}</Text>
                </Box>                
                <Box>
                </Box>                
            </Flex>
*/
