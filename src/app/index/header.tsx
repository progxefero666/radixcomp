"use client";

import React from "react";
import Link from "next/link";
import { Flex, Text, Button, Box } from "@radix-ui/themes";
import { usePathname } from "next/navigation";

import MenuButtons from "@/radix/cbars/btmenu";
import { RadixColors, ThemeButtonsStyle } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";
import { AppConfig } from "@/app_front/appconfig";
import ThemeSwitcher from "@/app_front/theme/themeswitcher";

interface IndexHeaderProps {
    onselection: (sectionId: string) => void;
}
export default function IndexHeader({ onselection }: IndexHeaderProps) {

    const pathname = usePathname();

    const onSelection = (sectionId: string) => {
        alert("Home: onselection: " + sectionId);
    }

    const renderHomeButton = () => {
        return (
            <Link href="/" passHref>
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
        <Flex className="w-full h-auto bg-gray-2 dark:bg-gray-3  px-4 border-b border-gray-6" >

            <Box className="h-auto w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-r border-gray-6">
                {renderHomeButton()}
            </Box>
            <Box className="h-auto w-[68%] bg-gray-0 dark:bg-gray-1 p-6 overflow-y-auto">
                <Text size="5" weight="bold" className="text-gray-12">
                    Radix UI Primitives Sandbox
                </Text>
            </Box>
            <Box className="h-auto w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-l border-gray-6">
                <p>header-left</p>
            </Box>

        </Flex>
    );

}//end PrimaryBar
