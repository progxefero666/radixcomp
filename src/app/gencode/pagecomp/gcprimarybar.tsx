//src\app\gencode\pagecomp\gcprimarybar.tsx

import { useState, useEffect, useRef } from "react";
import { Option } from "@/common/models";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";


import MenuButtons from "@/radix/cbars/btmenu";
import { GenCodeModuleConfig } from "@/app/gencode/config";


/**
 * Page Primary Bar
 */
interface PrimaryBarProps {    
    actsection: string|null;
    onselection:(sectionId:string) => void;
}
export function PrimaryBar({onselection,actsection}: PrimaryBarProps) {
    const sections:Option[] = GenCodeModuleConfig.CLIENT_SERVICES;
    //

    return (
        <Flex direction="column" p="3" >            
            <MenuButtons options={sections}
                onclick={onselection} 
                actoption={actsection} />	
            <Separator orientation="horizontal" size="4"  />
        </Flex>
    );

}//end PrimaryBar


