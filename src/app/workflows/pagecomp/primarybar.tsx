//src\app\workflows\pagecomp\gcprimarybar.tsx

import { useState, useEffect, useRef } from "react";
import { Option } from "@/common/models";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";

import MenuButtons from "@/radix/cbars/btmenu";
import { WorkflowsConfig } from "../../../front/workflows/config";

const primaryBarStyle = {
    background: 'rgb(24, 24, 27)',
};
/**
 * Page WorkFlows Primary Bar
 */
interface CompProps {    
    section: string|null;
    onselection:(sectionId:string) => void;
}
export function PrimaryBar({onselection,section}: CompProps) {
    const sections:Option[] = WorkflowsConfig.MODULES;

    return (
        <Flex width="100%"  height="100vh" align="center" 
              direction="column" py="4" style={primaryBarStyle} >         
            <MenuButtons options={sections}
                onclick={onselection} 
                actoption={section} />	
            <Separator orientation="horizontal" size="4"  />
        </Flex>
    );

}//end PrimaryBar


