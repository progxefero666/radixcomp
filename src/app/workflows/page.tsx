//src\app\workflows\page.tsx

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Box, Grid, Flex } from "@radix-ui/themes";
import { AppWorkflowsConfig } from "@/front/appworkflows";
import { Header } from "@/app/workflows/pagecomp/header";
import { PrimaryBar } from "@/app/workflows/pagecomp/primarybar";
import { WorkflowsManager } from "@/app/workflows/pagecomp/wfsmanager";
import { SecondBar } from "@/app/workflows/pagecomp/secondbar";
import { WorkflowViewer } from "./pagecomp/wfviewer";
import { AppMemmory } from "@/front/appmemory";


const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

/**
 * Page Workflows Manegement
 *  const router = useRouter();
 */
export default function PageWorkflows() {

    const router = useRouter();
    const [actsection, setActSection] = useState<string>(AppWorkflowsConfig.MOD_SECTIONS.MANAGER_WORKFLOWS.id);   
    const [workflowId, setWorkflowId] = useState<number | null>(null);
        
    const onSectionSelected = (section: string) => {
        setActSection(section);
    };

    const openWorkflow = (id:number) => {
        AppMemmory.saveWorkflowId(id);
        router.push("../workflow");
    };

    const viewWorkflow = (id:number) => {
        setWorkflowId(id);
    };

    return (
        <Grid height="100vh" rows="auto 1fr" columns="14% 41% 41% 4%" style={layoutStyle} >

            <Flex gridColumn="1/5" gridRow="1" >
                <Header section={actsection} />
            </Flex>

            <Flex gridColumn="1" gridRow="2" >
                <PrimaryBar section={actsection} onselection={onSectionSelected} />
            </Flex>

            <Flex gridColumn="2" gridRow="2" >
                <WorkflowsManager section={actsection}
                                  editworkflow={openWorkflow}
                                  viewworkflow={viewWorkflow} />
            </Flex>

            <Flex gridColumn="3" gridRow="2" >
                {(workflowId!==null) ?
                    <WorkflowViewer workflowId={workflowId}/>
                    : <Box width="100%">not data charged</Box>}
            </Flex>

            <Flex gridColumn="4" gridRow="2" >
                <SecondBar section={actsection} />
            </Flex>

        </Grid>
    );

}//end page
