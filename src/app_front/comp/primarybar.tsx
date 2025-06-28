"use client";

import React from "react";
import Link from "next/link";
import { Flex, Text, Button, Separator } from "@radix-ui/themes";
import { usePathname } from "next/navigation"; // To highlight active link

import MenuButtons from "@/radix/cbars/btmenu";
import { RadixColors, ThemeButtonsStyle } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";
import { AppConfig } from "../appconfig";

interface PrimaryBarProps {
     onselection: (sectionId:string) => void;
}
export default function PrimaryBar({ onselection }: PrimaryBarProps) {

    const pathname = usePathname();

    const renderHomeButton = () => { 
        return (
            <Link href="/" passHref>
                <Button
                    variant=    {pathname === "/" ? RadixConf.VARIANTS.solid :
                                                    RadixConf.VARIANTS.soft}
                    color=      {ThemeButtonsStyle.BTN_HOME_COLOR}
                    className = {ThemeButtonsStyle.BTN_HOME_STYLE}
                    size      = {ThemeButtonsStyle.BTN_DEF_SIZE} >
                    Home
                </Button>
            </Link>            
        )
    }

    return (
        <Flex direction="column" gap="2">
            {renderHomeButton()}
            <Separator size="4" my="2" />			
            <MenuButtons options={AppConfig.MODULES}
                onselection={onselection} 
                optactcolor={RadixColors.colors.indigo}
                optcolor={RadixColors.colors.plum}
                optactid={AppConfig.ACT_MODULE.id} />			
        </Flex>
    );

}//end PrimaryBar
