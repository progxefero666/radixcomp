//src\app\gencode\panelinput.tsx

import { useState, useEffect } from "react";

import { Option } from "@/common/model/option";
import { Box,Grid, Separator,Flex, Text, Button, Link } from "@radix-ui/themes";

import { EditorConfig } from "@/app/gencode/config";
import { SchemaService } from "@/client/metadata/schemaservice";
import { XRadioGroup } from "@/radix/group/grpradio";
import { SeparatorH } from "@/radix/container/separatorh";
import { SeparatorV } from "@/radix/container/separatorv";
import { getTextFile } from "@/app_server/actions/gettextfile";

interface InputEditorProps {section?:string;}
export function InputEditor({}:InputEditorProps) {

    const [section, setSection] = useState<string>(EditorConfig.ACTIVE_SECTION.id);
    const onSelect = (value: string,compname?:string) => {setSection(value);};
    const [initialized, setInitialized] = useState<boolean>(false);

    const [squemaTables, setSquemaTables] = useState<Option[]>([]);
    const [selectTable, setSelectTable] = useState<string>("undefined");

     const onSelectTable = (tableName:string) => {
        alert(tableName);
        setSelectTable(tableName);
    };

    useEffect(() => {
        const init = async () => {
            const dbSquema:string = await getTextFile(EditorConfig.DBSQUEMA_FILE);
            alert("success");
            console.log("DB Squema: ", dbSquema);
            const listTables:Option[] = await SchemaService.getDummyListTables()
            setSquemaTables(listTables);
            setSelectTable(listTables[0].id);
            setInitialized(true);
        };
        init();
    }, []);

    const renderPanelTables = () => {
        return (
            <Grid columns="2" gap="3">
                <Flex width={"49%"} direction="row" >       
                    <XRadioGroup autocommit = {true} key={selectTable}
                            onselect={onSelectTable} options={squemaTables}  value = {selectTable}
                            direction="column" />                                               
                </Flex>
                
                <Flex width={"50%"}  direction="row" gapX="5">    
                   <SeparatorV />                             
                   <p>as</p>
                </Flex>
            </Grid>
        );
    }

    const renderPanelServices = () => {
        return (
            <Text size="5" weight="bold" className="text-gray-12">
                Section B Content
            </Text>
        );
    };

    return (
        <Flex direction="column" gapY={"2"} style={EditorConfig.LAYOUT_STYLE} >
            <XRadioGroup autocommit = {true} onselect={onSelect} options={EditorConfig.SECTIONS}  value = {section} />
            <SeparatorH />
            {section === EditorConfig.TABLES.id && renderPanelTables()}
            {section === EditorConfig.SERVICES.id && renderPanelServices()}
        </Flex>
    );

}//end InputEditor
