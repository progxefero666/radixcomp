//src\radix\radixcolors.ts

import { RadixConf } from "./radixconf";

/**
 * class 
 */
export class ThemeStyle {


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
 * class 
 */
export class ThemeCompStyle {

    public static readonly COMP_CONT_RADIUS: any = "medium";
    public static readonly COMP_CONT_VARIANT: any = "soft";

    public static readonly C_EDIT_STYLE: any = "gray";
    public static readonly C_DISABLED_STYLE: any = "brown";
    public static readonly C_READONLY_STYLE: any = "tomato";

    public static readonly C_CELL_STYLE = "w-full h-auto";
    public static readonly C_INCLABEL_COL_STYLE: string =
        "flex-col";

    public static readonly C_INCLABEL_ROW_STYLE: string =
        "flex-rowgrid grid-cols-[35%_65%] px-[8px]";

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
 * class RadixColors
 */
export class RadixColors {

    static readonly colors = {
        gray: "gray" as any,
        mauve: "mauve" as any,
        slate: "slate" as any,
        sage: "sage" as any,
        olive: "olive" as any,
        sand: "sand" as any,

        tomato: "tomato" as any,
        red: "red" as any,
        ruby: "ruby" as any,
        crimson: "crimson" as any,
        pink: "pink" as any,
        plum: "plum" as any,
        purple: "purple" as any,
        violet: "violet" as any,
        iris: "iris" as any,
        indigo: "indigo" as any,
        blue: "blue" as any,
        cyan: "cyan" as any,
        teal: "teal" as any,
        jade: "jade" as any,
        green: "green" as any,
        grass: "grass" as any,
        lime: "lime" as any,
        yellow: "yellow" as any,
        amber: "amber" as any,
        orange: "orange" as any,
        brown: "brown" as any,
        sky: "sky" as any, // experimental
    };


}//end class

/*
    const renderOption = (key: string,  callback: (name: any) => void,
                          color: any,   size: any,
                          name: string, text: string, icon?: string) => {
        return (
            <Button key={key}
                variant={ThemeButtonsStyle.BTN_DEF_VAR}
                color={color} size={size}
                onClick={() => callback(name)}>
                {text}
            </Button>
        )
    }    
*/