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
    actsection: string;
    onselection: (sectionId:string) => void;
}
export default function PrimaryBar({onselection,actsection}: PrimaryBarProps) {


    return (
        <Flex direction="column" gap="2">		
            <MenuButtons options={AppConfig.MODULES}
                onselection={onselection} 
                optactcolor={RadixColors.colors.indigo}
                optcolor={RadixColors.colors.plum}
                optactid={actsection} />			
        </Flex>
    );

}//end PrimaryBar
