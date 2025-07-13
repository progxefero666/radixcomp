//src\app_front\ui\appbars.ts


import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";
import { DB_ITEM_CMD_TEXT, DB_ITEM_CMD } from "@/common/database/dbkernel";
import { ThemeButtonsStyle } from "./radixtheme";
import { RadixConf } from "./radixconf";
import { OPERATIONS, OPERATIONS_TEXT } from "@/common/constants";


//const MODE_EDITION:string = "edit";
export const BARCFG_SAVE_CLOSE: BarButtonsCfg = new BarButtonsCfg(
    [DB_ITEM_CMD.UPDATE,OPERATIONS.CLOSE],
    [DB_ITEM_CMD_TEXT.UPDATE,OPERATIONS_TEXT.CLOSE],
    [ThemeButtonsStyle.COLOR_SAVE,ThemeButtonsStyle.COLOR_CLOSE],
    [RadixConf.ICON_SAVE,RadixConf.ICON_OPEN],
    [false,false],
    [true,true]
);

export const BARCFG_ADD_IMPORT: BarButtonsCfg = new BarButtonsCfg(
    [DB_ITEM_CMD.INSERT,DB_ITEM_CMD.IMPORT],
    [DB_ITEM_CMD_TEXT.INSERT,DB_ITEM_CMD_TEXT.IMPORT],
    [ThemeButtonsStyle.COLOR_DELETE,ThemeButtonsStyle.COLOR_ACT_OPEN],
    [RadixConf.ICON_DELETE,RadixConf.ICON_OPEN],
    [false,false],
    [true,true]
);

export const BARCFG_DOS: BarButtonsCfg = new BarButtonsCfg(
    [DB_ITEM_CMD.DELETE,DB_ITEM_CMD.OPEN,DB_ITEM_CMD.SELECT],
    [DB_ITEM_CMD_TEXT.DELETE,DB_ITEM_CMD_TEXT.OPEN,DB_ITEM_CMD_TEXT.SELECT],
    [ThemeButtonsStyle.COLOR_DELETE,ThemeButtonsStyle.COLOR_ACT_OPEN,ThemeButtonsStyle.COLOR_EXPORT],
    [RadixConf.ICON_DELETE,RadixConf.ICON_OPEN,RadixConf.ICON_RUN],
    [false,false,false],
    [true,true,true]
);

export const BARCFG_DELETE_OPEN: BarButtonsCfg = new BarButtonsCfg(
    [DB_ITEM_CMD.DELETE,DB_ITEM_CMD.OPEN],
    [DB_ITEM_CMD_TEXT.DELETE,DB_ITEM_CMD_TEXT.OPEN],
    [ThemeButtonsStyle.COLOR_DELETE,ThemeButtonsStyle.COLOR_ACT_OPEN],
    [RadixConf.ICON_DELETE,RadixConf.ICON_OPEN],
    [false,false],
    [true,true]
);

export const BARCFG_EXPORT: BarButtonsCfg = new BarButtonsCfg(
    [DB_ITEM_CMD.EXPORT],
    [DB_ITEM_CMD_TEXT.EXPORT],
    [ThemeButtonsStyle.COLOR_EXPORT],
    [RadixConf.ICON_EXPORT],
    [false],
    [true]
);
export const BARCFG_EXPORT_COPY: BarButtonsCfg = new BarButtonsCfg(
    [DB_ITEM_CMD.EXPORT,DB_ITEM_CMD.COPY],
    [DB_ITEM_CMD_TEXT.EXPORT,DB_ITEM_CMD_TEXT.COPY],
    [ThemeButtonsStyle.COLOR_EXPORT,ThemeButtonsStyle.COLOR_COPY],
    [RadixConf.ICON_EXPORT,RadixConf.ICON_COPY],
    [false,false],
    [true, true]
);

