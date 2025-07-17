//src\app\gencode\cgtypescript\typescriptman.tsx

import { useState, useEffect, useRef } from "react";

import { Box, Grid, Flex, Text, Button, Tabs, } from "@radix-ui/themes";
import { ThemeButtonsStyle, ThemePagesStyles } from "@/radix/radixtheme";
import { SeparatorH } from "@/radix/container/separatorh";
import { AppMemmory } from "@/front/appmemory";
import { XCheckGroup } from "@/radix/input/inpgrpcheck";
import { ServClientEntities } from "../../../codegen/client/gcmodentities";

import { AppConfig } from "@/app/index/appconfig";
import { CardDatabase } from "@/app/db/cards/carddatabase";
import { CodeGenJson } from "@/codegen/kernel/cgjsonmotor";
import { XSelect } from "@/radix/keyvalue/inpselect";
import { CodeGenSquema } from "@/codegen/model/cgschema";
import { CgEntityOperations } from "@/codegen/cgoperations";
import { FileCode } from "@/filesystem/fsmodels";
import { DocFormats } from "@/filesystem/fsconstants";
import { CollectionHelper } from "@/common/helper/collhelper";
import { XInputCheck } from "@/radix/input/inputcheck";
import { CgFileFunctions } from "@/codegen/kernel/cgfilefunctions";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { OpConstants } from "@/common/constants";
import { Keyvalue } from "@/common/model/keyvalue";
import { JsxOps, TsOps } from "@/codegen/data/cgdata";
import { XRadioGroup } from "@/radix/keyvalue/inpgrpradio";



const LAYOUT_STYLE = {
    background: 'rgba(33, 33, 33, 1)',
};

interface CompProps {
    onresult: (code: String) => void;
}
export function TypeScriptManager({ onresult }: CompProps) {

    //useEffect(() => {}, []);
    const [code, setCode] = useState<string>("");

    const listBasicOps: Keyvalue[] = TsOps.BASIC;

    const onOpSelected = (index: number, name?: string) => {
        alert("Op selected: " + index + " " + name);
    };//end 

    const runOperation = async () => {
        alert("Run operation not implemented yet");
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
                <Button color={ThemeButtonsStyle.COLOR_ADD}
                    size={ThemeButtonsStyle.BTN_DEF_SIZE}
                    radius={ThemeButtonsStyle.BTN_DEF_RADIUS}
                    onClick={() => runOperation()}>
                    <CrossCircledIcon />
                    <Text size={ThemeButtonsStyle.BTN_TEXT_SIZE}>
                        {OpConstants.OP_TEXT_RUN}
                    </Text>
                </Button>
            </Flex>
        );
    };//end

    //<TypeScriptViewer  code="" />     

    return (
        <Box height="100vh" width="100%" pt="2" style={LAYOUT_STYLE} >
            <Grid height="100vh" rows="1fr" columns="50% 50%"  >  
                <Flex gridColumn="1" gridRow="1" >
                      
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
         
                </Flex>

                <Flex gridColumn="2" gridRow="1" >
                            
                </Flex>                
            </Grid>

        </Box>
    )
}//end comp