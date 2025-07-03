"use client";

import React from "react";
import { Flex, Separator } from "@radix-ui/themes";

import MenuButtons from "@/radix/cbars/btmenu";
import { AppConfig } from "@/app_front/appconfig";
import { Option } from "@/common/model/option";
interface PrimaryBarProps {
    section?: string;
    onselection?: (sectionId:string) => void;
}
export function PrimaryBar({onselection,section}: PrimaryBarProps) {

    return (
        <Flex direction="column" >
            Primary Bar
        </Flex>
    );

}//end PrimaryBar
