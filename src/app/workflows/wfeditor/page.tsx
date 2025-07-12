//src\app\workflows\editor\page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, Text} from "@radix-ui/themes";
//db models
import { Workflow } from "@/db/model/workflow";

import { Task } from "@/db/model/task";
import { WorkflowEditor } from "@/app/workflows/wfeditor/pagecomp/editor";
import { WorkflowHeader } from "@/app/workflows/wfeditor/pagecomp/header";
import { WorkflowViewer } from "@/app/workflows/wfeditor/pagecomp/viewer";
import PanelWfTaskcategories from "./categories/paneltaskcats";
import { WK_EDITOR_VIEWS } from "@/front/appworkflows";
import { Taskcategory } from "@/db/model/taskcategory";
import { Tasktype } from "@/db/model/tasktype";
import WorkflowPrimaryBar from "./pagecomp/primarybar";



const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

/**
 * Page Workflows Manegement
 *  const router = useRouter();
 */
export default function WorkflowEditorPage() {

    const [view,setView] = useState<string>(WK_EDITOR_VIEWS.EDITOR_VIEW_DEFAULT.id);

    const [tasktypes,setTasktypes] = useState<Tasktype[]>([]);
    const [workflow,setWorkflow] = useState<Workflow|null>(null);
    const [taskcats,setTaskcats] = useState<Taskcategory[]|null>(null);

    const onWorkflowCharged = (workflow:Workflow,taskcats:Taskcategory[]) => {
        console.log(taskcats);
        setWorkflow(workflow);
        //setTaskcats(taskgroups);
    }

    return (
        <Grid height="100vh" rows="auto 1fr" columns="13% 50% 37%" style={layoutStyle} >   

            <Flex gridColumn="1/4" gridRow="1" ><WorkflowHeader /></Flex>

            <Flex gridColumn="1" gridRow="2" >            
                <WorkflowPrimaryBar collection={taskcats} />
            </Flex>

            <Flex gridColumn="2" gridRow="2" >
                <WorkflowEditor onCharge={onWorkflowCharged} />
            </Flex>

            <Flex gridColumn="3" gridRow="2" >
                {workflow ? <WorkflowViewer workflow={workflow} />:null}                
            </Flex>   

        </Grid>
    );

}//end page

/*
	
    const showManTaskgroups = () => {
        setView(WK_EDITOR_VIEWS.EDITOR_VIEW_TASKGROUPS.id);
    }

    const onCloseManTaskgroups = () => {
        setView(WK_EDITOR_VIEWS.EDITOR_VIEW_DEFAULT.id);
    }    

*/
