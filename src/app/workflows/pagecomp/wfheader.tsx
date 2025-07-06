//src\app\workflows\pagecomp\gcheader.tsx

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Option } from "@/common/model/option";
import { Box, Grid, Flex, Text, Button, Link } from "@radix-ui/themes";
import { RadixConf, RadixConfTexts } from "@/radix/radixconf";
import { ThemeButtonsStyle } from "@/radix/radixtheme";
import { renderHomeButton } from "@/radix/radixbuttons";


/**
 * Page WorkFlows Header
 */
interface CompProps {navback?:()=>void;}

export function PageHeader({navback}:CompProps) {

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
        <Flex className="w-full h-auto py-3 bg-gray-2 dark:bg-gray-3 border-b border-gray-6" >

            <Flex height="auto" direction="row" gap="2" justify="between" >
                <Text size="5" weight="bold" className="text-gray-12">
                    Man. WorkFlows
                </Text>   
                <Box>
                 {renderHomeButton(isIndexPage)}  
                </Box>  
                         
            </Flex>

            <Box width="82%" height="auto" >
                <Text size="5" weight="bold" className="text-gray-12">
                    Primitives Sandbox
                </Text>
            </Box>

            <Box width="4%" height="auto">
                
            </Box>

        </Flex>
    );

}//end PrimaryBar

