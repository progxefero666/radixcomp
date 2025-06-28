"use client";

import { Box, Flex } from "@radix-ui/themes";
import ThemeSwitcher from "@/app_front/theme/themeswitcher";
import PrimaryBar from "@/app_front/comp/primarybar";
import IndexHeader from "./index/header";
import { useState } from "react";
import { AppConfig } from "@/app_front/appconfig";

/**
 * Application Main page --> Radix Primitives Sandbox
 * 
 */
export default function Home() {

    const [section, setSection] = useState<string>(AppConfig.INDEX.id);
    
    const onSelection = (sectionId: string) => {
        alert("sectionId: " + sectionId);
    }

    return (
        <Flex direction="column" className="h-screen">

            <IndexHeader onselection={onSelection}/>

            <Flex className="flex-1 overflow-hidden">
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-r border-gray-6 overflow-y-auto">
                    <PrimaryBar actsection={section} onselection={onSelection} />
                </Box>
                <Box className="w-[68%] bg-gray-0 dark:bg-gray-1 p-6 overflow-y-auto">
                    <p>Main Content</p>
                </Box>
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-l border-gray-6 overflow-y-auto">
                    <ThemeSwitcher />
                </Box>
            </Flex>

        </Flex>
    );

}//end class
