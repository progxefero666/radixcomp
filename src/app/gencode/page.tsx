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
import { EditorConfig, ModuleConfig } from "./config";
import { InputEditor } from "@/app/gencode/panelinput";
import CardCode from "./comp/cardcode";

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

    const [code, setCode] = useState<string>("undefined");
    const [section, setSection] = useState<string>(AppConfig.INDEX.id);
    const [initialized, setInitialized] = useState<boolean>(false);

    useEffect(() => {
        const init = async () => {
            appRef.current = new AppIndex();
            const res: boolean = await appRef.current.loadInitCollections();
            setInitialized(true);
        };
        init();
    }, []);

    const onCodeResult= (datacode: string) => {
        setCode(datacode);
        console.log("Data received from InputEditor:", datacode);
    }

    const onSelection = (sectionId: string) => {
        setSection(sectionId);
    }

    return (
        <Flex direction="column" height="100vh">

            <PageHeader onselection={onSelection} />
            
            <Flex height="100%">
                <Box width="14%" style={boxStyle}>
                    <PrimaryBar sections={ModuleConfig.SECTIONS} 
                                onselection={onSelection}
                                actsection={section}  />
                </Box>
                <Box width="41%" style={boxStyle}>
                    <InputEditor section={section}  
                                 ondataresult={onCodeResult}/>
                </Box>

                <Box width="41%" style={boxStyle}>
                    <OutputMonitor section={section} code={code} />
                </Box>
                <Box width="4%" style={boxStyle}>
                    <SecondBar actsection={section} />
                </Box>
            </Flex>

        </Flex>
    );

}//end page

interface OutputMonitorProps {
    section:string;
    format?: string;
    code?: string|null;
    fileName?: string;
}
function OutputMonitor({section,code}:OutputMonitorProps) {

    return (
        <Flex className="h-full" direction="column"   >
            <CardCode title="Output Monitor"
                      code={code ?? "No code generated yet."} />                      
        </Flex>
    );

}//end InputEditor


/**
 * Page Heade
 */
interface PageHeaderProps {onselection:(sectionId:string)=>void;}
function PageHeader({onselection}:PageHeaderProps) {

    const pathname = usePathname();

    const onSelection = (sectionId: string) => {
        alert("Home: onselection: " + sectionId);
    }

    const renderHomeButton = () => {
        return (
            <Link href="/" >
                <Button
                    variant={pathname === "/" ? RadixConf.VARIANTS.solid :
                                                RadixConf.VARIANTS.soft}
                    color={ThemeButtonsStyle.BTN_HOME_COLOR}
                    className={ThemeButtonsStyle.BTN_HOME_STYLE}
                    size={ThemeButtonsStyle.BTN_DEF_SIZE} >
                    Home
                </Button>
            </Link>
        )
    }

    return (
        <Flex className="w-full h-auto py-3 bg-gray-2 dark:bg-gray-3 border-b border-gray-6" >

            <Flex direction="row" gap="2" justify="between" 
                 className="full h-auto w-[14%] bg-gray-1 dark:bg-gray-2 px-4 border-r border-gray-6">
                <Text size="5" weight="bold" className="text-gray-12">
                    Radix UI
                </Text>   
                <Box>
                 {renderHomeButton()}  
                </Box>  
                         
            </Flex>

            <Box className="h-auto w-[82%] bg-gray-0 dark:bg-gray-1 px-6 overflow-y-auto">
                <Text size="5" weight="bold" className="text-gray-12">
                    Primitives Sandbox
                </Text>
            </Box>

            <Box className="h-auto w-[4%] bg-gray-1 dark:bg-gray-2 px-4 border-l border-gray-6">
                
            </Box>

        </Flex>
    );

}//end PrimaryBar


/**
 * Page Primary Bar
 */
interface PrimaryBarProps {
    sections:   Option[];
    actsection: string;
    onselection:(sectionId:string) => void;
}
function PrimaryBar({sections,onselection,actsection}: PrimaryBarProps) {
    return (
        <Flex direction="column" >
            <MenuButtons options={sections}
                onselection={onselection} 
                optactid={actsection} />	
            <Separator orientation="horizontal" size="4"  />
        </Flex>
    );

}//end PrimaryBar


/**
 * Page Second Bar
 */
interface SecondBarProps {
    actsection: string;
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
