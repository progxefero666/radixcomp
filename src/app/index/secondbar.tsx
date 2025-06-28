"use client";

import React from "react";
import { Flex, Separator } from "@radix-ui/themes";
import ThemeSwitcher from "@/app_front/theme/themeswitcher";
import MenuButtons from "@/radix/cbars/btmenu";
import { RadixColors } from "@/radix/radixtheme";
import { AppConfig } from "@/app_front/appconfig";

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
