//src\app\gencode\module\gcmtsentfiles.ts

import { TsEntFilesOps } from "@/codegen/operations/tsentfilesops";
import { GenCodeModuleControl } from "@/app/gencode/module/gcmodcontrol";


TsEntFilesOps

/**
 * # Module: GcControlTsEntFilesOps
 *      - GenCode Control for TypeScript Entity Files Operations
 *      - kernel: src\codegen\operations\tsentfilesops.ts
 */
export class GcControlTsEntFilesOps extends GenCodeModuleControl {

    public constructor(sqlsquema: string) {
        super(sqlsquema);
    }//end

    public executeOperation(operationId: string): void {
        
    }

}//end class