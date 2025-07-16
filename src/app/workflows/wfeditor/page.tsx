//src\app\workflows\editor\page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Flex, Grid, Text} from "@radix-ui/themes";
//db models
import { Workflow } from "@/db/model/workflow";

import { Task } from "@/db/model/task";
import { WorkflowEditor } from "@/app/workflows/wfeditor/pagecomp/editor";
import { WorkflowHeader } from "@/app/workflows/wfeditor/pagecomp/header";
import { WorkflowViewer } from "@/app/workflows/wfeditor/pagecomp/viewer";

import { AppWorkflowsConfig, AppWorkflowsReader } from "@/front/appworkflows";
import { Taskcategory } from "@/db/model/taskcategory";
import { Tasktype } from "@/db/model/tasktype";
import WorkflowPrimaryBar from "./pagecomp/primarybar";
import { AppMemmory } from "@/front/appmemory";



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
    const [taskcats,setTaskcats] = useState<Taskcategory[]|null>(null);


    useEffect(() => {          
        const init = async () => {
            const workflowId = AppMemmory.readWorkflowId();
            alert("WorkflowId: " + workflowId);
            setWorkflow(await AppWorkflowsReader.read_workflow(workflowId));
        };
        init();
    }, []);

    if(!workflow) {
        return (
            <Flex width="100%" align="center" justify="center" style={layoutStyle}>
                <Text>Loading workflow...</Text>
            </Flex>
        );
    }
    return (
        <Grid height="100vh" rows="auto 1fr" columns="20% 50% 30%" style={layoutStyle} >   

            <Flex gridColumn="1/4" gridRow="1" ><WorkflowHeader />
                <WorkflowEditor workflow={workflow} />
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

}//end page

/*
    const onWorkflowCharged = (workflow:Workflow,taskcats:Taskcategory[]) => {
        console.log(taskcats);
        setWorkflow(workflow);
        setTaskcats(taskcats);
    }
	//const [view,setView] = useState<string>(AppWorkflowsConfig.WK_EDITOR_VIEWS.EDITOR_VIEW_DEFAULT.id);
    const showManTaskgroups = () => {
        setView(WK_EDITOR_VIEWS.EDITOR_VIEW_TASKGROUPS.id);
    }

    const onCloseManTaskgroups = () => {
        setView(WK_EDITOR_VIEWS.EDITOR_VIEW_DEFAULT.id);
    }    

*/
