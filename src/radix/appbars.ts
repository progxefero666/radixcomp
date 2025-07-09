//src\app_front\ui\appbars.ts

import { AppConstants } from "@/app_front/appconstants";
import { BarButtonsCfg } from "@/common/modelui/barbuttonscfg";
import { DbOps } from "@/db/dboperations";

const MODE_EDITION:string = "edit";
const ACT_OPEN:string = "open";
const ACT_SAVE:string = "copy";    
const ACT_EXPORT:string = "export";
const ACT_COPY:string = "copy";   




export class AppUiConst {

    public static readonly COLOR_ACT_OPEN:string     = "btn-info";
    public static readonly COLOR_DELETE:string       = "btn-success";
    public static readonly COLOR_MODE_EDITION:string = "btn-success";
    public static readonly COLOR_ACT_SAVE:string     = "btn-warning";
    public static readonly COLOR_EXPORT:string     = "btn-info";
    public static readonly COLOR_RUN:string     = "btn-info";
    public static readonly COLOR_COPY:string     = "btn-info";
    
    public static readonly ICON_COLLAPSE_OFF:string = "ti-angle-up"; 
    public static readonly ICON_COLLAPSE_ON:string = "ti-angle-down"; 
    public static readonly ICON_COLLAPSE_COLOR:string = "black"; 

    public static readonly ICON_OPEN:string = "ti-eye";
    public static readonly ICON_DELETE:string = "ti-trash";
    public static readonly ICON_MODE_EDITION:string = "ti-write";
    public static readonly ICON_ACT_SAVE:string = "ti-save";
    public static readonly ICON_RUN:string = "ti-control-play";
    public static readonly ICON_EXPORT:string = "ti-export";
    public static readonly ICON_COPY:string = "ti-save";

}//end class

export class AppTexts {
    
    public static readonly OPEN : string = "Open";
    public static readonly SAVE : string = "Save";
    public static readonly RUN : string = "Run";
    public static readonly EXPORT: string = "Export";   

    public static readonly COPY: string = "Copy";  

}//end class

export const BARCFG_DELETE_OPEN: BarButtonsCfg = new BarButtonsCfg(
    [DbOps.ACT_ITEM__DELETE,ACT_OPEN],
    [DbOps.ACT_ITEM__DELETE,AppTexts.OPEN],
    [AppUiConst.COLOR_DELETE,AppUiConst.COLOR_ACT_OPEN],
    [AppUiConst.ICON_DELETE,AppUiConst.ICON_OPEN],
    [false,false],
    [true,true]
);

export const BARCFG_EXPORT: BarButtonsCfg = new BarButtonsCfg(
    [ACT_EXPORT],
    [AppTexts.EXPORT],
    [AppUiConst.COLOR_EXPORT],
    [AppUiConst.ICON_EXPORT],
    [false],
    [true]
);
export const BARCFG_EXPORT_COPY: BarButtonsCfg = new BarButtonsCfg(
    [ACT_EXPORT,ACT_COPY],
    [AppTexts.EXPORT,AppTexts.COPY],
    [AppUiConst.COLOR_EXPORT,AppUiConst.COLOR_COPY],
    [AppUiConst.ICON_EXPORT,AppUiConst.ICON_COPY],
    [false,false],
    [true, true]
);

export const BARCFG_EDITION: BarButtonsCfg = new BarButtonsCfg(
    [MODE_EDITION,     ACT_SAVE],
    [MODE_EDITION,     AppTexts.SAVE],
    [AppUiConst.COLOR_MODE_EDITION, AppUiConst.COLOR_ACT_SAVE],
    [AppUiConst.ICON_MODE_EDITION,  AppUiConst.ICON_ACT_SAVE],
    [false,false],
    [true, false]
);