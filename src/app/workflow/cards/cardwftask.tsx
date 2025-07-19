//src\app\workflows\wfeditor\cards\cardwftask.tsx

import React, { useRef } from "react";
import * as Collapsible from '@radix-ui/react-collapsible';
import { Button, Box, Text, Flex, Separator, IconButton, Container, Section, Heading, Grid } from "@radix-ui/themes";
import { ArchiveIcon, ArrowDownIcon, ArrowUpIcon, ChevronDownIcon, ChevronUpIcon, TrashIcon } from "@radix-ui/react-icons";
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
import { DB_ITEM_CMD, DB_ITEM_CMD_TEXT } from "@/common/database/dbkernel";

import { ButtonsStyle } from "@/radix/radixtheme";
import { DlgBtnIconDeleteConfirm } from "@/radix/dialog/dlgbtnicondelete";



const compStyle = {
    background: ' rgba(23, 23, 23, 0.9)',
    borderRadius: 'var(--radius-1)',
    border: '2px solid var(--blue-7)',
    boxShadow: '0px 0px 1px rgba(69, 69, 69, 0.9)'
};


const barbuttonscfg: BarButtonsCfg  = new BarButtonsCfg(
    [DB_ITEM_CMD.DELETE,     DB_ITEM_CMD.MOVEUP,     DB_ITEM_CMD.MOVEDOWN],
    [DB_ITEM_CMD_TEXT.DELETE,DB_ITEM_CMD_TEXT.MOVEUP,DB_ITEM_CMD_TEXT.MOVEDOWN],
    [ButtonsStyle.COLOR_DELETE,ButtonsStyle.COLOR_MOVEUP,ButtonsStyle.COLOR_MOVEDOWN],
    [RadixConf.ICON_SAVE,RadixConf.ICON_OPEN],
    [false,false],
    [true,true]
);

