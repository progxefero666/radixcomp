//src\radix\keyvalue\inpselect.tsx

import { Box, Text, Flex, Select } from "@radix-ui/themes";
import { RadixConf } from "@/radix/radixconf";
import { RADIX_COLORS } from "../radixconstants";
import { Label } from "@radix-ui/react-label";
import { Stylevalue } from "../models/stylevalue";
import { CompStyle, RadixTheme } from "src/radix/radixtheme";


/**
 * class XSelect
 */
interface CompProps {    
    disabled?:  boolean;
    onchange:   (value:any,name?:string) => void;
};
export function StyleSelectColor({ onchange, disabled}: CompProps) {

    const collection: Stylevalue[] = RadixTheme.STYLE_COLORS; 
    const name = "style_select_color";
    const label:string = "Select Color";
    

    const handleOnChange = (value:string) => {
        onchange(value,name);
    };//end


    return (
        <Flex width="100%" direction={"row"} gap="2" >

            {label?<Box pt={"1"}><Text size="3">{label}</Text></Box>:null}
            <Label>ss</Label>
            <Select.Root
                defaultValue={collection[0].key}
                onValueChange={handleOnChange}
                disabled={disabled}
                size={CompStyle.DEF_SIZE}  >
                <Select.Trigger variant={CompStyle.DEF_VARIANT} />
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


/*static getAsKeyvalueArray(list:string[]): Keyvalue[]{
    const result: Keyvalue[] = [];
    for (let idx=0;idx<list.length;idx++) {
        result.push(new Keyvalue(idx.toString(),list[idx]));
    }
    return result;
}*/
