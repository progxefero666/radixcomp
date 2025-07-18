//src\app\gencode\cgtypescript\typescriptman.tsx
import classNames from "classnames";
import Image from 'next/image'
import { useState, useEffect, useRef } from "react";
import { TypeScriptViewer } from "@/app/gencode/cgtypescript/typescriptviewer";
import { Accordion } from "radix-ui";
import { Box, Grid, Flex, Text, Button, Tabs, TextField, Separator, Slider, ChevronDownIcon, } from "@radix-ui/themes";
import { COMP_BORDER_STYLE, ButtonsStyle } from "@/radix/radixtheme";
import { JsxOps, TsOps } from "@/codegen/data/cgdataoperations";
import { XRadioGroup } from "@/radix/keyvalue/inpgrpradio";
import { TsTemplates } from "@/codegen/templates/typescript/tstemplates";
import CardInputParam from '../cards/cardinputparam';
import { InputPattern } from '@/codegen/data/model/inputpattern';
import { RADIX_COLORS } from '@/radix/radixconstants';
import { PlayIcon } from '@radix-ui/react-icons';
import { OpConstants } from '@/common/constants';
import { DlgBtnDeleteConfirm } from '@/radix/dialog/dlgbtndelete';
import { RadixConf } from '@/radix/radixconf';
import { CgDataConst } from '@/codegen/data/cgdataconfig';
import { Keyvalue } from '@/common/model/keyvalue';
import { AccordionContent, AccordionTrigger } from '@radix-ui/react-accordion';
import React from 'react';
import { SeparatorH } from "@/radix/container/separatorh";


const LAYOUT_STYLE = {
    background: 'rgba(33, 33, 33, 1)',
};

const buttonRunStyle = {
    minWidth: '160px',
};


