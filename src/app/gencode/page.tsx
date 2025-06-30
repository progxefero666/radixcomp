//src\app\gencode\page.tsx

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, Grid, Flex ,Text, Button, Link} from "@radix-ui/themes";

import { AppConfig } from "@/app_front/appconfig";

import { AppIndex } from "@/app_front/appindex";
import MenuButtons from "@/radix/cbars/btmenu";
import { RadixColors, ThemeButtonsStyle } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";


const BODY_STYLE: string = "w-full h-auto grid grid-cols-[14%_41%_41%_4%]";

/**
 * Page GenCode
 */
export default function PageGenCode() {
    const router = useRouter();
    const [section, setSection] = useState<string>("undefined");


    useEffect(() => {
        const init = async () => {
           
        };
        init();
    }, []);

    const onSelection = (sectionId: string) => {    
        setSection(sectionId);
    }

 

    return (
        <Flex direction="column" className="h-screen">
             <PageHeader onselection={onSelection} />

            <Box className="w-[14%] bg-gray-1 dark:bg-gray-2 p-4 border-r border-gray-6 overflow-y-auto">
                <PagePrimaryBar section={section} onselection={onSelection} />
            </Box>
            <Box className="w-[41%] bg-gray-3 p-4">

            </Box>
            <Box className="w-[41%] bg-gray-10 p-4">

            </Box>
            <Box className="w-[4%] bg-gray-1 dark:bg-gray-2 p-4 border-l border-gray-6 overflow-y-auto">
                <PageSecondBar actsection={section} />
            </Box>

        </Flex>
    )

}//end page

interface PageHeaderProps {
    onselection: (sectionId: string) => void;
}
function PageHeader({ onselection }: PageHeaderProps) {

    const pathname = usePathname();

    const onSelection = (sectionId: string) => {
        alert("Home: onselection: " + sectionId);
    }

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

    return (
        <Flex className="w-full h-auto py-3 bg-gray-2 dark:bg-gray-3 border-b border-gray-6" >

            <Flex direction="row" gap="2" justify="between" 
                 className="full h-auto w-[16%] bg-gray-1 dark:bg-gray-2 px-4 border-r border-gray-6">
                <Text size="5" weight="bold" className="text-gray-12">
                    Radix UI
                </Text>   
                <Box>
                 {renderHomeButton()}  
                </Box>  
                         
            </Flex>

            <Box className="h-auto w-[68%] bg-gray-0 dark:bg-gray-1 px-6 overflow-y-auto">
                <Text size="5" weight="bold" className="text-gray-12">
                    Primitives Sandbox
                </Text>
            </Box>

            <Box className="h-auto w-[16%] bg-gray-1 dark:bg-gray-2 px-4 border-l border-gray-6">
                <p>header-left</p>
            </Box>

        </Flex>
    );

}//end PrimaryBar


interface PagePrimaryBarProps {
    section: string;
    onselection: (sectionId:string) => void;
}
function PagePrimaryBar({onselection,section}: PagePrimaryBarProps) {

    return (
        <Flex direction="column" >

            <MenuButtons options={AppConfig.MODULES}
                onselection={onselection} 
                optactcolor={RadixColors.colors.indigo}
                optcolor={RadixColors.colors.plum}
                optactid={section} />	

        </Flex>
    );

}//end PrimaryBar

interface PageSecondBarProps {
    actsection: string;
}
function PageSecondBar({actsection}: PageSecondBarProps) {

    const onSelection = (sectionId: string) => {
        //not implemented yet
    }

    return (
        <Flex direction="column" >
            <p>Second Bar</p>
       
        </Flex>
    );

}//end PrimaryBar
