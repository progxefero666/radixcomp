//src\app\workflows\page.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid, Flex, Text } from "@radix-ui/themes";

import { UiSecondPanels, WorkflowsConfig }  from "@/app/workflows/config";
import { Header }       from "@/app/workflows/pagecomp/header";
import { PrimaryBar }       from "@/app/workflows/pagecomp/primarybar";
import { WorkflowsManager }      from "@/app/workflows/pagecomp/wfsmanager";
import { SecondBar }        from "@/app/workflows/pagecomp/secondbar";
import { Codelang } from "@/db/model/codelang";
import { getAllByTable } from "@/db/services/generic/serviceread";
import { DbTables } from "@/db/dbcatalog";
import { parseCollection } from "@/front/parser/javascriptparser";
import { PanelTaskgroups } from "@/app/workflows/groups/panelgroups";
import { SecondContent } from "./workflows/pagecomp/secondcontent";
import { Workflow } from "@/db/model/workflow";


const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

/**
 * Page Workflows Manegement
 *  const router = useRouter();
 */
export default function PageWorkflows() {
    //const [codelangs,setCodelangs] = useState<Codelang[]|null>(null);
    
    const [ready,setReady] = useState<boolean>(false);
    const [actsection, setActSection] = useState<string>(WorkflowsConfig.MODULES[0].id);
    const [activePanel, setActivePanel] = useState<string>(UiSecondPanels.EMPTY);

    const [wfCharged,setWfCharged] = useState<boolean>(false);
    const [wfSelected,setWfSelected] = useState<Workflow|null>(null);

    const onSelection = (section:string) => {
        setActSection(section);
    };

    const showWfPreview = (workflow:Workflow) => {
        setWfSelected(workflow);
        setWfCharged(true);
        setActivePanel(UiSecondPanels.WORKFLOW_PREVIEW);
    };

    useEffect(() => {
        if(ready) {return;}
        const init = async () => {                     
            /* 
            const response = await getAllByTable(DbTables.codelang);
            if(response === null) {return false;}            

            const coll_codelang:Codelang[]|null =parseCollection<Codelang>(response)

            setCodelangs(parseCollection<Codelang>(response));
            */
            setReady(true);
            alert("init end");
        };
        init();
    }, []);    

	    
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
                                showwfpreview={showWfPreview}/>
            </Flex>
            
            <Flex gridColumn="3" gridRow="2" > 
                {wfCharged ? 
                    <SecondContent workflow={wfSelected}
                                section={actsection} 
                                actpanel={activePanel} />                
                :   <Box width="100%">not data charged</Box> }

            </Flex>   

            <Flex gridColumn="4" gridRow="2" >
                <SecondBar section={actsection} />
            </Flex>

        </Grid>
    );

}//end page