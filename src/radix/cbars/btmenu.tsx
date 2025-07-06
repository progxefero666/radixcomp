//src\radix\cbars\btmenu.tsx

import { Option } from "@/common/model/option";
import { Flex, Box, } from "@radix-ui/themes";
import { ThemeCompStyle, ThemeMenusStyle } from "@/radix/radixtheme";
import { radixTypeComp } from "@/radix/radixtypes";
import { renderOptionButton } from "@/radix/radixbuttons";
import { StringsHelper } from "@/common/util/stringshelper";


/**
 * MenuButtons Column menu
 */
export interface MenuProp {
    inline?: boolean;
    disabled?: boolean;
    name?: string;
    label?: string;    
    icon?: any | null;
    autofocus?: boolean;    
    actoption: string | null;
    options: Option[]
    onclick: (name: string) => void;
}
export default function MenuButtons({options,actoption,onclick: onselection}: MenuProp) {

    return (
        <Flex direction="column" align="center" gap="2" style={ThemeCompStyle.CONT_CSS_STYLE} >
            {options.map((section, index) => (
                <Box key={index.toString()} >
                    {StringsHelper.equals(section.id, actoption) ?
                        renderOptionButton(section.id, onselection, section.text,
                            ThemeMenusStyle.OPT_ACT_CSS)
                        :
                        renderOptionButton(section.id, onselection, section.text,
                            ThemeMenusStyle.OPT_CSS)
                    }
                </Box>
            ))}
        </Flex>
    )

}//end