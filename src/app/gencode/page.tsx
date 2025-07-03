"use client";

import { useEffect, useRef, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { Box, Separator, Flex, Text, Button, Link, Grid } from "@radix-ui/themes";
import { Option } from "@/common/model/option";
import { AppConfig } from "@/app_front/appconfig";
import { AppIndex } from "@/app_front/appindex";
import MenuButtons from "@/radix/cbars/btmenu";
import { ThemeButtonsStyle } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";


import CardCode from "./comp/cardcode";
import { AppConstants } from "@/app_front/appconstants";

import { CodeGenConfig } from "@/codegen/cgconfig";
import { ModuleConfig } from "./config";
import { getTextFile } from "@/app_server/actions/gettextfile";
import { AppContext } from "@/app_front/appcontext";

import { GenCodeControl } from "@/app/gencode/pagecomp/gccontrol";
import { GenCodeViewer } from "@/app/gencode/pagecomp/gcviewer";
import { PageHeader } from "@/app/gencode/pagecomp/gcheader";

const boxStyle = {
    background: 'rgb(35, 35, 39)',
    border: '1px solid rgb(93, 92, 93)',
    padding: '0',
};


/**
 * Application Main page 
 */
export default function PageGenCode() {
    const router = useRouter();
    const appRef = useRef<AppIndex>(null);

    //const [code, setCode] = useState<string>("undefined");
    const [section, setSection] = useState<string|null>(null);

    //let section:string|null =  null;
    let code:string =  AppConstants.NOT_DEF;
    let initialized: boolean = false;

    useEffect(() => {
        if(initialized) {return;} 
        
        const init = async () => {
            //store dbSquema in SessionStorage...................................
            const dbSquema = await getTextFile(ModuleConfig.DBSQUEMA_FILE);
            AppContext.saveDbSquema(dbSquema);  
            //...................................................................
            
            //ModuleConfig.ACTIVE_SECTION
 
            //...................................................................
            appRef.current = new AppIndex();
            const res: boolean = await appRef.current.loadInitCollections();
            if(!res) {alert("Error loading initial collections");}
            else {initialized =true;}
            //...................................................................
        };
        init();
    }, []);

    const onCodeResult= (datacode: string) => {
        code = datacode;
        console.log("Data received from InputEditor:", datacode);
    }

    const loadSection = (sectionId: string) => {
        alert(sectionId);
        setSection(sectionId);
    }

    return (
        <Flex direction="column" height="100vh">

            <PageHeader onselection={loadSection} />
            
            <Flex height="100%">

                <Box width="14%" style={boxStyle}>
                    <PrimaryBar actsection={section}
                                onselection={loadSection} />
                </Box>

                <Box width="41%" style={boxStyle}>
                    <GenCodeControl section={section}  
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
 * Page Primary Bar
 */
interface PrimaryBarProps {    
    actsection: string|null;
    onselection:(sectionId:string) => void;
}
function PrimaryBar({onselection,actsection}: PrimaryBarProps) {
    const sections:Option[] = ModuleConfig.SECTIONS
    let optSelected:string = AppConstants.NOT_DEF
    if(actsection!=null){
        optSelected = actsection;
    }
    else {
        optSelected = sections[0].id; 
    }
    return (
        <Flex direction="column" p="3" >            
            <MenuButtons options={sections}
                onselection={onselection} 
                optactid={optSelected} />	
            <Separator orientation="horizontal" size="4"  />
        </Flex>
    );

}//end PrimaryBar



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
