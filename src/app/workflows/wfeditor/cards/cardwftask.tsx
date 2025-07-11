//src\app\workflows\wfeditor\cards\cardwftask.tsx

import React from "react";
import * as Collapsible from '@radix-ui/react-collapsible';
import { Button, Box, Text, Flex, Separator, IconButton, Container, Section, Heading } from "@radix-ui/themes";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Option } from "@/common/models";
import { Codelang } from "@/db/model/codelang";
import { Task } from "@/db/model/task";
import { Taskgroup } from "@/db/model/taskgroup";
import { Tasktype } from "@/db/model/tasktype";
import { CodelangUtil } from "@/db/modelutil/codelangutil";
import { OutputText } from "@/radix/data/outputtext";
import { RadixConf } from "@/radix/radixconf";

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

interface CardTaskProps {
    codelangs: Codelang[];
    tasktypes: Tasktype[];
    taskgroups: Taskgroup[];
    task: Task;
    onsave?: () => void;
    oncancel?: () => void;
}
export default function CardTask({ task, codelangs, tasktypes, taskgroups,
                                   onsave, oncancel }: CardTaskProps) {
    const [open, setOpen] = React.useState(false);

    const onClick = (command: string) => {
        //callback(workflow.id, item);
    };

    //tasktype_id
    //codelang_id
    //taskgroup_id
    //orden
    //tkname
    //description
    //files
    //folders

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
                    <Flex width="100%" justify="between" align="start" >
                        <Box width="100%" mt="1" py="1" px="2" mr="2" style={headerStyle}>
                            <Text size="3" >Main</Text>
                        </Box>        
                    </Flex>
                </Flex>
                <Separator orientation="horizontal" size="4" mb="2" />
                <Collapsible.Content>
                    <Flex direction="column" gapY="2" px="2" py="1" >

                        <OutputText label="Application" data={null} />

                        
                    </Flex>
                </Collapsible.Content>
            </Collapsible.Root>            
        </Flex>
    );

}//end component