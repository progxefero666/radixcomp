//src\app\workflows\editor\page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from 'next/navigation';
import { Box, Flex, Grid, Text} from "@radix-ui/themes";
import { parseResponseCollection, parseResponseItem } from "@/front/parser/javascriptparser";

//db models
import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/model/codelang";
import { Workflow } from "@/db/model/workflow";
import { AppMemmory } from "@/app/appmemory";
import { getTaskgroups, getWorkflow } from "@/db/services/read/srvworkflow";
import { Taskgroup } from "@generated/prisma";



const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

/**
 * Page Workflows Manegement
 *  const router = useRouter();
 */
export default function WorkflowEditor() {
    const router = useRef(useRouter());
    const [ready,setReady] = useState<boolean>(false);

    const [codelangs,setCodelangs] = useState<Codelang[]|null>(null);
    const [workflow,setWorkflow] = useState<Workflow|null>(null);

    const params = useParams();
    let workflowId:number = -1;
    if(params && params.id) {
        workflowId = Number(params.id);
    }

    const init = async () => {  
        const codelangsJson = AppMemmory.readCodelangs();
        if(codelangsJson==null){return;};

        setCodelangs(parseResponseCollection<Codelang>(codelangsJson));
        const workflow_resp = await getWorkflow(workflowId);
        if(workflow_resp === null) {return;}

        const taskgroups_resp = await getTaskgroups(workflowId,true);
        if(taskgroups_resp === null) {return;}

        const taskgroups = parseResponseCollection<Taskgroup>(taskgroups_resp);
        console.log( taskgroups);
     
        //setWorkflow(parseResponseItem<Workflow>(workflow_resp));
        //setReady(true);  
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


