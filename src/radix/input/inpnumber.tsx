"use client";

import React from "react";
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
    name?: string;
    label?: string;
    readonly?: boolean;
    disabled?: boolean
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    step: number;
    placeholder?: string;
    icon?: any | null;
    autofocus?: boolean;
    minlen?: number;
    maxlen?: number;
}


export const XInputText = forwardRef<HTMLInputElement,CompProps>(({
                step, inline, label, placeholder, value, onChange, icon, readonly, disabled }, ref) => {        
    const color = "gray";
    const size = RadixConf.SIZES.size_2;
    const radius = ThemeCompStyle.COMP_CONT_RADIUS;
    const variant = RadixConf.VARIANTS.surface;
    const showInline: boolean = inline ?? false;

    const input_step = step ?? 1;

    //const input_icon     = icon ?? null;       
    const input_readonly = readonly ?? false;
    const input_disabled = disabled ?? false;

    const renderReadComp = () => {
        return (
            <TextField.Root  
                type="number"
                value={value} 
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
                value={value}
                step={input_step}
                onChange={onChange}
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

