//src\app\workflows\cards\cardworkflow.tsx
import React from "react";
import * as Collapsible from '@radix-ui/react-collapsible';

import { Label } from "radix-ui";
import { Button, Box, Text, Flex, Separator, IconButton, Container, Section, Heading } from "@radix-ui/themes";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";
import { RadixConf } from "@/radix/radixconf";
import BarButtons from "@/radix/cbars/btbar";
import { BARCFG_DELETE_OPEN, BARCFG_DOS } from "@/radix/appbars";
import { Workflow } from "@/db/model/workflow";
import { OutputText } from "@/radix/data/outputtext";


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
    workflow?: Workflow;
    callback: (workflowId:number,action:string) => void;
}
export default function CardWorkflowPreview({ workflow , callback}: CompProps) {

    const barbuttonscfg: BarButtonsCfg = BARCFG_DOS
    const [open, setOpen] = React.useState(false);

    const onClick = (item: string, compName?: string) => {
        //callback(workflow.id, item);
    };

    return (
        <Flex direction="column" width="100%" px="2" pt="0" pb="2" style={compStyle}  >
            {/*
            
            <Collapsible.Root open={open} onOpenChange={setOpen}>

                <Flex align="start" direction="row" width="100%" pt="1" pb="1" gapX={"2"} >
                    <Collapsible.Trigger asChild >
                        <Box pt="1">
                            <IconButton variant={RadixConf.VARIANTS.ghost} >
                                {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </IconButton>
                        </Box>
                    </Collapsible.Trigger>
                    <Flex width="100%" justify="between" align="start" >
                        <Box width="100%" mt="1" py="1" px="2" mr="2" style={headerStyle}>
                            <Text size="3" >{workflow.wwname}</Text>
                        </Box>
                        <Box pt="1">
                            <BarButtons barconfig={barbuttonscfg} onclick={onClick} />
                        </Box>
                    </Flex>
                </Flex>

                <Separator orientation="horizontal" size="4" mb="2" />

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

            
            
            */}
        </Flex>
    );

}//end component

