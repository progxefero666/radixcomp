//src\app\gencode\cgtypescript\typescriptman.tsx

import Image from 'next/image'
import { useState, useEffect, useRef } from "react";
import { TypeScriptViewer } from "@/app/gencode/cgtypescript/typescriptviewer";
import { Box, Grid, Flex, Text, Button, Tabs, TextField, Separator, Slider, ChevronDownIcon, } from "@radix-ui/themes";
import { COMP_BORDER_STYLE, ButtonsStyle } from "@/radix/radixtheme";
import { JsxOps, TsOps } from "@/codegen/data/cgdataoperations";
import { XRadioGroup } from "@/radix/keyvalue/inpgrpradio";
import CardInputParam from '../cards/cardinputparam';
import { InputPattern } from '@/codegen/data/model/inputpattern';
import { RADIX_COLORS } from '@/radix/radixconstants';
import { PlayIcon, ReloadIcon, TextAlignTopIcon, TrashIcon } from '@radix-ui/react-icons';
import { OpConstants } from '@/common/constants';
import { DlgBtnDeleteConfirm } from '@/radix/dialog/dlgbtndelete';
import { RadixConf } from '@/radix/radixconf';
import { CgDataProcessor } from '@/codegen/data/cgdataproc';
import { Keyvalue } from '@/common/model/keyvalue';
import React from 'react';
import { SeparatorH } from "@/radix/container/separatorh";
import { CgDataPatterns } from '@/codegen/data/cgdatapatterns';


const LAYOUT_STYLE = {
    background: 'rgba(33, 33, 33, 1)',
};

const buttonBarStyle = {
    minWidth: '100px',
};


