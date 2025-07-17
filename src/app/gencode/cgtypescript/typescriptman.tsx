//src\app\gencode\cgtypescript\typescriptman.tsx

import { useState, useEffect, useRef } from "react";
import { TypeScriptViewer } from "@/app/gencode/cgtypescript/typescriptviewer";

import { Box, Grid, Flex, Text, Button, Tabs, } from "@radix-ui/themes";
import { ThemeButtonsStyle } from "@/radix/radixtheme";

import { CrossCircledIcon } from "@radix-ui/react-icons";
import { OpConstants } from "@/common/constants";
import { Keyvalue } from "@/common/model/keyvalue";
import { JsxOps, TsOps } from "@/codegen/data/cgdata";
import { XRadioGroup } from "@/radix/keyvalue/inpgrpradio";



const LAYOUT_STYLE = {
    background: 'rgba(33, 33, 33, 1)',
};

interface CompProps {
    onresult?: (code: String) => void;
}
export function TypeScriptManager({ onresult }: CompProps) {

    //useEffect(() => {}, []);
    const [code, setCode] = useState<string>("");

    const [operation, setOperation] = useState<string>(TsOps.BASIC[0].key);

    const listBasicOps: Keyvalue[] = TsOps.BASIC;

    const onOpSelected = (index: number, name?: string) => {
        
    };//end 

    const runOperation = () => {
        alert(operation);
    };//end

    const renderTestContent = () => {
        return (
            <Flex width="100%" direction="column" py="2" >
                <Text size="2">Make changes to your account.</Text>
            </Flex>
        );
    };//end    

    const renderAdvancedContent = () => {
        return (
            <Flex width="100%" direction="column" py="2" >
                <Text size="2">Make changes to your account.</Text>
            </Flex>
        );
    };//end

    const renderBasicContent = () => {
        return (
            <Flex width="100%" direction="row" px="4" >
                <Box width="50%" px="2">
                    <XRadioGroup
                        name={TsOps.MOD_ID}
                        collection={TsOps.BASIC}
                        label="Operations"
                        value={TsOps.BASIC[0].key}
                        autofocus={true}
                        onselect={onOpSelected} />
                </Box>
                <Box width="50%">
                    <XRadioGroup
                        name={JsxOps.MOD_ID}
                        collection={JsxOps.BASIC}
                        label="Jsx Operations"
                        value={JsxOps.BASIC[0].key}
                        onselect={onOpSelected} />
                </Box>
            </Flex>
        );
    };//end

    const renderHeader = () => {
        return (
            <Flex width="100%" direction="row" justify="between" mt="2" pb="2" align="center" >
                <Flex width="100%" direction="row" gapX="3"  >
                    <Box>
                        "header 1"
                    </Box>
                    <Box>
                        "header 2"
                    </Box>

                </Flex>

            </Flex>
        );
    };//end
   

    return (

        <Flex width="100%" direction="row" gridColumn="1" gridRow="1" >
 

            <Box width="40%" >

                <Tabs.Root defaultValue="basic">
                    <Tabs.List>
                        <Tabs.Trigger value="basic">Basic</Tabs.Trigger>
                        <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
                        <Tabs.Trigger value="test">Test</Tabs.Trigger>
                    </Tabs.List>

                    <Box pt="3">
                        <Tabs.Content value="basic">
                            {renderBasicContent()}

                        </Tabs.Content>

                        <Tabs.Content value="advanced">
                            {renderAdvancedContent()}
                        </Tabs.Content>

                        <Tabs.Content value="test">
                            {renderTestContent()}
                        </Tabs.Content>
                    </Box>

                </Tabs.Root>
        
            </Box>

            <Box  width="60%" >
                <TypeScriptViewer code={code} runoperation={runOperation}  />           
            </Box>              

        </Flex>
    )

}//end comp