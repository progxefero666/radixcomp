//src\app\gencode\cgtypescript\typescriptviewer.tsx

import { useEffect, useState } from "react";
import { Box, Separator, Flex, Text, Button, Link, Grid } from "@radix-ui/themes";
import CardCode from "@/app/gencode/cards/cardcode";

import { OpConstants } from "@/common/constants";
import { FileCode } from "@/filesystem/fsmodels";
import { ThemeButtonsStyle } from "@/radix/radixtheme";
import { Link2Icon, Share2Icon } from "@radix-ui/react-icons";


/**
 * Component TypeScript Viewer 
 */
interface CompProps {
    format?: string;
    code: string;
    esport: () => void;
}
export function TypeScriptViewer({code,format,esport}: CompProps) {

    const onClick = (opId?: string) => {

        if (opId==OpConstants.OP_COPY) {
            navigator.clipboard.writeText(code);
            alert("Code copied to clipboard");         
        }
        else if (opId==OpConstants.OP_EXPORT) {
             esport();
        }                   
    };//end

    return (
        <Flex className="h-full" direction="column" >


            <Flex width={"100%"} justify="between" px="2" py="1" align="start" >
                <Text size="3" align="left">{"Output Monitor"}</Text>
                

                <Flex direction="row" gapX="2" align="center" justify="center">
                    <Button color={ThemeButtonsStyle.COLOR_COPY} 
                            size={ThemeButtonsStyle.BTN_DEF_SIZE}
                            radius={ThemeButtonsStyle.BTN_DEF_RADIUS}
                            onClick={() => onClick(OpConstants.OP_COPY)}>
                        <Link2Icon  />
                        <Text size={ThemeButtonsStyle.BTN_TEXT_SIZE}>
                            {OpConstants.OP_TEXT_COPY}
                        </Text>
                    </Button>      
                    <Button color={ThemeButtonsStyle.COLOR_EXPORT} 
                            size={ThemeButtonsStyle.BTN_DEF_SIZE}
                            radius={ThemeButtonsStyle.BTN_DEF_RADIUS}
                            onClick={() => onClick(OpConstants.OP_EXPORT)}>
                        <Share2Icon  />
                        <Text size={ThemeButtonsStyle.BTN_TEXT_SIZE}>
                            {OpConstants.OP_TEXT_EXPORT}
                        </Text>
                    </Button>                                   
                </Flex>    
            </Flex>

            <Separator orientation="horizontal" size="4" mb="2" />
            <CardCode title="TypeScript Code" code={code} />        
        </Flex>
    );

}//end component


