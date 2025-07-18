//src\radix\radixcolors.ts

import { RadixConf } from "@/radix/radixconf";
import { radixTypeComp } from "@/radix/radixtypes";
import { RADIX_COLORS, RADIX_RADIUS } from "@/radix/radixconstants";


/**
 * class TextStyle.COLOR_SPECIAL
 */
export class TextStyle {
    
    public static SIZE_DEF: any = RadixConf.SIZES.size_2;
    public static SIZE_MEDIUM: any = RadixConf.SIZES.size_3;
    public static SIZE_BIG: any = RadixConf.SIZES.size_4;
    public static SIZE_TITLE_DIALOG: any = RadixConf.SIZES.size_2;

    public static COLOR_DEF: any = "#EEEEEE";
    public static COLOR_SPECIAL = {color:"#d9ff00ff"};
};//end class

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
    public static  GC_CONTROL_LAYOUT_STYLE = {
        padding: '6px 8px 0px 8px'
    };
}//end class


/**
 * class ThemeIconsStyle.DEF_WIDTH
 * class ThemeIconsStyle.DEF_HEIGHT
 */
export class IconsStyle {

    public static  DEF_WIDTH = "20px";
    public static  DEF_HEIGHT = "20px";    
    public static  DEF_SIZE = RadixConf.SIZES.size_2;


}//end class

/**
 * class ThemeButtonsStyle.COLOR_ADD
 */
export class ButtonsStyle {

    public static  BTN_DEF_SIZE: any = RadixConf.SIZES.size_2;
    public static  BTN_DEF_VAR: any = RadixConf.VARIANTS.soft;
    public static  BTN_DEF_RADIUS: any = RADIX_RADIUS.medium;
    public static  BTN_DEF_COLOR: any = "gray";

    public static  BTN_TEXT_SIZE: any = RadixConf.SIZES.size_2;

    public static  BTN_HOME_COLOR: any = "gray";
    public static  BTN_HOME_STYLE: any = "w-full justify-start";

    public static  BTN_DEF_STYLE = {borderRadius: "var(--blue-9)"    };

    public static  COLOR_ADD        = RADIX_COLORS.crimson;
    public static  COLOR_OPEN       = RADIX_COLORS.blue;
    public static  COLOR_DELETE     = RADIX_COLORS.yellow;
    public static  COLOR_SAVE       = RADIX_COLORS.green;
    public static  COLOR_IMPORT     = RADIX_COLORS.ruby;
    public static  COLOR_EXPORT     = RADIX_COLORS.iris;
    public static  COLOR_RUN        = RADIX_COLORS.red;
    public static  COLOR_COPY       = RADIX_COLORS.jade;
    public static  COLOR_CLOSE      = RADIX_COLORS.jade;
    public static  COLOR_MOVEUP     = RADIX_COLORS.mauve;
    public static  COLOR_MOVEDOWN   = RADIX_COLORS.indigo;
}

/**
 * class ThemeCompStyle.CONT_CSS_STYLE
 */
export class CompStyle {

    public static  CONT_SIZE: any = RadixConf.SIZES.size_2;
    public static  CONT_RADIUS: any = RADIX_RADIUS.medium;
    public static  CONT_VARIANT: any = RadixConf.VARIANTS.soft;
    public static  CONT_COLOR: any = RADIX_COLORS.gray;

    public static  CONT_STYLE: radixTypeComp = {
        size: CompStyle.CONT_SIZE,
        radius: CompStyle.CONT_RADIUS,
        variant: CompStyle.CONT_VARIANT,
        color: CompStyle.CONT_COLOR
    };

    /*
        backgroundColor: 'var(--gray-a2)',    
        border: '2px solid var(--blue-7)',
        padding: '0px 8px',
        boxShadow: '0px 0px 5px rgba(222, 251, 137, 0.9)'     
    */
    public static  CONT_CSS_STYLE = {
        borderRadius: "var(--radius-3)",
    };

}//end class


/**
 * class ThemeCompStyleOld
 */
export class CompStyleOld {

    public static  COMP_CONT_RADIUS: any = "medium";
    public static  COMP_CONT_VARIANT: any = "soft";

    /*
    radixTypeComp
    */
    public static  C_EDIT_STYLE: any = "gray";
    public static  C_DISABLED_STYLE: any = "brown";
    public static  C__STYLE: any = "tomato";

    public static  C_CELL_STYLE = "w-full h-auto";
    public static  C_INCLABEL_COL_STYLE: string = "flex-col";

    public static  C_INCLABEL_ROW_STYLE: string = "flex-row grid grid-cols-[35%_65%] px-[8px]";

    public static  C_SELECT_EDIT_STYLE: string = "gray"
    public static  C_SELECT_DISABLED_STYLE: string = "indigo"
    public static  C_SELECT__STYLE: string = "plum"
    public static  C_CHECK_STYLE: string = "gray"
    public static  C_CHECK_DISABLED_STYLE: string = "indigo"

}//end class

/**
 * class ThemeDataStyle.TABLE_DEF_SIZE
 */
export class DataStyle {

    public static  TABLE_DEF_SIZE: any = RadixConf.SIZES.size_2;

}

/**
 * class ThemeMenusStyle.OPT_SIZE
 */
export class MenusStyle {

    public static  OPT_ACT_COLOR: any = RADIX_COLORS.indigo;
    public static  OPT_COLOR: any = RADIX_COLORS.blue;

    public static  OPT_SIZE: any = RadixConf.SIZES.size_2;

    public static  OPT_CSS = {
        width: '100%',
        backgroundColor: "var(--blue-9)",          
        borderRadius: "var(--radius-3)"
    };

    public static  OPT_ACT_CSS = {
        width: '100%',
        variant: "soft",
        backgroundColor: "var(--red-9)",          
        borderRadius: "var(--radius-3)"
    };

}//end class

