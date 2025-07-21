//src\app\testcomp\playground.tsx

import React, { useEffect, useState } from "react";

import { Link, Flex, Text, Button, Box, Container, Grid } from "@radix-ui/themes";

export const layoutStyle = {
    background: 'rgb(7, 7, 7)',
    border: '2px solidrgb(98, 97, 98)',
    padding: 'var(--space-2)',
};

/**
 * Template - Page Header
 */
interface CompProps { mode?: string; }

export function Playground({ mode }: CompProps) {
  
    useEffect(() => {
    }, []);


    return (
        <Flex width="100%" direction="column" style={layoutStyle} >
  
        </Flex>
    );

}//end component
