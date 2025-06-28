//src\radix\radixcolors.ts

import { RadixConf } from "./radixconf";

/**
 * class 
 */
export class ThemeStyle {


}//end class


/**
 * class ThemeButtonsStyle.BTN_SIZE_DEF
 */
export class ThemeButtonsStyle {
      public static readonly BTN_SIZE_DEF: any = RadixConf.SIZES.size_2;
}

/**
 * class 
 */
export class ThemeCompStyle {

    public static readonly COMP_CONT_RADIUS: any = "medium";
    public static readonly COMP_CONT_VARIANT: any = "soft";
        
    public static readonly C_EDIT_STYLE:any = "gray";
    public static readonly C_DISABLED_STYLE:any = "brown";
    public static readonly C_READONLY_STYLE:any = "tomato";
        
    public static readonly C_CELL_STYLE = "w-full h-auto";
    public static readonly C_INCLABEL_COL_STYLE: string = 
        "flex-col";

    public static readonly C_INCLABEL_ROW_STYLE: string = 
        "flex-rowgrid grid-cols-[35%_65%] px-[8px]";

    public static readonly C_SELECT_EDIT_STYLE: string = "gray"
    public static readonly C_SELECT_DISABLED_STYLE: string = "indigo"
    public static readonly C_SELECT_READONLY_STYLE: string = "plum"
            

    public static readonly INPUT_CHECK_STYLE: string = "gray"

    public static readonly INPUT_CHECK_DISABLED_STYLE: string = "indigo"

}//end class


export class RadixColors {

    /*
        color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" 
        | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum"
        | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" 
        | "jade" | "green" | "grass" | "lime" | "mint" | "sky";   
    */

    static readonly colors = {
        gray: "gray" as any,
        red: "red" as any,
        blue: "blue" as any,
        green: "green" as any,
        orange: "orange" as any,
        purple: "purple" as any,
        pink: "pink" as any,
    };

}//end class

