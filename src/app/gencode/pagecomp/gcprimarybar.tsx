//src\app\gencode\pagecomp\gcprimarybar.tsx

import { useState, useEffect, useRef } from "react";
import { Option } from "@/common/model/option";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";

import { AppConstants } from "@/app_front/appconstants";
import MenuButtons from "@/radix/cbars/btmenu";


/**
 * Page Primary Bar
 */
interface PrimaryBarProps {    
    actsection: string|null;
    onselection:(sectionId:string) => void;
}
export function PrimaryBar({onselection,actsection}: PrimaryBarProps) {
    const sections:Option[] = [];
    //GenCodeModuleConfig.CLIENT_SERVICES

    return (
        <Flex direction="column" p="3" >            
            <MenuButtons options={sections}
                onclick={onselection} 
                actoption={actsection} />	
            <Separator orientation="horizontal" size="4"  />
        </Flex>
    );

}//end PrimaryBar


