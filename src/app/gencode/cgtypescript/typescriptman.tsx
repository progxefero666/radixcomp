//src\app\gencode\cgtypescript\typescriptman.tsx

import Image from 'next/image'
import { useState, useEffect, useRef, FormEvent } from "react";
import { TypeScriptViewer } from "@/app/gencode/cgtypescript/typescriptviewer";

import { Box, Grid, Flex, Text, Button, Tabs, TextField, Separator, Slider, } from "@radix-ui/themes";
import { COMP_BORDER_STYLE, ButtonsStyle } from "@/radix/radixtheme";

import { CrossCircledIcon, PlayIcon, ReloadIcon } from "@radix-ui/react-icons";
import { OpConstants } from "@/common/constants";
import { Keyvalue } from "@/common/model/keyvalue";
import { CgDataConst, JsxOps, TsOps } from "@/codegen/data/cgdata";
import { XRadioGroup } from "@/radix/keyvalue/inpgrpradio";
import { Label } from "@radix-ui/react-label";
import { TsTemplates } from "@/codegen/templates/typescript/tstemplates";
import { SeparatorH } from "@/radix/container/separatorh";
import { min } from "date-fns";
import CardInputParam from '../cards/cardinputparam';
import { XInputNumber } from '@/radix/input/inpnumber';
import { InputPattern } from '@/codegen/data/model/inputpattern';
import { RADIX_COLORS } from '@/radix/radixconstants';



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


    const [countParams, setCountParams] = useState<number>(1);
    const [params, setParams] 
        = useState<InputPattern[]>(CgDataConst.LIST_PARAMS.slice(0,1));
    
    const sliderParamsValueInit = CgDataConst.COUNT_PARAMETERS_DEF * 
                                  CgDataConst.FACTOR_INC_PARAMETERS;

    const [sliderParamsValue, setSliderParamsValue] = useState<number>(sliderParamsValueInit);

    const onChangeCountParams = (value: number[]) => {
        const count:number = Math.floor(value[0] / CgDataConst.FACTOR_INC_PARAMETERS);
        setCountParams(count);
        setParams(CgDataConst.LIST_PARAMS.slice(0,count+1));
        setSliderParamsValue(count * CgDataConst.FACTOR_INC_PARAMETERS);
    };

    const [template, setTemplate] = useState<string>("");
    const [data, setData] = useState<string>("");
    const [code, setCode] = useState<string>("");

    const [opGroup, setOpGroup] = useState<string>(TsOps.MOD_ID);
    const [operation, setOperation] = useState<string>(TsOps.BASIC[0].key);

    useEffect(() => {
        onTsOpSelected(0,TsOps.MOD_ID);
    }, []);
    //onchange?: (value: string, name?: string) => void;

    const onTsOpSelected = (index: number, name?: string) => {    
        setOpGroup(name!);     
        setOperation(TsOps.BASIC[index].key); 
        if(TsOps.BASIC[index].key===TsOps.OP_CLASS){
            setTemplate(TsTemplates.t_class);  
            setCode(TsTemplates.t_class);              
        }     
    };//end 

    const onJsxOpSelected = (index: number, name?: string) => {    
        setOpGroup(name!);     
        setOperation(JsxOps.BASIC[index].key);    
    };//end 

    const runOperation = () => {
        if(opGroup==TsOps.MOD_ID) {
            execTsOperation(0,TsOps.BASIC[0].key);
        }
        else if(opGroup==JsxOps.MOD_ID) {
            execJsxOperation(0,JsxOps.BASIC[0].key);
        }
    };//end

    const execTsOperation = (index: number, name?: string) => {             
        if(TsOps.BASIC[index].key===TsOps.OP_CLASS){
            alert("run class operation");
            //setCode(template);
        }      
    };//end 

    const execJsxOperation = (index: number, name?: string) => {  
        if(JsxOps.BASIC[index].key===JsxOps.OP_BUTTONS){
            //setCode(template);
        }       
    };//end 
    
    const applyParameters = () => {
        alert("applyParametersd");
        //let index = str1.indexOf( "string" ); 
        //console.log("indexOf found String :" + index );   
    };//end


    const onchange = (id:string,value:string) => {
        console.log(id.concat(":").concat(value));
    }

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
            <Box px="2" py="2">

                <Flex  direction="row" justify="between" px="2" py="1" align="center" 
                        style={COMP_BORDER_STYLE} >                            
                    <Box width="40%"><Text size="2">Count Params:</Text></Box> 
                    <Box width="10%" >
                        <Text size="3" color={RADIX_COLORS.orange}>{countParams}</Text>                          
                    </Box>                           
                    <Box width="50%">
                        <Slider defaultValue={[sliderParamsValue]} 
                                step={CgDataConst.FACTOR_INC_PARAMETERS}
                                onValueChange={onChangeCountParams}   />                        
                    </Box>
                </Flex>

                <Flex width="100%" direction="column" mt="2" gapY="2"  >
                    {params.map((param, index) => (
                        <Box key={index.toString()}>
                            <CardInputParam pattindexInit={index}
                                            patterns={CgDataConst.LIST_PATTERNS} 
                                            input={CgDataConst.LIST_PARAMS[index]} 
                                            onchange={onchange}/>                            
                        </Box>                 
                    ))}
                </Flex>                               
            </Box>
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

            <Box  width="32%" >
                <Flex width="100%" direction="row" py="1" justify="center" >
                    <Button color={ButtonsStyle.COLOR_SAVE} style={buttonRunStyle}
                            size={ButtonsStyle.BTN_DEF_SIZE}
                            radius={ButtonsStyle.BTN_DEF_RADIUS}
                            onClick={() => runOperation()}>
                            <PlayIcon />
                            <Text size="3">execute</Text>
                    </Button>
                </Flex>
                <Separator size="4"/>
                {/* input parameters */}              
                {renderParameters()}
            </Box>    

            <Box  width="41%" >
                <TypeScriptViewer key={code}  code={code}  />           
            </Box>              

        </Flex>
    )

}//end comp

/*
<Button color={ThemeButtonsStyle.COLOR_SAVE} 
        size={ThemeButtonsStyle.BTN_DEF_SIZE}
        radius={ThemeButtonsStyle.BTN_DEF_RADIUS}
        onClick={() => applyParameters()}>
        <ReloadIcon />
        <Text size={ThemeButtonsStyle.BTN_TEXT_SIZE}>
            "Update"
        </Text>
</Button>                     
*/