//src\radix\cbars\btmenu.tsx

import { Option } from "@/common/model/option";
import { Flex, Button, } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { ThemeButtonsStyle } from "../radixtheme";

/**
 * MenuButtons Column menu
 */
export interface MenuButtonsProp {
    optcolor: any;
    optactcolor: any;
    optactid: string;
    options: Option[]
    onselection: (name: string) => void;
}
export default function MenuButtons
    ({ options, optcolor, optactcolor, onselection, optactid }: MenuButtonsProp) {

    const size: any = ThemeButtonsStyle.BTN_DEF_SIZE;

    const renderButton = (option: Option) => {
        let color = optcolor;
        if (optactid === option.id) { color = optactcolor; }
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