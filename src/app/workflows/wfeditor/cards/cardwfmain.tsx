//src\app\workflows\wfeditor\cards\cardwfmain.tsx


import React, { useEffect, useRef, useState } from "react";
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
import { DB_ITEM_CMD_TEXT } from "@/common/database/dbkernel";


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
    
    const nameRef = useRef<HTMLInputElement>(null);
    //const proglanguageRef = useRef<HTMLSelectElement>(null);

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
                    <Flex width="100%" justify="between" pt="2" mb="1" align="center" >
                        <Box width="80%"  py="1" px="2" mr="3" >
                            <XInputText name="name"
                                        label="Name"
                                        inline={true}
                                        defaul={workflow.name}                         
                                        maxlen={Workflow.maxlen("name")} 
                                        placeholder="input name" 
                                        autofocus={true} /> 
                        </Box>    
                        <Box width="20%" >
                            {/*
                            <Button variant="solid" color={ThemeButtonsStyle.COLOR_IMPORT}
                                size="2" onClick={importMain}  >
                                {DB_ITEM_CMD_TEXT.IMPORT}   
                            </Button>                            
                            */}

                        </Box>    
                    </Flex>
                </Flex>

                <Separator orientation="horizontal" size="4" mb="2" />

                <Box width="100%" px="2" py="1" >
                    
                </Box>

                <Collapsible.Content >
                    <Flex direction="column" gapY="2" pl="2" py="1" >

                        <Flex width="100%" direction="row" justify="between"  >
                            <Box width="100%" >
                                <XInputTextArea 
                                            label="Description" 
                                            defaul={workflow.description} 
                                            height="120px"
                                            maxlen={Workflow.maxlen("description")} 
                                            placeholder="input description" />                                   
                            </Box>
                            <Flex pl="2" justify="end" mt="6">
                                <Button variant="solid" 
                                        color={RADIX_COLORS.green}
                                        size="2" onClick={importDescription}  >
                                    {DB_ITEM_CMD_TEXT.IMPORT}        
                                </Button>        
                            </Flex>
                        </Flex>

                        <Flex width="100%" direction="row" justify="between"  >
                            <Box width="100%" >
                                <XInputTextArea label="Context"
                                            height="120px"
                                            defaul={workflow.context!} 
                                            maxlen={Workflow.maxlen("context")} 
                                            placeholder="input context" />                                     
                            </Box>
                            <Flex pl="2" justify="end" mt="6">
                                <Button variant="solid" 
                                        color={RADIX_COLORS.green}
                                        size="2" onClick={importContext}  >
                                    {DB_ITEM_CMD_TEXT.IMPORT}        
                                </Button>        
                            </Flex>
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
