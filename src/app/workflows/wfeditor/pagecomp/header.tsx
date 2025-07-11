//src\app\workflows\pagecomp\gcheader.tsx

import { useState, useEffect, useRef } from "react";

import { usePathname, useRouter } from 'next/navigation';
import { Box, Grid, Flex, Text, Button, Link, TextField } from "@radix-ui/themes";
import { ThemeButtonsStyle } from "@/radix/radixtheme";

import { Option } from "@/common/models";
import { RadixConf, RadixConfTexts } from "@/radix/radixconf";
import { Codelang } from "@/db/model/codelang";
import { parseResponseCollection } from "@/front/parser/javascriptparser";
import { DbTables } from "@/db/dbcatalog";
import { getAllByTable } from "@/db/services/generic/serviceread";
import { XInputSelect } from "@/radix/input/inpselect";
import { CodelangUtil } from "@/db/modelutil/codelangutil";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { AppMemmory } from "@/front/appmemory";


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
    navback?: () => void;
}
export function WorkflowHeader({ navback }: CompProps) {
    const router = useRef(useRouter());
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
                    color={ThemeButtonsStyle.BTN_HOME_COLOR}
                    className={ThemeButtonsStyle.BTN_HOME_STYLE}
                    size={ThemeButtonsStyle.BTN_DEF_SIZE} >
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
                    <header></header>
            </Flex>

            <Flex gridColumn="3" gridRow="1"
                direction="row" px="3" style={headerRightStyle} >
                    hr
            </Flex>
        </Grid>
    )

}//end PrimaryBar
