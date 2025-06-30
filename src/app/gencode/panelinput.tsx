//src\app\gencode\panelinput.tsx

import { XRadioGroup } from "@/radix/group/grpradio";

import { Box,Grid, Separator,Flex, Text, Button, Link } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { EditorConfig } from "./config";

interface InputEditorProps {section?:string;}
export function InputEditor({}:InputEditorProps) {

    const [section, setSection] = useState<string>(EditorConfig.ACTIVE_SECTION.id);
    const onSelect = (value: string,compname?:string) => {setSection(value);};
    const [initialized, setInitialized] = useState<boolean>(false);

    useEffect(() => {
        const init = async () => {
          
            //const res: boolean = await appRef.current.loadInitCollections();
            //setInitialized(true);
        };
        init();
    }, []);

    const renderSectionA = () => {
        return (
            <Grid columns="50% 50%" gap="3">
                <Flex direction="column" gapY="5">
                    tables
                </Flex>
                <Flex direction="column" gapY="5">
                    campos
                </Flex>
            </Grid>
        );
    }

    const renderSectionB = () => {
        return (
            <Text size="5" weight="bold" className="text-gray-12">
                Section B Content
            </Text>
        );
    };

    return (
        <Flex direction="column" gapY="5" className="h-full">
            <XRadioGroup autocommit = {true} onselect={onSelect} options={EditorConfig.SECTIONS}  value = {section} />
            <Separator orientation="horizontal" size="4" />
            {section === EditorConfig.TABLES.id && renderSectionA()}
            {section === EditorConfig.SERVICES.id && renderSectionB()}
        </Flex>
    );

}//end InputEditor
