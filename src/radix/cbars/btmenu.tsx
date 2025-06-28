//src\twdaisy\twdaisymenu.tsx


import { Option } from "@/common/model/option";
import { Flex, Text, Button, Section, Box } from "@radix-ui/themes";
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
        ({options,optcolor,optactcolor,onselection,optactid}: MenuButtonsProp) {

    const size: any = ThemeButtonsStyle.BTN_DEF_SIZE;

    const renderButton = (key:string,option:Option) => {
        let color = optcolor;
        if(optactid === option.id){color = optactcolor;}

        return (
            <Button key     = {key}
                    variant = {ThemeButtonsStyle.BTN_DEF_VAR}
                    color   = {color} 
                    size    = {size}
                    onClick={() => onselection(option.id)}>
                {option.text}
            </Button>
        )        
    }

    return (
        <Box >
            <Flex direction="column" gap="6">

                <Section size="2" >
                    {options.map((section, index) => (
                        renderButton(index.toString(),section)
                    ))}
                </Section>

            </Flex>
        </Box>
    )

}//end
