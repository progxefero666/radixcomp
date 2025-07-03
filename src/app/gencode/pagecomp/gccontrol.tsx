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
import { ModelTable } from "@/codegen/kernel/cgmodel";

import { XInputTextArea } from "@/radix/input/inptextarea";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { CodeGenSql } from "@/codegen/kernel/cgsqlmotor";

import { CodeGenTsMotor } from "@/codegen/kernel/cgtsmotor";
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


interface CompProps {
    section?: string;
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
    //ondataresult(tableClass);        

    useEffect(() => {
        const init = async () => {
            if(section!=null){
      
                const db_modeltables: ModelTable[] = CodeGenSql.getEsquemaTables(AppContext.readDbSquema());                
                setModelTables(db_modeltables);
                setMenuListTables(SchemaService.getListTablesAsOptions(db_modeltables));
    
                const listOperations: Option[] = CodeGenConfig.getSectionOperations(section!);
                setOperations(listOperations);
                setOperationId(listOperations[0].id);
            }           
            setInitialized(true);
        };
        init();
    }, []);

    const onFileCharged = async (file: File, name?: string) => {
        if (file) {
            alert(file.name);
        }
    };//end

    
    const onSelectTable = (index:number,compname?:string) => {
        setTableIndex(index);
    };//end

    const onOpSelected = async (operationId: string) => {
        alert(operationId);
        setOperationId(operationId);
    };//end

    const runOperation = () => {        
        alert(section);
        alert(operationId);
        //allEntitiesClass = CodeGenTsMotor.getArrayEntityClass(model_tables,true);
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
        let showModelTable: boolean = false;
        const optionTableSel: string = modelTables[tableIndex].name;
        return (
            <Flex width={"100%"} direction="row" pt="2"   >
                <Box width={"30%"} pb="2" >
                    {initialized ?
                        <XRadioGroup
                            autocommit={true}
                            key={optionTableSel}
                            onselect={onSelectTable}
                            options={menuListTables}
                            value={optionTableSel}
                            direction="column" />
                     : null}
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
                        value={operationId ?? ""}
                        onchange={onOpSelected}
                        disabled={false} /> : null}
                </Box>

                <Box>
                    {initialized ? 
                        <Button onClick={runOperation}
                                color = "green">
                            Run
                        </Button>    
                    : null}
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