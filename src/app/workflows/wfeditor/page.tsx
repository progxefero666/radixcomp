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
import ManWfTaskGroups from "./pagecomp/mantaskgroups";
import { WK_EDITOR_VIEWS } from "@/front/appworkflows";
import { Taskgroup } from "@/db/model/taskgroup";


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
    const [workflow,setWorkflow] = useState<Workflow|null>(null);
    const [taskgroups,setTaskgroups] = useState<Taskgroup[]|null>(null);

    const onWorkflowCharged = (workflow:Workflow,taskgroups:Taskgroup[]) => {
        setWorkflow(workflow);
        setTaskgroups(taskgroups);
    }
	
    const showManTaskgroups = () => {
        setView(WK_EDITOR_VIEWS.EDITOR_VIEW_TASKGROUPS.id);
    }

    const onCloseManTaskgroups = () => {
        setView(WK_EDITOR_VIEWS.EDITOR_VIEW_DEFAULT.id);
    }    

    if(!workflow || !taskgroups) {
        return (
            <Flex width="100%" direction="column" px="2" pt="0" pb="2" >
                <p>No workflow charged yet</p>
            </Flex>
        )
    }

    const renderMainContent = () => {
        if(view==WK_EDITOR_VIEWS.EDITOR_VIEW_DEFAULT.id ){
            return (
                <WorkflowEditor onCharge={onWorkflowCharged} />
            );
        }
        else if(view==WK_EDITOR_VIEWS.EDITOR_VIEW_TASKGROUPS.id ){
            if(!taskgroups){
                return null;
            }
            return (
                <ManWfTaskGroups taskgroups={taskgroups} />
            );
        }        
  
    };

    return (
        <Grid height="100vh" rows="auto 1fr" columns="56% 40% 4%" style={layoutStyle} >            
            <Flex gridColumn="1/4" gridRow="1" ><WorkflowHeader /></Flex>
            <Flex gridColumn="2" gridRow="2" >{renderMainContent()}</Flex>
            <Flex gridColumn="3" gridRow="2" >viewer</Flex>   
            <Flex gridColumn="4" gridRow="2" >aux</Flex>
        </Grid>
    );

}//end page


