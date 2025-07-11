//src\app\workflows\wfeditor\cards\cardwfmain.tsx


import React, { useEffect, useState } from "react";
import * as Collapsible from '@radix-ui/react-collapsible';

import { Label } from "radix-ui";
import { Button, Box, Text, Flex, Separator, IconButton, Container, Section, Heading } from "@radix-ui/themes";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";
import { RadixConf } from "@/radix/radixconf";
import BarButtons from "@/radix/cbars/btbar";
import { BARCFG_DOS } from "@/radix/appbars";
import { Workflow } from "@/db/model/workflow";
import { OutputText } from "@/radix/data/outputtext";
import { ThemeButtonsStyle } from "@/radix/radixtheme";
import { XInputText } from "@/radix/input/inptext";
import { XInputTextArea } from "@/radix/input/inptextarea";
import { RADIX_COLORS } from "@/radix/radixconstants";


const compStyle = {
    background: ' rgba(23, 23, 23, 0.9)',
    borderRadius: 'var(--radius-1)',
    border: '2px solid var(--blue-7)',
    boxShadow: '0px 0px 1px rgba(69, 69, 69, 0.9)'
};
const headerStyle = {
    with: '100%',
    background: ' rgba(32, 32, 41, 0.9)',
    borderRadius: '4px',
    border: '1px solid rgba(144, 138, 137, 0.9)'
};

interface CompProps {
    workflow: Workflow;
    onsave?: () => void;
}
export default function CardWorkflowMain({workflow,onsave}:CompProps) {

    //const barbuttonscfg: BarButtonsCfg = BARCFG_DOS
    const [open, setOpen] = React.useState(true);


    const importMain = () => {
        console.log("import main");
    };

    const importDescription = () => {
        console.log("import description");
    };

    const importContext = () => {
        console.log("import description");
    };

    return (
        <Flex direction="column" width="100%" px="2" pt="0" pb="2" style={compStyle}  >
            
            
            <Collapsible.Root open={open} onOpenChange={setOpen}>

                <Flex align="start" direction="row" width="100%" pt="1" pb="1" gapX={"2"} >
                    <Collapsible.Trigger asChild >
                        <Box pt="1">
                            <IconButton variant={RadixConf.VARIANTS.ghost} >
                                {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </IconButton>
                        </Box>
                    </Collapsible.Trigger>
                    <Flex width="100%" justify="between" pt="2" mb="1" align="start" >
                        <Box width="100%"  py="1" px="2" mr="2" style={headerStyle}>
                            <Text size="3" >Main</Text>
                        </Box>    
                        <Box>
                            <Button variant="solid" color={ThemeButtonsStyle.COLOR_IMPORT}
                                size="2" onClick={importMain}  >
                                import
                            </Button>
                        </Box>    
                    </Flex>
                </Flex>

                <Separator orientation="horizontal" size="4" mb="2" />

                <Box width="100%" px="2" py="1" >
                    
                </Box>

                <Collapsible.Content>
                    <Flex direction="column" gapY="2" px="2" py="1" >

                        <Flex width="100%" direction="row" justify="between" align="center" >
                            <Box width="100%"  height="120px">
                                <XInputTextArea label="Description" 
                                            defaul={workflow.description} 
                                            maxlen={Workflow.maxlen("description")} 
                                            placeholder="input description" />                                   
                            </Box>
                            <Box>
                                <Button variant="solid" 
                                        color={RADIX_COLORS.green}
                                        size="2" onClick={importDescription}  >
                                </Button>        
                            </Box>
                        </Flex>

                        <Flex width="100%" direction="row" justify="between" align="center" >
                            <Box width="100%" height="120px" >
                                <XInputTextArea label="Context"
                                            defaul={workflow.context!} 
                                            maxlen={Workflow.maxlen("context")} 
                                            placeholder="input context" />                                   
                            </Box>
                            <Box>
                                <Button variant="solid" 
                                        color={RADIX_COLORS.green}
                                        size="2" 
                                        onClick={importContext}  >
                                </Button>        
                            </Box>
                        </Flex>
                           
                        
                        <XInputText name="application" 
                                    label="Application" 
                                    defaul={workflow.application!} 
                                    maxlen={Workflow.maxlen("application")} 
                                    placeholder="Application name" />

                        <XInputText name="fpath" 
                                    label="File Path" 
                                    defaul={workflow.fpath!} 
                                    maxlen={Workflow.maxlen("fpath")} 
                                    placeholder="File path/s" />                                    

                    </Flex>
                </Collapsible.Content>

            </Collapsible.Root>
            
        </Flex>
    );

}//end component

