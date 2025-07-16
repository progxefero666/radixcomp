//src\app\workflows\wfeditor\pagecomp\maincontent.tsx

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Flex, Text } from "@radix-ui/themes";

import { Workflow } from "@/db/model/workflow";
import { parseResponseCollection, parseResponseItem } from "@/common/parsers/javascriptparser";
import { DB_ITEM_CMD, } from "@/common/database/dbkernel";
import { Task } from "@/db/model/task";
import { getTaskcategories, getTasks, getWorkflow } from "@/db/services/read/srvworkflow";
import { AppMemmory, readMemmoryTasktypes } from "@/front/appmemory";

import { AppWorkflows, WorkflowActions } from "@/front/appworkflows";
import BarButtons from "@/radix/cbars/btbar";


import { Codelang } from "@/db/model/codelang";
import { Taskcategory } from "@/db/model/taskcategory";
import CardWorkflowMain from "../cards/cardwfmain";
import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";
import { BARCFG_SAVE_CLOSE } from "@/radix/appbars";

import { OPERATIONS } from "@/common/constants";
import { Tasktype } from "@/db/model/tasktype";
import CardTask from "../cards/cardwftask";

import { RADIX_COLORS } from "@/radix/radixconstants";
import { COMP_BORDER_STYLE, ThemeButtonsStyle } from "@/radix/radixtheme";
import { DbTables } from "@/db/dbcatalog";
import { getAllByTable } from "@/db/services/generic/serviceread";
import { WorkflowEditorHeader } from "./editorheader";
import { DialogButtonConfirm } from "@/radix/dialog/dlgbuttonconfirm";
import { RadixConf } from "@/radix/radixconf";
import { GroupTasks } from "@/db/modelextend/grouptasks";


const mainContentStyle = {
    background: 'rgb(56, 56, 56)',
    border: '1px solid rgb(167, 176, 188)'
};

// const appRef = useRef<AppWorkflows>(null);
interface WorkflowEditorProps {
    onCharge: (workflow: Workflow, taskgroups: Taskcategory[]) => void;
}

