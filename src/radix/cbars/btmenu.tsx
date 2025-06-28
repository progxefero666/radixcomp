//src\twdaisy\twdaisymenu.tsx


import { Option } from "@/common/model/option";
import { Flex, Text, Button, Section, Box } from "@radix-ui/themes";
import { GearIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { ThemeButtonsStyle } from "../radixtheme";

/*
export const renderOption = (key: string,
    callback: (name: string) => void,
    name: string, text: string,
    color: string, size?: string) => {

    const size_apply: string | null = size ?? null;

    let style: string = TwDaisyUtil.addSpace(TwDaisyCompBase.getButtonStyle(size_apply, color));
    style += color;
    return (
        <button key={key} className={style} onClick={() => callback(name)}>
            {text}
        </button>
    )

} //end render
 */
const renderOption = (key:string,callback: (name: string) => void,
                      name: string,  text: string,
                      color: string, size?: any)=> {
    return (
		<Button key={key} variant="soft" color="gray" size={size}>
			{text}
		</Button>
    )
}
export interface TwDaisyMenuProp {
    optcolor:string;
    optactcolor:string;
    optactname:string;    
    options:Option[]
    onselection: (name:string) => void;
}
export default function TwDaisyMenu({ optcolor, optactcolor,
                                      options,  optactname, onselection}:TwDaisyMenuProp) {
   
    const size: any = ThemeButtonsStyle.BTN_SIZE_DEF;                                        
    const renderButton = (key:string,name:string,title:string) => { 
        const color = optactname === name ? optactcolor : optcolor;
        return renderOption(key,onselection,name,title,color,size);
    }

    return (
        <Box >
            <Flex direction="column" gap="6">
                <Section size="2" >
                    <Text size="2" as="p">
                        A window overlaid on either the primary window or another
                        dialog window, rendering the content underneath inert.
                    </Text>

                </Section>    

                <Section size="2" >
                    {options.map((section, index) => (
                        renderButton(index.toString(),"section.name","section.title")
                    ))}
                </Section>                                           
            </Flex>
        </Box>
    )

}//end
