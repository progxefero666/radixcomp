"use client";

import { useEffect, useRef, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { Box,  Flex, Text, Button, Link, Grid } from "@radix-ui/themes";
import { AppIndex } from "@/app/index/kernel/appindex";
import { AppMemmory } from "@/front/appmemory";

import { GenCodeViewer } from "@/app/gencode/cgentityfiles/entityfilesviewer";


import { PrimaryBar } from "@/app/gencode/gcprimarybar";
import { PageHeader } from "@/app/gencode/gcheader";


import { FsFunctions } from "@/filesystem/fsfunctions";
import { FileCode } from "@/filesystem/fsmodels";
import { CodeGenModules } from "@/codegen/cgoperations";

import { TypeScriptManager } from "./gencode/cgtypescript/typescriptman";
import { GenCodeControl } from "./gencode/cgentityfiles/entityfilesmanager";
import { readDbSchemaFromFile, readDbConnectionSchema } from "@/db/services/readschema";
import { initDatabase } from "@/db/services/databaseinit";
import { AppGenerator } from "@/front/app";


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
    const [layoutColsWidth, setlayoutColsWidth] = useState<string[]>(["4%","92%","4%"]); 
    const [collapsePrimaryBar, setCollapsePrimaryBar] = useState<boolean>(true);

    const [section, setSection] = useState<string>(CodeGenModules.MODULES[0].id);
    const [fileCode,setFileCode]   = useState<FileCode|null>(null);
    const [listFileCode,setListFileCode] = useState<FileCode[]|null>(null);
    
    useEffect(() => {
        if(ready) {return;} 
        const init = async () => {            
            //const dbSquema = await readDbSqlScriptFile("dbsquema");
            const dbSquema = await readDbConnectionSchema();
            //AppGenerator.initDatabase();
            const respRead = await AppGenerator.readProglanguages();
            if (respRead === null) {
                alert("Error reading programming languages");
                return;
            }
            
            //const jsontables: string[] =CodeGenJson.getAllJsonTables(dbSquema!);
            if(dbSquema === null) {
                alert("Error reading database schema");
                return;
            }

            if(dbSquema!== null) {AppMemmory.saveDbSquema(dbSquema);}                              
            setReady(true);
        };
        init();
    }, []);

    const onPrimaryBarCollapse = () => {
       
        const primBarCollapse:boolean = !collapsePrimaryBar;
        if(primBarCollapse) {
            setlayoutColsWidth(["4%","92%","4%"]);
        }
        else {
            setlayoutColsWidth(["14%","82%","4%"]);
        }
        setCollapsePrimaryBar(!collapsePrimaryBar);
    };//end

    const loadSection = (sectionId: string) => {
        setSection(sectionId);
    };//end


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

    const renderSectionDatabase = () => {
        return(
            null
        )
    };//end

    const onTsCodeResult = () => {
    
    };//end

    const renderSectionTsCode = () => {
        return(
            <Box  width={layoutColsWidth[1]} style={boxStyle}> 
                <TypeScriptManager onresult={onTsCodeResult} />
            </Box>         
        )
    };//end

    const renderSectionEntityFiles = () => {
        return (            
            <Flex  direction={"row"} width={layoutColsWidth[1]} style={boxStyle}> 
                <Box  width="40%" style={boxStyle}> 
                    {ready ? 
                    <GenCodeControl key={section}  section={section}  
                                    onsingleresult={chargeFileCode}
                                    onmultipleresult={chargeMultipleFileCode}/>:null}
                </Box>
                <Box width="60%" style={boxStyle}>
                    { (fileCode!==null ) ? 
                    <GenCodeViewer singlecode={fileCode} key={fileCode.id}
                                    exportsinglecode={exportFileCode} 
                                    exportmultiplecode={exportFileCode}/>:null}                                
                    { (listFileCode!==null ) ? 
                    <GenCodeViewer multiplecode={listFileCode} 
                                    exportsinglecode={exportFileCode} 
                                    exportmultiplecode={exportFileCode}/>:null}                                                   
                </Box>    
            </Flex>  
        );
    };//end


    // jsx
    //...............................................................................    
    return (
        <Flex direction="column" height="auto">

            <PageHeader />
            
            <Flex height="100%">

                <Box height="100vh" width={layoutColsWidth[0]} style={boxStyle}>
                    <PrimaryBar actsection={section}
                                collapse={collapsePrimaryBar}
                                onselection={loadSection}
                                oncollapse={onPrimaryBarCollapse} />
                </Box>

                {section === CodeGenModules.MODULES[0].id?renderSectionEntityFiles():null}
                {section === CodeGenModules.MODULES[1].id?renderSectionTsCode():null}
                {section === CodeGenModules.MODULES[2].id?renderSectionDatabase():null}

                <Box height="100vh" width={layoutColsWidth[2]} style={boxStyle}>
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

