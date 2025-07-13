"use client";

import { useEffect, useRef, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { Box,  Flex, Text, Button, Link, Grid } from "@radix-ui/themes";
import { AppIndex } from "@/app/index/kernel/appindex";
import { AppMemmory } from "@/front/appmemory";
import { GenCodeControl } from "@/app/gencode/pagecomp/gccontrol";
import { GenCodeViewer } from "@/app/gencode/pagecomp/gcviewer";


import { PrimaryBar } from "@/app/gencode/pagecomp/gcprimarybar";
import { PageHeader } from "@/app/gencode/pagecomp/gcheader";
import { readDbSqlScriptFile } from "@/server/xeferodb/sqlscripts";


//const router = useRouter();
//const val = AppContext.readDbSquema();

/**
 * Application Main page 
 */
const boxStyle = {
   background: 'rgb(30, 40, 63)',
    border: '1px solid rgb(93, 92, 93)',
    padding: '0',
};

export default function PageGenCode() {

    let initialized: boolean = false;
    const appRef = useRef<AppIndex>(null);
    const [code, setCode] = useState<string>("undefined");
    const [section, setSection] = useState<string|null>(null);

    useEffect(() => {
        //AppContext.saveCodelangs(appRef.current.codelangs);
        if(initialized) {return;} 
        
        const init = async () => {
            
            const dbSquema = await readDbSqlScriptFile("dbsquema");
            if(dbSquema!== null) {AppMemmory.saveDbSquema(dbSquema);}            
            
            appRef.current = new AppIndex();
            const res: boolean = await appRef.current.loadInitCollections();
            if(!res) {return;}            

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
