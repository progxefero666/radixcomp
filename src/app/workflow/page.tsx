//src\app\workflows\editor\page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Flex, Grid, Text} from "@radix-ui/themes";
import { AppMemmory } from "@/front/appmemory";
import { InfoNotdata } from "@/radix/data/infonotdata";
import { Workflow } from "@/db/model/workflow";
import { WorkflowEditor } from "@/app/workflow/page/editor";
import { WorkflowHeader } from "@/app/workflow/page/header";
import { WorkflowViewer } from "@/app/workflow/page/viewer";
import { AppWorkflowsReader } from "@/front/appworkflows";
import { WorkflowPrimaryBar} from "./page/primarybar";


const layoutStyle = {
    background: 'rgb(153, 17, 62)',
};

/**
 * Page Workflows Manegement
 *  const router = useRouter();
 */
export default function WorkflowEditorPage() {
    
    const router = useRouter();
    const [workflow,setWorkflow] = useState<Workflow|null>(null);

    useEffect(() => {          
        const init = async () => {
            setWorkflow(await AppWorkflowsReader
                .read_workflow(AppMemmory.readWorkflowId()));
        };
        init();
    }, []);

    if(!workflow) {
        return (
            <InfoNotdata message="loading Workflow" />
        );
    }
    return (
        <Grid height="100vh" rows="auto 1fr" columns="20% 50% 30%" style={layoutStyle} >   

            
            <Flex gridColumn="1/4" gridRow="1" >
                <WorkflowHeader />
            </Flex>

            <Flex gridColumn="1" gridRow="2" >            
                <WorkflowPrimaryBar workflowid={workflow.id!}  />
            </Flex>

            <Flex gridColumn="2" gridRow="2" >
                <WorkflowEditor workflow={workflow} />            
            </Flex>

            <Flex gridColumn="3" gridRow="2" >
                <WorkflowViewer workflow={workflow} />      
            </Flex>   

        </Grid>
    );

};//end page