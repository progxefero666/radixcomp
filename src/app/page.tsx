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
import { CodeGeneration } from "@/codegen/cgconfig";
import { FsFunctions } from "@/filesystem/fsfunctions";
import { FileCode } from "@/filesystem/fsmodels";


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

    
    const [section, setSection] = useState<string|null>(null);
    
    const [fileId,    setFileId]     = useState<string>("default");
    const [fileFormat,setFileFormat] = useState<string>("typescript");
    const [fileCode,  setFileCode]   = useState<string|null>(null);

    const [listFilesId,    setListFilesId]     = useState<string[]|null>(null);
    const [listFilesFormat,setListFilesFormat] = useState<string[]|null>(null);
    const [listFilesCode,  setListFilesCode]   = useState<string[]|null>(null);
    
    useEffect(() => {
        if(initialized) {return;} 
        
        const init = async () => {            
            const dbSquema = await readDbSqlScriptFile("dbsquema");
            if(dbSquema!== null) {AppMemmory.saveDbSquema(dbSquema);}                              
            initialized =true;
        };
        init();
    }, []);

    const loadSection = (sectionId: string) => {setSection(sectionId);}


    // for single files
    //...............................................................................
    const chargeFileCode= (filecode:FileCode) => {
        setFileFormat(filecode.format);
        setFileCode(filecode.code);
        setFileId(filecode.id);
    };
    
    const exportFileCode = () => {
        if(!fileCode){return;}
        const file: File = CodeGeneration.generateFile(fileId, fileFormat, fileCode);
        FsFunctions.chargeDownloadFile(file);
    };

    // for multiple files
    //...............................................................................    
    const exportFolder = () => {
    
    };//end

    // jsx
    //...............................................................................    
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
                                    onsingleresult={chargeFileCode}/>
                </Box>

                <Box width="41%" style={boxStyle}>
                    {fileCode!==null ? <GenCodeViewer key={fileCode} code={fileCode} exportdata={exportFileCode} />:null}
                    
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

};//end PrimaryBar
