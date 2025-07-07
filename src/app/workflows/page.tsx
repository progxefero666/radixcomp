//src\app\workflows\page.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid, Flex, Text } from "@radix-ui/themes";

import { PageHeader } from "@/app/workflows/pagecomp/wfheader";
import { PrimaryBar } from "@/app/workflows/pagecomp/wfprimarybar";
import MainContent from "./pagecomp/wfmain";
import { WorkflowsConfig } from "./config";

import { readDbSqlScriptFile } from "@/app_server/xeferodb/sqlscripts";
import { AppContext } from "@/app_front/appcontext";
import { AppWorkflows } from "@/app_front/workflows/appworkflows";
import { SecondBar } from "./pagecomp/wfsecomdbar";

//import MainContent from "../index/maincontent";


const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

/**
 * Page Workflows Manegement
 *  const router = useRouter();
 */
export default function PageWorkflows() {
    
    const [actsection, setActSection] = useState<string>(WorkflowsConfig.MODULES[0].id);
    const onSelection = (section:string) => {setActSection(section);};

    return (
        <Grid height="100vh" rows="auto 1fr" columns="16% 68% 16%" style={layoutStyle} >
            
            <Flex gridColumn="1/4" gridRow="1" >
                <PageHeader section={actsection} />   
            </Flex>

            <Flex gridColumn="1" gridRow="2" >
                <PrimaryBar section={actsection} 
                            onselection={onSelection} />
            </Flex>

            <Flex gridColumn="2" gridRow="2" > 
                <MainContent section={actsection} />
            </Flex>
            
            <Flex gridColumn="3" gridRow="2" >
                <SecondBar section={actsection} />
            </Flex>

        </Grid>
    );

}//end page