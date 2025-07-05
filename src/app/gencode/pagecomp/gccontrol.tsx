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
import { XInputSelect } from "@/radix/input/inpselect";
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

import { ThemePagesStyles } from "@/radix/radixtheme";
import { SchemaService } from "@/codegen/schemaservice";

import { ServClientTScriptEntities } from "../module/client_tscriptentities";
import { InputCheck } from "@/radix/input/inputcheck";
import { XCheckGroup } from "@/radix/input/inpgrpcheck";

import { TOption } from "@/common/types";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { ServiceClientJson } from "../module/client_json";
import { ServiceClientJsxForms } from "../module/client_jsxforms";
import { ServiceClientSqlScripts } from "../module/client_sqlscripts";
import { ServClientTScriptServices } from "../module/client_tscriptservices";
import { XPopOver } from "@/radix/container/popover";
import { ModelHelper } from "@/common/util/modelhelper";


function getSectionOperations(sectionName: string): Option[] {

    if (sectionName === ServClientTScriptEntities.ID) {
        return TsEntFilesOps.Operations;
    }
    else if (sectionName === ServiceClientJsxForms.ID) {
        return TsxEntFormsOps.Operations;
    }
    else if (sectionName === ServClientTScriptServices.ID) {
        return TsEntServiceFilesOps.Operations;
    }
    else if (sectionName === ServiceClientJson.ID) {
        return JsonEntFilesOps.Operations;
    }
    else if (sectionName === ServiceClientSqlScripts.ID) {
        return JsonEntFilesOps.Operations;
    }
    /*
    else if (sectionName === OP_CATEGORIES.python_serverfiles) {
        return PyEntServiceFilesOps.Operations;
    }
    else if (sectionName === OP_CATEGORIES.sql_db_squema) {
        return ControlDatabase.Operations;
    }  
    */
    alert("not found");
    return [];
}

/**
 * GenCodeControl
 */
interface CompProps {
    section?: string | null;
    ondataresult: (data: string) => void;
}
export function GenCodeControl({ section, ondataresult }: CompProps) {

    //const fileInputRef = useRef<HTMLInputElement>(null);
    const [initialized, setInitialized] = useState<boolean>(false);

    // list tables
    const [menuListTables, setMenuListTables] = useState<TOption[]>([]);   
    const selTableName = useRef<string | null>(null);
    const selGroupTableNames = useRef<TOption[]|null>(null);
    const modelsTableOptions = useRef<Option[]>([]);    

    // operations list
    const [operations, setOperations] = useState<Option[]>([]);
    const [operationId, setOperationId] = useState<string>(AppConstants.NOT_DEF);
    const operationsRef = useRef<HTMLSelectElement>(null);

    // service clients
    const clientTScriptEntities = useRef<ServClientTScriptEntities>(null);
    const clientTScriptServices = useRef<ServClientTScriptServices>(null);
    const clientJsxForms = useRef<ServiceClientJsxForms>(null);
    const clientJson = useRef<ServiceClientJson>(null);

    // UI
    const [includeDefs, setIncludeDefs] = useState<boolean>(false);
    const [showIncludeDefs, setShowIncludeDefs] = useState<boolean>(false);
    const [showRadioList, setShowRadioList] = useState<boolean>(true);
    const [showCheckList, setShowCheckList] = useState<boolean>(false);

    const init = () => {
        if (section == null) {return;}
      
        //load modeltables
        const db_squema = AppContext.readDbSquema();
        const db_modeltables: ModelTable[] = CodeGenSql.getEsquemaTables(db_squema);
        setMenuListTables(SchemaService.getListTablesAsTOptions(db_modeltables));

        //set basic selections
        modelsTableOptions.current = CodeGenHelper.getModelsTableOptions(db_modeltables);
        selTableName.current = db_modeltables[0].name;

        //active service clients
        clientTScriptEntities.current = new ServClientTScriptEntities(db_squema);
        clientTScriptServices.current = new ServClientTScriptServices(db_squema);
        clientJsxForms.current = new ServiceClientJsxForms(db_squema);
        clientJson.current = new ServiceClientJson(db_squema);

        //load operations for the selected service
        const listOperations: Option[] = getSectionOperations(section!);
        setOperations(listOperations);
        onOpSelected(listOperations[0].id);
        setInitialized(true);       
    };

    useEffect(() => {
        if (section == null) { return; }
        if (initialized) { return; }
        init();
    }, []);

    const onSelectTable = (tableName: string, compName?: string) => {
        selTableName.current = tableName;
    }

    const onSelectTables = (selecction:TOption[]) => {       
        selGroupTableNames.current =  selecction;
    };//end

    const onParameterChange = (value: boolean, name?: string) => {
        if (name === "opt_includedef") {
            setIncludeDefs(value);
        }
    }

    const onOpSelected = (operationId: string) => {
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
                setShowCheckList(false);
            }
            else if (operationId == TsEntFilesOps.OP_GET_ENT_CLASS.id) {
                setShowIncludeDefs(true);
                setShowRadioList(true);
                setShowCheckList(false);
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

        if (section == ModuleConfig.SC_TS_ENTITY_FILES.id) {
            const codecont: string | null = await clientTScriptEntities.current!.executeOperation(
                operationId,
                selTableName.current,
                selGroupTableNames.current);
            ondataresult(codecont!);
        }
        else if (section === ModuleConfig.SC_TSX_ENTITY_FORMS.id) {

        }
        else if (section === ModuleConfig.SC_JSON_ENTITY_FILES.id) { }
        else if (section === ModuleConfig.SC_TS_SERVICES_FILES.id) { }
        else if (section === ModuleConfig.SC_SQL_SCRIPTS.id) { }
    };//end

    const renderParamsContent = () => {
        return (
            <p>params</p>
        )
    }

    const renderHeader = () => {
        return (
            <>
                <Box>
                    <XInputSelect
                        key={operations[0].id}                
                        name="operations"
                        label="Operation: "
                        ref={operationsRef}
                        collection={operations}
                        default={operationId ?? ""}
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

    const renderMainContent = () => {
        return (
            <Flex width="100%" direction="column"  >
                {showRadioList ?
                    <XInputSelect name="selectTable"                    
                        autocommit={true}
                        collection={modelsTableOptions.current}
                        default={modelsTableOptions.current[0].id}
                        onchange={onSelectTable} /> : null}
                {showCheckList ?
                    <XPopOver text="select">
                        <XCheckGroup 
                            name="selectTables"
                            autocommit={true}
                            inline={false}
                            options={menuListTables}
                            onselect={onSelectTables} />
                    </XPopOver> : null}
            </Flex>
        );
    }//end renderMainContent


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
                </Flex> : null}

        </Flex>
    );

}//end component


/*
    //const [dbSquema, setDbSquema] = useState<string>(AppConstants.NOT_DEF);
    //const [modelTables, setModelTables] = useState<ModelTable[]>([]);
    const onFileCharged = async (file: File, name?: string) => {
        if (file) { alert(file.name); }
    };//end

    <InputFiles
        ref={fileInputRef}
        name="inputFileCode"
        formats=".sql,.json,.ts"
        multiple={false}
        onchange={onFileCharged} />

*/

