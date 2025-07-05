"use client";

import React from "react";
import { forwardRef } from "react";
import { Box, Flex,TextField } from "@radix-ui/themes";
import { ThemeCompStyleOld } from "@/radix/radixtheme";
import { Label } from "radix-ui";
import { RadixConf } from "@/radix/radixconf";
import { radixTypeComp } from "../radixtypes";
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
    default?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: any;
    placeholder?: string;
    icon?: any | null;
    autofocus?: boolean;
    minlen?: number;
    maxlen?: number;
}
export const XInputText = forwardRef<HTMLInputElement, InputTextProps>(({
                type, inline, label, placeholder, default: value, onChange, icon, readonly, disabled }, ref) => {     

    const color = RadixConf.COLORS.gray;
    const size = RadixConf.SIZES.size_2;
    const radius = ThemeCompStyleOld.COMP_CONT_RADIUS;
    const variant = RadixConf.VARIANTS.surface;

    const showInline: boolean = inline ?? false;

    const input_type = type ?? RadixConf.INPUT_TEXT_TYPES.text;
    //const input_icon     = icon ?? null;       
    const input_readonly = readonly ?? false;
    const input_disabled = disabled ?? false;

    const renderReadComp = () => {
        return (
            <TextField.Root type={input_type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                variant={variant}
                size={size}
                color={color}
                radius={radius}
                disabled={true} >
                {icon ? <TextField.Slot>{icon}</TextField.Slot> : null}
            </TextField.Root>
        )
    }

    const renderEditComp = () => {
        return (
            <TextField.Root type={input_type}
        
                defaultValue={value}
                placeholder={placeholder}
                onChange={onChange}
                variant={variant}
                size={size} color={color} radius={radius}
                disabled={input_disabled} >
                {icon ? <TextField.Slot>{icon}</TextField.Slot> : null}
            </TextField.Root>
        )
    }

    const renderRowSimpleContent = () => {
        return (
            <Box className={ThemeCompStyleOld.C_CELL_STYLE}>
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

