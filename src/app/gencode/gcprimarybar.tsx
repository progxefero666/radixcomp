//src\app\gencode\pagecomp\gcprimarybar.tsx

import { useState, useEffect, useRef } from "react";
import { Option } from "@/common/model/option";
import { Box, Grid, Separator, Flex, Text, Button, Link, IconButton } from "@radix-ui/themes";


import MenuButtons from "@/radix/cbars/btmenu";

import { CodeGenModules } from "@/codegen/cgoperations";
import { COMP_BORDER_STYLE, ThemeIconsStyle } from "@/radix/radixtheme";
import { DB_ITEM_CMD } from "@/common/database/dbkernel";
import { EyeOpenIcon } from "@radix-ui/react-icons";


/**
 * Page Primary Bar
 */
interface PrimaryBarProps {    
    actsection: string|null;
    onselection:(sectionId:string) => void;
}
export function PrimaryBar({onselection,actsection}: PrimaryBarProps) {
    
    const onHandlerClick = () => {
    };

    return (
        <Flex direction="column" p="3" >            
            <Flex direction="row" justify="between" align="center" gapX="2"  
                  style={COMP_BORDER_STYLE}  >
                <Box>
                    <Text size="3" >
                        Sections
                    </Text>                    
                </Box>    
                <Box>
                    <IconButton size={ThemeIconsStyle.DEF_SIZE}>
                        <EyeOpenIcon  width={ThemeIconsStyle.DEF_WIDTH}
                                    height={ThemeIconsStyle.DEF_HEIGHT} onClick={() => onHandlerClick()} />
                    </IconButton>     
                </Box>                  
            </Flex>
            <MenuButtons options={CodeGenModules.MODULES}
                onclick={onselection} 
                actoption={actsection} />	
            <Separator orientation="horizontal" size="4"  />
        </Flex>
    );

}//end PrimaryBar


