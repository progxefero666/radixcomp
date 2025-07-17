//src\app\gencode\pagecomp\outputmonitor.tsx

import { useEffect, useState } from "react";
import { Box, Separator, Flex, Text, Button, Link, Grid } from "@radix-ui/themes";
import CardCode from "@/app/gencode/cards/cardcode";
import { BARCFG_EXPORT_COPY } from "@/radix/appbars";
import BarButtons from "@/radix/cbars/btbar";
import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";
import { OpConstants } from "@/common/constants";
import { FileCode } from "@/filesystem/fsmodels";
import { ThemeButtonsStyle } from "@/radix/radixtheme";
import { CrossCircledIcon, Link2Icon, Share2Icon } from "@radix-ui/react-icons";

//import { GenCodeModuleConfig } from "../config";


/**
 * Component GenCode Viewer 
 */
interface CompProps {
    format?: string;
    singlecode?: FileCode;
    multiplecode?: FileCode[];
    exportsinglecode: () => void;
    exportmultiplecode: () => void;
}
export function GenCodeViewer({singlecode,multiplecode,
                               exportsinglecode,exportmultiplecode}: CompProps) {

    let multiple: boolean = false;
    if(multiplecode){multiple = true;}

    const onClick = (opId?: string) => {

        if (opId==OpConstants.OP_COPY) {
            if(!multiple){
                navigator.clipboard.writeText(singlecode!.code);
            }
            else {
                navigator.clipboard.writeText(multiplecode![0].code);
            }   
            alert("Code copied to clipboard");         
        }
        else if (opId==OpConstants.OP_EXPORT) {
            if(!multiple){exportsinglecode();}
            else         {exportmultiplecode();}               
        }                   
    };//end

    const renderSingleCode = () => {
        return (
            <CardCode title={singlecode!.id} code={singlecode!.code} />
        )
    };//end

    const renderMultipleCode = () => {
        return (
            <Flex direction="column" gap="2">
                {multiplecode!.map((itemCode, index) => (
                    <Box key={index.toString()}>
                        <CardCode title={itemCode.id} code={itemCode.code} />
                    </Box>                 
                ))}
            </Flex>
        )
    };//end

    return (
        <Flex className="h-full" direction="column"   >
            <Flex width={"100%"} justify="between" px="2" py="1" align="start" >
                <Text size="3" align="left">{"Output Monitor"}</Text>
                
                {/* onclick={onClick} */}
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
            {multiple ? renderMultipleCode() : renderSingleCode()}            
        </Flex>
    );

}//end component


