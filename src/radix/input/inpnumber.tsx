//src\radix\input\inpnumber.tsx

"use client";

import React, { useState } from "react";
import { forwardRef } from "react";
import { Box, Flex,TextField } from "@radix-ui/themes";
import { ThemeCompStyle } from "@/radix/radixtheme";
import { Label } from "radix-ui";
import { RadixConf } from "@/radix/radixconf";

/**
 * InputTextComponent
 */
interface CompProps {
    inline?: boolean;
    isdecimal?: boolean;
    name?: string;
    label?: string;
    readonly?: boolean;
    disabled?: boolean
    value?: string;
    onChange?: (value: string, name?: string) => void;
    step?: number;
    placeholder?: string;
    autofocus?: boolean;
}


export const XInputNumber = forwardRef<HTMLInputElement,CompProps>
    (({isdecimal,step,inline,name,label,value,onChange,readonly,disabled }, ref) => {  

    const color = "gray";
    const size = RadixConf.SIZES.size_2;
    const radius = ThemeCompStyle.COMP_CONT_RADIUS;
    const variant = RadixConf.VARIANTS.surface;
    const showInline: boolean = inline ?? false;
    
    const typeDecimal: boolean = isdecimal ?? false; 
    const input_step = step ?? 1;
    const [internalValue, setInternalValue] = useState<string>(value || "");

    //const input_icon     = icon ?? null;       
    const input_readonly = readonly ?? false;
    const input_disabled = disabled ?? false;

    const triggerCallback = (newValue: string) => {
        if (onChange) {
            onChange(newValue, name);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInternalValue(e.target.value);
        // No disparar callback aquí, solo actualizar estado interno
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            triggerCallback(internalValue);
        }
    };

    const renderReadComp = () => {
        return (
            <TextField.Root  
                type="number"
                value={internalValue} 
                variant={variant}
                size={size}
                color={color}
                radius={radius}
                disabled={true} />
        )
    }

    const renderEditComp = () => {
        return (
            <TextField.Root 
                type="number"
                value={internalValue}
                step={input_step}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                variant={variant}
                size={size} color={color} radius={radius}
                disabled={input_disabled} />
        )
    }

    const renderRowSimpleContent = () => {
        return (
            <Box className={ThemeCompStyle.C_CELL_STYLE}>
                {input_readonly ? renderReadComp() :
                    renderEditComp()}
            </Box>
        )
    }

    const renderColSimpleContent = () => {
        return (
            <Box>
                {input_readonly ? renderReadComp() :
                    renderEditComp()}
            </Box>
        )
    }

    const renderRowLabelContent = () => {
        return (
            <Flex  gap="1"> 
                <Label.Root>{label}</Label.Root> 
                {renderRowSimpleContent()}
             </Flex>
        )
    }

    const renderColLabelContent = () => {
        //className="LabelRoot"
        return (
            <Flex direction="column" gap="1">    
                <Label.Root>{label}</Label.Root>                              
                {renderColSimpleContent()}
            </Flex>
        )
    }

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

