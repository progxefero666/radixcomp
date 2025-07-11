//src\app\workflows\wfeditor\pagecomp\maincontent.tsx

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Flex, Text } from "@radix-ui/themes";

import { Workflow } from "@/db/model/workflow";
import { parseResponseCollection, parseResponseItem } from "@/common/javascriptparser";
import { DB_CONSTANTS, DB_ITEM_CMD, NEW_ROW_ID } from "@/db/dboperations";
import { Task } from "@/db/model/task";
import { getTaskgroups, getTasks, getWorkflow } from "@/db/services/read/srvworkflow";
import { readMemmoryCodelangs, AppMemmory, readMemmoryTasktypes } from "@/front/appmemory";

import { NEW_WK, TASKGROUP_DEFAULT, WF_EDITOR_TASK_ACTION } from "@/front/appworkflows";
import { Codelang } from "@/db/model/codelang";
import { Taskgroup } from "@/db/model/taskgroup";
import CardWorkflowMain from "../cards/cardwfmain";
import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";
import { BARCFG_SAVE_CLOSE } from "@/radix/appbars";
import BarButtons from "@/radix/cbars/btbar";
import { OPERATIONS } from "@/common/constants";
import { Tasktype } from "@/db/model/tasktype";
import CardTask from "../cards/cardwftask";

import { RADIX_COLORS } from "@/radix/radixconstants";


const mainContentStyle = {
    background: 'rgb(56, 56, 56)',
    borderTop: 'none',
    borderBottom: 'none',
    borderLeft: '1px solid rgb(167, 176, 188)',
    borderRight: '1px solid rgb(125, 134, 145)',
};

// const appRef = useRef<AppWorkflows>(null);
interface WorkflowEditorProps {
    onCharge: (workflow: Workflow, taskgroups: Taskgroup[]) => void;
}
export function WorkflowEditor({ onCharge }: WorkflowEditorProps) {

    const [ready, setReady] = useState<boolean>(false);
    const [barState, setBarState] = useState<string>("default");

    const codelangs: Codelang[] = readMemmoryCodelangs();
    const tasktypes: Tasktype[] = readMemmoryTasktypes();

    let isNewWorkflow: boolean = true;
    if ((AppMemmory.readWorkflowId()!) !== Number(NEW_ROW_ID)) { isNewWorkflow = false; }

    const [workflowId, setWorkflowId] = useState<number>(AppMemmory.readWorkflowId());
    const [workflow, setWorkflow] = useState<Workflow>(NEW_WK);
    const [taskgroups, setTaskgroups] = useState<Taskgroup[]>([TASKGROUP_DEFAULT]);
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        if (ready) { return; }
        const init = async () => {
            if (!isNewWorkflow) {
                setWorkflow(parseResponseItem<Workflow>(await getWorkflow(workflowId))!);
                setTaskgroups(parseResponseCollection<Taskgroup>(await getTaskgroups(workflowId))!);
                setTasks(parseResponseCollection<Task>(await getTasks(workflow!.id))!);
            }
            setReady(true);
            onCharge(workflow, taskgroups);
        };
        init();
    }, []);


    const execCommand = (id:string) => {
       
        if (id == WF_EDITOR_TASK_ACTION.UPDATE_MAIN) {
            alert("Update main");
            return;
        }
        else if (id == WF_EDITOR_TASK_ACTION.ADD_TASK) {
            alert("Add task");
            return;
        }
        else if( id == WF_EDITOR_TASK_ACTION.UPDATE_TASK) {
            alert("Update task");
        }        
        else if( id == WF_EDITOR_TASK_ACTION.DELETE_TASK) {
            alert("Delete task");
        }
        else if( id == WF_EDITOR_TASK_ACTION.COPY_TASK) {
            alert("Copy task");
        }
        else if( id == WF_EDITOR_TASK_ACTION.MOVEUP_TASK) {
            alert("Move up task");    
        }
        else if( id == WF_EDITOR_TASK_ACTION.MOVEDOWN_TASK) {
            alert("Move down task");
        }
  
    };

    const onSaveTaskEdition = () => {
        alert("onSaveTaskEdition");
    };

    const onCancelTaskEdition = () => {
        alert("onCancelTaskEdition");
    };


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
                        <CardTask codelangs={[]}
                            tasktypes={tasktypes}
                            taskgroups={taskgroups}
                            task={task}
                            onsave={() => onSaveTaskEdition()}
                            oncancel={() => onCancelTaskEdition()} />
                    </Box>
                ))}
            </>
        )
    };

    const renderMainCommands = () => {
        return (
            <Flex width="100%" direction="row" px="3" py="1" align="center" gapX="2" >
                <Button variant="solid" color={RADIX_COLORS.green}
                    size="2" onClick={() => execCommand("add_task")} value="add task" >
                    add task
                </Button>
                <Button variant="solid" color={RADIX_COLORS.green}
                    size="2" onClick={() => execCommand("clear_tasks")} value="add task" >
                    clear task
                </Button>                
            </Flex>
        )
    };

    const renderTasksCommands = () => {
        return (
            <Flex width="100%" direction="row" px="3" py="1" align="center" gapX="2" >
                <Button variant="solid" color={RADIX_COLORS.green}
                    size="2" onClick={() => execCommand("add_task")} value="add task" >
                    add task
                </Button>
                <Button variant="solid" color={RADIX_COLORS.green}
                    size="2" onClick={() => execCommand("clear_tasks")} value="add task" >
                    add task
                </Button>                
            </Flex>
        )
    };
    // {renderTasks()}
    return (
        <Flex width="100%" direction="column" px="3" py="3" gapY="2" style={mainContentStyle} >
            <WorkflowEditorHeader state={barState} />
            <CardWorkflowMain workflow={workflow} />
            {renderMainCommands()}
           
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
        <Flex width="100%" direction="column" px="3" py="3" gapY="2" style={mainContentStyle} >
            <Box width={"100%"} >
                <BarButtons barconfig={barbuttons}
                    onclick={onBarbuttonsClick} />
            </Box>

        </Flex>
    );

}