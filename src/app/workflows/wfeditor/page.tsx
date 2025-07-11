//src\app\workflows\editor\page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Grid, Text} from "@radix-ui/themes";
import { parseResponseCollection, parseResponseItem } from "@/front/parser/javascriptparser";
//db models
import { Codelang } from "@/db/model/codelang";
import { Workflow } from "@/db/model/workflow";
import { Taskgroup } from "@generated/prisma";
import { Task } from "@/db/model/task";
import { getWorkflow,getTaskgroups,getTasks} from "@/db/services/read/srvworkflow";
import { WorkflowEditor } from "@/app/workflows/wfeditor/pagecomp/editor";
import { WorkflowHeader } from "@/app/workflows/wfeditor/pagecomp/header";
import { WorkflowViewer } from "@/app/workflows/wfeditor/pagecomp/viewer";
import { AppMemmory, readMemmoryCodelangs } from "@/front/appmemory";
import { NEW_WORKFLOW } from "@/front/workflows/appworkflows";

const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

/**
 * Page Workflows Manegement
 *  const router = useRouter();
 */
export default function WorkflowEditorPage() {

    const [ready,setReady] = useState<boolean>(false);

    const [workflow,setWorkflow] = useState<Workflow|null>(null);
    const [taskgroups,setTaskgroups] = useState<Taskgroup[]|null>(null);

    const init = async () => {  
     
  
       
        setReady(true);  
    };

    useEffect(() => {
        if(ready) {return;}
        init();      
    },[]);    

    const onCharge = (workflow:Workflow) => {
        return (
            <Text size="5" weight="bold" className="text-gray-12">
                Section B Content
            </Text>
        );
    };
	    
	if(!ready) {    
        return (
            <Box style={layoutStyle} >
                <Text>Loading...</Text>
            </Box>
        );
    }

    return (
        <Grid height="100vh" rows="auto 1fr" columns="56% 40% 4%" style={layoutStyle} >
            
            <Flex gridColumn="1/4" gridRow="1" >
                <WorkflowHeader />
            </Flex>

            <Flex gridColumn="2" gridRow="2" > 
                <WorkflowEditor onCharge={onCharge} />
            </Flex>
            
            <Flex gridColumn="3" gridRow="2" > 
                <WorkflowViewer  workflow={workflow}/>
            </Flex>   

            <Flex gridColumn="4" gridRow="2" >
                aux
            </Flex>

        </Grid>
    );

}//end page


