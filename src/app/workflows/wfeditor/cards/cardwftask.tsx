//src\app\workflows\wfeditor\cards\cardwftask.tsx

import React from "react";
import * as Collapsible from '@radix-ui/react-collapsible';
import { Button, Box, Text, Flex, Separator, IconButton, Container, Section, Heading } from "@radix-ui/themes";
import { ArrowDownIcon, ArrowUpIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Option } from "@/common/model/option";

import { RadixConf } from "@/radix/radixconf";

import { XInputTextArea } from "@/radix/input/inptextarea";
import { XInputText } from "@/radix/input/inptext";
import { XInputSelect } from "@/radix/input/inpselect";


import { Codelang } from "@/db/model/codelang";
import { Task } from "@/db/model/task";
import { Taskcategory } from "@/db/model/taskcategory";
import { Tasktype } from "@/db/model/tasktype";
import { getCodelangsAsOptions } from "@/db/services/util/codelangutil";
import { getTaskcategoriessAsOptions, getTasktypeAsOptions } from "@/db/services/util/workflowutil";
import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";
import { DB_ITEM_CMD, DB_ITEM_CMD_TEXT } from "@/db/dboperations";
import { OPERATIONS, OPERATIONS_TEXT } from "@/common/constants";
import BarButtons from "@/radix/cbars/btbar";
import { ThemeButtonsStyle } from "@/radix/radixtheme";


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

const barbuttonscfg: BarButtonsCfg  = new BarButtonsCfg(
    [DB_ITEM_CMD.DELETE,     DB_ITEM_CMD.MOVEUP,     DB_ITEM_CMD.MOVEDOWN],
    [DB_ITEM_CMD_TEXT.DELETE,DB_ITEM_CMD_TEXT.MOVEUP,DB_ITEM_CMD_TEXT.MOVEDOWN],
    [ThemeButtonsStyle.COLOR_DELETE,ThemeButtonsStyle.COLOR_MOVEUP,ThemeButtonsStyle.COLOR_MOVEDOWN],
    [RadixConf.ICON_SAVE,RadixConf.ICON_OPEN],
    [false,false],
    [true,true]
);

interface CardTaskProps {
    codelangs: Codelang[];
    tasktypes: Tasktype[];
    taskcategories: Taskcategory[];
    task: Task;
    onsave?: () => void;
    oncancel?: () => void;
}
export default function CardTask({ task, codelangs, tasktypes, taskcategories: taskgroups,
                                   onsave, oncancel }: CardTaskProps) {
    const [open, setOpen] = React.useState(false);


    //orden
    const codelangsColl: Option[] = getCodelangsAsOptions(codelangs);
    const tasktypesColl: Option[] = getTasktypeAsOptions(tasktypes);
    const taskcategoriesColl: Option[] =getTaskcategoriessAsOptions(taskgroups);


    const onBarButtonClick = (operation:string) => {
        alert(operation);
    };    


    const onCodelangSelected = (value: string,name?:string) => {
        alert("onCodelangSelected: " + value + " name: " + name);
    };    

    const onTasktypeSelected = (value: string,name?:string) => {
        alert("onTasktypeSelected: " + value + " name: " + name);
    };    

    const onTaskcategorySelected = (value: string,name?:string) => {
        alert("onTaskcategorySelected: " + value + " name: " + name);
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

                    <Flex direction="row" width={"100%"} justify="between" align="center" style={headerStyle}>
                        <XInputText name="tkname" inline={true}
                            defaul={task.name} 
                            maxlen={Task.maxlen("tkname")!} 
                            placeholder="task name" />     
                        <BarButtons  barconfig={barbuttonscfg} onclick={onBarButtonClick}/>
                        <Flex direction="row" gapX="2" >
                             <IconButton variant={RadixConf.VARIANTS.solid} >
                                <ArrowUpIcon />
                            </IconButton>
                             <IconButton variant={RadixConf.VARIANTS.solid} >
                                <ArrowDownIcon />
                            </IconButton>                            
                        </Flex>
                    </Flex>            
                </Flex>
                <Separator orientation="horizontal" size="4" mb="2" />

                <Collapsible.Content>

                    <Flex direction="column" gapY="2" px="2" py="1" >

                        {/* tasktype_id */}
                        <XInputSelect
                                label="Type: "
                                collection={tasktypesColl}
                                defaul={task.tasktype_id.toString()}
                                onchange={onTasktypeSelected}
                                disabled={false} />  

                        {/* codelang_id */}
                        <XInputSelect
                                label="Code Lang: "
                                collection={codelangsColl}
                                defaul={task.codelang_id.toString()}
                                onchange={onCodelangSelected}
                                disabled={false} />  
                        
                        {/* taskgroup_id */}
                        <XInputSelect
                                label="Category: "
                                collection={taskcategoriesColl}
                                defaul={task.taskcategory_id.toString()}
                                onchange={onTaskcategorySelected}
                                disabled={false} />  

                        {/* description */}
                        <XInputTextArea label="Description" 
                            defaul={task.description} 
                            maxlen={Task.maxlen("description")!} 
                            placeholder="input description" />   


                        {/* files */}
                        <XInputText label="Files" 
                            defaul={task.files} 
                            maxlen={Task.maxlen("files")!} 
                            placeholder="input files" />   

                        {/* folders */}
                        <XInputText label="Folders" 
                            defaul={task.folders} 
                            maxlen={Task.maxlen("folders")!} 
                            placeholder="input folders" />   
                    
                    </Flex>

                </Collapsible.Content>

            </Collapsible.Root>            

        </Flex>
    );

}//end component

    //const onClick = (command: string) => { };