//src\libcomp\inputcheck.tsx

import { forwardRef } from "react";
import { Checkbox, Flex, Text, Box } from "@radix-ui/themes";
import { TextStyle } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";
import { RADIX_COLORS } from "../radixconstants";

interface CompProps {
    autocommit?: boolean;
    name: string;
    label?: string;
    inline?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    value?: boolean;
    onchange?: (value: boolean, name?: string) => void;
    autofocus?: boolean;
}
export const XInputCheck = forwardRef<HTMLInputElement, CompProps>(({
    name, label, value, inline, readonly, disabled, autofocus, onchange }, ref) => {

    const size = RadixConf.SIZES.size_2;
    const variant = RadixConf.VARIANTS.surface;
    const color = RADIX_COLORS.gray;

    const showInline: boolean = inline ?? false;
    const isReadOnly: boolean = readonly ?? false;
    const isDisabled: boolean = disabled ?? false;

    const handleOnChange = (value: boolean) => {
        if (onchange) {
            onchange(value, name);
        }
    }

    const renderContent = (direction:any) => {
        if(direction === "row") {
            return (
                <Flex width="100" direction="row" gapX="2" align="center" justify="center">
                    <Text size={TextStyle.SIZE_DEF}>{label}</Text>
                    <Checkbox                
                        defaultChecked={value}
                        variant={variant}
                        size={size}
                        color={color}
                        onCheckedChange={handleOnChange}
                        disabled={isDisabled} />
                </Flex>       
            )
        }
        else {
             return (
                <Flex width="100" direction="column" >
                    <Box pt={"1"}><Text size="2">{label}</Text></Box>
                    <Checkbox                
                        defaultChecked={value}
                        variant={variant}
                        size={size}
                        color={color}
                        onCheckedChange={handleOnChange}
                        disabled={isDisabled} />
                </Flex>  
             )
        }

    };//end
 
    return (
        <>
            {showInline ?
                renderContent("row"):
                renderContent("column")
            }
        </>
    )

}

)//end component
