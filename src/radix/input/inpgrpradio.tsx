//src\radix\group\grpradio.tsx

import { forwardRef } from "react";
import { Flex, Text, RadioGroup } from "@radix-ui/themes";
import { RadixConf } from "@/radix/radixconf";
import { Option } from "@/common/model/option";
import { radixTypeComp, radixTypeDirection } from "@/radix/radixmodels";


/**
 * XRadioGroup
 */
interface CompProps {
    autocommit?: boolean;
    name?: string;
    options: Option[];
    label?: string;
    direction?: radixTypeDirection;
    value?: any;
    onselect: (index:number,name?:string) => void;
    autofocus?: boolean;
}
export const XRadioGroup = forwardRef<HTMLInputElement, CompProps>(({
    autocommit,options, name, label, value, direction, autofocus, onselect }, ref) => {

    const auto: boolean = autocommit ?? false;    
    const def_value:string = value || options[0].id;
    const compDirection: radixTypeDirection = direction ?? "row";

    const compStyle: radixTypeComp = {
        color: RadixConf.COLORS.gray,
        size: RadixConf.SIZES.size_3,
        variant: RadixConf.VARIANTS.surface,
        radius: RadixConf.RADIUS.medium
    }

    const onSelect = (value:string) => {
        /*
        if(auto) {
            if(name){onselect(value,name);}
            else    {onselect(value);}           
            return;
        }     
        */   
    }

    const renderItem = (key:string,value:string,text:string) => {
        return (
            <RadioGroup.Item key={key} value={value}  >
                <Text size="2" >  
                    {text}  
                </Text>
                
            </RadioGroup.Item>
        )
    }

    return (
        <RadioGroup.Root 
            color        = {compStyle.color}
            variant      = {compStyle.variant}
            size         = {compStyle.size} 
            defaultValue = {def_value}  
            onValueChange= {onSelect}>            
                <Flex direction = {compDirection} gap="2">
                    {options.map((opt, index) => (
                        renderItem(index.toString(),opt.id, opt.text)         
                    ))}                    
                </Flex>
        </RadioGroup.Root>
    )

})//end component
