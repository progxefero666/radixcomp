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
  
    background: '#ff00ff'
};


/**
 * Page Test Components
 */
export default function PageTest() {

    //useEffect(() => {}, []);
    //const onClick = (sectionId: string) => {}

    return (
        <Flex direction="column" className="h-screen" style={pageStyle}>

            { /* Header */}
            <TestHeader  />
            <SeparatorH />

            
            { /* Main content */}
            <Flex width="100%"  direction="row">
                <Flex width="16%" className="h-screen">
                    <PrimaryBar  />
                </Flex>    
            
                <Flex width="68%" className="h-screen">
                    <TestPlayground />
                </Flex>

                <Flex width="16%"  className="h-screen">                    
                    <TestSecondBar  />
                </Flex>                
            </Flex> 

        </Flex>
    );

}//end class
