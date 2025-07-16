//src\app\workflows\wfeditor\pagecomp\primarybar.tsx

import React, { useState } from "react";
import { Button, Box, Flex,  Text } from "@radix-ui/themes";
import { Taskcategory } from "@/db/model/taskcategory";
import { PanelWfTaskcategories } from "./editorcategories";


const primaryBarStyle = {
    background: 'rgb(24, 24, 27)',
};

interface CompProps {
    workflowid: number;
    none?: () => void;
}
export default function WorkflowPrimaryBar({ workflowid }: CompProps) {

    
    return (
        <Flex width="100%" direction="column" px="3" py="3" style={primaryBarStyle} >
            <PanelWfTaskcategories workflowid={workflowid} />
        </Flex>
    );

}//end component
