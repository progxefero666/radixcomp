//src\app\diagrams\page\mainbar.tsx

import { useState, useEffect, useRef } from "react";
import { Option } from "@/common/model/option";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";

import MenuButtons from "@/radix/cbars/btmenu";



const primaryBarStyle = {
    background: 'rgb(24, 24, 27)',
};

const MODULE_SECTIONS: Option[] = [
    new Option("section_1", "Section 1",null),
    new Option("section_2", "Section 2",null),
];

interface CompProps {    
    section: string|null;
    onselection:(sectionId:string) => void;
}
export function MainBar({onselection,section}: CompProps) {
    const sections:Option[] = MODULE_SECTIONS;

    return (
        <Flex width="100%"  height="100vh" align="center" gapY="2"
              direction="column" py="3" style={primaryBarStyle} >         
            <MenuButtons options={sections}
                onclick={onselection} 
                actoption={section} />	
            <Separator orientation="horizontal" size="4"  />
        </Flex>
    );

}//end PrimaryBar