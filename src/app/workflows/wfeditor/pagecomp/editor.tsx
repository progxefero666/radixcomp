//src\app\workflows\wfeditor\pagecomp\maincontent.tsx

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Flex, Text } from "@radix-ui/themes";

import { Workflow } from "@/db/model/workflow";
import { parseResponseCollection, parseResponseItem } from "@/common/javascriptparser";
import { DB_CONSTANTS, DB_ITEM_CMD, NEW_ROW_ID } from "@/db/dboperations";
import { Task } from "@/db/model/task";
import { getTaskcategories, getTasks, getWorkflow } from "@/db/services/read/srvworkflow";
import { AppMemmory, readMemmoryTasktypes } from "@/front/appmemory";

import { NEW_WK, TASKGROUP_DEFAULT, WF_EDITOR_TASK_ACTION } from "@/front/appworkflows";
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
import { COMP_BORDER_STYLE } from "@/radix/radixtheme";
import { DbTables } from "@/db/dbcatalog";
import { getAllByTable } from "@/db/services/generic/serviceread";


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
    const [barState, setBarState] = useState<string>("default");

    const [codelangs, setCodelangs] = useState<Codelang[]>([]);
    const [tasktypes, setTasktypes] = useState<Tasktype[]>([]);


    let isNewWorkflow: boolean = true;
    if ((AppMemmory.readWorkflowId()!) !== Number(NEW_ROW_ID)) { isNewWorkflow = false; }

    const [workflowId, setWorkflowId] = useState<number>(AppMemmory.readWorkflowId());
    const [workflow, setWorkflow] = useState<Workflow>(NEW_WK);
    const [taskgroups, setTaskgroups] = useState<Taskcategory[]>([TASKGROUP_DEFAULT]);
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        if (ready) { return; }
        const init = async () => {

            setCodelangs(parseResponseCollection<Codelang>
                    (await getAllByTable(DbTables.codelang))!);

            setTasktypes(parseResponseCollection<Tasktype>
                    (await getAllByTable(DbTables.tasktype))!);
            
            if (!isNewWorkflow) {
                setWorkflow(parseResponseItem<Workflow>(await getWorkflow(workflowId))!);
                setTaskgroups(parseResponseCollection<Taskcategory>(await getTaskcategories(workflowId))!);
                setTasks(parseResponseCollection<Task>(await getTasks(workflow!.id))!);
            }
            setReady(true);
            onCharge(workflow, taskgroups);
        };
        init();
    }, []);

    
    const getNewTask = (orden:number):Task => {               
        return new Task(
            NEW_ROW_ID,tasktypes[0].id,codelangs[0].id, 
            workflow.id, taskgroups[0].id,
            orden,"","",0,"","");    
    };//end
    
    const execMainCommand = (id: string) => {
        if (id == WF_EDITOR_TASK_ACTION.ADD_TASK) {
            let task_orden = 0;
            if( tasks.length > 0) {
                task_orden = tasks.length;
            }          
            const newTask = getNewTask(task_orden);
            setTasks([...tasks, newTask]); 
            return;
        }        
        else if (id == WF_EDITOR_TASK_ACTION.CLEAR_TASKS) {
            setTasks([]);
            return;
        }        
    };//end

    const execTaskCommand = (id: string,index:number) => {

        // from row commands
        if (id == WF_EDITOR_TASK_ACTION.ADD_TASK) {
            alert("Add task");
            return;
        }
        else if (id == WF_EDITOR_TASK_ACTION.COPY_TASK) {
            alert("Copy task");
        }
                
        // from card commands
        else if (id == WF_EDITOR_TASK_ACTION.DELETE_TASK) {
            alert("Delete task");
        }
        else if (id == WF_EDITOR_TASK_ACTION.MOVEUP_TASK) {
            alert("Move up task");
        }
        else if (id == WF_EDITOR_TASK_ACTION.MOVEDOWN_TASK) {
            alert("Move down task");
        }

    };//end

    const onSaveTaskEdition = () => {
        alert("onSaveTaskEdition");
    };//end

    const onCancelTaskEdition = () => {
        alert("onCancelTaskEdition");
    };//end

    const renderMainCommands = () => {
        return (
            <Flex width="100%" direction="row" justify="center" align="center"
                px="3" py="1" gapX="2" style={COMP_BORDER_STYLE} >
                <Button variant="solid" color={RADIX_COLORS.green}
                    size="2" onClick={() => execMainCommand("add_task")} value="add task" >
                    add task
                </Button>
                <Button variant="solid" color={RADIX_COLORS.green}
                    size="2" onClick={() => execMainCommand("clear_tasks")} value="add task" >
                    clear task
                </Button>
            </Flex>
        )
    };//end

    const renderTasksCommands = (index:number) => {
        return (
            <Flex width="100%" direction="row" justify="center" align="center"
                px="3" py="1" gapX="2" style={COMP_BORDER_STYLE} >

                <Button variant="solid" color={RADIX_COLORS.green}
                    size="2" onClick={() => execTaskCommand(WF_EDITOR_TASK_ACTION.ADD_TASK,index)} >
                    add task
                </Button>
                <Button variant="solid" color={RADIX_COLORS.blue}
                    size="2" onClick={() => execTaskCommand(WF_EDITOR_TASK_ACTION.COPY_TASK,index)} >
                    clear task
                </Button>
            </Flex>
        )
    };//end

    const renderTasks = () => {
        if (tasks.length == 0) {
            return (
                <Box width="100%" px="2" py="1" >
                    <Text size="2" color="gray">No tasks defined</Text>
                </Box>
            );
        }
        return (
            <>
                {tasks.map((task, index) => (
                    <Box key={index.toString()}>
                        <CardTask codelangs={codelangs}
                            tasktypes={tasktypes}
                            taskcategories={taskgroups}
                            task={task}
                            onsave={() => onSaveTaskEdition()}
                            oncancel={() => onCancelTaskEdition()} />
                        {renderTasksCommands(index)}    
                    </Box>
                ))}
            </>
        )
    };//end

    return (
        <Flex width="100%" direction="column" px="3" py="3" gapY="2" style={mainContentStyle} >
            <WorkflowEditorHeader state={barState} />
            <CardWorkflowMain workflow={workflow} />
            {renderMainCommands()}
            {renderTasks()}
        </Flex>
    );

}//end component

interface CompProps {
    state?: string;
}
function WorkflowEditorHeader({ state }: CompProps) {

    const [barbuttons, setBarbuttonsCfg] = useState<BarButtonsCfg>(BARCFG_SAVE_CLOSE);

    const onBarbuttonsClick = (operation: string) => {
        alert("Operation: " + operation);
        if (operation == DB_ITEM_CMD.UPDATE) {

        }
        else if (operation == OPERATIONS.CLOSE) {

        }
    };

    return (
        <Flex direction="row" justify="end" px="3" py="1" style={mainContentStyle} >

            <BarButtons barconfig={barbuttons}
                onclick={onBarbuttonsClick} />


        </Flex>
    );

}//end component

/*
        if (id == WF_EDITOR_TASK_ACTION.UPDATE_MAIN) {
            alert("Update main");
            return;
        }
*/