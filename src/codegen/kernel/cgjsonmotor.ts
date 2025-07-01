//src\codegen\kernel\cgjsonmotor.ts

import { ModelTable } from "@/codegen/kernel/cgmodel";

/**
 * Class CodeGenJson
 */
export class CodeGenJson {

    public static getEntityJson(tableModel: ModelTable): string {
        return JSON.stringify(tableModel, null, 4);
    }
    
    public static getArrayEntityJson(tableModels: ModelTable[]): string {
        return JSON.stringify(tableModels, null, 4);
    }
    
    public static getEntityDefJson(tableModel: ModelTable): string {
        return JSON.stringify(tableModel, null, 4);
    }
    
    public static getArrayEntityDefJson(tableModels: ModelTable[]): string {
        return JSON.stringify(tableModels, null, 4);
    }
    
    public static getCompEntityJson(tableModel: ModelTable): string {
        const compEntity = {
            classdef: tableModel,
            class: tableModel
        };
        return JSON.stringify(compEntity, null, 4);
    }
    
    public static getArrayCompEntityJson(tableModels: ModelTable[]): string {
        const compEntities = tableModels.map(tableModel => ({
            classdef: tableModel,
            class: tableModel
        }));
        return JSON.stringify(compEntities, null, 4);
    }

} //end class