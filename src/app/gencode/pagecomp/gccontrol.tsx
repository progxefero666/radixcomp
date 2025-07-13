//src\app\gencode\panelinput.tsx
"use client";

import { useState, useEffect, useRef } from "react";

import { TOption } from "@/radix/radixtypes";

import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";
import { ThemePagesStyles } from "@/radix/radixtheme";
import { SeparatorH } from "@/radix/container/separatorh";
import { AppMemmory } from "@/front/appmemory";
import { XCheckGroup } from "@/radix/input/inpgrpcheck";
import { ServClientEntities } from "../gcmodentities";
import { Label } from "@radix-ui/react-context-menu";
import { AppConfig } from "@/app/index/appconfig";
import { CardDatabase } from "@/app/db/cards/carddatabase";
import { CodeGenJson } from "@/codegen/kernel/cgjsonmotor";
import { XSelect } from "@/radix/keyvalue/inpselect";
import { CodeGenSquema } from "@/codegen/model/cgschema";
import { CodeGenOperations } from "@/codegen/cgoperations";
import { ModelTable } from "@/codegen/kernel/cgmodel";
import { CodeGenConfig } from "@/codegen/cgconfig";


//---------------------------------------------------------------------------------------
/**
 * GenCode Main Control Panel.
 * const fileInputRef = useRef<HTMLInputElement>(null);
 */
//---------------------------------------------------------------------------------------
interface CompProps {
    section?: string | null;
    ondataresult: (data: string) => void;
}
export function GenCodeControl({ section, ondataresult }: CompProps) {

    const [initialized, setInitialized] = useState<boolean>(false);
    const [format, setFormat] = useState<string>(CodeGenConfig.CODE_FORMATS[0].key);

    const dbSquemaControl = useRef<CodeGenSquema | null>(null);
    const clientTScriptEntities = useRef<ServClientEntities>(null);
    const [operationId, setOperationId] = useState<string>("undefined");
    const [showRadioList, setShowRadioList] = useState<boolean>(true);
    const [showCheckList, setShowCheckList] = useState<boolean>(false);

  
    useEffect(() => {
        if (section == null) { return; }
        if (initialized) { return; }
        dbSquemaControl.current = new CodeGenSquema(AppMemmory.readDbSquema());
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

    const onOpSelected = (operationId: string) => {
        if (operationId == "get_def_class" ||
            operationId == "get_entity_class") {
            setShowRadioList(true);
            setShowCheckList(false);    
        }
        else if (operationId == "get_list_def_class" ||
                 operationId == "get_list_entity_class") {
            setShowRadioList(false);
            setShowCheckList(true);            
        }
        else {
            setShowRadioList(false);
            setShowCheckList(false);
        }
        setOperationId(operationId);
    };//end

    const runOperation = async () => {

        let codecont: string | null = null;

        if (format === "typescript") {
            if (operationId === "get_def_class" || operationId === "get_entity_class") {
                codecont = await clientTScriptEntities.current!
                    .execItemTsOperation(operationId,dbSquemaControl.current!.activeTableName);                
            }
            else {
                codecont = await clientTScriptEntities.current!
                    .execArrayTsOperation(operationId,dbSquemaControl.current!.toptions);                     
            }
        }

        else if (format === "json") {
           
            if (operationId === "get_def_class" || operationId === "get_entity_class") {
                const selTable:ModelTable=dbSquemaControl.current!.getActiveTable()!;
                codecont = await clientTScriptEntities
                    .current!.execItemJsonOperation(operationId,selTable);    
            }
            else if (operationId === "get_list_def_class" || operationId === "get_list_entity_class"){
                const select_tables:  ModelTable[] = [];
                codecont = await clientTScriptEntities
                    .current!.execArrayJsonOperation(operationId,select_tables);    
            }
            else if (operationId === "get_all_def_class" || operationId === "get_all_entity_class"){
                codecont = await clientTScriptEntities
                    .current!.execArrayJsonOperation(operationId,dbSquemaControl.current!.tables);    
            }
        }

        if(codecont !== null) {ondataresult(codecont);}

    };//end


    const renderHeader = () => {
        return (
            <Flex width="100%" direction="row" justify="between" mt="2" pb="2" align="center" >
                <Flex width="100%" direction="row" gapX="2"  >
                    <Box>
                        <XSelect label="Operations:" 
                                collection={CodeGenOperations.OPS_ENTITIES}
                                onchange={onOpSelected} />
                    </Box>
                    <Box>
                        <XSelect label="Format:" collection={CodeGenConfig.CODE_FORMATS}
                            onchange={onSelectCodeFormat} />                    
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