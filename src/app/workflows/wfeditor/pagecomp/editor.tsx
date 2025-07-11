//src\app\workflows\wfeditor\pagecomp\maincontent.tsx

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Text} from "@radix-ui/themes";

import { Workflow } from "@/db/model/workflow";
import { parseResponseCollection, parseResponseItem } from "@/common/javascriptparser";
import { DB_CONSTANTS, DB_ITEM_CMD, NEW_ROW_ID } from "@/db/dboperations";
import { Task } from "@/db/model/task";
import { getTaskgroups, getTasks, getWorkflow } from "@/db/services/read/srvworkflow";
import { readMemmoryCodelangs, AppMemmory } from "@/front/appmemory";

import { NEW_WK, TASKGROUP_DEFAULT } from "@/front/appworkflows";
import { Codelang } from "@/db/model/codelang";
import { Taskgroup } from "@/db/model/taskgroup";
import CardWorkflowMain from "../cards/cardwfmain";
import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";
import { BARCFG_SAVE_CLOSE } from "@/radix/appbars";
import BarButtons from "@/radix/cbars/btbar";
import { OPERATIONS } from "@/common/constants";


const mainContentStyle = {
    background: 'rgb(56, 56, 56)',
    borderTop: 'none',    
    borderBottom: 'none',   
    borderLeft: '1px solid rgb(167, 176, 188)', 
    borderRight: '1px solid rgb(125, 134, 145)',
};

// const appRef = useRef<AppWorkflows>(null);
interface WorkflowEditorProps { 
    onCharge: (workflow:Workflow,taskgroups:Taskgroup[]) => void;
}
export  function WorkflowEditor({onCharge}: WorkflowEditorProps) {
   
    const [ready,setReady] = useState<boolean>(false);
    const [barState,setBarState] = useState<string>("default");

    const codelangs:Codelang[]=readMemmoryCodelangs();

    let isNewWorkflow:boolean = true;
    if ((AppMemmory.readWorkflowId()!) !== Number(NEW_ROW_ID)) {isNewWorkflow = false;}

    const [workflowId,setWorkflowId] = useState<number>(AppMemmory.readWorkflowId());
    const [workflow,setWorkflow] = useState<Workflow>(NEW_WK);
    const [taskgroups,setTaskgroups] = useState<Taskgroup[]>([TASKGROUP_DEFAULT]);
    const [tasks,setTasks] = useState<Task[]>([]); 
        
    useEffect(() => {        
        if(ready) {return;}
        const init = async () => {   
            if(!isNewWorkflow) {
                setWorkflow(parseResponseItem<Workflow>(await getWorkflow(workflowId))!);
                setTaskgroups(parseResponseCollection<Taskgroup>(await getTaskgroups(workflowId))!);                
                setTasks(parseResponseCollection<Task>(await getTasks(workflow!.id))!);   
            }            
            setReady(true);
            onCharge(workflow,taskgroups);
        };
        init();
        
    }, []);    



    const execOperation = (itemIndex:number,action:string) => {
    };

    const renderHeader = () => {
        return (
            <>
            </>
        )
    };

    return (
        <Flex width="100%" direction="column" px="3" py="3" gapY="2" style={mainContentStyle} >
            <WorkflowEditorHeader state={barState}  />
            <CardWorkflowMain workflow={workflow} />
                              
        </Flex>
    );

}//end component

interface CompProps { 
    state?:string;
}
function WorkflowEditorHeader({state}: CompProps) {
    
    const [barbuttons,setBarbuttonsCfg] = useState<BarButtonsCfg>(BARCFG_SAVE_CLOSE);
    
    const onBarbuttonsClick = (operation:string) => {
        alert("Operation: " + operation);
        if(operation==DB_ITEM_CMD.UPDATE) { 

        }
        else if(operation==OPERATIONS.CLOSE) {
            
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