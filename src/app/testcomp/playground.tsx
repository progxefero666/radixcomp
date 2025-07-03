//src\app\testcomp\playground.tsx

"use client";

import React, { useEffect, useState } from "react";
import { Link,Flex, Text, Button, Box, Container } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { renderHomeButton } from "@/radix/radixbuttons";



export const layoutStyle = {
    background: '#c1c1c1',
    border: '2px solidrgb(98, 97, 98)',
    padding: 'var(--space-2)',
};


/**
 * Template - Page Header
 */
interface CompProps { mode?:string;}

export function TestPlayground({mode}:CompProps) {

    useEffect(() => {
    }, []);


    return (
        <Flex width="100%" direction="column" style={layoutStyle} >
            Playground
        </Flex>
    );

}//end component

