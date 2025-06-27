import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";

import PrimaryBar from "./primarybar"; // Import PrimaryBar
import ThemeSwitcher from "./themeswitcher";

interface LayoutProps {
    children: React.ReactNode;
    // primaryBarContent is now handled internally by PrimaryBar
}

export default function Layout({ children }: LayoutProps) {
    return (
        <Flex direction="column" className="h-screen">
            <Box className="bg-gray-2 dark:bg-gray-3 h-[60px] flex items-center px-4 border-b border-gray-6">
                <Text size="5" weight="bold" className="text-gray-12">
                    Radix UI Primitives Sandbox
                </Text>
            </Box>
            <Flex className="flex-1 overflow-hidden">
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-r border-gray-6 overflow-y-auto">
                    <PrimaryBar />
                </Box>
                <Box className="w-[68%] bg-gray-0 dark:bg-gray-1 p-6 overflow-y-auto">
                    {children}
                </Box>
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-l border-gray-6 overflow-y-auto">
                    <ThemeSwitcher />
                </Box>
            </Flex>
        </Flex>
    );
}
