//src\app\applications\page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Box,Grid, Flex, Button, Link, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Option } from "@/common/model/option";
import { AppEditorCfg } from "@/app_front/editapplication/appeditorcfg";
import MenuButtons from "@/radix/cbars/btmenu";
import { RadixColors, ThemeButtonsStyle } from "@/radix/radixtheme";
import { usePathname } from "next/navigation";
import {AppForm} from "@/app/appeditor/appform";
import { Application } from "@/client/models/Application";
import { RadixConf } from "@/radix/radixconf";
import { ManApplicationsCfg } from "@/app_front/appindex";

/**
 * Application Main page 
 */
export default function PageApplications() {
    const router = useRouter();

    const [section, setSection] = useState<string>(ManApplicationsCfg.ACTIVE_SECTION.id);
    
    const onSelection = (sectionId: string) => {
        alert("sectionId: " + sectionId);
        //setSection(sectionId);
        //if (name === ManApplicationsCfg.SECTION_MAIN.id) {router.push("./");   }
    }

    const openApplication = (appId: number) => {
        alert("openApplication: " + appId);
    }    

    return (
        <Flex direction="column" className="h-screen">

            <ApplicationsHeader onselection={onSelection} />

            <Flex className="flex-1 overflow-hidden">
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-r border-gray-6 overflow-y-auto">
                    <PagePrimaryBar actsection={section} onselection={onSelection} />
                </Box>
                <Box className="w-[68%] bg-gray-0 dark:bg-gray-1 p-6 overflow-y-auto">
                    <PageMainContent actsection={section} />
                </Box>
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-l border-gray-6 overflow-y-auto">
                    <PageSecondBar actsection={section} />
                </Box>
            </Flex>

        </Flex>
    );

}//end class

interface ApplicationsHeaderProps {
    onselection: (sectionId: string) => void;
}
function ApplicationsHeader({ onselection }: ApplicationsHeaderProps) {

    const pathname = usePathname();

    const onSelection = (sectionId: string) => {
        alert("Home: onselection: " + sectionId);
    }

    const renderHomeButton = () => {
        return (
            <Link href="/">
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


interface PagePrimaryBarProps {
    actsection: string;
    onselection: (sectionId:string) => void;
}
function PagePrimaryBar({onselection,actsection}: PagePrimaryBarProps) {

    return (
        <Flex direction="column" >

            <MenuButtons options={ManApplicationsCfg.SECTIONS}
                onselection={onselection} 
                optactcolor={RadixColors.colors.indigo}
                optcolor={RadixColors.colors.plum}
                optactid={actsection} />	

        </Flex>
    );

}//end PrimaryBar

interface PageMainContentProps {
    actsection: string;
}
function PageMainContent({actsection}: PageMainContentProps) {

    return (
        <Grid columns="3" gap="4" className="h-full">

           <p>Main content</p>	
           
        </Grid>
       
    );

}//end PageMainContent



interface PageSecondBarProps {
    actsection: string;
}
function PageSecondBar({actsection}: PageSecondBarProps) {

    const onSelection = (sectionId: string) => {
        //not implemented yet
    }

    return (
        <Flex direction="column" >
            <p>Second Bar</p>
        </Flex>
    );

}//end PrimaryBar
