//src\radix\radixcolors.ts

import { RadixConf } from "@/radix/radixconf";
import { radixTypeComp } from "@/radix/radixtypes";
import { RADIX_COLORS, RADIX_RADIUS } from "@/radix/radixconstants";

//background: 'rgb(56, 56, 56)',
export const COMP_BORDER_STYLE = {
    
    border: '1px solid rgb(167, 176, 188)'
};



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
        background: 'rgb(56, 56, 56)',
        border: '1px solid rgb(167, 176, 188)'
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
 * class ThemeTextStyle.DEFAULT_SIZE
 */
export class TextStyle {
    
    public static readonly DIALOG_TITLE_SIZE: any = RadixConf.SIZES.size_2;
    public static readonly DEFAULT_SIZE: any = RadixConf.SIZES.size_2;
    public static readonly DEF_COLOR: any = "#EEEEEE";
}

/**
 * class ThemeIconsStyle.DEF_WIDTH
 * class ThemeIconsStyle.DEF_HEIGHT
 */
export class ThemeIconsStyle {

    public static readonly DEF_WIDTH = "20px";
    public static readonly DEF_HEIGHT = "20px";    
    public static readonly DEF_SIZE = RadixConf.SIZES.size_2;


}//end class

/**
 * class ThemeButtonsStyle.COLOR_ADD
 */
export class ThemeButtonsStyle {

    public static readonly BTN_DEF_SIZE: any = RadixConf.SIZES.size_2;
    public static readonly BTN_DEF_VAR: any = RadixConf.VARIANTS.soft;
    public static readonly BTN_DEF_RADIUS: any = RADIX_RADIUS.medium;
    public static readonly BTN_DEF_COLOR: any = "gray";

    public static readonly BTN_TEXT_SIZE: any = RadixConf.SIZES.size_2;

    public static readonly BTN_HOME_COLOR: any = "gray";
    public static readonly BTN_HOME_STYLE: any = "w-full justify-start";

    public static readonly BTN_DEF_STYLE = {borderRadius: "var(--blue-9)"    };

    public static readonly COLOR_ADD        = RADIX_COLORS.crimson;
    public static readonly COLOR_OPEN       = RADIX_COLORS.blue;
    public static readonly COLOR_DELETE     = RADIX_COLORS.yellow;
    public static readonly COLOR_SAVE       = RADIX_COLORS.green;
    public static readonly COLOR_IMPORT     = RADIX_COLORS.ruby;
    public static readonly COLOR_EXPORT     = RADIX_COLORS.iris;
    public static readonly COLOR_RUN        = RADIX_COLORS.red;
    public static readonly COLOR_COPY       = RADIX_COLORS.jade;
    public static readonly COLOR_CLOSE      = RADIX_COLORS.jade;
    public static readonly COLOR_MOVEUP     = RADIX_COLORS.mauve;
    public static readonly COLOR_MOVEDOWN   = RADIX_COLORS.indigo;
}

/**
 * class ThemeCompStyle.CONT_CSS_STYLE
 */
export class ThemeCompStyle {

    public static readonly CONT_SIZE: any = RadixConf.SIZES.size_2;
    public static readonly CONT_RADIUS: any = RADIX_RADIUS.medium;
    public static readonly CONT_VARIANT: any = RadixConf.VARIANTS.soft;
    public static readonly CONT_COLOR: any = RADIX_COLORS.gray;

    public static readonly CONT_STYLE: radixTypeComp = {
        size: ThemeCompStyle.CONT_SIZE,
        radius: ThemeCompStyle.CONT_RADIUS,
        variant: ThemeCompStyle.CONT_VARIANT,
        color: ThemeCompStyle.CONT_COLOR
    };

    /*
        backgroundColor: 'var(--gray-a2)',    
        border: '2px solid var(--blue-7)',
        padding: '0px 8px',
        boxShadow: '0px 0px 5px rgba(222, 251, 137, 0.9)'     
    */
    public static readonly CONT_CSS_STYLE = {
        borderRadius: "var(--radius-3)",
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
 * class ThemeMenusStyle.OPT_SIZE
 */
export class ThemeMenusStyle {

    public static readonly OPT_ACT_COLOR: any = RADIX_COLORS.indigo;
    public static readonly OPT_COLOR: any = RADIX_COLORS.blue;

    public static readonly OPT_SIZE: any = RadixConf.SIZES.size_2;

    public static readonly OPT_CSS = {
        width: '100%',
        backgroundColor: "var(--blue-9)",          
        borderRadius: "var(--radius-3)"
    };

    public static readonly OPT_ACT_CSS = {
        width: '100%',
        variant: "soft",
        backgroundColor: "var(--red-9)",          
        borderRadius: "var(--radius-3)"
    };

}//end class