interface CompProps {
    onresult?: (code: String) => void;
}
export function TypeScriptManager({ onresult }: CompProps) {

    const [viewerActTab, setViewerActTab] = useState<string>(CgDataProcessor.WTEMPLATE);
    const [paramsValues, setParamsValues] = useState<Keyvalue[]>([]);

    const cgDataPatters:CgDataPatterns = new CgDataPatterns();
    //................................................................................
    // array parameters
    //................................................................................  
    const [countParams, setCountParams] = useState<number>(4);
    const [params, setParams]
        = useState<InputPattern[]>(cgDataPatters.inputs_v0v7.slice(0, 4));

    const onchange = (index: number, pattern: string, value: string) => {
        const params_values: Keyvalue[] = paramsValues;
        params_values[index] = new Keyvalue(pattern, value);
        setParamsValues(params_values);
    };//end

    const onChangeCountParams = (count: number) => {
        setCountParams(count);
        setParams(cgDataPatters.inputs_basic.slice(0, count + 1));
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

    const execListParamsCommand = (commandId:string) => {
    };

    // operation 
    //................................................................................   
    const [opGroup, setOpGroup] = useState<string>(TsOps.MOD_ID);

    const onGroupSelected = (index: number) => {
        alert("onGroupSelected: " + index);
    };//end
    const onTsOpSelected = (index: number, name?: string) => {
        setViewerActTab(CgDataProcessor.WTEMPLATE);
        setOpGroup(name!);
        setTemplate(TsOps.getTemplate(TsOps.BASIC[index].key));
        setCode(" ");
    };//end 

    const onJsxOpSelected = (index: number, name?: string) => {
        setViewerActTab(CgDataProcessor.WTEMPLATE);
        setOpGroup(name!);       
        setTemplate(JsxOps.getTemplate(JsxOps.BASIC[index].key));
        setCode(" ");
    };//end 

    const runOperation = () => {
        const result:string =  CgDataProcessor.executeOperation(template, paramsValues);
        setViewerActTab(CgDataProcessor.WCODE);
        setCode(result);
    };//end

    // renders 
    //................................................................................

    const renderAdvancedContent = () => {
        return (
            <Flex width="100%" direction="column" py="2" >
                <Text size="2">Make changes to your account.</Text>
            </Flex>
        );
    };//end

    const renderJsxContent = () => {
        return (
            <Flex width="100%" direction="row" px="4" >
                <XRadioGroup
                    name={JsxOps.MOD_ID}
                    collection={JsxOps.getColl_BASIC()}
                    label="Jsx Operations"
                    value={JsxOps.BASIC[0].key}
                    onselect={onJsxOpSelected} />
            </Flex>
        );
    };//end

    const renderBasicContent = () => {
        return (
            <Flex width="100%" direction="row" px="4" >
                <XRadioGroup
                    name={TsOps.MOD_ID}
                    collection={TsOps.getColl_BASIC()}
                    label="Operations"
                    value={TsOps.BASIC[0].key}
                    autofocus={true}
                    onselect={onTsOpSelected} />
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
      
                        */}
                    </Box>
                </Flex>

                <Box width="100%">                    
                    {params.map((param, index) => (
                        <Flex key={index.toString()} width="100%"
                            direction="column" style={COMP_BORDER_STYLE} >

                            <Flex width="100%" direction="row" justify="start" align="center" px="2" py="1">
                                <Flex width="70%" justify="start">
                                    {param.label}
                                </Flex>    
                                <Flex width="30%" justify="end" >
                                    <ChevronDownIcon className="AccordionChevron" aria-hidden />
                                </Flex>                                              
                            </Flex>                                            
                            <SeparatorH />                      
                            <Box key={index.toString()}>
                                <CardInputParam 
                                        patterns={CgDataPatterns.PATTERNS}
                                        input={cgDataPatters.inputs_v0v7[index]}
                                        onchange={onchange} />

                            </Box>
                        </Flex>
                    ))}
                    
                </Box>

            </>
        );
    };//end  

    return (

        <Flex height="auto" width="100%" direction="row" gridColumn="1" gridRow="1" >

            <Box width="20%" >
                <Tabs.Root defaultValue={TsOps.MOD_ID}>
                    <Tabs.List onClick={(e) => onGroupSelected(e.currentTarget.tabIndex)}>
                        <Tabs.Trigger value={TsOps.MOD_ID}>{TsOps.MOD_ID}</Tabs.Trigger>
                        <Tabs.Trigger value={JsxOps.MOD_ID}>JsxOps.MOD_ID</Tabs.Trigger>
                        <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
                    </Tabs.List>
                    <Box pt="3">
                        <Tabs.Content value="typescript">
                            {renderBasicContent()}
                        </Tabs.Content>
                        <Tabs.Content value="jsx">
                            {renderJsxContent()}
                            
                        </Tabs.Content>
                        <Tabs.Content value="advanced">
                            {renderAdvancedContent()}
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </Box>

            <Box width="36%" pr="3" >
                <Flex width="100%" direction="row" py="1" justify="center" gapX="2" >
                    <Button color={ButtonsStyle.COLOR_RUN} 
                        size={ButtonsStyle.BTN_DEF_SIZE}
                        radius={ButtonsStyle.BTN_DEF_RADIUS}
                        onClick={() => runOperation()}>
                        <PlayIcon />
                        <Text size="3">execute</Text>
                    </Button>
                    <Button color={ButtonsStyle.COLOR_CLEAR} 
                        size={ButtonsStyle.BTN_DEF_SIZE}
                        radius={ButtonsStyle.BTN_DEF_RADIUS}
                        onClick={() => runOperation()}>
                        <TrashIcon />
                        <Text size="3">clear</Text>
                    </Button>                
                    <Button color={ButtonsStyle.COLOR_CLOSE} 
                        size={ButtonsStyle.BTN_DEF_SIZE}
                        radius={ButtonsStyle.BTN_DEF_RADIUS}
                        onClick={() => runOperation()}>
                        <TextAlignTopIcon />
                        <Text size="3">close all</Text>
                    </Button>   
                    <Button color={ButtonsStyle.COLOR_RESET} 
                        size={ButtonsStyle.BTN_DEF_SIZE}
                        radius={ButtonsStyle.BTN_DEF_RADIUS}
                        onClick={() => runOperation()}>
                        <ReloadIcon />
                        <Text size="3">init</Text>
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
                        onconfirm={() => (execListParamsCommand(OpConstants.OP_DELETE))} />
                </Flex>
            </Box>

            <Box width="44%" >
                <TypeScriptViewer key={viewerActTab+opGroup+template}
                                  activetab={viewerActTab}
                                  template={template}
                                  code={code} />
            </Box>

        </Flex>
    )

}//end comp

