//src\app\workflows\pagecomp\gcprimarybar.tsx

import { useState, useEffect, useRef } from "react";
import { Option } from "@/common/model/option";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";

import { AppConstants } from "@/app_front/appconstants";
import MenuButtons from "@/radix/cbars/btmenu";
import { WorkflowsConfig } from "../config";


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
        <Flex direction="column" p="3" >            
            <MenuButtons options={sections}
                onclick={onselection} 
                actoption={section} />	
            <Separator orientation="horizontal" size="4"  />
        </Flex>
    );

}//end PrimaryBar


