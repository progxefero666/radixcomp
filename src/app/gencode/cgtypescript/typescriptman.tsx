//src\app\gencode\cgtypescript\typescriptman.tsx

import { useState, useEffect, useRef } from "react";

import { Box, Grid, Flex, Text, Button, Tabs, } from "@radix-ui/themes";
import { ThemeButtonsStyle, ThemePagesStyles } from "@/radix/radixtheme";
import { SeparatorH } from "@/radix/container/separatorh";
import { AppMemmory } from "@/front/appmemory";
import { XCheckGroup } from "@/radix/input/inpgrpcheck";
import { ServClientEntities } from "../../../codegen/client/gcmodentities";
import { Label } from "@radix-ui/react-context-menu";
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



const LAYOUT_STYLE = {
    background: 'rgba(33, 33, 33, 1)',
};

interface CompProps {
    section?: string | null;
    onsingleresult: (filecode: FileCode) => void;
    onmultipleresult: (filescode: FileCode[]) => void;
}
export function TypeScriptManager({ section, onsingleresult, onmultipleresult }: CompProps) {


    const onOpSelected = (operationId: string) => {
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
            <Flex width="100%" direction="column" py="2" >
                <Text size="2">Make changes to your account.</Text>
            </Flex>
        );
    };//end

    const renderHeader = () => {
        return (
            <Flex width="100%" direction="row" justify="between" mt="2" pb="2" align="center" >
                <Flex width="100%" direction="row" gapX="3"  >
                    <Box>
                        <XSelect label="Operations:"
                            collection={CgEntityOperations.OPS_ENTITIES}
                            onchange={onOpSelected} />
                    </Box>
                    <Box>
                        "2"
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

    return (
        <Box height="100vh" width="100%" pt="2" style={LAYOUT_STYLE} >
            <Tabs.Root defaultValue="account">
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
    )
}//end comp