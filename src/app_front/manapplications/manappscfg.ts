//src\app_front\manapplications\manappscfg.ts


import { Option } from "@/common/model/option";

/**
 * class ManAppsCfg
 */
export class ManApplicationsCfg {

    public static readonly SECTION_MAIN: Option = new Option
        ("applications", "Applications", null,null,null);

    public static readonly SECTIONS: Option[]=[
        ManApplicationsCfg.SECTION_MAIN
    ];

    public static readonly ACTIVE_SECTION: Option = ManApplicationsCfg.SECTIONS[0];

}//end class
