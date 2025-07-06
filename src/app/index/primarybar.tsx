"use client";

import React from "react";
import { Flex, Separator } from "@radix-ui/themes";

import MenuButtons from "@/radix/cbars/btmenu";
import { AppConfig } from "@/app_front/appconfig";
import { Option } from "@/common/model/option";
interface PrimaryBarProps {
    section: string;
    onselection: (sectionId:string) => void;
}
export default function PrimaryBar({onselection,section}: PrimaryBarProps) {

    return (
        <Flex direction="column" p="2" className="bg-gray-1 dark:bg-gray-2 border border-gray-6">

            <MenuButtons options={AppConfig.MODULES}
                onclick={onselection} 
                actoption={section} />	

        </Flex>
    );

}//end PrimaryBar
