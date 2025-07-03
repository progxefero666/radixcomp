//src\app\testcomp\page.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Box, Separator, Flex, Text, Button, Link, Grid, Container } from "@radix-ui/themes";
import { Option } from "@/common/model/option";

import { SeparatorH } from "@/radix/container/separatorh";
import {PrimaryBar} from "@/app/testcomp/testprimarybar";
import {TestHeader} from "@/app/testcomp/testheader";
import {TestSecondBar} from "@/app/testcomp/testsecondbar";
import { TestPlayground } from "@/app/testcomp/playground";
import { SeparatorV } from "@/radix/container/separatorv";


export const pageStyle = {
  
    background: '#000000'
};

export const columnStyle = {
    borderColor: 'rgb(98, 97, 98)',
    background: 'rgb(7, 7, 7)'
};

/**
 * Page Test Components
 */
export default function PageTest() {

    //useEffect(() => {}, []);
    //const onClick = (sectionId: string) => {}

    return (
        <Flex direction="column" style={{ minHeight: '100vh', ...pageStyle }}>

            { /* Header */}
            <TestHeader  />
            <SeparatorH />

            
            { /* Main content */}
            <Flex width="100%"  direction="row" style={{ flex: 1 }}>
                <Flex width="16%" style={{ flex: '0 0 16%', minHeight: '100%' }}>
                    <PrimaryBar  />
                </Flex>    
            
                <Flex width="68%" style={{ flex: '1 1 68%', minHeight: '100%' }}>
                    <TestPlayground />
                </Flex>

                <Flex width="16%" style={{ flex: '0 0 16%', minHeight: '100%' }}>                    
                    <TestSecondBar  />
                </Flex>                
            </Flex> 

        </Flex>
    );

}//end class
