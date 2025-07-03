//src\app\testcomp\playground.tsx

"use client";

import React, { useEffect, useState } from "react";
import { Link, Flex, Text, Button, Box, Container, Grid } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { renderHomeButton } from "@/radix/radixbuttons";



export const layoutStyle = {
    background: '#c1c1c1',
    border: '2px solidrgb(98, 97, 98)',
    padding: 'var(--space-2)',
};

export const columnStyle = {
    borderColor: 'rgb(98, 97, 98)',
    background: '#ff00ff'
};

/**
 * Template - Page Header
 */
interface CompProps { mode?: string; }

export function TestPlayground({ mode }: CompProps) {

    useEffect(() => {
    }, []);


    return (
        <Flex width="100%" direction="column" style={layoutStyle} >

            <Grid columns="20% 60% 20%" gap="2">
                <Box >Column I</Box>
                <Box>Column Center</Box>
                <Box>Column R</Box>
            </Grid>

        </Flex>
    );

}//end component

