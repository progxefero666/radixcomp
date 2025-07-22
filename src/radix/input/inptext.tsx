'use client';

import React, { useEffect, useState } from "react";
import { forwardRef } from "react";
import { Box, Flex, TextField } from "@radix-ui/themes";
import { CompStyle, CompStyleOld } from "@/radix/radixtheme";
import { Label } from "radix-ui";
import { INPUT_TEXT_TYPES, RadixConf } from "@/radix/radixconf";
import { RADIX_COLORS, RadixKeys } from "src/radix/radixconstants";


/**
 * InputTextComponent
 */
interface InputTextProps {
    autocommit?: boolean;
    inline?: boolean;
    name?: string;
    label?: string;
    disabled?: boolean
    placeholder?: string;
    value?: string;
    onchange?: (value:string,name?: string) => void;
    onsubmit?: (value:string|null,name?: string) => void;
    type?: any;    
    icon?: any | null;
    autofocus?: boolean;
    minlen?: number;
    maxlen?: number;
}
export const XInputText = forwardRef<HTMLInputElement, InputTextProps>(({
    name, value, maxlen,autocommit,autofocus,type, inline, 
    label, placeholder, onchange,onsubmit, icon, disabled }, ref) => {

    const input_type = type ?? INPUT_TEXT_TYPES.text;    

    const [defaultValue, setDefaultValue] = useState<string|null>(value ?? "");

    const color   = RADIX_COLORS.gray;
    const size    = RadixConf.SIZES.size_2;
    const radius  = RadixConf.RADIUS.medium;
    const variant = RadixConf.VARIANTS.surface;

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDefaultValue(event.target.value);
        if (autocommit) {
            if (onchange) {
                if (name !== null) {onchange(event.target.value, name);}
                else {onchange(event.target.value);}
            }
        }
    };//end

    const handleOnSubmmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === RadixKeys.KEY_INTRO) {
            if (onsubmit) {
                if (name !== null) {onsubmit(defaultValue, name);}
                else {onsubmit(defaultValue);}
            }
        }
    };
 
    const renderComponent = () => {
        if(placeholder){
            return (
                <TextField.Root type={input_type}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    variant={variant}
                    size={size} 
                    color={color}
                    radius={radius}
                    onKeyDown={handleOnSubmmit}
                    disabled={disabled ?? false} 
                    autoFocus={autofocus ?? false}>
                    {icon ? <TextField.Slot>{icon}</TextField.Slot> : null}
                </TextField.Root>
            )
        }
        // apply default value
        else {            
            return (
                <TextField.Root type={input_type}
                    defaultValue={value}
                    onChange={handleOnChange}
                    variant={variant}
                    size={size} 
                    color={color}
                    radius={radius}
                    onKeyDown={handleOnSubmmit}
                    disabled={disabled ?? false} 
                    autoFocus={autofocus ?? false}>
                    {icon ? <TextField.Slot>{icon}</TextField.Slot> : null}
                </TextField.Root>
            )
        }
    };//end

    return (
        <>
            { (inline !== null && inline === true) ?
                <Flex direction="row" gapX="2">
                    {label ? <Label.Root>{label}</Label.Root> : null}
                    <Box className={CompStyleOld.C_CELL_STYLE}>
                        {renderComponent()}
                    </Box>
                </Flex>
                :
                <Flex direction="column" gapY="2">
                    {label ? <Label.Root>{label}</Label.Root> : null}
                    {renderComponent()}
                </Flex>
            }
        </>
    )

})//end component

