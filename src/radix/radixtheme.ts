//src\radix\radixcolors.ts

import { RadixConf } from "./radixconf";
import { radixTypeComp } from "./radixmodels";

/**
 * class  ThemeStyle.SEPARATOR_V_STYLE
 */
export class ThemeStyle {

    public static SEPARATOR_V_STYLE = {
        height: '2px'
    };

    public static SEPARATOR_H_STYLE = {
        height: '2px'
    };




    public static boxStyle = {
        margin: '20px',
        background: '#00ff00',
        borderRadius: 20,
        border: '2px solid #ff00ff',
        padding: 'var(--space-2)',
        boxShadow: '0px 0px 10px #ffff00' 
    };


}//end class

/**
 * class ThemePagesStyles.GC_CONTROL_LAYOUT_STYLE
 */
export class ThemePagesStyles {

    public static readonly GC_CONTROL_LAYOUT_STYLE = {
        padding: '6px 8px 0px 8px'
    };

}//end class


/**
 * class ThemeButtonsStyle.BTN_DEF_VAR
 */
export class ThemeButtonsStyle {

    public static readonly BTN_DEF_SIZE: any = RadixConf.SIZES.size_2;
    public static readonly BTN_DEF_VAR: any = RadixConf.VARIANTS.soft;
    public static readonly BTN_DEF_RADIUS: any = RadixConf.RADIUS.medium;
    public static readonly BTN_DEF_COLOR: any = "gray";

    public static readonly BTN_HOME_COLOR: any = "gray";
    public static readonly BTN_HOME_STYLE: any = "w-full justify-start";
}

/**
 * class ThemeCompStyle.COMP_CONT_STYLE
 */
export class ThemeCompStyle {

    public static readonly COMP_CONT_SIZE: any    = RadixConf.SIZES.size_2;
    public static readonly COMP_CONT_RADIUS: any  = RadixConf.RADIUS.medium;
    public static readonly COMP_CONT_VARIANT: any = RadixConf.VARIANTS.soft;
    public static readonly COMP_CONT_COLOR: any   = RadixConf.COLORS.gray;

    public static readonly COMP_CONT_STYLE: radixTypeComp = {
        size:    ThemeCompStyle.COMP_CONT_SIZE,
        radius:  ThemeCompStyle.COMP_CONT_RADIUS,
        variant: ThemeCompStyle.COMP_CONT_VARIANT,
        color:   ThemeCompStyle.COMP_CONT_COLOR
    };

}//end class


/**
 * class ThemeCompStyleOld
 */
export class ThemeCompStyleOld {

    public static readonly COMP_CONT_RADIUS: any = "medium";
    public static readonly COMP_CONT_VARIANT: any = "soft";

    /*
    radixTypeComp
    */
    public static readonly C_EDIT_STYLE: any = "gray";
    public static readonly C_DISABLED_STYLE: any = "brown";
    public static readonly C_READONLY_STYLE: any = "tomato";

    public static readonly C_CELL_STYLE = "w-full h-auto";
    public static readonly C_INCLABEL_COL_STYLE: string = "flex-col";

    public static readonly C_INCLABEL_ROW_STYLE: string = "flex-row grid grid-cols-[35%_65%] px-[8px]";

    public static readonly C_SELECT_EDIT_STYLE: string = "gray"
    public static readonly C_SELECT_DISABLED_STYLE: string = "indigo"
    public static readonly C_SELECT_READONLY_STYLE: string = "plum"
    public static readonly C_CHECK_STYLE: string = "gray"
    public static readonly C_CHECK_DISABLED_STYLE: string = "indigo"

}//end class

/**
 * class ThemeDataStyle.TABLE_DEF_SIZE
 */
export class ThemeDataStyle {

    public static readonly TABLE_DEF_SIZE: any = RadixConf.SIZES.size_2;

}

/**
 * class ThemeDataStyle.TABLE_DEF_SIZE
 */
export class ThemeMenusStyle {

    public static readonly ACTIVE_COLOR: any = RadixConf.COLORS.indigo;
    public static readonly DEFAULT_COLOR: any = RadixConf.COLORS.plum;
}

