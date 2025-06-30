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
import { ModelTable } from "@/codegen/cgmodel";
import { CodeGenSql, CodeGenUtil } from "@/codegen/codegen";

interface InputEditorProps {section?:string;}
export function InputEditor({}:InputEditorProps) {

    const [section, setSection] = useState<string>(EditorConfig.ACTIVE_SECTION.id);
    const onSelect = (value: string,compname?:string) => {setSection(value);};
    const [initialized, setInitialized] = useState<boolean>(false);

    const [clientTables, setClientTables] = useState<Option[]>([]);
    const [clientTableSel, setClientTableSel] = useState<string>("undefined");

    const [modelTables, setModelTables] = useState<ModelTable[]>([]);
    const [modelTableSel, setModelTableSel] = useState<ModelTable|null>(null);

     const onSelectTable = (tableName:string) => {
        const tableIndex:number = CodeGenUtil.getModelTableIndex(modelTables,tableName);
        console.log(modelTables[tableIndex]);
        setModelTableSel(modelTables[tableIndex]);
        setClientTableSel(tableName);
    };

    useEffect(() => {
        const init = async () => {
            const client_tables:Option[]    = await SchemaService.getDummyListTables();
            const dbSqlSquema:string        = await getTextFile(EditorConfig.DBSQUEMA_FILE);
            const model_tables:ModelTable[] = CodeGenSql.getEsquemaTables(dbSqlSquema);            
            const tableIndex:number         = CodeGenUtil.getModelTableIndex(model_tables,client_tables[0].id);

            setClientTables(client_tables);
            setClientTableSel(client_tables[0].id);
            setModelTables(model_tables);
            setModelTableSel(model_tables[tableIndex]);
            setInitialized(true);
        };
        init();
    }, []);

    const renderPanelTables = () => {
        return (
            <Grid columns="2" gap="3">
                <Flex width={"49%"} direction="row" >       
                    <XRadioGroup autocommit = {true} key={clientTableSel}
                            onselect={onSelectTable} options={clientTables}  value = {clientTableSel}
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
