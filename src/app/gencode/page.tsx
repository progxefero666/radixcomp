"use client";

import { Option } from "@/common/model/option";
import { usePathname, useRouter } from "next/navigation";
import { Box, Grid, Flex, Text, Button, Link } from "@radix-ui/themes";

import Image from 'next/image'

import ThemeSwitcher from "@/app_front/theme/themeswitcher";


import { useEffect, useRef, useState } from "react";
import { AppConfig } from "@/app_front/appconfig";

import { AppIndex } from "@/app_front/appindex";
import MenuButtons from "@/radix/cbars/btmenu";
import { ThemeButtonsStyle } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";
import { ModuleConfig } from "./config";



const boxStyle = {
    background: 'rgb(35, 35, 39)',
    border: '1px solid rgb(93, 92, 93)',
    padding: '8px',
};


/**
 * Application Main page 
 */
export default function PageGenCode() {
    const router = useRouter();
    const appRef = useRef<AppIndex>(null);
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

    const onSelection = (sectionId: string) => {
        setSection(sectionId);
    }

    return (
        <Flex direction="column" className="h-screen">

            <PageHeader onselection={onSelection} />
            
            <Flex className="flex-1 overflow-hidden">
                <Box width={"14%"} className="h-screen p-4">
                    <PrimaryBar sections={ModuleConfig.SECTIONS} 
                                onselection={onSelection}
                                actsection={section}  />
                </Box>
                <Box width={"41%"} style={boxStyle}>
                    <InputEditor section={section} />
                </Box>

                <Box width={"41%"} >
                    <OutputMonitor section={section} />
                </Box>
                <Box width={"4%"} className="h-screen">
                    <SecondBar actsection={section} />
                </Box>
            </Flex>

        </Flex>
    );

}//end page

interface InputEditorProps {section:string;}
function InputEditor({section:string}:InputEditorProps) {

    const renderMainContent = () => {

    };

    return (
        <Flex direction="column" gapY="5" className="h-full">

        </Flex>
    );

}//end InputEditor

interface OutputMonitorProps {section:string;}
function OutputMonitor({section}:OutputMonitorProps) {

    const renderMainContent = () => {
    };

    return (
        <Flex direction="column" gapY="5" className="h-full">

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
                 className="full h-auto w-[16%] bg-gray-1 dark:bg-gray-2 px-4 border-r border-gray-6">
                <Text size="5" weight="bold" className="text-gray-12">
                    Radix UI
                </Text>   
                <Box>
                 {renderHomeButton()}  
                </Box>  
                         
            </Flex>

            <Box className="h-auto w-[68%] bg-gray-0 dark:bg-gray-1 px-6 overflow-y-auto">
                <Text size="5" weight="bold" className="text-gray-12">
                    Primitives Sandbox
                </Text>
            </Box>

            <Box className="h-auto w-[16%] bg-gray-1 dark:bg-gray-2 px-4 border-l border-gray-6">
                <p>header-left</p>
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
