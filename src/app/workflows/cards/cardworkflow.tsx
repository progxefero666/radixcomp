//src\app\workflows\cards\cardworkflow.tsx
import React from "react";
import * as Collapsible from '@radix-ui/react-collapsible';

import { Label } from "radix-ui";
import { Button, Box, Text, Flex, Separator, IconButton, Container, Section } from "@radix-ui/themes";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

import { BarButtonsCfg } from "@/common/modelui/barbuttonscfg";
import { RadixConf } from "@/radix/radixconf";
import BarButtons from "@/radix/cbars/btbar";
import { BARCFG_DELETE_OPEN } from "@/app_front/ui/appbars";
import { Workflow } from "@/db/model/workflow";
import { OutputText } from "@/radix/data/outputtext";


const compStyle = {
    borderRadius: 'var(--radius-1)',
    border: '2px solid var(--blue-7)',
    boxShadow: '0px 0px 1px rgba(69, 69, 69, 0.9)' 
};
interface CompProps {
    workflow: Workflow;  
}
export default function CardWorkflow({workflow}: CompProps) {
    
    const barbuttonscfg: BarButtonsCfg = BARCFG_DELETE_OPEN
    const [open, setOpen] = React.useState(false);

    const onClick = (item:string,compName?:string) => {
    };

    return (
        <Flex as="div" direction="column" width="100%" px="4" py="2" style={compStyle}  >
       
            <Collapsible.Root
                className="CollapsibleRoot"
                open={open}
                onOpenChange={setOpen}>

                <Flex align="start" direction="row"  width={"100%"} pl="2" pt="1"  gapX={"2"} >
                    <Collapsible.Trigger asChild>
                        <IconButton variant={RadixConf.VARIANTS.ghost} >
                             {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        </IconButton>
                    </Collapsible.Trigger>   
                    <Flex  width={"100%"} justify="between" align="start" >
                        <Text size="4" align="left">{workflow.wwname}</Text>     
                        {barbuttonscfg? <
                            BarButtons  barconfig={barbuttonscfg} onclick={onClick}/>
                        : null}       
                    </Flex>                 
                </Flex>
                
                <Separator orientation="horizontal" size="4" mb="2"/>
       
                <Box width="100%" px="2" py="1" >
                    <OutputText label="Description" data={workflow.description} />
                </Box>

                <Collapsible.Content>
                    <Flex direction="column" gapY="2" px="2" py="1" >
                        <OutputText label="File Path" data={workflow.fpath} />
                        <OutputText label="Context" data={workflow.context} />                        
                    </Flex>
                </Collapsible.Content>

            </Collapsible.Root>

        </Flex>
    );

}//end component

