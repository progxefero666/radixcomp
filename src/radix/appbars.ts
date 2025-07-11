//src\app_front\ui\appbars.ts


import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";
import { DB_ITEM_CMD_TEXT, DB_ITEM_CMD } from "@/db/dboperations";


//const MODE_EDITION:string = "edit";

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



export const BARCFG_ADD_IMPORT: BarButtonsCfg = new BarButtonsCfg(
    [DB_ITEM_CMD.INSERT,DB_ITEM_CMD.IMPORT],
    [DB_ITEM_CMD_TEXT.INSERT,DB_ITEM_CMD_TEXT.IMPORT],
    [AppUiConst.COLOR_DELETE,AppUiConst.COLOR_ACT_OPEN],
    [AppUiConst.ICON_DELETE,AppUiConst.ICON_OPEN],
    [false,false],
    [true,true]
);

export const BARCFG_DOS: BarButtonsCfg = new BarButtonsCfg(
    [DB_ITEM_CMD.DELETE,DB_ITEM_CMD.OPEN,DB_ITEM_CMD.SELECT],
    [DB_ITEM_CMD_TEXT.DELETE,DB_ITEM_CMD_TEXT.OPEN,DB_ITEM_CMD_TEXT.SELECT],
    [AppUiConst.COLOR_DELETE,AppUiConst.COLOR_ACT_OPEN,AppUiConst.COLOR_EXPORT],
    [AppUiConst.ICON_DELETE,AppUiConst.ICON_OPEN,AppUiConst.ICON_RUN],
    [false,false,false],
    [true,true,true]
);

export const BARCFG_DELETE_OPEN: BarButtonsCfg = new BarButtonsCfg(
    [DB_ITEM_CMD.DELETE,DB_ITEM_CMD.OPEN],
    [DB_ITEM_CMD_TEXT.DELETE,DB_ITEM_CMD_TEXT.OPEN],
    [AppUiConst.COLOR_DELETE,AppUiConst.COLOR_ACT_OPEN],
    [AppUiConst.ICON_DELETE,AppUiConst.ICON_OPEN],
    [false,false],
    [true,true]
);

export const BARCFG_EXPORT: BarButtonsCfg = new BarButtonsCfg(
    [DB_ITEM_CMD.EXPORT],
    [DB_ITEM_CMD_TEXT.EXPORT],
    [AppUiConst.COLOR_EXPORT],
    [AppUiConst.ICON_EXPORT],
    [false],
    [true]
);
export const BARCFG_EXPORT_COPY: BarButtonsCfg = new BarButtonsCfg(
    [DB_ITEM_CMD.EXPORT,DB_ITEM_CMD.COPY],
    [DB_ITEM_CMD_TEXT.EXPORT,DB_ITEM_CMD_TEXT.COPY],
    [AppUiConst.COLOR_EXPORT,AppUiConst.COLOR_COPY],
    [AppUiConst.ICON_EXPORT,AppUiConst.ICON_COPY],
    [false,false],
    [true, true]
);

/*
export const BARCFG_EDITION: BarButtonsCfg = new BarButtonsCfg(
    [MODE_EDITION,     DB_ITEM_COMMAND.UPDATE],
    [MODE_EDITION,     DB_ITEM_ACTION_TEXT.UPDATE],
    [AppUiConst.COLOR_MODE_EDITION, AppUiConst.COLOR_ACT_SAVE],
    [AppUiConst.ICON_MODE_EDITION,  AppUiConst.ICON_ACT_SAVE],
    [false,false],
    [true, false]
);
*/