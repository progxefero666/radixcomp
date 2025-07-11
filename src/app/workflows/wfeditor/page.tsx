//src\app\workflows\editor\page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Box, Flex, Grid, Text} from "@radix-ui/themes";
//db models
import { Workflow } from "@/db/model/workflow";
import { Taskgroup } from "@generated/prisma";
import { Task } from "@/db/model/task";
import { WorkflowEditor } from "@/app/workflows/wfeditor/pagecomp/editor";
import { WorkflowHeader } from "@/app/workflows/wfeditor/pagecomp/header";
import { WorkflowViewer } from "@/app/workflows/wfeditor/pagecomp/viewer";
import ManWfTaskGroups from "./pagecomp/mantaskgroups";
import { WK_EDITOR_VIEWS } from "@/front/appworkflows";


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

    const showManTaskgroups = () => {
        setView(WK_EDITOR_VIEWS.EDITOR_VIEW_TASKGROUPS.id);
    }

   const onCloseManTaskgroups = () => {
        setView(WK_EDITOR_VIEWS.EDITOR_VIEW_DEFAULT.id);
    }    
    const onWorkflowCharged = (workflow:Workflow) => {
        return (
            <Text size="5" weight="bold" className="text-gray-12">
                Section B Content
            </Text>
        );
    };
	    
    return (
        <Grid height="100vh" rows="auto 1fr" columns="56% 40% 4%" style={layoutStyle} >
            
            <Flex gridColumn="1/4" gridRow="1" >
                <WorkflowHeader />
            </Flex>

            <Flex gridColumn="2" gridRow="2" > 
                <WorkflowEditor onCharge={onWorkflowCharged} />
            </Flex>
            
            <Flex gridColumn="3" gridRow="2" > 
                {workflow ?<WorkflowViewer  workflow={workflow}/>:null}                
                <ManWfTaskGroups taskgroups={[]} />
            </Flex>   

            <Flex gridColumn="4" gridRow="2" >
                aux
            </Flex>

        </Grid>
    );

}//end page


