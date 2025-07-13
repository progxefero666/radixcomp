//src\app\gencode\panelinput.tsx
"use client";

import { useState, useEffect, useRef } from "react";

import { TOption } from "@/radix/radixtypes";
import { Option } from "@/common/model/option";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";
import { ThemePagesStyles } from "@/radix/radixtheme";


import { ModelTable } from "@/codegen/kernel/cgmodel";
import { CodeGenSql } from "@/codegen/kernel/cgsqlmotor";
import { GenCodeModuleConfig } from "@/app/gencode/config";
import { XInputSelect } from "@/radix/input/inpselect";
import { SeparatorH } from "@/radix/container/separatorh";

import { AppMemmory } from "@/front/appmemory";
import { PopupBase } from "@/radix/container/popupbase";

import { XCheckGroup } from "@/radix/input/inpgrpcheck";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { SchemaService } from "@/codegen/schemaservice";
import { TsEntFilesOps } from "@/codegen/operations/tsentfilesops";
import { ServClientTScriptEntities } from "../module/client_tscriptentities";


import { Label } from "@radix-ui/react-context-menu";
import { AppConfig } from "@/app/index/appconfig";
import { CardDatabase } from "@/app/db/cards/carddatabase";
import { CodeGenJson } from "@/codegen/kernel/cgjsonmotor";
import { XSelect } from "@/radix/keyvalue/inpselect";
import { CodeGenConfig } from "@/codegen/cgconfig";
import { CodeGenSquema } from "@/codegen/model/cgschema";
import { CodeGenOperations } from "@/codegen/cgoperations";

//import { SchemaService } from "@/client/metadata/schemaservice";


//---------------------------------------------------------------------------------------
/**
 * GenCode Main Control Panel.
 * 
 */
