"use client";

import React from "react";
import { Flex, Separator } from "@radix-ui/themes";

import MenuButtons from "@/radix/cbars/btmenu";
import { AppConfig } from "@/app/index/appconfig";
import { Option } from "@/common/models";


export const layoutStyle = {
    padding: '8px',
    background: '#0000ff'
};


interface PrimaryBarProps {
    section?: string;
    onselection?: (sectionId:string) => void;
}
export function PrimaryBar({onselection,section}: PrimaryBarProps) {

    return (
        <Flex width="100%" direction="column" style={layoutStyle} >
            Primary Bar
        </Flex>
    );

}//end PrimaryBar
