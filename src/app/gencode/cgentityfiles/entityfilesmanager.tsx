//src\app\gencode\panelinput.tsx
"use client";

import { useState, useEffect, useRef } from "react";

import { Box, Grid, Flex, Text, Button, } from "@radix-ui/themes";
import { ThemePagesStyles } from "@/radix/radixtheme";
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
import { CodeGenSql } from "@/codegen/kernel/cgsqlmotor";

import { jsonTemplate, XFormsGenerator } from "@/codegen/forms/cgforms";



//---------------------------------------------------------------------------------------
/**
 * GenCode Main Control Panel.
 * const fileInputRef = useRef<HTMLInputElement>(null);
 */
//---------------------------------------------------------------------------------------
interface CompProps {
    section?: string | null;
    onsingleresult: (filecode: FileCode) => void;
    onmultipleresult: (filescode: FileCode[]) => void;
}
export function GenCodeControl({ section, onsingleresult, onmultipleresult }: CompProps) {

    const [initialized, setInitialized] = useState<boolean>(false);

    const dbSquemaControl = useRef<CodeGenSquema | null>(null);
    const clientTScriptEntities = useRef<ServClientEntities>(null);
    const [jsonTables, setJsonTables] = useState<string[]>([]);

    const [format, setFormat] = useState<string>(DocFormats.FORMAT_JSON.key);
    const [optMultDisabled, setOptMultDisabled] = useState<boolean>(false);
    const [operationId, setOperationId] = useState<string>("undefined");
    const [showRadioList, setShowRadioList] = useState<boolean>(true);
    const [showCheckList, setShowCheckList] = useState<boolean>(false);

    useEffect(() => {
        if (initialized) { return; }

        const dbSquema = AppMemmory.readDbSquema();
        setJsonTables(CodeGenJson.getAllJsonTables(dbSquema));
        //const tables = CodeGenSql.getEsquemaTables(dbSquema);     
        dbSquemaControl.current = new CodeGenSquema(dbSquema);
        clientTScriptEntities.current = new ServClientEntities(dbSquemaControl.current.squema);
        onOpSelected("get_def_class");
        setInitialized(true);
    }, []);

    const onSelectCodeFormat = (formatKey: string, compName?: string) => {
        setFormat(formatKey);
    };//end

    const onSelectTable = (tableName: string, compName?: string) => {
        dbSquemaControl.current?.setActiveTable(tableName);
    };//end

    const onOptMultipleChange = (value: boolean, compName?: string) => {
        setOptMultDisabled(value);
    };//end

    const onOpSelected = (operationId: string) => {
        if (operationId == "get_def_class" ||
            operationId == "get_entity_class") {
            setShowRadioList(true);
            setShowCheckList(false);
            setOptMultDisabled(true);
        }
        else if (operationId == "get_list_def_class" ||
            operationId == "get_list_entity_class") {
            setShowRadioList(false);
            setShowCheckList(true);
            setOptMultDisabled(false);
        }
        else {
            setShowRadioList(false);
            setShowCheckList(false);
            setOptMultDisabled(false);
        }
        setOperationId(operationId);
    };//end


    const runOperationTest = () => {

        const codecont: string = XFormsGenerator.generateForm(jsonTemplate);
        onsingleresult(CgFileFunctions.getTypeScriptFileCode("xform", codecont!));
    };//end

    const runOperation = async () => {
        
        if (format === DocFormats.FORMAT_TYPESCRIPT.key) {
            runTypeScriptOperation();
        }
        else if (format === DocFormats.FORMAT_JSON.key ) {
            runJsonOperation();
        }
        else if (format === DocFormats.FORMAT_SQL.key ) {}
        else if (format === DocFormats.FORMAT_JSX.key ) {}        
        else if (format === DocFormats.FORMAT_PYTHON.key ) {}       
        else if (format === DocFormats.FORMAT_MARKDOWN.key ) {}  
    
    };//end

    const runTypeScriptOperation = async () => {

        // for single entity file
        //...............................................................................
        if (operationId === CgEntityOperations.OP_DEF_CLASS ||
            operationId === CgEntityOperations.OP_ENTITY_CLASS) {
            let codecont: string | null = null;
            codecont = await clientTScriptEntities.current!
                .execItemTsOperation(operationId, dbSquemaControl.current!.activeTableName);
            const filecode: FileCode = CgFileFunctions
                .getTypeScriptFileCode(dbSquemaControl.current!.activeTableName, codecont!);

            if (codecont !== null) { onsingleresult(filecode); }
        }
        else {
            // for multiple entities files
            //...............................................................................
            if (!optMultDisabled) {
                let listCode: string[] | null = null;
                let filescode: FileCode[] = [];

                if (operationId === CgEntityOperations.OP_LIST_DEF_CLASS ||
                    operationId === CgEntityOperations.OP_LIST_ENTITY_CLASS) {
                    listCode = await clientTScriptEntities.current!
                        .execMultipleTsOperation(operationId, dbSquemaControl.current!.toptions);

                    const tableIds: string[] = CollectionHelper
                        .getTOptionsNames(dbSquemaControl.current!.toptions);

                    if (listCode != null) {
                        filescode = CgFileFunctions.getTypeScriptArrayFilesCode(tableIds, listCode);
                    }
                }
                else if (operationId === CgEntityOperations.OP_ALL_DEF_CLASS ||
                    operationId === CgEntityOperations.OP_ALL_ENTITY_CLASS) {
                    const tableIds: string[] = CollectionHelper
                        .getKeyvaluesIds(dbSquemaControl.current!.tcollection);
                    if (listCode != null) {
                        filescode = CgFileFunctions.getTypeScriptArrayFilesCode(tableIds, listCode);
                    }
                }
                if (listCode != null) { onmultipleresult(filescode); }
            }
            // for multiple single file
            //...............................................................................            
            else {
                let codecont = await clientTScriptEntities
                    .current!.execAllListTsOperation(operationId);
                if (codecont !== null) {
                    onsingleresult(CgFileFunctions.getTypeScriptFileCode("list_tables", codecont!));
                }
            }
        }

    };//end

    const runJsonOperation = async () => {

        // for single file
        //...............................................................................
        if (operationId === CgEntityOperations.OP_DEF_CLASS) {
            onsingleresult(CgFileFunctions.getJsonFileCode(
                dbSquemaControl.current!.activeTableName,
                dbSquemaControl.current!.getActiveJson()));
            return;
        }//end if

        // for multiple file
        //...............................................................................
        if (!optMultDisabled) {
            let filesCode: FileCode[] = [];
            if (operationId === CgEntityOperations.OP_LIST_DEF_CLASS) {
                filesCode = CgFileFunctions.getJsonArrayFilesCode(
                    CollectionHelper.getTOptionsNames(dbSquemaControl.current!.toptions),
                    dbSquemaControl.current!.getSelectedJsonTables());
            }
            else {
                filesCode = CgFileFunctions.getJsonArrayFilesCode(
                    CollectionHelper.getKeyvaluesIds(dbSquemaControl.current!.tcollection),
                    dbSquemaControl.current!.jsontables);
            }
            onmultipleresult(filesCode);
        }//end if

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
                        <XSelect label="Format:" collection={DocFormats.LIST_FORMATS}
                            onchange={onSelectCodeFormat} />
                    </Box>
                    <Box pt="1">
                        <XInputCheck label="Multiple files"
                            inline={true}
                            value={false}
                            name="option_multiple"
                            onchange={onOptMultipleChange} />
                    </Box>
                </Flex>
                <Button onClick={runOperation} color="green">
                    Run
                </Button>
            </Flex>
        );
    };//end

    const renderMainContent = () => {
        return (
            <Flex width="100%" direction="column" py="2" >
                <Flex width="100%" direction="row" pt="2" >
                    <Box mr="2"><Label>Tables:</Label></Box>
                    {showRadioList ?
                        <XSelect collection={dbSquemaControl.current!.tcollection}
                            onchange={onSelectTable} /> : null}
                    {showCheckList ?
                        <XCheckGroup name="selectTables"
                            autocommit={true}
                            inline={true}
                            collection={dbSquemaControl.current!.toptions}
                            onselect={dbSquemaControl.current!.selectTables} /> : null}
                </Flex>
            </Flex>
        );
    };//end

    return (
        <Flex width="100%" direction="column" pt="2" style={ThemePagesStyles.GC_CONTROL_LAYOUT_STYLE} >
            {initialized ?
                <>
                    <CardDatabase initsquemapath={AppConfig.DBSQUEMA_FPATH} />
                    <SeparatorH />
                    {renderHeader()}
                    <SeparatorH />
                    {renderMainContent()}
                    <SeparatorH />
                </>
                : null}
        </Flex>
    );

};//end component