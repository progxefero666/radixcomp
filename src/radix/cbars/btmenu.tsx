//src\radix\cbars\btmenu.tsx

import { Option } from "@/common/model/option";
import { Flex, Box, } from "@radix-ui/themes";
import { ThemeCompStyle, ThemeMenusStyle } from "@/radix/radixtheme";
import { radixTypeComp } from "@/radix//radixmodels";
import { renderOptionButton } from "@/radix/radixbuttons";
import { StringsHelper } from "@/common/util/stringshelper";


/**
 * MenuButtons Column menu
 */
export interface MenuButtonsProp {
    actoption: string | null;
    options: Option[]
    onselection: (name: string) => void;
}
export default function MenuButtons({ options, actoption, onselection }: MenuButtonsProp) {

    return (
        <Flex direction="column" gap="2" style={ThemeCompStyle.CONT_CSS_STYLE} >
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