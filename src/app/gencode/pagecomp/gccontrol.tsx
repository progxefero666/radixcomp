//src\app\gencode\panelinput.tsx
"use client";

import { useState, useEffect, useRef } from "react";

import { Option } from "@/common/model/option";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";
//import { SchemaService } from "@/client/metadata/schemaservice";

import { SeparatorH } from "@/radix/container/separatorh";
import { SeparatorV } from "@/radix/container/separatorv";
import { ModelTable } from "@/codegen/kernel/cgmodel";
import { XInputTextArea } from "@/radix/input/inptextarea";
import { CodeGenSql } from "@/codegen/kernel/cgsqlmotor";
import { InputFiles } from "@/radix/notready/inputfiles";
import { RadixConfTexts } from "@/radix/radixconf";
import { CodeGenJson } from "@/codegen/kernel/cgjsonmotor";
import { ModuleConfig } from "../config";
import { InputSelect } from "@/radix/input/inpselect";
import { CodeGenConfig } from "@/codegen/cgconfig";

import { TsEntFilesOps } from "@/codegen/operations/tsentfilesops";
import { JsonEntFilesOps } from "@/codegen/operations/jsonentfilesops";
import { PyEntServiceFilesOps } from "@/codegen/operations/pyentservicefilesops";
import { TsxEntFormsOps } from "@/codegen/operations/tsxentformsops";
import { TsEntServiceFilesOps } from "@/codegen/operations/tsentservicefilesops";
import { AppConstants } from "@/app_front/appconstants";
import { AppContext } from "@/app_front/appcontext";
import { JSonConsole, JsonHelper } from "@/common/util/jsonhelper";

import { ShowAlerts } from "@/common/util/showalerts";
import { XRadioGroup } from "@/radix/input/inpgrpradio";
import { ThemePagesStyles } from "@/radix/radixtheme";
import { SchemaService } from "@/codegen/schemaservice";
import { CodeGenTsMotor } from "@/codegen/kernel/cgtsmotor";
import { getTypeScriptArrayTableContent, getTypeScriptTableContent } from "@/app_server/xeferodb/tsclasses";
import { GcControlTsEntFilesOps } from "../module/gcmtsentfiles";
import { InputCheck } from "@/radix/input/inputcheck";
import { XCheckGroup } from "@/radix/input/inpgrpcheck";



/**
 * GenCodeControl
 */
