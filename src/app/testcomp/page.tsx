//src\app\testcomp\page.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Box, Separator, Flex, Text, Button, Link, Grid } from "@radix-ui/themes";
import { Option } from "@/common/model/option";

import { ThemeButtonsStyle } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";
import { AppConstants } from "@/app_front/appconstants";
import { JSonConsole, JsonHelper } from "@/common/util/jsonhelper";
import { ShowAlerts } from "@/common/util/showalerts";

import {PrimaryBar} from "@/app/testcomp/testprimarybar";
import {TestHeader} from "@/app/testcomp/testheader";
import {TestSecondBar} from "@/app/testcomp/testsecondbar";


/**
 * Page Test Components
 */
export default function PageTest() {

    //useEffect(() => {}, []);
    //const onClick = (sectionId: string) => {}

    return (
        <Flex direction="column" className="h-screen">
           <TestHeader  />
            <Flex className="flex-1 overflow-hidden">
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-r border-gray-6 overflow-y-auto">
                    <PrimaryBar  />
                </Box>    
                <Box className="w-[68%] bg-gray-0 dark:bg-gray-1 p-4 overflow-y-auto">
                    <div>
                        MainContent
                    </div>
                </Box>
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-l border-gray-6 overflow-y-auto">
                    <TestSecondBar  />
                </Box>                
            </Flex>                       
        </Flex>
    );

}//end class
