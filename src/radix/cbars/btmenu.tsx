//src\radix\cbars\btmenu.tsx

import { Option } from "@/common/model/option";
import { Flex, Box } from "@radix-ui/themes";
import { StringsHelper } from "@/common/util/stringshelper";
import { renderOptionButton } from "@/radix/radixbuttons";
import { ThemeCompStyle, ThemeMenusStyle} from "@/radix/radixtheme";


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
        <Flex width="100%" direction="column" align="center" gapY="3" style={ThemeCompStyle.CONT_CSS_STYLE} >
            {options.map((section, index) => (
            <Box width="100%" key={index.toString()} px="3"  >
                {StringsHelper.equals(section.id, actoption) ?
                    renderOptionButton(section.id,onselection,section.text,
                        ThemeMenusStyle.OPT_ACT_CSS)
                    :
                    renderOptionButton(section.id,onselection,section.text,
                        ThemeMenusStyle.OPT_ACT_CSS)
                }
            </Box>
            ))}
        </Flex>
    )

}//end