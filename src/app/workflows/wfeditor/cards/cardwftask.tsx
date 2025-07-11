//src\app\workflows\wfeditor\cards\cardwftask.tsx

import React from "react";
import * as Collapsible from '@radix-ui/react-collapsible';
import { Button, Box, Text, Flex, Separator, IconButton, Container, Section, Heading } from "@radix-ui/themes";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Option } from "@/common/models";

import { RadixConf } from "@/radix/radixconf";

import { XInputTextArea } from "@/radix/input/inptextarea";
import { XInputText } from "@/radix/input/inptext";
import { XInputSelect } from "@/radix/input/inpselect";


import { Codelang } from "@/db/model/codelang";
import { Task } from "@/db/model/task";
import { Taskgroup } from "@/db/model/taskgroup";
import { Tasktype } from "@/db/model/tasktype";
import { getCodelangsAsOptions } from "@/db/modelutil/codelangutil";
import { getTaskgroupsAsOptions, getTasktypeAsOptions } from "@/db/modelutil/workflowutil";


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

    //orden
    const codelangsColl: Option[] = getCodelangsAsOptions(codelangs);
    const tasktypesColl: Option[] = getTasktypeAsOptions(tasktypes);
    const taskgroupsColl: Option[] =getTaskgroupsAsOptions(taskgroups);


    const onCodelangSelected = (value: string,name?:string) => {
        alert("onCodelangSelected: " + value + " name: " + name);
    };    

    const onTasktypeSelected = (value: string,name?:string) => {
        alert("onTasktypeSelected: " + value + " name: " + name);
    };    

    const onTaskgroupSelected = (value: string,name?:string) => {
        alert("onTaskgroupSelected: " + value + " name: " + name);
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
                    <Flex width="100%" justify="between" align="start" >
                        <Box width="100%" mt="1" py="1" px="2" mr="2" style={headerStyle}>
                            <Text size="3" >Main</Text>
                        </Box>        
                    </Flex>
                </Flex>
                <Separator orientation="horizontal" size="4" mb="2" />

                <Collapsible.Content>

                    <Flex direction="column" gapY="2" px="2" py="1" >

                        {/* tkname */}
                        <XInputText 
                            label="Name" 
                            defaul={task.tkname} 
                            maxlen={task.maxlen("tkname")!} 
                            placeholder="task name" />   

                        {/* tasktype_id */}
                        <XInputSelect
                                label="Type: "
                                collection={tasktypesColl}
                                default={task.tasktype_id.toString()}
                                onchange={onTasktypeSelected}
                                disabled={false} />  

                        {/* codelang_id */}
                        <XInputSelect
                                label="Code Lang: "
                                collection={codelangsColl}
                                default={task.codelang_id.toString()}
                                onchange={onCodelangSelected}
                                disabled={false} />  
                        
                        {/* taskgroup_id */}
                        <XInputSelect
                                label="Group: "
                                collection={taskgroupsColl}
                                default={task.taskgroup_id.toString()}
                                onchange={onTaskgroupSelected}
                                disabled={false} />  

                        {/* description */}
                        <XInputTextArea label="Description" 
                            defaul={task.description} 
                            maxlen={task.maxlen("description")!} 
                            placeholder="input description" />   


                        {/* files */}
                        <XInputText label="Files" 
                            defaul={task.files} 
                            maxlen={task.maxlen("files")!} 
                            placeholder="input files" />   

                        {/* folders */}
                        <XInputText label="Folders" 
                            defaul={task.folders} 
                            maxlen={task.maxlen("folders")!} 
                            placeholder="input folders" />   
                    
                    </Flex>

                </Collapsible.Content>

            </Collapsible.Root>            

        </Flex>
    );

}//end component

    //const onClick = (command: string) => { };