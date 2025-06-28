"use client";

import React from "react";
import { Flex, Separator } from "@radix-ui/themes";

import MenuButtons from "@/radix/cbars/btmenu";
import { RadixColors } from "@/radix/radixtheme";
import { AppConfig } from "@/app_front/appconfig";

interface PrimaryBarProps {
    section: string;
    onselection: (sectionId:string) => void;
}
export default function PrimaryBar({onselection,section}: PrimaryBarProps) {

    return (
        <Flex direction="column" >

            <MenuButtons options={AppConfig.MODULES}
                onselection={onselection} 
                optactcolor={RadixColors.colors.indigo}
                optcolor={RadixColors.colors.plum}
                optactid={section} />	

        </Flex>
    );

}//end PrimaryBar
