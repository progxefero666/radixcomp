//src\codegen\kernel\cghelper.ts

import { ModelTable, ModelField, Relation } from "@/codegen/cgmodel";

export class CodeGenHelper {

    public static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }//end

    public static uncapitalize(str: string): string {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }//end  

    public static getDefaultValue(field: ModelField, tsType: string): string {    
        if (field.pk || field.name.toLowerCase() === 'id') {return 'null';}        
        if (tsType.includes('number')) {return 'null';}
        
        if (tsType === 'boolean') {return 'false';}        
        if (tsType === 'Date')    {return 'new Date()';}
        if (tsType === 'string')  {return '"undefined"'; }        
        return 'null';
    }//end

    public static getModelTableIndex(modelTables:ModelTable[],name:string): number {
        let tableIndex:number = -1;
        for (let idx=0;idx<modelTables.length;idx++) {
            if (modelTables[idx].name==name) {
                tableIndex = idx;
            }
        }
        return tableIndex;
    }//end  

}//end class