interface CompProps {
    section?: string | null;
    ondataresult: (data: string) => void;
}
export function GenCodeControl({ section, ondataresult }: CompProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const ctrTsEntFilesOpsRef = useRef<GcControlTsEntFilesOps>(null);

    const [dbSquema, setDbSquema] = useState<string>(AppConstants.NOT_DEF);

    const [menuListTables, setMenuListTables] = useState<Option[]>([]);
    const [modelTables, setModelTables] = useState<ModelTable[]>([]);
    const [tableIndex, setTableIndex] = useState<number>(0);
    const [initialized, setInitialized] = useState<boolean>(false);

    const [operations, setOperations] = useState<Option[]>([]);
    const [operationId, setOperationId] = useState<string>(AppConstants.NOT_DEF);
    const operationsRef = useRef<HTMLSelectElement>(null);

    // UI
    const [includeDefs, setIncludeDefs] = useState<boolean>(false);
    const [showIncludeDefs, setShowIncludeDefs] = useState<boolean>(false);
    const [showRadioList, setShowRadioList] = useState<boolean>(true);
    const [showCheckList, setShowCheckList] = useState<boolean>(false);

    useEffect(() => {
        if (section == null) { return; }
        if (initialized) { return; }

        const init = async () => {
            if (section != null) {
                //step 1: load db schema from SessionStorage
                const db_squema = AppContext.readDbSquema();
                const db_modeltables: ModelTable[] = CodeGenSql.getEsquemaTables(db_squema);
                setDbSquema(db_squema);
                setModelTables(db_modeltables);
                setMenuListTables(SchemaService.getListTablesAsOptions(db_modeltables));

                ctrTsEntFilesOpsRef.current = new GcControlTsEntFilesOps(db_squema);

                //step 2: load operations for the selected section
                const listOperations: Option[] = CodeGenConfig.getSectionOperations(section!);
                setOperations(listOperations);
                setOperationId(listOperations[0].id);
                setInitialized(true);
            }
        };
        init();
    }, []);

    const onFileCharged = async (file: File, name?: string) => {
        if (file) { alert(file.name); }
    };//end

    const onSelectTable = (index: number, compname?: string) => {

        ShowAlerts.showCouple(compname!,index.toString());
        //setTableIndex(index);
    };//end

    const onParameterChange = (value: boolean, name?: string) => {
        if (name === "opt_includedef") {
            setIncludeDefs(value);
        }
    }

    const onOpSelected = async (operationId: string) => {
        if (section == ModuleConfig.SC_TS_ENTITY_FILES.id) {
            if (operationId == TsEntFilesOps.OP_GET_ALL_DEF_CLASS.id) {
                setShowIncludeDefs(false);
                setShowRadioList(false);
                setShowCheckList(false);
            }
            else if (operationId == TsEntFilesOps.OP_GET_ALL_ENT_CLASS.id) {
                setShowIncludeDefs(true);
                setShowRadioList(false);
                setShowCheckList(false);
            }
            else if (operationId == TsEntFilesOps.OP_GET_DEF_CLASS.id) {
                setShowIncludeDefs(false);
                setShowRadioList(true);
            }
            else if (operationId == TsEntFilesOps.OP_GET_ENT_CLASS.id) {
                setShowIncludeDefs(true);
                setShowRadioList(true);
            }
            else if (operationId == TsEntFilesOps.OP_GET_LIST_DEF_CLASS.id) {
                setShowIncludeDefs(false);
                setShowRadioList(false);
                setShowCheckList(true);
            }
            else if (operationId == TsEntFilesOps.OP_GET_LIST_ENT_CLASS.id) {
                setShowIncludeDefs(true);
                setShowRadioList(false);
                setShowCheckList(true);
            }
        }
        setOperationId(operationId);
    };//end

    const runOperation = async () => {
        const modelTableSel: ModelTable = modelTables[tableIndex];

        if (section == ModuleConfig.SC_TS_ENTITY_FILES.id) {
            ctrTsEntFilesOpsRef.current!.executeOperation(operationId);
        }

        /*else if(section==ModuleConfig.SC_JSON_ENTITY_FILES.id){
            if(operationId == JsonEntFilesOperations.OP_A.id){
            }
            else if(operationId == JsonEntFilesOperations.OP_B.id){
            }            
        }
        else if(section == ModuleConfig.SC_TSX_ENTITY_FORMS.id){   
            if(operationId == TsxEntFormsOperations.OP_A.id){
            }
            else if(operationId == TsxEntFormsOperations.OP_B.id){
            }                       
        }
        else if(section==ModuleConfig.SC_TS_SERVICES_FILES.id){           
            if(operationId == TsEntServiceFilesOperations.OP_A.id){
            }
            else if(operationId == TsEntServiceFilesOperations.OP_B.id){
            }             
        }
        else if(section==ModuleConfig.SC_PY_SERVICES_FILES.id){      
            if(operationId == PyEntServiceFilesOperations.OP_A.id){
            }
            else if(operationId == PyEntServiceFilesOperations.OP_B.id){
            }                   
        }
        else if(section==ModuleConfig.SC_DB_SQUEMA.id){
        }   
        */

    };//end

    const renderParamsContent = () => {
        return (
            <p>params</p>
        )
    }

    const renderMainContent = () => {
        return (
            <>
                {showRadioList ?
                    <XRadioGroup name="selectTable"
                        autocommit={true}
                        key={modelTables[tableIndex].name}
                        onselect={onSelectTable}
                        options={menuListTables}
                        value={modelTables[tableIndex].name}
                        direction="column" /> : null}
                {showCheckList ?
                    <XCheckGroup name="selectTables"
                        autocommit={true}
                        inline={false}
                        options={menuListTables}
                        onselect={onSelectTable} /> : null}
            </>
        );
    }//end renderMainContent

    const renderHeader = () => {
        return (
            <>
                <Box>
                    <InputSelect
                        key={operations[0].id}
                        inline={true}
                        name="operations"
                        label="Operation: "
                        ref={operationsRef}
                        collection={operations}
                        value={operationId ?? ""}
                        onchange={onOpSelected}
                        disabled={false} />
                </Box>
                <Box>
                    {showIncludeDefs ?
                        <InputCheck name="opt_includedef"
                            onchange={onParameterChange}
                            inline={true}
                            label="Include Def. Class"
                            value={false} /> : null}
                </Box>
                <Box>
                    <Button onClick={runOperation} color="green">
                        Run
                    </Button>
                </Box>
            </>
        );
    }//end  

    return (
        <Flex width="100%" direction="column" pt="2" style={ThemePagesStyles.GC_CONTROL_LAYOUT_STYLE} >

            <Flex width="100%" direction="row" pb="2" justify="between"  >
                {initialized ? renderHeader() : null}
            </Flex>

            <SeparatorH />

            {initialized ?
            <Flex width="100%" direction="row" pt="2"   >
                <Box width="30%" pb="2" >
                    {renderMainContent()}
                </Box>
                <Box width="70%" >
                    <SeparatorV />
                    {renderParamsContent()}
                </Box>
            </Flex>: null}

        </Flex>
    );

}//end InputEditor

/*
<SeparatorH />
<Box width={"100%"}>
    <InputFiles
        ref={fileInputRef}
        name="inputFileCode"
        formats=".sql,.json,.ts"
        multiple={false}
        onchange={onFileCharged} />
</Box>
*/

