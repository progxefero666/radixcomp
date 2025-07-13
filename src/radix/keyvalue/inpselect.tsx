import { Keyvalue } from "@/common/model/keyvalue";

import { Box, Text, Flex, Select } from "@radix-ui/themes";

import { RadixConf } from "@/radix/radixconf";
import { RADIX_COLORS } from "../radixconstants";


/**
 * class XSelect
 */
interface CompProps {
    onchange:   (value:string,name?:string) => void;
    collection: Keyvalue[]; 
    name?:       string;       
    label?:     string;
    disabled?:  boolean;
}
export function XSelect({name,collection,onchange,label,disabled}:CompProps) {

    const size = RadixConf.SIZES.size_2;
    const variant = RadixConf.VARIANTS.surface;
    const color = RADIX_COLORS.gray;
    const handleOnChange = (value:string) => {onchange(value,(name??"select"));}

    return (
        <Flex width="100%" direction={"row"} gap="2" >

            {label?<Box pt={"1"}><Text size="2">{label}</Text></Box>:null}

            <Select.Root
                defaultValue={collection[0].value}
                onValueChange={handleOnChange}
                disabled={disabled}
                size={size}  >
                <Select.Trigger variant={variant} color={color} />
                <Select.Content>
                    {collection.map((item, index) => (
                        <Select.Item key={index} value={item.key}>
                            {item.value}
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select.Root>
        </Flex>
    )

}//end component