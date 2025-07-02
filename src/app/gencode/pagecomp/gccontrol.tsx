//src\app\gencode\panelinput.tsx

import { useState, useEffect, useRef } from "react";

import { Option } from "@/common/model/option";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";


import { format, addDays, differenceInDays } from "date-fns";
import { es } from 'date-fns/locale/es';

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
import { ModuleConfig } from "../config";
import { InputSelect } from "@/radix/input/inpselect";
import { CodeGenConfig } from "@/codegen/kernel/cgconfig";
import { BasicEvaluatedExpression } from "next/dist/compiled/webpack/webpack";


interface CompProps {
    section?: string;
    ondataresult: (data: string) => void;
}
export function GenCodeControl({ section, ondataresult }: CompProps) {

    const [initialized, setInitialized] = useState<boolean>(false);

    const [menuListTables, setMenuListTables] = useState<Option[]>([]);
    const [optionTableSel, setOptionTableSel] = useState<string | null>(null);
    const [modelTables, setModelTables] = useState<ModelTable[]>([]);
    const [modelTableSel, setModelTableSel] = useState<ModelTable | null>(null);
    const [operations, setOperations] = useState<Option[]>([]);
    const [operationSelected, setOperationSelected] = useState<Option|null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const operationsRef = useRef<HTMLSelectElement>(null);
    //ondataresult(tableClass);        


    useEffect(() => {
        const init = async () => {
            if(section!=null){
 
                const listOperations: Option[] = CodeGenConfig.getSectionOperations(section!);

                const dbSqlSquema: string = await getTextFile(ModuleConfig.DBSQUEMA_FILE);
                const model_tables: ModelTable[] = CodeGenSql.getEsquemaTables(dbSqlSquema);
                
                setModelTables(model_tables);
                setModelTableSel(model_tables[0]);

                setMenuListTables(SchemaService.getListTablesAsOptions(model_tables));
                setOptionTableSel(model_tables[0].name);

                setOperations(listOperations);
                setOperationSelected(listOperations[0]);
            }           
            setInitialized(true);
        };
        init();
    }, []);

    const onFileCharged = async (file: File, name?: string) => {
        if (file) {
            alert(file.name);
        }
    }//end


    const onSelectTable = (tableName: string) => {
        const tableIndex: number = CodeGenHelper.getModelTableIndex(modelTables, tableName);
        setModelTableSel(modelTables[tableIndex]);
    };

    const onOpSelected = async (operationId: string) => {
        alert(operationId);

    }//end

    const renderListTables = () => {
        return (
            <XRadioGroup
                autocommit={true}
                key={optionTableSel}
                onselect={onSelectTable}
                options={menuListTables}
                value={optionTableSel}
                direction="column" />
        )
    }//end

    const renderMainContent = () => {
        let showModelTable: boolean = false;

        /*
        if (modelTableSel !== null) { showModelTable = true; }
        let rightPanelData: string = "";
        if (showModelTable) {
            rightPanelData = JSON.stringify(modelTableSel, null, 4);
        }
        */
        return (
            <Flex width={"100%"} direction="row" pt="2"   >
                <Box width={"30%"} pb="2" >
                    {initialized ? renderListTables() : null}
                </Box>

                <Box width={"70%"} >
                    <SeparatorV />
                    {showModelTable ?
                        <div className="w-full">
                            <XInputTextArea value={"rightPanelData"} />
                        </div>
                        : null}
                </Box>
            </Flex>
        );
    }//end renderMainContent

    return (
        <Flex width={"100%"} direction="column" pt="2" style={ModuleConfig.GC_CONTROL_LAYOUT_STYLE} >

            <Flex width={"100%"} direction="row" pb="2" justify="between"  >
                <Box>
                    {initialized ? 
                      <InputSelect key={operations[0].id}
                        inline={true}
                        name="operations"
                        label="Operation: "
                        ref={operationsRef}
                        collection={operations}
                        value={operationSelected?.id ?? ""}
                        onchange={onOpSelected}
                        disabled={false} />                    
                    : null}

                </Box>
                <Box>
                    list icons
                </Box>
            </Flex>

            <SeparatorH />
            {renderMainContent()}

            <SeparatorH />
            <Box width={"100%"}>
                <InputFiles
                    ref={fileInputRef}
                    name="inputFileCode"
                    formats=".sql,.json,.ts"
                    multiple={false}
                    onchange={onFileCharged} />
            </Box>
        </Flex>
    );

}//end InputEditor

/*
//const tableClass: string = CodeGenTsMotor.getEntityClass(modelTables[tableIndex]);
            //const client_tables: Option[] = await SchemaService.getDummyListTables();
        const init = async () => {
            //const client_tables: Option[] = await SchemaService.getDummyListTables();
            const dbSqlSquema: string = await getTextFile(ModuleConfig.DBSQUEMA_FILE);
            const model_tables: ModelTable[] = CodeGenSql.getEsquemaTables(dbSqlSquema);
            setModelTables(model_tables);
            setModelTableSel(model_tables[0]);
            setOptionsTables(SchemaService.getListTablesAsOptions(model_tables));
            setOptionTableSel(model_tables[0].name);
            setInitialized(true);

            //const firstTableJson: string = CodeGenJson.getJsonEntDef(model_tables[0]);
            //console.log("First table JSON definition:", firstTableJson);
            //ondataresult(firstTableJson);

            const allTableDefsJson: string = CodeGenJson.getJsonArrayEntDef(model_tables);
            ondataresult(allTableDefsJson);
            //console.log(allTableDefsJson);

            //const tableClass: string = CodeGenTsMotor.getEntityClass(model_tables[0]);
            //ondataresult(tableClass);
        };
*/
//const className = CodeGenHelper.capitalize(table.name)
//                 .concat(CodeGenConfig.DEF_CLASS_NAMEADD);//Def