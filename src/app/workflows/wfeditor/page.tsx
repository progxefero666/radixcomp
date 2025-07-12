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
    const [taskcategories,setTaskcategories] = useState<Taskcategory[]|null>(null);

    const onWorkflowCharged = (workflow:Workflow,taskgroups:Taskcategory[]) => {
        setWorkflow(workflow);
        setTaskcategories(taskgroups);
    }
	
    const showManTaskgroups = () => {
        setView(WK_EDITOR_VIEWS.EDITOR_VIEW_TASKGROUPS.id);
    }

    const onCloseManTaskgroups = () => {
        setView(WK_EDITOR_VIEWS.EDITOR_VIEW_DEFAULT.id);
    }    

    const renderMainContent = () => {
        if(view==WK_EDITOR_VIEWS.EDITOR_VIEW_DEFAULT.id ){
            return (<WorkflowEditor onCharge={onWorkflowCharged} />);
        }
        else if(view==WK_EDITOR_VIEWS.EDITOR_VIEW_TASKGROUPS.id ){
            if(!taskcategories){return null;}
            return (<PanelWfTaskcategories taskgroups={taskcategories} />);
        }        
    };

    return (
        <Grid height="100vh" rows="auto 1fr" columns="10% 50% 40%" style={layoutStyle} >            
            <Flex gridColumn="1/4" gridRow="1" ><WorkflowHeader /></Flex>
            <Flex gridColumn="1" gridRow="2" >{renderMainContent()}</Flex>
            <Flex gridColumn="2" gridRow="2" >{renderMainContent()}</Flex>
            <Flex gridColumn="3" gridRow="2" >
                {workflow ? <WorkflowViewer workflow={workflow} />:null}                
            </Flex>   

        </Grid>
    );

}//end page


