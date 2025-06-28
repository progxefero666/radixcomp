"use client";

import React from "react";
import { TextField } from "@radix-ui/themes";
import { ThemeCompStyle } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";


const mainColor: any = "gray";


/**
 * InputTextComponent
 */

interface InputTextProps {
    inline?: boolean;
    name?: string;
    label?: string;
    readonly?: boolean;
    disabled?: boolean
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: any;
    placeholder?: string;
    icon?: any | null;
    autofocus?: boolean;
    minlen?: number;
    maxlen?: number;
}
export default function InputTextComponent
    ({ type, inline, label, placeholder, value, onChange, icon, readonly, disabled }: InputTextProps) {

    const color = "gray";
    const size = RadixConf.SIZES.size_2;
    const radius = ThemeCompStyle.COMP_CONT_RADIUS;
    const variant = RadixConf.variant.surface;
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
                value={value}
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
            <div className={ThemeCompStyle.C_CELL_STYLE}>
                {input_readonly ? renderReadComp() :
                    renderEditComp()}
            </div>
        )
    }

    const renderColSimpleContent = () => {
        return (
            <div className={ThemeCompStyle.C_CELL_STYLE}>
                {input_readonly ? renderReadComp() :
                    renderEditComp()}
            </div>
        )
    }


    const renderRowLabelContent = () => {
        return (
            <div className={ThemeCompStyle.C_INCLABEL_ROW_STYLE}>
                <div className={ThemeCompStyle.C_CELL_STYLE}>
                    {label}
                </div>
                {renderRowSimpleContent()}
            </div>
        )
    }

    const renderColLabelContent = () => {
        return (
            <div className={ThemeCompStyle.C_INCLABEL_COL_STYLE}>
                {label}
                {renderColSimpleContent()}
            </div>
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

}//end 

/*

    return (
        <TextField.Root type={input_type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            variant={variant}
            size={size} color={color} radius={radius}
            disabled={input_disabled} >
            {icon ? <TextField.Slot>{icon}</TextField.Slot> : null}
        </TextField.Root>
    );
*/