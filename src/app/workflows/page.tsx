//src\app\workflows\page.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid, Flex, Text } from "@radix-ui/themes";
import { Option } from "@/common/model/option";
import { AppConstants } from "@/app_front/appconstants"


const boxStyle = {
    background: 'rgb(35, 35, 39)',
    border: '1px solid rgb(93, 92, 93)',
    padding: '0',
};

/**
 * Page Workflows Manegement
 * 
 */
export default function PageWorkflows() {
    const router = useRouter();

    useEffect(() => {

    }, []);

    const renderMainContent = () => {
        return (
            <Box width="100%" >
                MainContent
            </Box>
        )
    };

    return (
        <Flex width="100%" direction="column" gapY="2" className="h-screen">
            {renderMainContent()}
        </Flex>
    );

}//end page


/**
 * Page Second Bar
 */
interface SecondBarProps {
    actsection: string|null;
}
function SecondBar({actsection}: SecondBarProps) {

    const onSelection = (sectionId: string) => {
        //not implemented yet
    }
    return (
        <Flex direction="column" >
            <p>Second Bar</p>
        </Flex>
    );

}//end PrimaryBar
