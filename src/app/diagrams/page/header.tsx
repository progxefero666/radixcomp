//src\app\workflows\pagecomp\gcheader.tsx

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Box, Grid, Flex, Text, Button, Link, TextField } from "@radix-ui/themes";
import { ButtonsStyle } from "@/radix/radixtheme";


import { RadixConf,  } from "@/radix/radixconf";

const headerStyle = {
    height: 'auto',
    background: 'rgb(29, 30, 32)',
    borderBottom: '2px solid rgba(126, 131, 126, 0.9)',
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
    section: string | null;
    navback?: () => void;
}
export function Header({ section, navback }: CompProps) {

    const pathname = usePathname();
    const [isIndexPage, setIsIndexPage] = useState<boolean>(false);
    
    useEffect(() => {
        if (pathname === "/") { setIsIndexPage(true); }
    }, []);


    const renderHomeButton = () => {
        return (
            <Link href="/" >
                <Button
                    variant={pathname === "/" ? RadixConf.VARIANTS.solid :
                        RadixConf.VARIANTS.soft}
                    color={ButtonsStyle.BTN_HOME_COLOR}
                    className={ButtonsStyle.BTN_HOME_STYLE}
                    size={ButtonsStyle.BTN_DEF_SIZE} >
                    Home
                </Button>
            </Link>
        )
    }


    return (
        <Grid width="100%" py="2" rows="auto" columns="14% 82% 4%" style={headerStyle} >

            <Flex gridColumn="1" gridRow="1"
                direction="row" gap="2" px="3" justify="between" style={headerLeftStyle} >
                <Text size="5" >Tools </Text>
                <Box>{renderHomeButton()}</Box>
            </Flex>

            <Flex gridColumn="2" gridRow="1"
                  direction="row" px="3" style={headerCenterStyle} >
            </Flex>

            <Flex gridColumn="3" gridRow="1" >
                rbd
            </Flex>

        </Grid>
    )

}//end PrimaryBar
