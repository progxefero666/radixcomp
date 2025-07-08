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


const compStyle = {
    borderRadius: 'var(--radius-1)',
    border: '2px solid var(--blue-7)',
    padding: 'var(--space-2)',
    boxShadow: '0px 0px 1px rgba(253, 72, 6, 0.9)' 
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

       
                <Box >
                    <Text size="2" >
                        {workflow.description}
                    </Text>
                </Box>

                <Collapsible.Content>
                    {workflow.context!}
                </Collapsible.Content>

            </Collapsible.Root>

        </Flex>
    );

}//end component

