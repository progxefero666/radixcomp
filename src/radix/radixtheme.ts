//src\radix\radixcolors.ts

import { RadixConf } from "@/radix/radixconf";
import { TRadixComponent } from "@/radix/radixtypes";
import {RADIX_COLORS} from '@/radix/radixconf';
import { Keyvalue } from "@/common/model/keyvalue";
import { Stylevalue } from "./models/stylevalue";

/**
 * class Theme.STYLE_COLORS
 */
export class RadixTheme {

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

    public static readonly STYLE_COLORS: Stylevalue[] = [
        new Stylevalue("COLOR_ADD", RADIX_COLORS.crimson),
        new Stylevalue("COLOR_OPEN", RADIX_COLORS.blue),
        new Stylevalue("COLOR_DELETE", RADIX_COLORS.yellow),    
        new Stylevalue("COLOR_CLEAR", RADIX_COLORS.yellow),
        new Stylevalue("COLOR_SAVE", RADIX_COLORS.green),
        new Stylevalue("COLOR_IMPORT", RADIX_COLORS.ruby),
        new Stylevalue("COLOR_EXPORT", RADIX_COLORS.iris),
        new Stylevalue("COLOR_RUN", RADIX_COLORS.green),
        new Stylevalue("COLOR_COPY", RADIX_COLORS.jade),
        new Stylevalue("COLOR_CLOSE", RADIX_COLORS.jade),
        new Stylevalue("COLOR_MOVEUP", RADIX_COLORS.mauve),
        new Stylevalue("COLOR_MOVEDOWN", RADIX_COLORS.indigo),
        new Stylevalue("COLOR_RESET", RADIX_COLORS.plum) 
    ];

}//end class


/**
 * class TextStyle.SIZE_MEDIUM
 */
export class TextStyle {
    
    public static readonly  SIZE_DEF: any = RadixConf.SIZES.size_2;
    public static readonly  SIZE_MEDIUM: any = RadixConf.SIZES.size_3;
    public static readonly  SIZE_BIG: any = RadixConf.SIZES.size_4;
    public static readonly  SIZE_TITLE_DIALOG: any = RadixConf.SIZES.size_2;

    public static readonly  COLOR_DEF: any = "#EEEEEE";
    public static readonly  COLOR_HEADER: any = "#ffffffff";
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
 * class CompStyle
 */
export class CompStyle {

    public static readonly  SIZE_DEF:    any = RadixConf.SIZES.size_2;
    public static readonly  RADIUS_DEF:  any = RadixConf.RADIUS.medium;
    public static readonly  VARIANT_DEF: any = RadixConf.VARIANTS.soft;
    public static readonly  COLOR_DEF:   any = RADIX_COLORS.gray;

    public static readonly  DEFAULT: TRadixComponent = {
        size: CompStyle.SIZE_DEF,
        radius: CompStyle.RADIUS_DEF,
        variant: CompStyle.VARIANT_DEF,
        color: CompStyle.COLOR_DEF
    };

    public static readonly  CONT_CSS_STYLE = {
        borderRadius: "var(--radius-3)",
    };

}//end class

export class ThemePagesStyles {
    public static readonly  GC_CONTROL_LAYOUT_STYLE = {
        padding: '6px 8px 0px 8px'
    };
}//end class

export class IconsStyle {

    public static readonly  DEF_WIDTH = "20px";
    public static readonly  DEF_HEIGHT = "20px";    
    public static readonly  DEF_SIZE = RadixConf.SIZES.size_2;

}//end class

/**
 * class ButtonsStyle.TEXT_SIZE
 */
export class ButtonsStyle {

    public static readonly DEF_SIZE: any = RadixConf.SIZES.size_2;
    public static readonly DEF_VAR: any = RadixConf.VARIANTS.soft;
    public static readonly DEF_RADIUS: any = RadixConf.RADIUS.medium;
    public static readonly BTN_DEF_COLOR: any = "gray";

    public static readonly TEXT_SIZE: any = RadixConf.SIZES.size_3;
    public static readonly DEF_TEXT_COLOR: any = "#EEEEEE";

    public static readonly HOME_COLOR: any = "gray";
    public static readonly HOME_STYLE: any = "w-full justify-start";

    public static readonly DEF_STYLE = {borderRadius: "var(--blue-9)"    };

    
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

