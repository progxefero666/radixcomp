//src\radix\group\grpradio.tsx

import { forwardRef } from "react";
import { Flex, Text, Box, RadioGroup } from "@radix-ui/themes";
import { RadixConf } from "@/radix/radixconf";
import { GroupCompProps, radixTypeComp, radixTypeDirection } from "@/radix/radixmodels";


/**
 * XRadioGroup
 */

export const XRadioGroup = forwardRef<HTMLInputElement, GroupCompProps>(({
    autocommit,options, name, label, value, direction, autofocus, onselect }, ref) => {

    const auto: boolean = autocommit ?? false;    
    const compDirection: radixTypeDirection = direction || "row";

    const compStyle: radixTypeComp = {
        color: RadixConf.COLORS.gray,
        size: RadixConf.SIZES.size_2,
        variant: RadixConf.VARIANTS.surface,
        radius: RadixConf.RADIUS.medium
    }

    const onSelect = (value:string) => {
        if(auto) {
            if(name){onselect(value,name);}
            else    {onselect(value);}           
            return;
        }
        console.log('Value:', value);
    }

    const renderItem = (key:string,value:string,text:string) => {
        return (
            <RadioGroup.Item key={key} value={value}  >
                {text}
            </RadioGroup.Item>
        )
    }

    return (
        <Flex direction = {compDirection} gap="2" >
            <RadioGroup.Root 
                color = {compStyle.color}
                variant={compStyle.variant}
                size={compStyle.size} 
                defaultValue="1"  
                onValueChange={onSelect}>

                {options.map((opt, index) => (
                    renderItem(index.toString(),(index + 1).toString(), opt.text)         
                ))}

            </RadioGroup.Root>
        </Flex>
    )

})//end component
