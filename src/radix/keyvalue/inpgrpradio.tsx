//src\radix\group\grpradio.tsx


import { Flex, Text, RadioGroup } from "@radix-ui/themes";
import { RadixConf } from "@/radix/radixconf";

import { radixTypeComp } from "@/radix/radixtypes";
import { CollectionHelper } from "@/common/helper/collhelper";
import { RADIX_COLORS, RADIX_RADIUS } from "@/radix/radixconstants";
import { Keyvalue } from "@/common/model/keyvalue";
import { ThemeTextStyle } from "@/radix/radixtheme";



interface CompProps {
    autocommit?: boolean;
    name?: string;
    collection: Keyvalue[]; 
    label?: string;
    direction?: any;
    value?: any;
    onselect: (index:number,name?:string) => void;
    autofocus?: boolean;
}


export function XRadioGroup({autocommit,collection, name, label, value, direction, autofocus, onselect }:CompProps) {

    const auto: boolean = autocommit ?? false;    
    const def_value:string = value || collection[0].key;
    const compDirection: any = direction ?? "row";

    const compStyle: radixTypeComp = {
        color: RADIX_COLORS.gray,
        size: RadixConf.SIZES.size_3,
        variant: RadixConf.VARIANTS.surface,
        radius: RADIX_RADIUS.medium
    }
        
    const onSelect = (value:string) => {
        const itemIndex:number = CollectionHelper.getKeyvaluesIndex(collection,value);        
        if(auto) {
            if(name){onselect(itemIndex,name);}
            else    {onselect(itemIndex);}           
            return;
        }     
    }

    const renderItem = (key:string,value:string,text:string) => {
        return (
            <RadioGroup.Item key={key} value={value}  >
                <Text size={ThemeTextStyle.DEFAULT_SIZE} >  
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
                    {collection.map((opt, index) => (
                        renderItem(index.toString(),opt.key, opt.value)         
                    ))}                    
                </Flex>
        </RadioGroup.Root>
    )

}//end component
