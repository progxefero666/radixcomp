"use client";

import React from "react";
import { Flex, Separator } from "@radix-ui/themes";


interface CompProps {
    value?: string;
}
export function TestSecondBar({value}: CompProps) {

    const onSelection = (sectionId: string) => {
    }

    return (
        <Flex direction="column" >
            <p>Second Bar</p>
        </Flex>
    );

}//end PrimaryBar
