"use client";

import React from "react";
import { Flex, Separator } from "@radix-ui/themes";



const secondBarStyle = {
    background: 'rgb(24, 24, 27)',
};

interface CompProps {
    value?: string;
}
export function TestSecondBar({value}: CompProps) {

    const onSelection = (sectionId: string) => {
    }

    return (
        <Flex width="100%" direction="column" style={secondBarStyle}>
            <p>Second Bar</p>
        </Flex>
    );

}//end PrimaryBar
