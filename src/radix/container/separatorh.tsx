//src\radix\container\separatorh.tsx

import { Separator } from "@radix-ui/themes";
import { ThemeStyle } from "@/radix/radixtheme";
import { radixTypeComp } from "../radixtypes";

export function SeparatorH() {
    return (
        <Separator orientation="horizontal" size="4"  style={ThemeStyle.SEPARATOR_H_STYLE}  />
    );

}//end component