"use client";

import React, { useState } from "react";
import Image from 'next/image'
import { Box, Text, Flex, IconButton, TextField, Link, ScrollArea, Table, Checkbox } from "@radix-ui/themes";

import { InputPattern } from "@/codegen/data/model/inputpattern";
import { Label } from "@radix-ui/react-label";
import { CgDataConst } from "@/codegen/data/cgdata";
import { COMP_BORDER_STYLE, TextStyle } from "@/radix/radixtheme";
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
    onchange?: (id: string, value: string) => void;
    maxlength?: number;
}
export default function CardInputParam({ patterns, input, pattindexInit, onchange, maxlength }: CompProps) {

    const [collapse, setCollapse] = useState<boolean>(false);
    const [useVariable, setUseVariable] = useState<boolean>(true);
    const [variableInit, setVariableInit] = useState<string>("");
    const [variable, setVariable] = useState<string>("");
    const [pattindex, setPattindex] = useState<number>(pattindexInit);
    const [pattern, setPattern] = useState<string>(input.getValue());

    const onHandlerOnClick = (index: number) => {
        setPattindex(index);
        input.pattern.start = patterns[index].patt.start;
        input.pattern.end = patterns[index].patt.end;
    };

    const onChangeUseVariable = () => {
        const useOstias: boolean = !useVariable;
        if (!useOstias) {
            setVariableInit(" ");
        }
        setUseVariable(useOstias);
    };

    const onchangeVarValue = (value: string) => {
        if (onchange) {
            const result: string = input.pattern.start + value + input.pattern.end;
            setPattern(result);
            onchange(input.id, result);
        }
        setVariable(value);
    };//end

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
        <Flex width="100%" direction="column" px="2" py="1" style={COMP_BORDER_STYLE} >
            <Box>
                <Flex width="100%" direction="row" py="1" align="center" justify="start" >
                    <Box >
                        <IconButton variant={RadixConf.VARIANTS.ghost}
                            onClick={() => setCollapse(!collapse)} >
                            {!collapse ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        </IconButton>
                    </Box>
                    <Flex width="100%" direction="row" justify="between" align="center" pl="2" pr="2">
                        <Text>{input.label}</Text>
                        <Text size="3" color={RADIX_COLORS.amber} >

                        </Text>
                    </Flex>
                </Flex>
            </Box>
            {!collapse ?
                <>
                    <Table.Root >
                        <Table.Body >

                            <Table.Row >
                                <Table.Cell px="2" maxWidth="20%">
                                    <Text size={TextStyle.DEFAULT_SIZE}
                                        color={TextStyle.DEF_COLOR} >
                                        Variable
                                    </Text>
                                </Table.Cell>
                                <Table.Cell>
                                    <XInputText inline={true} autocommit={true} autofocus={true}
                                        defaul={variableInit}
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
                                    <Text size={TextStyle.DEFAULT_SIZE}
                                        color={TextStyle.DEF_COLOR} >
                                        Pattern
                                    </Text>
                                </Table.Cell>
                                <Table.Cell>
                                    <TextField.Root
                                        maxLength={maxlength ?? CgDataConst.MAX_LENGTH_DEF}
                                        name={input.id}
                                        defaultValue={" "}
                                        value={pattern}
                                        radius="medium" />
                                </Table.Cell>
                                <Table.Cell>
                                    cl
                                </Table.Cell>                                
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell px="2" maxWidth="20%">
                                    <Text size={TextStyle.DEFAULT_SIZE}
                                        color={TextStyle.DEF_COLOR} >
                                        Value
                                    </Text>
                                </Table.Cell>
                                <Table.Cell>
                                    <TextField.Root
                                        maxLength={maxlength ?? CgDataConst.MAX_LENGTH_DEF}
                                        name={input.id}
                                        placeholder={input.id}
                                        radius="medium" />
                                </Table.Cell>
                                <Table.Cell>
                                    cl
                                </Table.Cell>
                            </Table.Row>

                        </Table.Body>

                    </Table.Root>

                    <Box>
                        {renderPatterns()}
                    </Box>
                </>
                : null}


        </Flex>
    );

}//end component


/*
    trigger?: React.ReactNode;
disabled?: boolean;
disabled={disabled}
*/
