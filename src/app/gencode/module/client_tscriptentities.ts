//src\app\gencode\module\gcmtsentfiles.ts

import { GenCodeModuleControl } from "@/app/gencode/module/gcmodcontrol";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { TOption, TSelection } from "@/radix/radixtypes";
import { CollectionHelper } from "@/common/helper/collhelper";
import { getTypeScriptArrayTableContent, getTypeScriptTableContent } from "@/server/xeferodb/tsclasses";


/**
 * ServClientEntities is a class 
 *  for managing entity files operations.
 */
export class ServClientEntities extends GenCodeModuleControl {

    public static readonly ID: string = "typescript_entityfiles";
    public static readonly OPTION_VALUE: string = "TS Entities files";

    public constructor(sqlsquema: string) {
        super(sqlsquema);
    }//end

    public async execItemTsOperation(operationId:string,table:string):Promise<string|null> {
                                         
        let code: string | null = null;
        if ((operationId === "get_def_class") ||
            (operationId === "get_entity_class")) {
            code = await getTypeScriptTableContent(this.sqlsquema, operationId, table!);
        }
        return code;
    };//end

    public async execArrayTsOperation(operationId:string,tables:TOption[]): Promise<string | null> {
                                                 
        let code: string | null = null;
        if ((operationId == "get_all_def_class") ||
            (operationId == "get_all_entity_class")) {
            code = await getTypeScriptArrayTableContent(this.sqlsquema, operationId);
        }
        else if ((operationId == "get_list_def_class") ||
            (operationId == "get_list_entity_class")) {
            const selectTables: string[] = CollectionHelper.getListFromTOptions(tables!);
            const namesjoined: string = CodeGenHelper.getStringsJoined(selectTables!);
            code = await getTypeScriptArrayTableContent(this.sqlsquema, operationId, namesjoined);
        }
        return code;
    };//end

    public async execItemJsonOperation(operationId: string,
                                      table: string | null,
                                      tables: TOption[] | null): Promise<string | null> {
        let code: string | null = null;
        return code;
    };//end

    public async execArrayJsonOperation(operationId: string,
                                      table: string | null,
                                      tables: TOption[] | null): Promise<string | null> {
        let code: string | null = null;
        return code;
    };//end
    

};//end class