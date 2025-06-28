//src\app_front\manapplications\manappsacfg.ts

import { Option } from "@/common/model/option";

/**
 * class ManAppsCfg
 */
export class ManAppsCfg {

    public static readonly SECTION_MAIN: Option = new Option
        ("main", "Main", null,null,null);

    public static readonly SECTION_DOCS: Option = new Option
        ("docs", "Documents",  null,null,null);

    public static readonly SECTION_TASKS: Option
        = new Option("task", "Tasks",  null,null,null);

    public static readonly SECTIONS: Option[]=[
        ManAppsCfg.SECTION_MAIN,
        ManAppsCfg.SECTION_DOCS,
        ManAppsCfg.SECTION_TASKS
    ];

    public static readonly ACTIVE_SECTION: Option = ManAppsCfg.SECTIONS[0];

}//end class