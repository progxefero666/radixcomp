//src\radix\radixcolors.ts

import { RadixConf } from "@/radix/radixconf";
import { radixTypeComp } from "@/radix/radixtypes";
import { RADIX_SIZES,RADIX_COLORS, RADIX_RADIUS } from "@/radix/radixconstants";
import { Keyvalue } from "@/common/model/keyvalue";

/**
 * class RadixTheme
 */
export class RadixTheme {

    public static readonly COLORS: Keyvalue[] = [
        new Keyvalue(RADIX_COLORS.gray, "Gray"),
        new Keyvalue(RADIX_COLORS.red, "Red"),
        new Keyvalue(RADIX_COLORS.blue, "Blue"),
        new Keyvalue(RADIX_COLORS.green, "Green"),
        new Keyvalue(RADIX_COLORS.yellow, "Yellow"),    
        new Keyvalue(RADIX_COLORS.pink, "Pink"),
        new Keyvalue(RADIX_COLORS.purple, "Purple"),
        new Keyvalue(RADIX_COLORS.orange, "Orange"),
        new Keyvalue(RADIX_COLORS.brown, "Brown"),
        new Keyvalue(RADIX_COLORS.slate, "Slate"),
        new Keyvalue(RADIX_COLORS.sage, "Sage"),
        new Keyvalue(RADIX_COLORS.olive, "Olive"),
        new Keyvalue(RADIX_COLORS.tomato, "Tomato"),
        new Keyvalue(RADIX_COLORS.ruby, "Ruby"),
        new Keyvalue(RADIX_COLORS.crimson, "Crimson"),
        new Keyvalue(RADIX_COLORS.plum, "Plum"),    
        new Keyvalue(RADIX_COLORS.violet, "Violet"),
        new Keyvalue(RADIX_COLORS.iris, "Iris"),
        new Keyvalue(RADIX_COLORS.indigo, "Indigo"),
        new Keyvalue(RADIX_COLORS.cyan, "Cyan"),
        new Keyvalue(RADIX_COLORS.teal, "Teal"),
        new Keyvalue(RADIX_COLORS.jade, "Jade"),
        new Keyvalue(RADIX_COLORS.grass, "Grass"),
        new Keyvalue(RADIX_COLORS.lime, "Lime"),
        new Keyvalue(RADIX_COLORS.sand, "Sand"),
        new Keyvalue(RADIX_COLORS.sky, "Sky"),
    ];
    
}//end class


/**
 * class TextStyle.COLOR_SPECIAL
 */
export class TextStyle {
    
    public static readonly  SIZE_DEF: any = RadixConf.SIZES.size_2;
    public static readonly  SIZE_MEDIUM: any = RadixConf.SIZES.size_3;
    public static readonly  SIZE_BIG: any = RadixConf.SIZES.size_4;
    public static readonly  SIZE_TITLE_DIALOG: any = RadixConf.SIZES.size_2;

    public static readonly  COLOR_DEF: any = "#EEEEEE";
    public static readonly  COLOR_SPECIAL = {color:"#d9ff00ff"};
};//end class

export const COMP_BORDER_STYLE = {    
    border: '1px solid rgb(167, 176, 188)'
};

/**
 * class  ThemeStyle.SEPARATOR_V_STYLE
 */
export class ThemeStyle {

    public static readonly  SEPARATOR_V_STYLE = {
        height: '2px'
    };

    public static readonly  SEPARATOR_H_STYLE = {
        height: '2px'
    };

    public static readonly  boxStyle = {
        background: 'rgb(56, 56, 56)',
        border: '1px solid rgb(167, 176, 188)'
    };


}//end class

/**
 * class ThemePagesStyles.GC_CONTROL_LAYOUT_STYLE
 */
export class ThemePagesStyles {
    public static readonly  GC_CONTROL_LAYOUT_STYLE = {
        padding: '6px 8px 0px 8px'
    };
}//end class


