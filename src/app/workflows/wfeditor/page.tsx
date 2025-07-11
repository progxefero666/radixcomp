//src\app\workflows\editor\page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from 'next/navigation';
import { Box, Flex, Grid, Text} from "@radix-ui/themes";
import { parseResponseCollection, parseResponseItem } from "@/front/parser/javascriptparser";
import { AppMemmory } from "@/front/appmemory";

//db models
import { Codelang } from "@/db/model/codelang";
import { Workflow } from "@/db/model/workflow";
import { Taskgroup } from "@generated/prisma";
import { Task } from "@/db/model/task";

import { getWorkflow,getTaskgroups,getTasks} from "@/db/services/read/srvworkflow";


const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

/**
 * Page Workflows Manegement
 *  const router = useRouter();
 */
export default function WorkflowEditor() {

    const params = useParams();
    let workflowId:number = -1;
    if(params && params.id) {
        workflowId = Number(params.id);
    }

    const router = useRef(useRouter());
    const [ready,setReady] = useState<boolean>(false);

    const [codelangs,setCodelangs] = useState<Codelang[]|null>(null);
    const [workflow,setWorkflow] = useState<Workflow|null>(null);
    const [taskgroups,setTaskgroups] = useState<Taskgroup[]|null>(null);
    const [tasks,setTasks] = useState<Task[]|null>(null); 

    const init = async () => {  
        const codelangsJson = AppMemmory.readCodelangs();
        if(codelangsJson==null){return;};

        setCodelangs(parseResponseCollection<Codelang>(codelangsJson));
        const workflow_resp = await getWorkflow(workflowId);
        if(workflow_resp === null) {return;}

        const taskgroups_resp = await getTaskgroups(workflowId);
        if(taskgroups_resp === null) {return;}
        setTaskgroups(parseResponseCollection<Taskgroup>(taskgroups_resp));

        const tasks_resp = await getTasks(workflowId);
        if(tasks_resp === null) {return;}
        const tasks = parseResponseCollection<Task>(tasks_resp);
        console.log("Tasks: ", tasks);
        //setTasks(parseResponseCollection<Task>(tasks_resp));

        setReady(true);  
    };

    useEffect(() => {
        if(ready) {return;}
        init();      
    },[]);    

	if(!ready) {    
        return (
            <Box style={layoutStyle} >
                <Text>Loading...</Text>
            </Box>
        );
    }

    return (
        <Grid height="100vh" rows="auto 1fr" columns="14% 41% 41% 4%" style={layoutStyle} >
            
            <Flex gridColumn="1/5" gridRow="1" >
                header
            </Flex>

            <Flex gridColumn="1" gridRow="2" >
                Primary bar
            </Flex>

            <Flex gridColumn="2" gridRow="2" > 
                Main Content
            </Flex>
            
            <Flex gridColumn="3" gridRow="2" > 
                Second Content
            </Flex>   

            <Flex gridColumn="4" gridRow="2" >
                aux
            </Flex>

        </Grid>
    );

}//end page


