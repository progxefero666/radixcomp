//src\radix\radixcolors.ts

/**
 * class 
 */
export class ThemeStyle {


}//end class

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
        "w-full h-auto flex flex-col";

    public static readonly C_INCLABEL_ROW_STYLE: string = 
        "w-full h-auto flex items-center grid grid-cols-[35%_65%] px-[8px]";
}//end class


export class RadixColors {

    /*
        color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" 
        | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum"
        | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" 
        | "jade" | "green" | "grass" | "lime" | "mint" | "sky";   
    */

    static readonly colors = {
        gray: "gray",
        red: "red",
        blue: "blue",
        green: "green",
        orange: "orange",
        purple: "purple",
        pink: "pink"
    };

}//end class

