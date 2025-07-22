"use client";

import React from "react";
import { Flex, Separator } from "@radix-ui/themes";

import MenuButtons from "@/radix/cbars/btmenu";
import { AppConfig } from "@/app/index/appconfig";
import { Option } from "@/common/model/option";


const primaryBarStyle = {
    background: 'rgb(24, 24, 27)',
};

interface PrimaryBarProps {
    section?: string;
    onselection?: (sectionId:string) => void;
}
export function PrimaryBar({onselection,section}: PrimaryBarProps) {

    return (
        <Flex width="100%" direction="column" style={primaryBarStyle} >
            Primary Bar
        </Flex>
    );

}//end PrimaryBar
