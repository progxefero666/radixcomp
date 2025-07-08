//src\radix\cbars\btmenu.tsx

import { Option } from "@/common/model/option";
import { Flex, Box } from "@radix-ui/themes";

import { StringsHelper } from "@/common/util/stringshelper";

import { renderOptionButton } from "@/radix/radixbuttons";
import { ThemeCompStyle} from "@/radix/radixtheme";
//import { ThemeMenusStyle } from "@/radix/radixtheme";
//import { radixTypeComp } from "@/radix/radixtypes";


const headerStyle = {
    with: '100%',
    background: ' rgba(32, 32, 41, 0.9)',
    borderRadius: '4px',
    border: '1px solid rgba(144, 138, 137, 0.9)',
    font: '15px normal sans-serif rgba(250,250,250,1.0) border  rgba(241, 56, 24, 0.9) ',
};

const OPT_DEF_CSS = {
     width: '100%',
    variant: "soft",
    backgroundColor: "var(--blue-9)",          
    borderRadius: "var(--radius-3)"
};

const OPT_ACT_CSS = {
     width: '100%',
    variant: "soft",
    backgroundColor: "var(--red-9)",          
    borderRadius: "var(--radius-3)"
};



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
        <Flex width="100%" direction="column" align="center" gapY="3" style={ThemeCompStyle.CONT_CSS_STYLE} >
            {options.map((section, index) => (
            <Box width="100%" key={index.toString()} px="3"  >
                {StringsHelper.equals(section.id, actoption) ?
                    renderOptionButton(section.id,onselection,section.text,
                        OPT_ACT_CSS)
                    :
                    renderOptionButton(section.id,onselection,section.text,
                        OPT_DEF_CSS)
                }
            </Box>
            ))}
        </Flex>
    )

}//end