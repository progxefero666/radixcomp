"use client";

import React from "react";
import Link from "next/link";
import { Flex, Text, Button, Box } from "@radix-ui/themes";
import { usePathname } from "next/navigation";

import { ButtonsStyle } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";
import { AppConfig } from "@/app/index/appconfig";

interface IndexHeaderProps {
    module?: string;
}
export default function Header({ module: section }: IndexHeaderProps) {

    const pathname = usePathname();

    const renderHomeButton = () => {
        return (
            <Link href="/" passHref>
                <Button
                    variant={pathname === "/" ? RadixConf.VARIANTS.solid :
                                                RadixConf.VARIANTS.soft}
                    color={ButtonsStyle.HOME_COLOR}
                    className={ButtonsStyle.HOME_STYLE}
                    size={ButtonsStyle.DEF_SIZE} >
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
