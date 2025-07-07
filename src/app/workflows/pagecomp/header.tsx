//src\app\workflows\pagecomp\gcheader.tsx

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Box, Grid, Flex, Text, Button, Link } from "@radix-ui/themes";
import { ThemeButtonsStyle } from "@/radix/radixtheme";

import { Option } from "@/common/model/option";
import { RadixConf, RadixConfTexts } from "@/radix/radixconf";
import { Codelang } from "@/db/model/codelang";


const headerStyle = {
    height: 'auto',
    background: 'rgb(24, 24, 27)',
};

const headerLeftStyle = {
    height: 'auto',
};

const headerCenterStyle = {
    borderTop: 'none',    
    borderBottom: 'none',   
    borderLeft: '1px solid rgb(167, 176, 188)', 
    borderRight: '1px solid rgb(125, 134, 145)',
};

const headerRightStyle = {
    height: 'auto',
};


/**
 * Page WorkFlows Header
 */
interface CompProps {
    section: string|null;
    navback?:()=>void;
    codelangs:Codelang[]|null;
}
export function Header({codelangs,section,navback}:CompProps) {

    const pathname = usePathname();
    const [isIndexPage, setIsIndexPage] = useState<boolean>(false);
    const [ready, setReady] = useState<boolean>(false);

    useEffect(() => {
        if(ready) {return;}

        if(pathname === "/"){setIsIndexPage(true);}        
        if(codelangs !== null) {
            setReady(true);
        }   
    }, []);    

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
        <Flex width="100%" direction="row" style={headerStyle}  py="2">

            <Flex width="16%" direction="row" gap="2" px="3" justify="between" style={headerLeftStyle} >
                <Text size="3" >Xefero Tools </Text>   
                <Box>{renderHomeButton()}</Box>        
            </Flex>

            <Flex width = "68%" direction="row" px="3" style={headerCenterStyle} >
                <Text size="3"> Man. WorkFlows</Text>
            </Flex>

            <Box width="16%" px="4" style={headerRightStyle}>
                header right
            </Box>

        </Flex>
    );

}//end PrimaryBar

