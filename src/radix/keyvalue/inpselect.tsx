//src\radix\keyvalue\inpselect.tsx

import { Box, Text, Flex, Select } from "@radix-ui/themes";
import { Keyvalue } from "@/common/model/keyvalue";
import { RadixConf } from "@/radix/radixconf";
import {RADIX_COLORS} from '@/radix/radixconf';
import { ModelHelper } from "@/common/helper/modelhelper";
import { Label } from "@radix-ui/react-label";
import { TextStyle } from "../radixtheme";


/**
 * class XSelect
 */
interface CompProps {
    onchange:   (value:string,name?:string) => void;
    values?:    string[]; 
    collection: Keyvalue[]; 
    name?:      string;       
    label?:     string;
    disabled?:  boolean;
}
export function XSelect({name,onchange,collection,values,label,disabled}:CompProps) {

    const size = RadixConf.SIZES.size_2;
    const variant = RadixConf.VARIANTS.surface;
    const color = RADIX_COLORS.gray;

    const handleOnChange = (value:string) => {
        onchange(value,(name??"select"));
    }

    let inp_collection: Keyvalue[] = [];
    if(collection)  {inp_collection=collection;}
    else {if(values){inp_collection = ModelHelper.getAsKeyvalueArray(values);}}

    return (
        <Flex width="100%" direction={"row"} gap="2" >

            {label?<Box pt={"1"}><Text size={TextStyle.SIZE_DEF}>{label}</Text></Box>:null}
   
            <Select.Root
                defaultValue={inp_collection[0].key}
                onValueChange={handleOnChange}
                disabled={disabled}
                size={size}  >
                <Select.Trigger variant={variant} color={color} />
                <Select.Content>
                    {inp_collection.map((item, index) => (
                        <Select.Item key={index} value={item.key}>
                            {item.value}
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select.Root>
        </Flex>
    )

}//end component


/*static getAsKeyvalueArray(list:string[]): Keyvalue[]{
    const result: Keyvalue[] = [];
    for (let idx=0;idx<list.length;idx++) {
        result.push(new Keyvalue(idx.toString(),list[idx]));
    }
    return result;
}*/
