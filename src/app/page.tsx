//src\app\page.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid, Flex, Text } from "@radix-ui/themes";
import Home from "./index/page";
import PageGenCode from "./gencode/page";


/**
 * Main app view page component
 * 
 */
export default function Desktop() {
    const router = useRouter();

    useEffect(() => {

    }, []);

    const render = () => {
        const mode: number = 1;
        switch (mode) {
            case 0: return <Home />
            case 1: return <PageGenCode />
        }
    };
    return (
        <Flex direction="column" className="h-screen">
            {render()}
        </Flex>
    );

}//end comp
