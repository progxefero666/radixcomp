//src\app_server\xeferodb\tsclasses.ts
"use server";

import { ServerFileUtil } from "@/app_server/lib/serverfileutil";
import { ServerReader } from "@/app_server/config";
import { CodeGenTsMotor } from "@/codegen/kernel/cgtsmotor";
import { ModelTable } from "@/codegen/kernel/cgmodel";
import { getDbSqlSquema } from "./sqlscripts";
import { CodeGenSql } from "@/codegen/kernel/cgsqlmotor";

//getTypeScriptTableContent("defclass",tablename,orgsquema)
//getTypeScriptTableContent("entityclass",tablename,orgsquema)
 
/**
 * Server action to get the content of a TypeScript file.
 * @param fname 
 * @returns file content as a string
 */
export async function getTypeScriptTableContent(id:string,table:string,orgsquema?:string): Promise<string|null> {

    let dbsquema: string = ""; 
    if(orgsquema != null) {dbsquema=orgsquema}
    else{
        dbsquema = await getDbSqlSquema();
    }
    
    let content:string|null = null;
    if(id === "defclass") {
        content = getTableDefEntityClass(dbsquema,table);
    }
    else if(id === "entityclass") {
        content = getTableEntityClass(dbsquema,table);
    }
    if(content!=null) {return content;}
    return null;
}//end action

export async function getTypeScriptArrayTableContent(id:string,tables:string[]): Promise<string|null> {
    const dbsquema: string = await getDbSqlSquema();

    let content:string|null = null;
    if(id === "defclass") {
        content = getTableDefEntityClass(dbsquema,tables[0]);
    }
    else if(id === "entityclass") {
        content = getTableEntityClass(dbsquema,tables[0]);
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

