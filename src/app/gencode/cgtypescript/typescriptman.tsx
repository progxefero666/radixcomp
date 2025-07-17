//src\app\gencode\cgtypescript\typescriptman.tsx

import { useState, useEffect, useRef } from "react";
import { TypeScriptViewer } from "@/app/gencode/cgtypescript/typescriptviewer";

import { Box, Grid, Flex, Text, Button, Tabs, TextField, Separator, } from "@radix-ui/themes";
import { ThemeButtonsStyle } from "@/radix/radixtheme";

import { CrossCircledIcon, PlayIcon, ReloadIcon } from "@radix-ui/react-icons";
import { OpConstants } from "@/common/constants";
import { Keyvalue } from "@/common/model/keyvalue";
import { JsxOps, TsOps } from "@/codegen/data/cgdata";
import { XRadioGroup } from "@/radix/keyvalue/inpgrpradio";
import { Label } from "@radix-ui/react-label";
import { TsTemplates } from "@/codegen/templates/typescript/tstemplates";
import { SeparatorH } from "@/radix/container/separatorh";
import { min } from "date-fns";



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

    //useEffect(() => {}, []);
    const [template, setTemplate] = useState<string>("");
    const [data, setData] = useState<string>("");
    const [code, setCode] = useState<string>("");

    const [opGroup, setOpGroup] = useState<string>(TsOps.MOD_ID);
    const [operation, setOperation] = useState<string>(TsOps.BASIC[0].key);

    useEffect(() => {
        onTsOpSelected(0,TsOps.MOD_ID);
    }, []);

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
            <Flex width="100%" direction="column" mt="2" gapY="2" pr="2" >
                <Label>Parameter 0</Label>
                <TextField.Root 
                    name="parameter_0"
                    placeholder="param 0"
                    radius="medium" />
                <Label>Parameter 1</Label>
                <TextField.Root 
                    name="parameter_1"
                    placeholder="param 1"
                    radius="medium" />                        
            </Flex> 
        );
    };//end  

    return (

        <Flex width="100%" direction="row" gridColumn="1" gridRow="1" >

            <Box width="32%" >

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
            <Box  width="18%" >

                <Flex width="100%" direction="row" px="2" gapX="2" py="1" justify="center" >
                    <Button color={ThemeButtonsStyle.COLOR_SAVE} style={buttonRunStyle}
                            size={ThemeButtonsStyle.BTN_DEF_SIZE}
                            radius={ThemeButtonsStyle.BTN_DEF_RADIUS}
                            onClick={() => runOperation()}>
                            <PlayIcon />
                            <Text size="3">
                                execute
                            </Text>
                    </Button>
                    {/*
                    <Button color={ThemeButtonsStyle.COLOR_SAVE} 
                            size={ThemeButtonsStyle.BTN_DEF_SIZE}
                            radius={ThemeButtonsStyle.BTN_DEF_RADIUS}
                            onClick={() => applyParameters()}>
                            <ReloadIcon />
                            <Text size={ThemeButtonsStyle.BTN_TEXT_SIZE}>
                                "Update"
                            </Text>
                    </Button>                     
                    */}
                   
                </Flex>
                <Separator size="4"  />

                {/* input parameters */}              
                {renderParameters()}
  

            </Box>    

            <Box  width="50%" >
                <TypeScriptViewer key={code}  code={code}  />           
            </Box>              

        </Flex>
    )

}//end comp