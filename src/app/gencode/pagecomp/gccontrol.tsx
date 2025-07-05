//src\app\gencode\panelinput.tsx
"use client";

import { useState, useEffect, useRef } from "react";

import { TOption } from "@/common/types";
import { Option } from "@/common/model/option";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";


import { SeparatorH } from "@/radix/container/separatorh";
import { SeparatorV } from "@/radix/container/separatorv";
import { ModelTable } from "@/codegen/kernel/cgmodel";
import { CodeGenSql } from "@/codegen/kernel/cgsqlmotor";
import { GenCodeModuleConfig } from "@/app/gencode/config";
import { XInputSelect } from "@/radix/input/inpselect";

import { AppConstants } from "@/app_front/appconstants";
import { AppContext } from "@/app_front/appcontext";
import { ThemePagesStyles } from "@/radix/radixtheme";
import { XPopOver } from "@/radix/container/popover";
import { InputCheck } from "@/radix/input/inputcheck";
import { XCheckGroup } from "@/radix/input/inpgrpcheck";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { SchemaService } from "@/codegen/schemaservice";
import { TsEntFilesOps } from "@/codegen/operations/tsentfilesops";
import { ServClientTScriptEntities } from "../module/client_tscriptentities";
import { ServiceClientJson } from "../module/client_json";
import { ServiceClientJsxForms } from "../module/client_jsxforms";
import { ServClientTScriptServices } from "../module/client_tscriptservices";
import { JSonConsole, JsonHelper } from "@/common/util/jsonhelper";
import { ShowAlerts } from "@/common/util/showalerts";
import ContCollapsible from "@/radix/container/collapsible";
import { BarButtonsCfg } from "@/common/modelui/barbuttonscfg";
import { BARCFG_EXPORT } from "@/app_front/ui/appbars";
import { Label } from "@radix-ui/react-context-menu";
import { AppConfig } from "@/app_front/appconfig";
//import { SchemaService } from "@/client/metadata/schemaservice";



/**
 * GenCode Main Control
 */
interface CompProps {
    section?: string | null;
    ondataresult: (data: string) => void;
}
export function GenCodeControl({ section, ondataresult }: CompProps) {

    const [squemaPath, setSquemaPath] = useState<string>(AppConfig.DBSQUEMA_FPATH);

    //const fileInputRef = useRef<HTMLInputElement>(null);
    const [initialized, setInitialized] = useState<boolean>(false);

    // list tables
    const [menuListTables, setMenuListTables] = useState<TOption[]>([]);
    const selTableName = useRef<string | null>(null);
    const selGroupTableNames = useRef<TOption[] | null>(null);
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
        if (section == null) { return; }

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
        const listOperations: Option[] = GenCodeModuleConfig.getServCliOperations(section!);
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
    };

    const onSelectTables = (selecction: TOption[]) => {
        selGroupTableNames.current = selecction;
    };//end

    const onParameterChange = (value: boolean, name?: string) => {
        if (name === "opt_includedef") {
            setIncludeDefs(value);
        }
    };

    const onOpSelected = (operationId: string) => {
        if (section == GenCodeModuleConfig.CLIENT_TS_ENTITY_FILES.id) {
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

        if (section == GenCodeModuleConfig.CLIENT_TS_ENTITY_FILES.id) {
            const codecont: string | null = await clientTScriptEntities.current!.executeOperation(
                operationId,
                selTableName.current,
                selGroupTableNames.current);
            ondataresult(codecont!);
        }
        else if (section === GenCodeModuleConfig.CLIENT_JSX_FORMS.id) {

        }
        else if (section === GenCodeModuleConfig.CLIENT_JSON.id) { }
        else if (section === GenCodeModuleConfig.CLIENT_TS_SERVICES.id) { }
        else if (section === GenCodeModuleConfig.CLIENT_SQL_SCRIPTS.id) { }
    };//end

    const renderParamsContent = () => {
        return (
            <Box>
                {showIncludeDefs ?
                    <InputCheck name="opt_includedef"
                        onchange={onParameterChange}
                        inline={true}
                        label="Include Def. Class"
                        value={false} /> : null}
            </Box>
        )
    };

    const renderHeader = () => {
        return (
            <Flex width="100%" direction="row" justify="between" mt="2" pb="2" align="center" >
                <XInputSelect
                    inline={true}
                    label="Operation: "
                    collection={operations}
                    default={operationId}
                    onchange={onOpSelected}
                    disabled={false} />
                <Button onClick={runOperation} color="green">
                    Run
                </Button>
            </Flex>
        );
    };//end  

    const renderMainContent = () => {
        return (
            <Flex width="100%" direction="column" py="2" >
                <Flex width="100%" direction="row"  >
                    <Box mr="2">
                        <Label>Select Tables: </Label>
                    </Box>
                    {showRadioList ?
                        <XInputSelect name="selectTable"
                            inline={true}
                            autocommit={true}
                            collection={modelsTableOptions.current}
                            default={modelsTableOptions.current[0].id}
                            onchange={onSelectTable} /> : null}
                    {showCheckList ?
                        <Box mr="2">
                            <XPopOver text="select">
                                <XCheckGroup
                                    name="selectTables"
                                    autocommit={true}
                                    inline={true}
                                    collection={menuListTables}
                                    onselect={onSelectTables} />
                            </XPopOver>
                        </Box> : null}
                </Flex>
            </Flex>
        );
    };//end renderMainContent


    const renderDbPanel = () => {
        const barbuttonscfg: BarButtonsCfg = BARCFG_EXPORT;
        return (
            <ContCollapsible title="Database Config." >
                <Flex width="100%" direction="column" pt="2" pl="2">
                    <Text size="3" >
                        <Flex width="100%" direction="row" justify="between" gapY="1">
                            <Box>
                                <Label>Database Schema: </Label>
                            </Box>
                            <Box>
                                <Button color="blue" >
                                    upload
                                </Button>
                            </Box>
                        </Flex>
                        <SeparatorH />
                        <Flex width="100%" direction="row" mt="2" >
                            {squemaPath}
                        </Flex>
                    </Text>

                    <Box width="100%" >
                    </Box>
                </Flex>
            </ContCollapsible>
        )
    };

    const renderSelection = () => {
        return (
            <Box>
                <p>as</p>
            </Box>
        )
    };


    const renderInputPanel = () => {
        return (
            <Box>
                <p>as</p>
            </Box>
        )
    };

    return (
        <Flex width="100%" direction="column" pt="2" style={ThemePagesStyles.GC_CONTROL_LAYOUT_STYLE} >
            {initialized ? 
                <>
                    renderDbPanel()
                    <SeparatorH /> 
                    renderHeader() 
                    <SeparatorH />
                    renderMainContent()
                    <SeparatorH />     
                    renderSelection()       
                </>
                : null}
        </Flex>
    );

}//end component


/*
    <InputFiles
        ref={fileInputRef}
        name="inputFileCode"
        formats=".sql,.json,.ts"
        multiple={false}
        onchange={onFileCharged} />

*/

