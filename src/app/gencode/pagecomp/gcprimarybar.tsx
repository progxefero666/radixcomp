//src\app\gencode\pagecomp\gcprimarybar.tsx

import { useState, useEffect, useRef } from "react";
import { Option } from "@/common/model/option";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";
import { ModuleConfig } from "../config";
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
    const sections:Option[] = ModuleConfig.SECTIONS
    let optSelected:string = AppConstants.NOT_DEF
    if(actsection!=null){
        optSelected = actsection;
    }
    else {
        optSelected = sections[0].id; 
    }
    return (
        <Flex direction="column" p="3" >            
            <MenuButtons options={sections}
                onselection={onselection} 
                optactid={optSelected} />	
            <Separator orientation="horizontal" size="4"  />
        </Flex>
    );

}//end PrimaryBar


