//src\radix\group\grpradio.tsx


import { Flex, Text, RadioGroup } from "@radix-ui/themes";
import { RadixConf } from "@/radix/radixconf";

import { TRadixComponent } from "@/radix/radixtypes";
import { CollectionHelper } from "@/common/helper/collhelper";
import {RADIX_COLORS} from '@/radix/radixconf';
import { Keyvalue } from "@/common/model/keyvalue";
import { TextStyle } from "@/radix/radixtheme";



interface CompProps {
    
    name?: string;
    collection: Keyvalue[]; 
    label?: string;
    value?: any;
    onselect: (index:number,name?:string) => void;
    autofocus?: boolean;
}
export function XRadioGroup({collection, name, label, value, autofocus, onselect }:CompProps) {

   
    const def_value:string = value || collection[0].key;


    const compStyle: TRadixComponent = {
        color: RADIX_COLORS.gray,
        size: RadixConf.SIZES.size_3,
        variant: RadixConf.VARIANTS.surface,
        radius: RadixConf.RADIUS.medium
    };//end
        
    const onSelect = (value:string) => {
        const itemIndex:number = CollectionHelper.getKeyvaluesIndex(collection,value);        
        if(name){onselect(itemIndex,name);}
        else    {onselect(itemIndex);}           
    };//end

    const renderItem = (key:string,value:string,text:string) => {
        return (
            <RadioGroup.Item key={key} value={value}  >
                <Text size={TextStyle.SIZE_DEF} >  
                    {text}  
                </Text>                
            </RadioGroup.Item>
        )
    };//end

    return (
        <RadioGroup.Root autoFocus={true}
            color        = {compStyle.color}
            size         = {compStyle.size} 
            defaultValue = {def_value}  
            onValueChange= {onSelect}>            
                <Flex direction = "column" gap="2">
                    {collection.map((opt, index) => (
                        renderItem(index.toString(),opt.key, opt.value)         
                    ))}                    
                </Flex>
        </RadioGroup.Root>
    )

}//end component
