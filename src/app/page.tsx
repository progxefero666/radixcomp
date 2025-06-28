"use client";

import Layout from "@/app_front/comp/layout";

import { Box, Flex, Text } from "@radix-ui/themes";

import ThemeSwitcher from "@/app_front/theme/themeswitcher";
import IndexLayout from "@/app/index/layout";

/**
 * Application Main page --> Radix Primitives Sandbox
 * 
 */
export default function Home() {

    const onselection = (sectionId: string) => {
        alert("Home: onselection: " + sectionId);
    }

    return (
        <Flex direction="column" className="h-screen">

            <Flex
                align="center"
                className="bg-gray-2 dark:bg-gray-3 h-[60px] px-4 border-b border-gray-6" >
                <Text size="5" weight="bold" className="text-gray-12">
                    Radix UI Primitives Sandbox
                </Text>
            </Flex>

            <Flex className="flex-1 overflow-hidden">
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-r border-gray-6 overflow-y-auto">
                    <p>adad</p>
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
