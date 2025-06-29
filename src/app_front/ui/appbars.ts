//src\app_front\ui\appbars.ts

import { AppConstants, AppTexts, AppUiConst } from "@/app_front/appconstants";
import { BarButtonsCfg } from "@/common/modelui/barbuttonscfg";


export const BARCFG_DELETE_OPEN: BarButtonsCfg = new BarButtonsCfg(
    [AppConstants.ACT_ITEM__DELETE,AppConstants.ACT_OPEN],
    [AppConstants.ACT_ITEM__DELETE,AppTexts.OPEN],
    [AppUiConst.COLOR_DELETE,AppUiConst.COLOR_ACT_OPEN],
    [AppUiConst.ICON_DELETE,AppUiConst.ICON_OPEN],
    [false,false],
    [true,true]
);

export const BARCFG_EXPORT: BarButtonsCfg = new BarButtonsCfg(
    [AppConstants.ACT_EXPORT],
    [AppTexts.EXPORT],
    [AppUiConst.COLOR_EXPORT],
    [AppUiConst.ICON_EXPORT],
    [false],
    [true]
);

export const BARCFG_EDITION: BarButtonsCfg = new BarButtonsCfg(
    [AppConstants.MODE_EDITION,     AppConstants.ACT_SAVE],
    [AppConstants.MODE_EDITION,     AppTexts.SAVE],
    [AppUiConst.COLOR_MODE_EDITION, AppUiConst.COLOR_ACT_SAVE],
    [AppUiConst.ICON_MODE_EDITION,  AppUiConst.ICON_ACT_SAVE],
    [false,false],
    [true, false]
);