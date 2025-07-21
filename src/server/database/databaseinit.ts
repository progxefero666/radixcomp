//src\server\database\databaseinit.ts
"use server";


import path from "path";
import * as fs from "fs/promises";
import { promisify } from "util";

import { exec } from 'child_process';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Action Server Init Database.
 *  - Excute al start session
 */
export async function readDbSchemaFromFile(id: string): Promise<boolean> {
    const result:boolean = true;
    
    return result;
};//end