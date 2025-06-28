"use client";

import { Box,Grid, Flex } from "@radix-ui/themes";
import ThemeSwitcher from "@/app_front/theme/themeswitcher";
import PrimaryBar from "@/app/index/primarybar";
import IndexHeader from "./index/header";
import { useState } from "react";
import { AppConfig } from "@/app_front/appconfig";
import SecondBar from "./index/secondbar";


/**
 * Application Main page 
 */
export default function Home() {

    const [section, setSection] = useState<string>(AppConfig.INDEX.id);
    
    const onSelection = (sectionId: string) => {
        alert("sectionId: " + sectionId);
        setSection(sectionId);
    }

    return (
        <Flex direction="column" className="h-screen">

            <IndexHeader onselection={onSelection}/>

            <Flex className="flex-1 overflow-hidden">
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-r border-gray-6 overflow-y-auto">
                    <PrimaryBar actsection={section} onselection={onSelection} />
                </Box>
                <Box className="w-[68%] bg-gray-0 dark:bg-gray-1 p-6 overflow-y-auto">
                    <IndexMainContent actsection={section} />
                </Box>
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-l border-gray-6 overflow-y-auto">
                    <SecondBar actsection={section} />
                </Box>
            </Flex>

        </Flex>
    );

}//end class

/**
 * Page Index Main Content
 * in central column
 */
interface IndexMainContentProps {
    actsection: string;
}
function IndexMainContent({actsection}: IndexMainContentProps) {

    return (
        <Grid columns="3" gap="4" className="h-full">

           <p>Main content</p>	
           
        </Grid>
       
    );

}//end PrimaryBar
