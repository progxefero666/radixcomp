"use client";

import React from "react";
import { Flex, Separator } from "@radix-ui/themes";

import MenuButtons from "@/radix/cbars/btmenu";
import { AppConfig } from "@/app_front/appconfig";
import { Option } from "@/common/model/option";

const primaryBarStyle = {
    background: 'rgb(24, 24, 27)',
};

interface PrimaryBarProps {
    section: string;
    onselection: (sectionId:string) => void;
}
export default function PrimaryBar({onselection,section}: PrimaryBarProps) {

    //className="bg-gray-1 dark:bg-gray-2 border border-gray-6"
    return (
        <Flex height="100vh" align="center" 
              direction="column" py="4" style={primaryBarStyle} >

            <MenuButtons options={AppConfig.MODULES}
                onclick={onselection} 
                actoption={section} />	

        </Flex>
    );

}//end PrimaryBar
