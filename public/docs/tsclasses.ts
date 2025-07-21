//src\app_server\xeferodb\tsclasses.ts
"use server";

import { CodeGenTsMotor } from "@/codegen/kernel/cgtsmotor";
import { ModelTable } from "@/codegen/kernel/cgmodel";

import { CodeGenSql } from "@/codegen/kernel/cgsqlmotor";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { readDbSchemaFromFile } from "../../src/db/services/readschema";


/* ........................................................................................
# For One Item Table
## List Operations:
    "get_def_class"
    "get_entity_class"
// ........................................................................................*/
export async function getTypeScriptTableContent
    (orgsquema:string|null,operationId:string,table:string): Promise<string|null> {

    let dbsquema: string|null = ""; 
    if(orgsquema != null) {dbsquema=orgsquema}
    else{
        dbsquema = await readDbSchemaFromFile("dbsquema");
    }
    
    let content:string|null = null;
    if(operationId === "get_def_class") {
        content = getTableDefEntityClass(dbsquema!,table);
    }
    else if(operationId === "get_entity_class") {
        content = getTableEntityClass(dbsquema!,table);
    }
    if(content!=null) {return content;}
    return null;
}//end action

function getTableDefEntityClass(dbsquema: string,tableName:string):string|null {
    const modelTable:ModelTable|null = CodeGenSql.getEsquemaTable(dbsquema,tableName);
    if(modelTable != null) {
        return CodeGenTsMotor.getEntityDefClass(modelTable);
    }
    return null;
}//end action

function getTableEntityClass(dbsquema: string,table:string): string|null {
    const modelTable:ModelTable|null = CodeGenSql.getEsquemaTable(dbsquema,table);
    if(modelTable != null) {
        return CodeGenTsMotor.getEntityClass(modelTable,false);
    }
    return null;
}//end action


/* ........................................................................................
# For Collection Tables
## List Operations:
    "get_all_def_class"
    "get_all_entity_class"
    "get_list_def_class"       
    "get_list_entity_class"
*/
export async function getTypeScriptArrayTableContent
    (orgsquema:string,operationId:string,arraytables?:string): Promise<string|null> {

    let dbsquema: string|null = ""; 
    if(orgsquema != null) {dbsquema=orgsquema}
    else{
        dbsquema = await readDbSchemaFromFile("dbsquema");
    }
    let content:string|null = null;
    if(operationId === "get_all_def_class") {
        content = getAllTablesDefEntityClass(dbsquema!);
    }
    else if(operationId === "get_all_entity_class") {
        content =  getAllTablesEntityClass(dbsquema!);
    }
    else if(operationId === "get_list_def_class") {
        const modelTables:ModelTable[] =  CodeGenSql.getEsquemaTables(dbsquema!);
        const tablenames:string[] = arraytables!.split("|"); 
        content = getListTablesDefEntityClass(modelTables,tablenames);
    }
    else if(operationId === "get_list_entity_class") {
        const modelTables:ModelTable[] =  CodeGenSql.getEsquemaTables(dbsquema!);
        const tablenames:string[] = arraytables!.split("|"); 
        content = getListTablesEntityClass(modelTables,tablenames);           
    }
    if(content!=null) {return content;}
    
    return null;
}//end action

function getAllTablesDefEntityClass(dbsquema: string):string {
    return CodeGenTsMotor.getArrayEntityDefClass(CodeGenSql.getEsquemaTables(dbsquema));
}

function getAllTablesEntityClass(dbsquema: string):string {
    return CodeGenTsMotor.getArrayEntityClass(CodeGenSql.getEsquemaTables(dbsquema));
}

function getListTablesDefEntityClass(modelTables:ModelTable[],tablenames:string[] ):string {
    const selectTables:ModelTable[] = CodeGenHelper.getSelectModelTables(modelTables,tablenames);
    return CodeGenTsMotor.getArrayEntityDefClass(selectTables);
}
function getListTablesEntityClass(modelTables:ModelTable[],tablenames:string[] ):string {
    const selectTables:ModelTable[] = CodeGenHelper.getSelectModelTables(modelTables,tablenames);
    return CodeGenTsMotor.getArrayEntityClass(selectTables);
}
//arraytables:string
