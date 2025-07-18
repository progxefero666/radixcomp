'use client';

import React, { useEffect, useState } from "react";
import { forwardRef } from "react";
import { Box, Flex, TextField } from "@radix-ui/themes";
import { ThemeCompStyle, ThemeCompStyleOld } from "@/radix/radixtheme";
import { Label } from "radix-ui";
import { INPUT_TEXT_TYPES, RadixConf } from "@/radix/radixconf";
import { RADIX_COLORS, RadixKeys,RADIX_SIZES } from "../radixconstants";


/**
 * InputTextComponent
 */
interface InputTextProps {
    autocommit?: boolean;
    inline?: boolean;
    name?: string;
    label?: string;
    readonly?: boolean;
    disabled?: boolean
    defaul?: string;
    onchange?: (value:string,name?: string) => void;
    onsubmit?: (value:string|null,name?: string) => void;
    type?: any;
    placeholder?: string;
    icon?: any | null;
    autofocus?: boolean;
    minlen?: number;
    maxlen?: number;
}
export const XInputText = forwardRef<HTMLInputElement, InputTextProps>(({
    name, defaul, maxlen,autocommit,autofocus,type, inline, 
    label, placeholder, onchange,onsubmit, icon, readonly, disabled }, ref) => {

    if(disabled) {defaul=" ";}

    const [value, setValue] = useState<string|null>(defaul ?? "");
    const color   = RADIX_COLORS.gray;
    const size    = RadixConf.SIZES.size_2;
    const radius  = ThemeCompStyle.CONT_RADIUS;
    const variant = RadixConf.VARIANTS.surface;

    const showInline: boolean = inline ?? false;
    const input_type = type ?? INPUT_TEXT_TYPES.text;
    const input_readonly = readonly ?? false;
    const input_disabled = disabled ?? false;

     const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        setValue(event.target.value);
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
                if (name !== null) {onsubmit(value, name);}
                else {onsubmit(value);}
            }
        }
    };
 
    const renderReadComp = () => {

        return (
            <TextField.Root type={input_type}
                value={defaul}
                variant={variant}
                size={size}
                color={color}
                radius={radius}
                disabled={true} >
                {icon ? <TextField.Slot>{icon}</TextField.Slot> : null}
            </TextField.Root>
        )
    };//end

    const renderEditComp = () => {
        
        // apply placeholder
        if(value === null){
            return (
                <TextField.Root type={input_type}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    variant={variant}
                    size={size} color={color}
                    radius={radius}
                    onKeyDown={handleOnSubmmit}
                    disabled={input_disabled} 
                    autoFocus={autofocus ?? false}>
                    {icon ? <TextField.Slot>{icon}</TextField.Slot> : null}
                </TextField.Root>
            )
        }
        // apply default value
        else {
            
            return (
                <TextField.Root type={input_type}
                    defaultValue={defaul}
                    onChange={handleOnChange}
                    variant={variant}
                    size={size} color={color}
                    radius={radius}
                    onKeyDown={handleOnSubmmit}
                    disabled={input_disabled} 
                    autoFocus={autofocus ?? false}>
                    {icon ? <TextField.Slot>{icon}</TextField.Slot> : null}
                </TextField.Root>
            )
        }

    };//end

    const renderRowSimpleContent = () => {

        return (
            <Box className={ThemeCompStyleOld.C_CELL_STYLE}>
                {input_readonly ? renderReadComp() :
                    renderEditComp()}
            </Box>
        )
    };//end

    const renderColSimpleContent = () => {
        return (
            <Box>
                {input_readonly ? renderReadComp() :
                    renderEditComp()}
            </Box>
        )
    };//end

    const renderRowLabelContent = () => {
   
        return (
            <Flex gapX="2">
                <Label.Root>{label}</Label.Root>
                {renderRowSimpleContent()}
            </Flex>
        )
    };//end

    const renderColLabelContent = () => {
        return (
            <Flex direction="column" gap="1">
                <Label.Root>{label}</Label.Root>
                {renderColSimpleContent()}
            </Flex>
        )
    };//end

    return (
        <>
            {showInline ?
                label ? renderRowLabelContent() :
                    renderRowSimpleContent()
                :
                label ? renderColLabelContent() :
                    renderColSimpleContent()
            }
        </>
    )

})//end component

