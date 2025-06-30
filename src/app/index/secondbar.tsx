"use client";

import React from "react";
import { Flex, Separator } from "@radix-ui/themes";
import ThemeSwitcher from "@/app_front/theme/themeswitcher";

interface SecondBarProps {
    actsection: string;
}
export default function SecondBar({actsection}: SecondBarProps) {

    const onSelection = (sectionId: string) => {
        //not implemented yet
    }

    return (
        <Flex direction="column" >
            <p>Second Bar</p>
            <ThemeSwitcher />
        </Flex>
    );

}//end PrimaryBar
