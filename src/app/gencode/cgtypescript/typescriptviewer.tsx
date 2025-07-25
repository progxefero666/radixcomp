//src\app\gencode\cgtypescript\typescriptviewer.tsx

import { useEffect, useState } from "react";
import { Box, Grid, Flex, Text, Button, Tabs, TextField, Separator, Slider, } from "@radix-ui/themes";
import CardCode from "@/app/gencode/cards/cardcode";

import { OpConstants } from "@/common/constants";
import { FileCode } from "@/filesystem/fsmodels";
import { ButtonsStyle } from "@/radix/radixtheme";
import { Link2Icon, PlayIcon, Share2Icon } from "@radix-ui/react-icons";
import { CgDataProcessor } from "@/codegen/data/cgdataproc";



/**
 * Component TypeScript Viewer 
 */
interface CompProps {
    activetab: string;
    template: string;
    code: string;
}
export function TypeScriptViewer({activetab,template,code}: CompProps) {

    console.log(activetab);     
     
    const onClick = (opId?: string) => {

        if (opId==OpConstants.OP_COPY) {
            navigator.clipboard.writeText(code);
            alert("Code copied to clipboard");         
        }
        else if (opId==OpConstants.OP_EXPORT) {
            
        }                   
    };//end

    const renderBarButtons = () => {
        return (
            <Flex width="100%" direction="row" gapX="2" align="center" justify="end" pr="4" >
                <Button color={ButtonsStyle.COLOR_COPY} 
                        size={ButtonsStyle.DEF_SIZE}
                        radius={ButtonsStyle.DEF_RADIUS}
                        onClick={() => onClick(OpConstants.OP_COPY)}>
                    <Link2Icon  />
                    <Text size={ButtonsStyle.TEXT_SIZE}>
                        {OpConstants.OP_TEXT_COPY}
                    </Text>
                </Button>      
                <Button color={ButtonsStyle.COLOR_EXPORT} 
                        size={ButtonsStyle.DEF_SIZE}
                        radius={ButtonsStyle.DEF_RADIUS}
                        onClick={() => onClick(OpConstants.OP_EXPORT)}>
                    <Share2Icon  />
                    <Text size={ButtonsStyle.TEXT_SIZE}>
                        {OpConstants.OP_TEXT_EXPORT}
                    </Text>
                </Button>                                   
            </Flex>    
        );
    };//end

    return (
        <Flex className="h-full" direction="column" >

                  
            <Tabs.Root defaultValue={activetab}>
                <Tabs.List>
                    
                    <Tabs.Trigger value={CgDataProcessor.WCODE}>Code</Tabs.Trigger>
                    <Tabs.Trigger value={CgDataProcessor.WTEMPLATE}>Template</Tabs.Trigger>
                    {renderBarButtons()}
                </Tabs.List>
                <Box pt="3">
                    <Tabs.Content value={CgDataProcessor.WCODE}>
                        <CardCode key={code} code={code} /> 
                    </Tabs.Content>                    
                    <Tabs.Content value={CgDataProcessor.WTEMPLATE}>                           
                        <CardCode key={template}  code={template} />  
                    </Tabs.Content>
                </Box>
            </Tabs.Root>            
        </Flex>
    );

}//end component


