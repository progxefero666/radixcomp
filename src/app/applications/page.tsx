//src\app\applications\page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Box,Grid, Flex } from "@radix-ui/themes";
import { useState } from "react";
import { Option } from "@/common/model/option";
import { ManAppsCfg } from "@/app_front/manapplications/manappsacfg";
import MenuButtons from "@/radix/cbars/btmenu";
import { RadixColors } from "@/radix/radixtheme";


/**
 * Application Main page 
 */
export default function PageApplications() {

    const [section, setSection] = useState<string>(ManAppsCfg.ACTIVE_SECTION.id);
    
    const onSelection = (sectionId: string) => {
        alert("sectionId: " + sectionId);
        setSection(sectionId);
    }

    return (
        <Flex direction="column" className="h-screen">

    
            <Flex className="flex-1 overflow-hidden">
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-r border-gray-6 overflow-y-auto">
                    <PagePrimaryBar actsection={section} onselection={onSelection} />
                </Box>
                <Box className="w-[68%] bg-gray-0 dark:bg-gray-1 p-6 overflow-y-auto">
                    <PageMainContent actsection={section} />
                </Box>
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-l border-gray-6 overflow-y-auto">
                    <PageSecondBar actsection={section} />
                </Box>
            </Flex>

        </Flex>
    );

}//end class

interface PagePrimaryBarProps {
    actsection: string;
    onselection: (sectionId:string) => void;
}
function PagePrimaryBar({onselection,actsection}: PagePrimaryBarProps) {

    return (
        <Flex direction="column" >

            <MenuButtons options={ManAppsCfg.SECTIONS}
                onselection={onselection} 
                optactcolor={RadixColors.colors.indigo}
                optcolor={RadixColors.colors.plum}
                optactid={actsection} />	

        </Flex>
    );

}//end PrimaryBar

interface PageMainContentProps {
    actsection: string;
}
function PageMainContent({actsection}: PageMainContentProps) {

    return (
        <Grid columns="3" gap="4" className="h-full">

           <p>Main content</p>	
           
        </Grid>
       
    );

}//end PageMainContent



interface PageSecondBarProps {
    actsection: string;
}
function PageSecondBar({actsection}: PageSecondBarProps) {

    const onSelection = (sectionId: string) => {
        //not implemented yet
    }

    return (
        <Flex direction="column" >
            <p>Second Bar</p>
        </Flex>
    );

}//end PrimaryBar
