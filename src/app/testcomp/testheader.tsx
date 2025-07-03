"use client";

import React, { useEffect, useState } from "react";
import { Link,Flex, Text, Button, Box } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { renderHomeButton } from "@/radix/radixbuttons";

export const pageStyle = {
  
    backgroundColor: "#000000",
};


/**
 * Template - Page Header
 */
interface CompProps { navback?:()=>void;}
export function TestHeader({navback}:CompProps) {

    const pathname = usePathname();

    const [isIndexPage, setIsIndexPage] = useState<boolean>(false);
    const [pageReady, setPageReady] = useState<boolean>(false);

    useEffect(() => {
        if(pageReady){return;}
        const init = (): void => {
            if(pathname === "/"){setIsIndexPage(true);}
            //else {setIsIndexPage(false); }
            setPageReady(true);
        }
        init();
    }, []);


    return (
        <Flex  width="100%"  direction="row" pt="2" style={pageStyle} >

            <Flex  width="16%" direction="row" gap="2" px="2" pb="2" justify="between" >
                <Text size="5" weight="bold" >Radix UI</Text>   
                <Box> {renderHomeButton(isIndexPage)}</Box>                           
            </Flex>

            <Flex width="68%" direction="row" pl="3">
                <Text size="5" weight="bold">Primitives Sandbox</Text>
            </Flex>

            <Flex width="16%" direction="row" >
                2 bar
            </Flex>

        </Flex>
    );

}//end component

