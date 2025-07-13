//src\app\gencode\pagecomp\gcheader.ts

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Option } from "@/common/option";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";
import { RadixConf, RadixConfTexts } from "@/radix/radixconf";
import { ThemeButtonsStyle } from "@/radix/radixtheme";
import { renderHomeButton } from "@/radix/radixbuttons";


/**
 * Page Header
 */
interface CompProps {
    navback?:()=>void;
}
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

            <Flex direction="row" gap="2" justify="between" 
                 className="full h-auto w-[14%] bg-gray-1 dark:bg-gray-2 px-4 border-r border-gray-6">
                <Text size="5" weight="bold" className="text-gray-12">
                    Radix UI
                </Text>   
                <Box>
                 {renderHomeButton(isIndexPage)}  
                </Box>  
                         
            </Flex>

            <Box className="h-auto w-[82%] bg-gray-0 dark:bg-gray-1 px-6 overflow-y-auto">
                <Text size="5" weight="bold" className="text-gray-12">
                    Primitives Sandbox
                </Text>
            </Box>

            <Box className="h-auto w-[4%] bg-gray-1 dark:bg-gray-2 px-4 border-l border-gray-6">
                
            </Box>

        </Flex>
    );

}//end PrimaryBar

