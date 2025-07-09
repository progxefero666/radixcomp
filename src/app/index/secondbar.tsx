"use client";

import React from "react";
import { Flex, Separator } from "@radix-ui/themes";
import ThemeSwitcher from "@/radix/themes/themeswitcher";


const secondBarStyle = {
    background: 'rgb(24, 24, 27)',
};

interface SecondBarProps {
    module?: string;
}
export default function SecondBar({module}: SecondBarProps) {

    const onSelection = (sectionId: string) => {
        //not implemented yet
    }

    return (
        <Flex width="100%" direction="column" gapY="2" style={secondBarStyle} >
            <p>Second Bar</p>
            <ThemeSwitcher />
        </Flex>
    );

}//end PrimaryBar
