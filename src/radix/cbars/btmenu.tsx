//src\twdaisy\twdaisymenu.tsx


import { Option } from "@/common/model/option";
import { Flex, Text, Button, Section, Box, Card } from "@radix-ui/themes";
import { GearIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { ThemeButtonsStyle } from "../radixtheme";


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
        <Box >
            <Flex direction="column" gap="2">
                {options.map((section, index) => (
                    renderButton(section)
                ))}
            </Flex>
        </Box>
    )

}//end

/*
                  <Card key={index.toString()} >
                       {renderButton(section)}
                    </Card>
*/