//src\app\gencode\panelinput.tsx
"use client";

import { useState, useEffect, useRef } from "react";

import { Option } from "@/common/model/option";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";
import { SchemaService } from "@/client/metadata/schemaservice";

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

import { TsEntFilesOperations } from "@/codegen/operations/tsentfilesops";
import { JsonEntFilesOperations } from "@/codegen/operations/jsonentfilesops";
import { PyEntServiceFilesOperations } from "@/codegen/operations/pyentservicefilesops";
import { TsxEntFormsOperations } from "@/codegen/operations/tsxentformsops";
import { TsEntServiceFilesOperations } from "@/codegen/operations/tsentservicefilesops";
import { AppConstants } from "@/app_front/appconstants";
import { AppContext } from "@/app_front/appcontext";
import { JSonConsole, JsonHelper } from "@/common/util/jsonhelper";

import { ShowAlerts } from "@/common/util/showalerts";
import { XRadioGroup } from "@/radix/input/inpgrpradio";
import { ThemePagesStyles } from "@/radix/radixtheme";

 

/**
 * GenCodeControl
 */
interface CompProps {
    section?: string |null;
    ondataresult: (data: string) => void;
}
export function GenCodeControl({ section, ondataresult }: CompProps) {

    const [operations, setOperations] = useState<Option[]>([]);
    const [operationId, setOperationId] = useState<string>(AppConstants.NOT_DEF);

    const [menuListTables, setMenuListTables] = useState<Option[]>([]);
    const [modelTables, setModelTables] = useState<ModelTable[]>([]);
    const [tableIndex,setTableIndex] = useState<number>(0);
    const [initialized, setInitialized] = useState<boolean>(false);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const operationsRef = useRef<HTMLSelectElement>(null);
    
    useEffect(() => {
        if(section==null) { return; }
        if(initialized) { return; }

        const init = async () => {
            if(section!=null){

                //load model tables and tables menu
                const db_squema = AppContext.readDbSquema();
                const db_modeltables: ModelTable[] = CodeGenSql.getEsquemaTables(db_squema); 
                setModelTables(db_modeltables);
                setMenuListTables(SchemaService.getListTablesAsOptions(db_modeltables));

                //load section operations
                const listOperations: Option[] = CodeGenConfig.getSectionOperations(section!);
                JSonConsole.logArray(listOperations);
                setOperations(listOperations);
                setOperationId(listOperations[0].id);

                //initialize
                setInitialized(true);
            }                       
        };
        init();
    }, []);

    const onFileCharged = async (file: File, name?: string) => {
        if (file) {
            //alert(file.name);
        }
    };//end

    const onSelectTable = (index:number,compname?:string) => {
        setTableIndex(index);
    };//end

    const onOpSelected = async (operationId: string) => {
        //alert(operationId);
        setOperationId(operationId);
    };//end

    const runOperation = () => {        
        alert(section);
        //alert(operationId);

        if(section==ModuleConfig.SC_TS_ENTITY_FILES.id){
            if(operationId == TsEntFilesOperations.OP_GET_DEF_CLASS.id){               
            }
            else if(operationId == TsEntFilesOperations.OP_GET_ENT_CLASS.id){
            }
            else if(operationId == TsEntFilesOperations.OP_GET_ARRAY_DEF_CLASS.id){
            }
            else if(operationId == TsEntFilesOperations.OP_GET_ARRAY_ENT_CLASS.id){
            }
        }
        else if(section==ModuleConfig.SC_JSON_ENTITY_FILES.id){
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

    };//end

    const renderMainContent = () => {
        let showInfoPanel: boolean = false;
        //console.log(modelTables[tableIndex].name);
        //console.log("Model Tables:", modelTables);
        return (
            <Flex width="100%" direction="row" pt="2"   >
                <Box width="30%" pb="2" >          
                    <XRadioGroup
                        autocommit={true}
                        key={modelTables[tableIndex].name}
                        onselect={onSelectTable}
                        options={menuListTables}
                        value={modelTables[tableIndex].name}
                        direction="column" />                                                       
                </Box>

                <Box width="70%" >
                    <SeparatorV />
                    {showInfoPanel ?
                        <div className="w-full">
                            <XInputTextArea value={"rightPanelData"} />
                        </div>
                        : null}
                </Box>
            </Flex>
        );
    }//end renderMainContent

    return (
        <Flex width="100%" direction="column" pt="2" style={ThemePagesStyles.GC_CONTROL_LAYOUT_STYLE} >

            <Flex width="100%" direction="row" pb="2" justify="between"  >
                <Box>                    
                    {initialized ? 
                      <InputSelect 
                            key={operations[0].id}
                            inline={true}
                            name="operations"
                            label="Operation: "
                            ref={operationsRef}
                            collection={operations}
                            value={operationId ?? ""}
                            onchange={onOpSelected}
                            disabled={false} /> : null}                    
                </Box>

                <Box>
                    {initialized ? 
                        <Button onClick={runOperation} color = "green">
                            Run
                        </Button> : null}
                </Box>
            </Flex>

            <SeparatorH />
             {initialized ? renderMainContent(): null}  

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
    if (modelTableSel !== null) { showModelTable = true; }
    let rightPanelData: string = "";
    if (showModelTable) {
        rightPanelData = JSON.stringify(modelTableSel, null, 4);
    }
*/

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