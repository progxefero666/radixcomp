//src\radix\cbars\btmenu.tsx

import { Option } from "@/common/model/option";
import { Flex, Button, } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { ThemeButtonsStyle, ThemeCompStyle, ThemeMenusStyle } from "@/radix/radixtheme";
import { radixTypeComp } from "../radixmodels";

/**
 * MenuButtons Column menu
 */
export interface MenuButtonsProp {
    actoption: string | null;
    options: Option[]
    onselection: (name: string) => void;
}
export default function MenuButtons
    ({options,actoption,onselection}: MenuButtonsProp) {

    const size: any = ThemeButtonsStyle.BTN_DEF_SIZE;
    const actcolor    = ThemeMenusStyle.ACTIVE_COLOR;
    const notactcolor = ThemeMenusStyle.DEFAULT_COLOR;

    const compStyle:radixTypeComp = ThemeCompStyle.COMP_CONT_STYLE
    const renderButton = (option: Option) => {
        let color = notactcolor;
        if( (actoption!== null) && (actoption === option.id) ) {
            color = actcolor;
        }        
        return (
            <Button key={option.id}
                variant={ThemeButtonsStyle.BTN_DEF_VAR}
                color={color}
                size={size}
                onClick={() => onselection(option.id)}>
                {option.text}
            </Button>
        )
    }

    return (    
        <Flex direction="column" gap="2">
            {options.map((section, index) => (
                renderButton(section)
            ))}
        </Flex>
    )

}//end

/*
                  <Card key={index.toString()} >
                       {renderButton(section)}
                    </Card>
*/