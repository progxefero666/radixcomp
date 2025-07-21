//src\app\page.tsx

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid, Flex, Text } from "@radix-ui/themes";

import PageGenCode from "../gencode/page";
import PageTest from "../page";
import { Option } from "@/common/model/option";
import Home from "./page";

/**
 * Main app view page component
 * 
 */
export default function PageMenu() {
    const router = useRouter();

    useEffect(() => {

    }, []);

    const render = () => {
        const mode: number = 0;
        switch (mode) {
            case 0: return <Home />
            case 1: return <PageGenCode />
            case 2: return <PageTest />
        }
    };
    return (
        <Flex direction="column" className="h-screen">
            {render()}
        </Flex>
    );

}//end comp
