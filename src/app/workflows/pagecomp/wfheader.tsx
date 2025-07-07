//src\app\workflows\pagecomp\gcheader.tsx

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Option } from "@/common/model/option";
import { Box, Grid, Flex, Text, Button, Link } from "@radix-ui/themes";
import { RadixConf, RadixConfTexts } from "@/radix/radixconf";
import { ThemeButtonsStyle } from "@/radix/radixtheme";



/**
 * Page WorkFlows Header
 */
interface CompProps {
    section: string|null;
    navback?:()=>void;
}

export function PageHeader({section,navback}:CompProps) {

    const pathname = usePathname();

    const [isIndexPage, setIsIndexPage] = useState<boolean>(false);
    const [pageReady, setPageReady] = useState<boolean>(false);


    const renderHomeButton = () => {
        return (
            <Link href="/" >
                <Button
                    variant={pathname === "/" ? RadixConf.VARIANTS.solid :
                                                RadixConf.VARIANTS.soft}
                    color={ThemeButtonsStyle.BTN_HOME_COLOR}
                    className={ThemeButtonsStyle.BTN_HOME_STYLE}
                    size={ThemeButtonsStyle.BTN_DEF_SIZE} >
                    Home
                </Button>
            </Link>
        )
    }

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
        <Flex width="100%" direction="row"
            className="h-auto py-3 bg-gray-2 dark:bg-gray-3 border-b border-gray-6" >

            <Flex width="16%" height="auto" direction="row" gap="2" justify="between"
                className="bg-gray-1 dark:bg-gray-2 px-4 border-r border-gray-6" >
                <Text size="3" >
                    Xefero Tools
                </Text>   
                <Box>
                 {renderHomeButton()}  
                </Box>        
            </Flex>

            <Box width = "68%" height = "auto"
                className = "bg-gray-0 dark:bg-gray-1 px-6 overflow-y-auto" >
                <Text size = "3" >
                    Man. WorkFlows
                </Text>
            </Box>

            <Box width="16%" height="auto" 
                className="bg-gray-1 dark:bg-gray-2 px-4 border-l border-gray-6">
                user
            </Box>

        </Flex>
    );

}//end PrimaryBar

