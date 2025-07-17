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

import { FsFunctions } from "@/filesystem/fsfunctions";
import { FileCode } from "@/filesystem/fsmodels";
import { CodeGenModules } from "@/codegen/cgoperations";


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


    const [ready, setReady] = useState<boolean>(false);
    const [section, setSection] = useState<string>(CodeGenModules.MODULES[0].id);
    const [fileCode,setFileCode]   = useState<FileCode|null>(null);
    const [listFileCode,setListFileCode] = useState<FileCode[]|null>(null);
    
    useEffect(() => {
        if(ready) {return;} 
        const init = async () => {            
            const dbSquema = await readDbSqlScriptFile("dbsquema");
            if(dbSquema!== null) {AppMemmory.saveDbSquema(dbSquema);}                              
            setReady(true);
        };
        init();
    }, []);

    const loadSection = (sectionId: string) => {setSection(sectionId);}


    // for single files
    //...............................................................................
    const chargeFileCode= (filecode:FileCode) => {
        console.log("chargeFileCode",filecode);
        setFileCode(filecode);
        setListFileCode(null);
    };
    
    const exportFileCode = () => {
        if(!fileCode){return;}
        const file: File = FsFunctions
            .generateFile(fileCode.id,fileCode.format,fileCode.code);
        FsFunctions.chargeDownloadFile(file);
    };

    // for multiple files
    //...............................................................................    
    const chargeMultipleFileCode= (filescode:FileCode[]) => {
        setListFileCode(filescode);
        setFileCode(null);
        const files: File[] = [];
        for(let idx=0;idx<filescode.length;idx++){
            const file: File = FsFunctions.generateFile
                (filescode[idx].id,filescode[idx].format,filescode[idx].code);
            files.push(file);    
        }
        FsFunctions.chargeDownloadListFile(files);

    };

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
                    {ready ? 
                    <GenCodeControl key={section}  section={section}  
                                    onsingleresult={chargeFileCode}
                                    onmultipleresult={chargeMultipleFileCode}/>:null}

                </Box>

                <Box width="41%" style={boxStyle}>
                    { (fileCode!==null ) ? 
                    <GenCodeViewer singlecode={fileCode} 
                                   exportsinglecode={exportFileCode} 
                                   exportmultiplecode={exportFileCode}/>:null}
                                   
                    { (listFileCode!==null ) ? 
                    <GenCodeViewer multiplecode={listFileCode} 
                                   exportsinglecode={exportFileCode} 
                                   exportmultiplecode={exportFileCode}/>:null}                                   
                    
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
