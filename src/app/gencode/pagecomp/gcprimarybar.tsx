//src\app\gencode\pagecomp\gcprimarybar.tsx

import { useState, useEffect, useRef } from "react";
import { Option } from "@/common/model/option";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";


import MenuButtons from "@/radix/cbars/btmenu";

import { CodeGenModules } from "@/codegen/cgoperations";


/**
 * Page Primary Bar
 */
interface PrimaryBarProps {    
    actsection: string|null;
    onselection:(sectionId:string) => void;
}
export function PrimaryBar({onselection,actsection}: PrimaryBarProps) {
    
    return (
        <Flex direction="column" p="3" >            
            <MenuButtons options={CodeGenModules.MODULES}
                onclick={onselection} 
                actoption={actsection} />	
            <Separator orientation="horizontal" size="4"  />
        </Flex>
    );

}//end PrimaryBar