interface CardTaskProps {
    taskscount: number;
    codelangs: Codelang[];
    tasktypes: Tasktype[];
    taskcategories: Taskcategory[];
    task: Task;
    ondelete: (taskOrden:number) => void;
    //onsave?: (taskOrden:number) => void;
    
}
export function CardTask({ taskscount,task, codelangs, tasktypes, taskcategories: taskgroups,
                                    ondelete }: CardTaskProps) {
    const [open, setOpen] = React.useState(false);

    
    const proglanguageRef = useRef<HTMLSelectElement>(null);
    const tasktypeRef     = useRef<HTMLSelectElement>(null);
    const taskCategoryRef = useRef<HTMLSelectElement>(null);

    const nameRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const filesRef = useRef<HTMLInputElement>(null);
    const foldersRef = useRef<HTMLInputElement>(null);

    //orden
    const codelangsColl: Option[] = getCodelangsAsOptions(codelangs);
    const tasktypesColl: Option[] = getTasktypeAsOptions(tasktypes);
    const taskcategoriesColl: Option[] =getTaskcategoriessAsOptions(taskgroups);

    const onDeleteConfirm = () => {        
        ondelete(task.orden);
    }; 

    const execTaskItemOperation = (operation:string) => {

        if (operation === DB_ITEM_CMD.MOVEUP ) {
            if(task.orden > 0) { 

            }         
        }    
        else if (operation === DB_ITEM_CMD.MOVEDOWN) {
           if(task.orden < taskscount - 1) { 

            }                         
        }    
        else if(operation === DB_ITEM_CMD.DELETE) {
            alert("delete task");
        }        
        //else if(operation === DB_ITEM_CMD.UPDATE) {}

    };//end    

    const importDescription = () => {
        alert("import task description");
    };

 
    const onFieldSelectChange = (value:string|number,name?:string) => {
        if(name === "tasktype") {
            task.tasktype_id = value as number;
        }
        else if(name === "codelang") {
            task.codelang_id = value as number;
        }
        else if(name === "taskcategory") {
            task.taskcategory_id = value as number;
        }
    }

    const onFieldTextChange = (value: string,name?:string) => {
        if(name === "name") {
            task.name = value;
        }
        else if(name === "description") {
            task.description = value;
        }
        else if(name === "files") {
            task.files = value;
        }
        else if(name === "folders") {
            task.folders = value;
        }           
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

                    <Flex direction="row" width={"100%"} justify="between" align="center"
                          py="1"  >
                        <XInputText name="tkname" inline={true}
                            defaul={task.name} 
                            maxlen={Task.maxlen("tkname")!} 
                            placeholder="task name" />     

                        <Flex direction="row" gapX="2" ml="3" >
                            
                            <IconButton variant={RadixConf.VARIANTS.solid} 
                                onClick={(e: React.MouseEvent) =>execTaskItemOperation(DB_ITEM_CMD.UPDATE)}>
                                <ArchiveIcon />
                            </IconButton>                              
 
                            <DlgBtnIconDeleteConfirm 
                                               message="confirm delete task?"
                                               title="Confirm"
                                               onconfirm={onDeleteConfirm}  />
                            <IconButton variant={RadixConf.VARIANTS.solid} 
                                onClick={(e: React.MouseEvent) =>execTaskItemOperation(DB_ITEM_CMD.MOVEUP)}>
                                <ArrowUpIcon />
                            </IconButton>
                             <IconButton variant={RadixConf.VARIANTS.solid}
                                onClick={(e: React.MouseEvent) =>execTaskItemOperation(DB_ITEM_CMD.MOVEDOWN)}>
                                <ArrowDownIcon />
                            </IconButton>                            
                        </Flex>
                    </Flex>            
                </Flex>
                <Separator orientation="horizontal" size="4" mb="2" />

                <Collapsible.Content>

                    <Grid height="auto" rows="auto" columns="auto" gapX="4" px="2" >

                        {/* tasktype_id */}
                        <Box gridColumn="1" gridRow="1" >                            
                            <XInputSelect 
                                    name="tasktype" 
                                    label="Type" 
                                    inline={true}
                                    collection={tasktypesColl}
                                    defaul={task.tasktype_id.toString()}
                                    onchange={onFieldSelectChange}
                                    disabled={false} />                         
                        </Box>
                       
                       {/* codelang_id */}
                        <Box gridColumn="2" gridRow="1" >                            
                            <XInputSelect 
                                    name="codelang" 
                                    label="Code Lang"  
                                    inline={true}
                                    collection={codelangsColl}
                                    defaul={task.codelang_id.toString()}
                                    onchange={onFieldSelectChange}
                                    disabled={false} />                         
                        </Box>

                        {/* taskgroup_id */}
                        <Box gridColumn="3" gridRow="1" >                           
                            <XInputSelect 
                                    name="taskcategory" 
                                    label="Category"  
                                    inline={true}
                                    collection={taskcategoriesColl}
                                    defaul={task.taskcategory_id.toString()}
                                    onchange={onFieldSelectChange}
                                    disabled={false} />                         
                        </Box>                                                
                    </Grid>

                    <Flex direction="column" gapY="2" px="2" py="1" >

                        {/* description */}
                        <Flex width="100%" direction="row" justify="between"  >
                            <Box width="100%" >
                                <XInputTextArea 
                                    name="description" 
                                    label="Description" 
                                    defaul={task.description!} 
                                    maxlen={Task.maxlen("description")!} 
                                    placeholder="input description" 
                                    onchange={onFieldTextChange} />                                   
                            </Box>
                            <Flex pl="2" justify="end" mt="6">
                                <Button variant="solid" 
                                        color={ButtonsStyle.COLOR_IMPORT}
                                        size={ButtonsStyle.DEF_SIZE}
                                        onClick={importDescription}  >
                                    {DB_ITEM_CMD_TEXT.IMPORT}        
                                </Button>        
                            </Flex>
                        </Flex>
                        
                        {/* files */}
                        <XInputText 
                            name="files"
                            label="Files" 
                            defaul={task.files!} 
                            maxlen={Task.maxlen("files")!} 
                            placeholder="input files"
                            onchange={onFieldTextChange} />   

                        {/* folders */}
                        <XInputText 
                            name="folders"
                            label="Folders" 
                            defaul={task.folders!} 
                            maxlen={Task.maxlen("folders")!} 
                            placeholder="input folders" 
                            onchange={onFieldTextChange} />   
                    
                    </Flex>

                </Collapsible.Content>

            </Collapsible.Root>            

        </Flex>
    );

}//end component

    //const onClick = (command: string) => { };