interface CompProps {
    onresult?: (code: String) => void;
}
export function TypeScriptManager({ onresult }: CompProps) {


    const [paramsValues, setParamsValues] = useState<Keyvalue[]>([]);

    //................................................................................
    // array parameters
    //................................................................................  
    const [countParams, setCountParams] = useState<number>(4);
    const [params, setParams]
        = useState<InputPattern[]>(CgDataConst.LIST_PARAMS.slice(0, 4));

    const sliderParamsValueInit = CgDataConst.COUNT_PARAMETERS_DEF *
        CgDataConst.FACTOR_INC_PARAMETERS;

    const [sliderParamsValue, setSliderParamsValue] = useState<number>(sliderParamsValueInit);

    const execListParamsCommand = (id: string) => {

    };//end

    const onChangeCountParams = (value: number[]) => {
        const count: number = Math.floor(value[0] / CgDataConst.FACTOR_INC_PARAMETERS);
        setCountParams(count);
        setParams(CgDataConst.LIST_PARAMS.slice(0, count + 1));
        setSliderParamsValue(count * CgDataConst.FACTOR_INC_PARAMETERS);
        updateListParams(count);
    };//end

    const updateListParams = (newCount: number) => {
        if (newCount == countParams) { return; }

        const params_values: Keyvalue[] = [];
        if (newCount > countParams) {
        }
        else {
        }
        setParamsValues(params_values);
    };//end
    //................................................................................
    // viewer content
    //................................................................................     
    const [template, setTemplate] = useState<string>("");
    const [code, setCode] = useState<string>("");

    useEffect(() => {
        onTsOpSelected(0, TsOps.MOD_ID);
        const params_values: Keyvalue[] = [];
        for (let idx = 0; idx < params.length; idx++) {
            params_values.push(new Keyvalue
                (params[idx].getValue(), params[idx].getValue()));
        }
        setParamsValues(params_values);
    }, []);



    const onchange = (index: number, pattern: string, value: string) => {
        //console.log(index.toString() + ":" + pattern + ":" + value);
        const params_values: Keyvalue[] = paramsValues;
        params_values[index] = new Keyvalue(pattern, value);
        setParamsValues(params_values);
    };//end

    //................................................................................
    // operation selected 
    //................................................................................    
    const [opGroup, setOpGroup] = useState<string>(TsOps.MOD_ID);
    const [operation, setOperation] = useState<string>(TsOps.BASIC[0].key);
    const onTsOpSelected = (index: number, name?: string) => {
        setOpGroup(name!);
        setOperation(TsOps.BASIC[index].key);
        if (TsOps.BASIC[index].key === TsOps.OP_CLASS) {
            setTemplate(TsTemplates.t_class);
        }
    };//end 

    const onJsxOpSelected = (index: number, name?: string) => {
        setOpGroup(name!);
        setOperation(JsxOps.BASIC[index].key);
    };//end 


    //................................................................................
    // run operation 
    //................................................................................

    const runOperation = () => {
        if (opGroup == TsOps.MOD_ID) {
            execTsOperation(0, TsOps.BASIC[0].key);
        }
        else if (opGroup == JsxOps.MOD_ID) {
            execJsxOperation(0, JsxOps.BASIC[0].key);
        }
    };//end

    const execTsOperation = (index: number, name?: string) => {
        alert("run TsOperation");

        for (let idx = 0; idx < params.length; idx++) {
            console.log(idx.toString + ":" +
                paramsValues[idx].key + ":" +
                paramsValues[idx].value);
        }

        if (TsOps.BASIC[index].key === TsOps.OP_CLASS) {

        }
    };//end 

    const execJsxOperation = (index: number, name?: string) => {
        if (JsxOps.BASIC[index].key === JsxOps.OP_BUTTONS) {
            alert("run buttons operation");
        }
    };//end 

    const renderAdvancedContent = () => {
        return (
            <Flex width="100%" direction="column" py="2" >
                <Text size="2">Make changes to your account.</Text>
            </Flex>
        );
    };//end

    const renderBasicContent = () => {
        return (
            <Flex width="100%" direction="row" px="4" >
                <Box width="50%" px="2">
                    <XRadioGroup
                        name={TsOps.MOD_ID}
                        collection={TsOps.BASIC}
                        label="Operations"
                        value={TsOps.BASIC[0].key}
                        autofocus={true}
                        onselect={onTsOpSelected} />
                </Box>
                <Box width="50%">
                    <XRadioGroup
                        name={JsxOps.MOD_ID}
                        collection={JsxOps.BASIC}
                        label="Jsx Operations"
                        value={JsxOps.BASIC[0].key}
                        onselect={onJsxOpSelected} />
                </Box>
            </Flex>
        );
    };//end

    const renderParameters = () => {

        return (
            <>

                <Flex direction="row" justify="between" px="2" py="1" align="center" mb="2" 
                    style={COMP_BORDER_STYLE} >
                    <Box width="40%"><Text size="2">Count Params:</Text></Box>
                    <Box width="10%" >
                        <Text size="3" color={RADIX_COLORS.orange}>{countParams}</Text>
                    </Box>
                    <Box width="50%">
                        {/*
                        <Slider defaultValue={[sliderParamsValue]} 
                                step={CgDataConst.FACTOR_INC_PARAMETERS}
                                onValueChange={onChangeCountParams}   />                         
                        */}
                    </Box>
                </Flex>

                <Box width="100%">
                    <Accordion.Root type="single" defaultValue={params[0].id.toString()} collapsible>
                        {params.map((param, index) => (
                            <Flex key={index.toString()} width="100%"
                                direction="column" style={COMP_BORDER_STYLE} >

                                <Accordion.Item value={param.id.toString()}>

                                    <Accordion.Header >
                                        <Accordion.Trigger style={{ width: '100%' }} >
                                            <Flex width="100%" direction="row" justify="start" align="center" px="2" py="1">
                                                <Flex width="70%" justify="start">
                                                    {param.label}
                                                </Flex>    
                                                <Flex width="30%" justify="end" >
                                                    <ChevronDownIcon className="AccordionChevron" aria-hidden />
                                                </Flex>                                              
                                            </Flex>                                            
                                            <SeparatorH />
                                        </Accordion.Trigger>
                                    </Accordion.Header>

                                    <AccordionContent>
                                        <CardInputParam pattindexInit={index}
                                            patterns={CgDataConst.LIST_PATTERNS}
                                            input={CgDataConst.LIST_PARAMS[index]}
                                            onchange={onchange} />
                                    </AccordionContent>

                                </Accordion.Item>

                            </Flex>
                        ))}
                    </Accordion.Root>
                </Box>

            </>
        );
    };//end  

    return (

        <Flex width="100%" direction="row" gridColumn="1" gridRow="1" >

            <Box width="27%" >
                <Tabs.Root defaultValue="basic">
                    <Tabs.List>
                        <Tabs.Trigger value="basic">Basic</Tabs.Trigger>
                        <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
                        <Tabs.Trigger value="test">Test</Tabs.Trigger>
                    </Tabs.List>
                    <Box pt="3">
                        <Tabs.Content value="basic">
                            {renderBasicContent()}
                        </Tabs.Content>
                        <Tabs.Content value="advanced">
                            {renderAdvancedContent()}
                        </Tabs.Content>
                        <Tabs.Content value="test">
                            test
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </Box>

            <Box width="32%" pr="3" >
                <Flex width="100%" direction="row" py="1" justify="center" >
                    <Button color={RADIX_COLORS.green} style={buttonRunStyle}
                        size={ButtonsStyle.BTN_DEF_SIZE}
                        radius={ButtonsStyle.BTN_DEF_RADIUS}
                        onClick={() => runOperation()}>
                        <PlayIcon />
                        <Text size="3">execute</Text>
                    </Button>
                </Flex>
                <Separator size="4" />

                {/* input parameters */}
                <Box py="2" key="paramIndexSel" >
                    {renderParameters()}
                </Box>


                {/* bar add and delete buttons */}
                <Flex direction="row" justify="center" align="center"
                    px="3" py="1" gapX="2" style={COMP_BORDER_STYLE} >
                    <Button variant="solid"
                        color={RADIX_COLORS.green}
                        size="2"
                        onClick={() => execListParamsCommand(OpConstants.OP_ADD)} >
                        {OpConstants.OP_TEXT_ADD}
                    </Button>

                    <DlgBtnDeleteConfirm buttonicon={RadixConf.ICON_DELETE}
                        buttontext={OpConstants.OP_TEXT_DELETE}
                        message="confirm delete?"
                        title="delete parameter"
                        onconfirm={() => execListParamsCommand(OpConstants.OP_DELETE)} />
                </Flex>
            </Box>

            <Box width="41%" >
                <TypeScriptViewer key={template}
                    template={template}
                    code={code} />
            </Box>

        </Flex>
    )

}//end comp

