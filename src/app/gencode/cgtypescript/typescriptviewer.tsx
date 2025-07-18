//src\app\gencode\cgtypescript\typescriptviewer.tsx

import { useEffect, useState } from "react";
import { Box, Grid, Flex, Text, Button, Tabs, TextField, Separator, Slider, } from "@radix-ui/themes";
import CardCode from "@/app/gencode/cards/cardcode";

import { OpConstants } from "@/common/constants";
import { FileCode } from "@/filesystem/fsmodels";
import { ButtonsStyle } from "@/radix/radixtheme";
import { Link2Icon, PlayIcon, Share2Icon } from "@radix-ui/react-icons";
import { CgDataConst } from "@/codegen/data/cgdataconfig";


/**
 * Component TypeScript Viewer 
 */
interface CompProps {
    template: string;
    code: string;
}
export function TypeScriptViewer({template,code}: CompProps) {

    const onClick = (opId?: string) => {

        if (opId==OpConstants.OP_COPY) {
            navigator.clipboard.writeText(code);
            alert("Code copied to clipboard");         
        }
        else if (opId==OpConstants.OP_EXPORT) {
            
        }                   
    };//end

    const renderHeader = () => {
        return (
            <Flex width={"100%"} justify="between" pl="4" pr="2" py="1" align="start" >
                
                <Text size="3" align="left">{"Output Code"}</Text>
                <Flex direction="row" gapX="2" align="center" justify="center">
                    <Button color={ButtonsStyle.COLOR_COPY} 
                            size={ButtonsStyle.BTN_DEF_SIZE}
                            radius={ButtonsStyle.BTN_DEF_RADIUS}
                            onClick={() => onClick(OpConstants.OP_COPY)}>
                        <Link2Icon  />
                        <Text size={ButtonsStyle.BTN_TEXT_SIZE}>
                            {OpConstants.OP_TEXT_COPY}
                        </Text>
                    </Button>      
                    <Button color={ButtonsStyle.COLOR_EXPORT} 
                            size={ButtonsStyle.BTN_DEF_SIZE}
                            radius={ButtonsStyle.BTN_DEF_RADIUS}
                            onClick={() => onClick(OpConstants.OP_EXPORT)}>
                        <Share2Icon  />
                        <Text size={ButtonsStyle.BTN_TEXT_SIZE}>
                            {OpConstants.OP_TEXT_EXPORT}
                        </Text>
                    </Button>                                   
                </Flex>    
            </Flex>
        );
    };//end

    return (
        <Flex className="h-full" direction="column" >
            {renderHeader()}
            <Separator orientation="horizontal" size="4" mb="2" />
                  

                <Tabs.Root defaultValue={CgDataConst.WTEMPLATE}>
                    <Tabs.List>
                        <Tabs.Trigger value={CgDataConst.WTEMPLATE}>Template</Tabs.Trigger>
                        <Tabs.Trigger value={CgDataConst.WCODE}>Code</Tabs.Trigger>

                    </Tabs.List>
                    <Box pt="3">
                        <Tabs.Content value={CgDataConst.WTEMPLATE}>                           
                           <CardCode code={template} />  
                        </Tabs.Content>

                        <Tabs.Content value={CgDataConst.WCODE}>
                            <CardCode code={code} /> 
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>            
        </Flex>
    );

}//end component