export function WorkflowEditor({ onCharge }: WorkflowEditorProps) {

    const [ready, setReady] = useState<boolean>(false);

    const [codelangs, setCodelangs] = useState<Codelang[]>([]);
    const [tasktypes, setTasktypes] = useState<Tasktype[]>([]);

    let isNewWorkflow: boolean = true;
    //if ((AppMemmory.readWorkflowId()!) !== Number(DbOps.NEW_ROW_ID)) { isNewWorkflow = false; }

    const [mainOpen, setMainOpen] = useState<boolean>(true);
    const [workflowId, setWorkflowId] = useState<number>(AppMemmory.readWorkflowId());
    const [workflow, setWorkflow] = useState<Workflow>(AppWorkflows.NEW_WK);
    const [taskcats, setTaskcats] = useState<Taskcategory[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);

    const groups = useRef<GroupTasks[]>([]);

    useEffect(() => {
        if (ready) { return; }
        const init = async () => {

            setCodelangs(parseResponseCollection<Codelang>
                    (await getAllByTable(DbTables.codelang))!);

            setTasktypes(parseResponseCollection<Tasktype>
                    (await getAllByTable(DbTables.tasktype))!);
            
            if (!isNewWorkflow) {
                setWorkflow(parseResponseItem<Workflow>(await getWorkflow(workflowId))!);
                setTaskcats(parseResponseCollection<Taskcategory>(await getTaskcategories(workflowId))!);
                setTasks(parseResponseCollection<Task>(await getTasks(workflow!.id))!);
            }
            else {
                //GroupTasks
                //[AppWorkflows.TASKCATEGORY_DEF]
            }
            setReady(true);
            onCharge(workflow, taskcats);
        };
        init();
    }, []);
  
    const execMainCommand = (id: string) => {
        if (id == WorkflowActions.ADD_TASK) {
            let task_orden = tasks.length;
         /*
            let newTask:Task|null = null;
            if(groups.current.length == 0) { 
                groups.current.push(new GroupTasks(0,[task_orden]));
                newTask = AppWorkflows.getNewTask
                    (workflow.id,codelangs[0].id,tasktypes[0].id,task_orden,0);                
            }  
            else {
                const currentGroupIndex:number = groups.current.length - 1;
                newTask = AppWorkflows.getNewTask
                    (workflow.id,codelangs[0].id,tasktypes[0].id,task_orden,currentGroupIndex);                  
            }
            if(newTask!== null) {
                setTasks([...tasks, newTask!]); 
                setMainOpen(false);
            }
            */
            return;
        }        
        else if (id == WorkflowActions.CLEAR_TASKS) {
            alert("Clear tasks");
            setTasks([]);
            return;
        }        
    };//end

    const execTaskCommand = (id: string,index:number) => {

        // from row commands
        if (id == WorkflowActions.ADD_TASK) {
            alert("Add task");
            return;
        }
        else if (id == WorkflowActions.COPY_TASK) {
            alert("Copy task");
        }
                
        // from card commands
        else if (id == WorkflowActions.DELETE_TASK) {
            alert("Delete task");
        }
        else if (id == WorkflowActions.MOVEUP_TASK) {
            alert("Move up task");
        }
        else if (id == WorkflowActions.MOVEDOWN_TASK) {
            alert("Move down task");
        }

    };//end

    const onSaveWorkflow = () => {
        alert("onSaveWorkflow");
    };//end

    const onDeleteTask = (taskOrden:number) => {
        alert("onSaveTaskEdition");
    };//end

    const createNewGroup = (taskOrden:number) => {
        alert("current group"+ tasks[taskOrden].tkgroup);

    };//end

    const renderMainCommands = () => {
        return (
            <Flex width="100%" direction="row" justify="center" align="center"
                px="3" py="1" gapX="2" style={COMP_BORDER_STYLE} >
                <Button variant="solid" color={RADIX_COLORS.green}
                    size="2" onClick={() => execMainCommand("add_task")} value="add task" >
                    add task
                </Button>

                <DialogButtonConfirm buttonicon={RadixConf.ICON_DELETE}
                                     buttontext="clear tasks"
                                     message="Are you sure you want to clear all tasks?"
                                     title="Clear tasks" 
                                     onconfirm={() => execMainCommand("clear_tasks")}  /> 
            </Flex>
        )
    };//end

    const renderGroup = (groupId:number) => {

    };//end

    const renderTasksCommands = (index:number) => {
        return (
            <Flex width="100%" direction="row" justify="center" align="center"
                px="3" py="1" gapX="2" style={COMP_BORDER_STYLE} >

                <Button variant="solid" color={RADIX_COLORS.green}
                    size={ThemeButtonsStyle.BTN_DEF_SIZE}
                    onClick={() => execTaskCommand(WorkflowActions.ADD_TASK,index)} >
                    add task
                </Button>

                <Button variant="solid" color={RADIX_COLORS.blue}
                    size={ThemeButtonsStyle.BTN_DEF_SIZE}
                    onClick={() => createNewGroup(index)} >
                    new group
                </Button>
            </Flex>
        )
    };//end

    const renderTasks = () => {

        if (tasks.length == 0) {return (null);}
        return (
            <>
                {tasks.map((task, index) => (
                    <Box key={index.toString()}>
                        <CardTask taskscount={tasks.length}
                                  codelangs={codelangs}
                                  tasktypes={tasktypes}
                                  taskcategories={taskcats}
                                  task={task}
                                  ondelete={() => onDeleteTask}/>
                        {renderTasksCommands(index)}    
                    </Box>
                ))}
            </>
        )
    };//end

    return (
        <Flex width="100%" direction="column" px="3" py="3" gapY="2" style={mainContentStyle} >
            <WorkflowEditorHeader onsave={onSaveWorkflow}/>
            <CardWorkflowMain workflow={workflow} openinit={mainOpen} />
            {renderMainCommands()}
            {renderTasks()}
        </Flex>
    );

};//end component