/**
 * class ThemeIconsStyle.DEF_WIDTH
 * class ThemeIconsStyle.DEF_HEIGHT
 */
export class IconsStyle {

    public static readonly  DEF_WIDTH = "20px";
    public static readonly  DEF_HEIGHT = "20px";    
    public static readonly  DEF_SIZE = RadixConf.SIZES.size_2;


}//end class

/**
 * class ButtonsStyle.COLOR_CLEAR
 */
export class ButtonsStyle {

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
    public static readonly COLOR_CLEAR      = RADIX_COLORS.yellow;
    public static readonly COLOR_SAVE       = RADIX_COLORS.green;
    public static readonly COLOR_IMPORT     = RADIX_COLORS.ruby;
    public static readonly COLOR_EXPORT     = RADIX_COLORS.iris;
    public static readonly COLOR_RUN        = RADIX_COLORS.green;
    public static readonly COLOR_COPY       = RADIX_COLORS.jade;
    public static readonly COLOR_CLOSE      = RADIX_COLORS.jade;
    public static readonly COLOR_MOVEUP     = RADIX_COLORS.mauve;
    public static readonly COLOR_MOVEDOWN   = RADIX_COLORS.indigo;
    public static readonly COLOR_RESET      = RADIX_COLORS.plum;

};//end

/**
 * class ThemeCompStyle.CONT_CSS_STYLE
 */
export class CompStyle {

    public static readonly  CONT_SIZE: any = RadixConf.SIZES.size_2;
    public static readonly  CONT_RADIUS: any = RADIX_RADIUS.medium;
    public static readonly  CONT_VARIANT: any = RadixConf.VARIANTS.soft;
    public static readonly  CONT_COLOR: any = RADIX_COLORS.gray;

    public static readonly  CONT_STYLE: radixTypeComp = {
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
    public static readonly  CONT_CSS_STYLE = {
        borderRadius: "var(--radius-3)",
    };

}//end class


/**
 * class ThemeCompStyleOld
 */
export class CompStyleOld {

    public static readonly  COMP_CONT_RADIUS: any = "medium";
    public static readonly  COMP_CONT_VARIANT: any = "soft";

    /*
    radixTypeComp
    */
    public static readonly  C_EDIT_STYLE: any = "gray";
    public static readonly  C_DISABLED_STYLE: any = "brown";
    public static readonly  C__STYLE: any = "tomato";

    public static readonly  C_CELL_STYLE = "w-full h-auto";
    public static readonly  C_INCLABEL_COL_STYLE: string = "flex-col";

    public static readonly  C_INCLABEL_ROW_STYLE: string = "flex-row grid grid-cols-[35%_65%] px-[8px]";

    public static readonly  C_SELECT_EDIT_STYLE: string = "gray"
    public static readonly  C_SELECT_DISABLED_STYLE: string = "indigo"
    public static readonly  C_SELECT__STYLE: string = "plum"
    public static readonly   C_CHECK_STYLE: string = "gray"
    public static readonly  C_CHECK_DISABLED_STYLE: string = "indigo"

}//end class

/**
 * class ThemeDataStyle.TABLE_DEF_SIZE
 */
export class DataStyle {

    public static readonly  TABLE_DEF_SIZE: any = RadixConf.SIZES.size_2;

}//end class

/**
 * class ThemeMenusStyle.OPT_SIZE
 */
export class MenusStyle {

    public static readonly  OPT_ACT_COLOR: any = RADIX_COLORS.indigo;
    public static readonly  OPT_COLOR: any = RADIX_COLORS.blue;

    public static readonly  OPT_SIZE: any = RadixConf.SIZES.size_2;

    public static readonly  OPT_CSS = {
        width: '100%',
        backgroundColor: "var(--blue-9)",          
        borderRadius: "var(--radius-3)"
    };

    public static readonly  OPT_ACT_CSS = {
        width: '100%',
        variant: "soft",
        backgroundColor: "var(--red-9)",          
        borderRadius: "var(--radius-3)"
    };

}//end class

