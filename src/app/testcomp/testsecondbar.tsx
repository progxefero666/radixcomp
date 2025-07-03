"use client";

import React from "react";
import { Flex, Separator } from "@radix-ui/themes";


export const layoutStyle = {
    padding: '8px',
    background: '#00ff00'
};

interface CompProps {
    value?: string;
}
export function TestSecondBar({value}: CompProps) {

    const onSelection = (sectionId: string) => {
    }

    return (
        <Flex width="100%" direction="column" style={layoutStyle}>
            <p>Second Bar</p>
        </Flex>
    );

}//end PrimaryBar
