//src\app\workflows\page.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid, Flex, Text } from "@radix-ui/themes";
import Home from "../page";
import PageGenCode from "../gencode/page";
import PageTest from "../testcomp/page";


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
            <Flex width="100%" direction="column" gapY="2" className="h-full">

            </Flex>
        )
    };

    return (
        <Flex direction="column" className="h-screen">
            {renderMainContent()}
        </Flex>
    );

}//end page
