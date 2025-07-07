//src\app\workflows\page.tsx

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid, Flex, Text } from "@radix-ui/themes";

import { PageHeader } from "@/app/workflows/pagecomp/wfheader";
import { PrimaryBar } from "@/app/workflows/pagecomp/wfprimarybar";
import MainContent from "./pagecomp/wfmain";
import { WorkflowsConfig } from "./config";

//import MainContent from "../index/maincontent";


const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

/**
 * Page Workflows Manegement
 * 
 */
export default function PageWorkflows() {
    const router = useRouter();

    const [actsection, setActSection] = useState<string>(WorkflowsConfig.MODULES[0].id);

    useEffect(() => {

    }, []);

    const onSelection = (section: string) => {    
        setActSection(section);
    };

    return (
        <Grid height="100vh" rows="auto 1fr" columns="16% 68% 16%" style={layoutStyle} >
            
            <Flex gridColumn="1/4" gridRow="1" >
                <PageHeader  />    
            </Flex>

            <Flex gridColumn="1" gridRow="2" >
                <PrimaryBar section={actsection} onselection={onSelection} />
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



const secondBarStyle = {
    background: 'rgb(24, 24, 27)',
};
/**
 * Page Second Bar
 */
interface SecondBarProps {
    section: string|null;
}
function SecondBar({section}: SecondBarProps) {

    const onSelection = (sectionId: string) => {
        //not implemented yet
    }
    return (
        <Flex width="100%" direction="column" gapY="2" style={secondBarStyle} >
            <p>Second Bar</p>
        </Flex>
    );

}//end PrimaryBar
