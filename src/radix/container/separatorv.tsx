//src\radix\container\separatorv.tsx


import { Separator } from "@radix-ui/themes";
import { ThemeStyle } from "@/radix/radixtheme";
import { radixTypeComp } from "../radixtypes";

export function SeparatorV() {
    return (
        <Separator orientation="vertical" size="4" style={ThemeStyle.SEPARATOR_V_STYLE} />
    );

}//end component