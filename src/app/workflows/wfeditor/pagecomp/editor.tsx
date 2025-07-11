//src\app\workflows\wfeditor\pagecomp\maincontent.tsx

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Text} from "@radix-ui/themes";

import { Workflow } from "@/db/model/workflow";
import { parseResponseCollection, parseResponseItem } from "@/front/parser/javascriptparser";
import { DB_CONSTANTS, DB_ITEM_CMD, NEW_ROW_ID } from "@/db/dboperations";
import { Task } from "@/db/model/task";
import { getTaskgroups, getTasks, getWorkflow } from "@/db/services/read/srvworkflow";
import { readMemmoryCodelangs, AppMemmory } from "@/front/appmemory";

import { NEW_WORKFLOW, TASKGROUP_DEFAULT } from "@/front/appworkflows";
import { Codelang } from "@/db/model/codelang";
import { Taskgroup } from "@/db/model/taskgroup";


const mainContentStyle = {
    background: 'rgb(56, 56, 56)',
    borderTop: 'none',    
    borderBottom: 'none',   
    borderLeft: '1px solid rgb(167, 176, 188)', 
    borderRight: '1px solid rgb(125, 134, 145)',
};

// const appRef = useRef<AppWorkflows>(null);
interface CompProps { 
    onCharge?: (workflow:Workflow) => void;
}
export  function WorkflowEditor({onCharge}: CompProps) {
   
    const [ready,setReady] = useState<boolean>(false);
    const codelangs:Codelang[]=readMemmoryCodelangs();

    let isNewWorkflow:boolean = true;
    if ((AppMemmory.readWorkflowId()!) !== Number(NEW_ROW_ID)) {isNewWorkflow = false;}

    const [workflowId,setWorkflowId] = useState<number>(AppMemmory.readWorkflowId());
    const [workflow,setWorkflow] = useState<Workflow>(NEW_WORKFLOW);
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
        };
        init();
        
    }, []);    

    const execOperation = (itemIndex:number,action:string) => {
    };

    if (!workflow) {
        return (
            <Flex width="100%" direction="column" px="2" pt="0" pb="2" >
                <p>No workflow selected</p>
            </Flex>
        )
    };

    const renderMainContent = () => {
        return (
            <>
            </>
        )
    };

    return (
        <Flex width="100%" direction="column" px="3" py="3" gapY="2" style={mainContentStyle} >
                      
        </Flex>
    );

}//end component

