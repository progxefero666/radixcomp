//src\app\gencode\pagecomp\gcprimarybar.tsx

import { useState, useEffect, useRef } from "react";
import { Option } from "@/common/model/option";
import { Box, Grid, Separator, Flex, Text, Button, Link, IconButton } from "@radix-ui/themes";


import MenuButtons from "@/radix/cbars/btmenu";

import { CodeGenModules } from "@/codegen/cgoperations";
import { COMP_BORDER_STYLE, ThemeIconsStyle } from "@/radix/radixtheme";
import { DB_ITEM_CMD } from "@/common/database/dbkernel";
import { ArrowLeftIcon, EyeOpenIcon } from "@radix-ui/react-icons";


/**
 * Page Primary Bar
 */
interface PrimaryBarProps {    
    collapse: boolean;
    actsection: string|null;
    onselection:(sectionId:string) => void;
    oncollapse:() => void;
}
export function PrimaryBar({collapse,oncollapse,onselection,actsection}: PrimaryBarProps) {
    
    useEffect(() => {
        if(collapse) {
            
        }
        else {
           
        }
    }, []);

    const onHandlerClick = () => {
        oncollapse();
    };

    return (
        <Flex direction="column" px="2" py="2" >            
            <Flex direction="row" justify="between" px="2" py="1" align="center" gapX="2"  
                  style={COMP_BORDER_STYLE}  >
                <Box>
                    <Text size="3" >
                        Sections
                    </Text>                    
                </Box>    
                <Box>
                    <IconButton size={ThemeIconsStyle.DEF_SIZE}>
                        <ArrowLeftIcon  width={ThemeIconsStyle.DEF_WIDTH}
                                    height={ThemeIconsStyle.DEF_HEIGHT} onClick={() => onHandlerClick()} />
                    </IconButton>     
                </Box>                  
            </Flex>
            <Box width="100%" pt="2">     
                <MenuButtons options={CodeGenModules.MODULES}
                    onclick={onselection} 
                    actoption={actsection} />	
                <Separator orientation="horizontal" size="4"  />                           
            </Box>              

        </Flex>
    );

}//end PrimaryBar


