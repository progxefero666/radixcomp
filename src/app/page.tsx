//src\app\workflows\page.tsx

"use client";

import { useEffect, useState } from "react";
import { Box, Grid, Flex } from "@radix-ui/themes";
import { MOD_SECTIONS } from "@/front/appworkflows";
import { Header } from "@/app/workflows/pagecomp/header";
import { PrimaryBar } from "@/app/workflows/pagecomp/primarybar";
import { WorkflowsManager } from "@/app/workflows/pagecomp/wfsmanager";
import { SecondBar } from "@/app/workflows/pagecomp/secondbar";
import { WorkflowViewer } from "./workflows/pagecomp/wfviewer";
import { Workflow } from "@/db/model/workflow";

import { Tasktype } from "@/db/model/tasktype";
import { AppMemmory, saveMemmoryCodelangs, saveMemmoryTasktypes } from "@/front/appmemory";


const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

/**
 * Page Workflows Manegement
 *  const router = useRouter();
 */
export default function PageWorkflows() {

    const [actsection, setActSection]   = useState<string>(MOD_SECTIONS.MANAGER_WORKFLOWS.id);
      const [wfCharged, setWfCharged]     = useState<boolean>(false);
    const [wfSelected, setWfSelected]   = useState<Workflow | null>(null);

    const [tasktypes, setTasktypes] = useState<Tasktype[] | null>(null);
        
    useEffect(() => {
        //saveMemmoryCodelangs();
        //saveMemmoryTasktypes();
    }, []);

    const onSelection = (section: string) => {
        setActSection(section);
    };

    const showWfPreview = (workflow: Workflow) => {
        setWfSelected(workflow);
        setWfCharged(true);
    };

    return (
        <Grid height="100vh" rows="auto 1fr" columns="14% 41% 41% 4%" style={layoutStyle} >

            <Flex gridColumn="1/5" gridRow="1" >
                <Header section={actsection} />
            </Flex>

            <Flex gridColumn="1" gridRow="2" >
                <PrimaryBar section={actsection}
                    onselection={onSelection} />
            </Flex>

            <Flex gridColumn="2" gridRow="2" >
                <WorkflowsManager section={actsection}
                    showwfpreview={showWfPreview} />
            </Flex>

            <Flex gridColumn="3" gridRow="2" >
                {wfCharged ?
                    <WorkflowViewer workflow={wfSelected}/>
                    : <Box width="100%">not data charged</Box>}

            </Flex>

            <Flex gridColumn="4" gridRow="2" >
                <SecondBar section={actsection} />
            </Flex>

        </Grid>
    );

}//end page
