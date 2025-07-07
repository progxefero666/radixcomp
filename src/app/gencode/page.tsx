"use client";

import { useEffect, useRef, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { Box,  Flex, Text, Button, Link, Grid } from "@radix-ui/themes";
import { AppIndex } from "@/app_front/appindex";
import { AppConstants } from "@/app_front/appconstants";
import { AppContext } from "@/app_front/appcontext";
import { GenCodeControl } from "@/app/gencode/pagecomp/gccontrol";
import { GenCodeViewer } from "@/app/gencode/pagecomp/gcviewer";

import { readDbSqlScriptFile } from "@/app_server/xeferodb/sqlscripts";
import { PrimaryBar } from "@/app/gencode/pagecomp/gcprimarybar";
import { PageHeader } from "@/app/gencode/pagecomp/gcheader";


//const router = useRouter();
//const val = AppContext.readDbSquema();

/**
 * Application Main page 
 */
const boxStyle = {
    background: 'rgb(35, 35, 39)',
    border: '1px solid rgb(93, 92, 93)',
    padding: '0',
};

export default function PageGenCode() {

    let initialized: boolean = false;
    const appRef = useRef<AppIndex>(null);
    const [code, setCode] = useState<string>(AppConstants.NOT_DEF);
    const [section, setSection] = useState<string|null>(null);

    useEffect(() => {
        if(initialized) {return;} 
        
        const init = async () => {
            // Db Squema
            const dbSquema = await readDbSqlScriptFile("dbsquema");
            if(dbSquema!== null) {AppContext.saveDbSquema(dbSquema);}            
            // AppIndex 
            appRef.current = new AppIndex();
            const res: boolean = await appRef.current.loadInitCollections();
            if(!res) {
                alert("Error loading initial collections");
                return;
            }            
            // AppContext
            AppContext.saveCodelangs(appRef.current.codelangs);
            initialized =true;
        };
        init();
    }, []);

    const onCodeResult= (datacode: string) => {setCode(datacode);}
    const loadSection = (sectionId: string) => {setSection(sectionId);}

    return (
        <Flex direction="column" height="100vh">

            <PageHeader />
            
            <Flex height="100%">

                <Box width="14%" style={boxStyle}>
                    <PrimaryBar actsection={section}
                                onselection={loadSection} />
                </Box>

                <Box  width="41%" style={boxStyle}> 
                    <GenCodeControl key={section}  section={section}  
                                    ondataresult={onCodeResult}/>
                </Box>

                <Box width="41%" style={boxStyle}>
                    <GenCodeViewer section={section} code={code} />
                </Box>

                <Box width="4%" style={boxStyle}>
                    <SecondBar actsection={section} />
                </Box>
            </Flex>

        </Flex>
    );

}//end page


/**
 * Page Second Bar
 */
interface SecondBarProps {
    actsection: string|null;
}
function SecondBar({actsection}: SecondBarProps) {

    const onSelection = (sectionId: string) => {
        //not implemented yet
    }
    return (
        <Flex direction="column" >
            <p>Second Bar</p>
        </Flex>
    );

}//end PrimaryBar