//---------------------------------------------------------------------------------------
interface CompProps {
    section?: string | null;
    ondataresult: (data: string) => void;
}
export function GenCodeControl({ section, ondataresult }: CompProps) {

    const [squemaPath, setSquemaPath] = useState<string>(AppConfig.DBSQUEMA_FPATH);

    //const fileInputRef = useRef<HTMLInputElement>(null);
    const [initialized, setInitialized] = useState<boolean>(false);

    const [format,setFormat] = useState<string>(CodeGenOperations.CODE_FORMATS[0].key);

    //db squema       
    const dbSquema = useRef<CodeGenSquema|null>(null);
    const selTableName = useRef<string | null>(null);
    const selGroupTableNames = useRef<TOption[] | null>(null);
    
    // operations list
    //const [operations, setOperations] = useState<Option[]>([]);
    const [operationId, setOperationId] = useState<string>("undefined");

    // service clients
    const clientTScriptEntities = useRef<ServClientTScriptEntities>(null);


    // UI
    const [showIncludeDefs, setShowIncludeDefs] = useState<boolean>(false);
    const [showRadioList, setShowRadioList] = useState<boolean>(true);
    const [showCheckList, setShowCheckList] = useState<boolean>(false);

    const init = () => {
        if (section == null) { return; }

        dbSquema.current = new CodeGenSquema(AppMemmory.readDbSquema());
        selTableName.current = dbSquema.current.tables[0].name;

        //active service clients
        clientTScriptEntities.current = new ServClientTScriptEntities(dbSquema.current.squema);


        //load operations for the selected service
        //const listOperations: Option[] = GenCodeModuleConfig.getServCliOperations(section!);
        //(listOperations);
        //onOpSelected(listOperations[0].id);
        setInitialized(true);
    };//end

    useEffect(() => {
        if (section == null) { return; }
        if (initialized) { return; }
        init();
    }, []);


    const onSelectCodeFormat = (formatKey:string,compName?: string) => {
        setFormat(formatKey);
    };//end

    const onSelectTable = (tableName: string, compName?: string) => {
        selTableName.current = tableName;
    };//end

    const onSelectTables = (selecction: TOption[]) => {
        selGroupTableNames.current = selecction;
    };//end

    const onOpSelected = (operationId: string) => {

        if (section == GenCodeModuleConfig.CLIENT_ENTITY_FILES.id) {

            if (operationId == "get_all_def_class") {
                setShowIncludeDefs(false);
                setShowRadioList(false);
                setShowCheckList(false);
            }
            else if (operationId == "get_all_entity_class") {
                setShowIncludeDefs(true);
                setShowRadioList(false);
                setShowCheckList(false);
            }
            else if (operationId == "get_def_class") {
                setShowIncludeDefs(false);
                setShowRadioList(true);
                setShowCheckList(false);
            }
            else if (operationId == "get_entity_class") {
                setShowIncludeDefs(true);
                setShowRadioList(true);
                setShowCheckList(false);
            }
            else if (operationId == "get_list_def_class") {
                setShowIncludeDefs(false);
                setShowRadioList(false);
                setShowCheckList(true);
            }
            else if (operationId == "get_list_entity_class") {
                setShowIncludeDefs(true);
                setShowRadioList(false);
                setShowCheckList(true);
            }
        }
        setOperationId(operationId);
    };//end

    const runOperation = async () => {

        if (section == GenCodeModuleConfig.CLIENT_ENTITY_FILES.id) {
            if(format === "typescript") {
                const codecont: string | null = await clientTScriptEntities.current!.executeOperation(
                    operationId,
                    selTableName.current,
                    selGroupTableNames.current);
                ondataresult(codecont!);
            }
            else if(format === "json") {
                const tableIndex: number = dbSquema.current!.getTableIndex(selTableName.current!);
                const code:string= CodeGenJson.getJsonEntDef(dbSquema.current!.tables[tableIndex]);
                ondataresult(code!);
            }
        }
        else if (section === GenCodeModuleConfig.CLIENT_JSX_FORMS.id) {}
        else if (section === GenCodeModuleConfig.CLIENT_TS_SERVICES.id) { }
        else if (section === GenCodeModuleConfig.CLIENT_SQL_SCRIPTS.id) { }
        
    };//end


    const renderHeader = () => {
        return (
            <Flex width="100%" direction="row" justify="between" mt="2" pb="2" align="center" >
                <XSelect label="Format:" collection={CodeGenOperations.OPS_ENTITIES} 
                         onchange={onOpSelected}/>                
                <Button onClick={runOperation} color="green">
                    Run
                </Button>
            </Flex>
        );
    };//end
    
    const renderMainContent = () => {
        return (
            <Flex width="100%" direction="column" py="2" >
        
                <Flex width="100%" direction="row" pb="2" >
                    <XSelect label="Format:" collection={CodeGenOperations.CODE_FORMATS} 
                             onchange={onSelectTable}/>
                </Flex>
                
                <SeparatorH />

                <Flex width="100%" direction="row" pt="2"  >

                    <Box mr="2"><Label>Tables:</Label></Box>

                    {showRadioList ?
                    <XSelect collection={dbSquema.current!.tcollection}
                             onchange={onSelectCodeFormat}/>: null}

                    {showCheckList ?
                        <Box mr="2">
                            <PopupBase label="select">
                                <XCheckGroup
                                    name="selectTables"
                                    autocommit={true}
                                    inline={true}
                                    collection={dbSquema.current!.toptions}
                                    onselect={onSelectTables} />
                            </PopupBase>
                        </Box> : null}
                </Flex>
            </Flex>
        );
    };//end

    return (
        <Flex width="100%" direction="column" pt="2" style={ThemePagesStyles.GC_CONTROL_LAYOUT_STYLE} >
            {initialized ? 
                <>
                    <CardDatabase squemaPath={squemaPath}  />
                    <SeparatorH /> 
                    {renderHeader()} 
                    <SeparatorH />
                    {renderMainContent()}
                    <SeparatorH />           
                </>
                : null}
        </Flex>
    );

}//end component


/*
    //const [includeDefs, setIncludeDefs] = useState<boolean>(false);
    const onParameterChange = (value: boolean, name?: string) => {
        if (name === "opt_includedef") {
            setIncludeDefs(value);
        }
    };//end

    const renderParamsContent = () => {
        return (
            <Box>
                {showIncludeDefs ?
                    <XInputCheck name="opt_includedef"
                        onchange={onParameterChange}
                        inline={true}
                        label="Include Def. Class"
                        value={false} /> : null}
            </Box>
        )
    };//end
*/