//src\app\workflows\config.ts

import { Option } from "@/common/model/option";

/**
 * class ModuleConfig.ACTIVE_SECTION
 */
export class WorkflowsConfig {

    public static readonly SC_SECTION_A:Option 
        = new Option("section_a","section a",null,null,null);

    public static readonly SC_SECTION_B:Option 
        = new Option("section_b","section b",null,null,null);

    public static readonly MODULES: Option[] = [
        WorkflowsConfig.SC_SECTION_A,        
        WorkflowsConfig.SC_SECTION_B        
    ]

    public static getSectionOperations(sectionName: string): Option[]|null {
        if (sectionName === WorkflowsConfig.SC_SECTION_A.id) {
            return [];
        }
        else if (sectionName === WorkflowsConfig.SC_SECTION_B.id) {
            return [];
        }
        return null;
    }

}//end class

