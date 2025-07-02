//src\app\gencode\panelinput.tsx

import { useState, useEffect, useRef } from "react";

import { Option } from "@/common/model/option";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";


import { format, addDays, differenceInDays } from "date-fns";
import { es } from 'date-fns/locale/es';
import { EditorConfig } from "@/app/gencode/config";
import { SchemaService } from "@/client/metadata/schemaservice";
import { XRadioGroup } from "@/radix/input/inpgrpradio";
import { SeparatorH } from "@/radix/container/separatorh";
import { SeparatorV } from "@/radix/container/separatorv";
import { getTextFile } from "@/app_server/actions/gettextfile";
import { ModelField, ModelTable } from "@/codegen/kernel/cgmodel";

import { XInputTextArea } from "@/radix/input/inptextarea";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { CodeGenSql } from "@/codegen/kernel/cgsqlmotor";
import { XInputDate } from "@/radix/input/inpdate";
import { CodeGenTsMotor } from "@/codegen/kernel/cgtsmotor";
import { InputFiles } from "@/radix/notready/inputfiles";
import { RadixConfTexts } from "@/radix/radixconf";
import { CodeGenJson } from "@/codegen/kernel/cgjsonmotor";



interface InputEditorProps {
    section?: string;
    ondataresult: (data: string) => void;
}
export function InputEditor({ ondataresult }: InputEditorProps) {

    const [section, setSection] = useState<string>(EditorConfig.ACTIVE_SECTION.id);
    const onSelect = (value: string, compname?: string) => { setSection(value); };
    const [initialized, setInitialized] = useState<boolean>(false);

    const [optionsTables, setOptionsTables] = useState<Option[]>([]);
    const [optionTableSel, setOptionTableSel] = useState<string | null>(null);

    const [modelTables, setModelTables] = useState<ModelTable[]>([]);
    const [modelTableSel, setModelTableSel] = useState<ModelTable | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const onSelectTable = (tableName: string) => {
        const tableIndex: number = CodeGenHelper.getModelTableIndex(modelTables, tableName);
        const tableClass: string = CodeGenTsMotor.getEntityClass(modelTables[tableIndex]);
        setModelTableSel(modelTables[tableIndex]);
        //ondataresult(tableClass);        
    };

    useEffect(() => {

        const init = async () => {
            //const client_tables: Option[] = await SchemaService.getDummyListTables();
            const dbSqlSquema: string = await getTextFile(EditorConfig.DBSQUEMA_FILE);
            const model_tables: ModelTable[] = CodeGenSql.getEsquemaTables(dbSqlSquema);
            setModelTables(model_tables);
            setModelTableSel(model_tables[0]);
            setOptionsTables(SchemaService.getListTablesAsOptions(model_tables));
            setOptionTableSel(model_tables[0].name);
            setInitialized(true);

            const firstTableJson: string = CodeGenJson.getJsonEntDef(model_tables[0]);
            console.log("First table JSON definition:", firstTableJson);
            ondataresult(firstTableJson);
            //const tableClass: string = CodeGenTsMotor.getEntityClass(model_tables[0]);
            //ondataresult(tableClass);
        };
        init();
    }, []);

    const onFileCharged = async (file: File, name?: string) => {

        if (file) {
            alert(file.name);
        }
    }

    const renderPanelTables = () => {
        let showModelTable: boolean = false;
        if (modelTableSel !== null) { showModelTable = true; }

        let rightPanelData: string = "";
        if (showModelTable) {
            rightPanelData = JSON.stringify(modelTableSel, null, 4);
        }

        return (
            <Flex width={"100%"} direction="row" pt="2"   >
                <Box width={"30%"} >
                    {initialized ?
                        <XRadioGroup
                            autocommit={true}
                            key={optionTableSel}
                            onselect={onSelectTable}
                            options={optionsTables}
                            value={optionTableSel}
                            direction="column" />
                        : null}

                </Box>

                <Box width={"70%"} >
                    <SeparatorV />
                    {showModelTable ?
                        <div className="w-full">
                            <XInputTextArea value={rightPanelData} />
                        </div>

                        : null}
                </Box>
            </Flex>
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
        <Flex width={"100%"} direction="column" pt="2" style={EditorConfig.LAYOUT_STYLE} >

            <Flex width={"100%"} direction="row" justify="between"  >
                <XRadioGroup autocommit={true} 
                             onselect={onSelect}
                             options={EditorConfig.SECTIONS} value={section} />

                
                    <InputFiles 
                        formats=".sql,.json,.ts" 
                        multiple={false}
                        name="inputFileCode" onchange={onFileCharged} />
                
            </Flex>

            <SeparatorH />
            {section === EditorConfig.TABLES.id && renderPanelTables()}
            {section === EditorConfig.SERVICES.id && renderPanelServices()}
        </Flex>
    );

}//end InputEditor

//const className = CodeGenHelper.capitalize(table.name)
//                 .concat(CodeGenConfig.DEF_CLASS_NAMEADD);//Def