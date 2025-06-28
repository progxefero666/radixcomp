"use client";

import React from "react";
import { TextField } from "@radix-ui/themes";
import { ThemeCompStyle } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";


const mainColor: any = "gray"; 


/**
 * InputTextComponent
 */

/*
interface InputTextProps {
    name: string;
    inline?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    defaultvalue?: string;
    maxlen?: number;
    autofocus?: boolean; 
    onchange?: (value: string) => void;
}
*/
interface InputTextProps {
    placeholder?: string;
    disabled?: boolean;
    size?: "1" | "2" | "3";
    color?: any;
    type?: any;
    icon?: any | null;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function InputTextComponent({placeholder,disabled,size,color,type,icon,
                                            value,onChange}: InputTextProps) {
                                                   
    if(!color) {color = mainColor;}  

    let input_type = RadixConf.INPUT_TEXT_TYPES.text;     
    if(type) {input_type = type;};
    
    let input_icon = null;
    if(icon){input_icon = icon;}     

    const input_disabled = disabled ?? true;
    const comp_size = size ?? RadixConf.SIZES.size_2;
    const radius = ThemeCompStyle.COMP_CONT_RADIUS;    
    const variant = RadixConf.variant.surface;

    return (
        <TextField.Root type={input_type}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        variant={variant} 
                        size={comp_size} color={color} radius={radius}            
                        disabled={input_disabled} >

            {icon?<TextField.Slot>{icon}</TextField.Slot>:null}

        </TextField.Root>
    );

}//end 
