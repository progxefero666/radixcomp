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
    inline?:    boolean;
    name?:      string;
    label?:     string;
    readonly?:  boolean;
    disabled?:  boolean           
    value?:     string;       
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?:      any; 
    placeholder?: string;
    icon?:      any|null; 
    autofocus?: boolean; 
    minlen?:    number;
    maxlen?:    number;
}
export default function InputTextComponent
        ({type,placeholder,value,onChange,icon,disabled}: InputTextProps) {
                                                   
    const color = "gray"; 

    let input_type = RadixConf.INPUT_TEXT_TYPES.text;     
    if(type) {input_type = type;};
    
    let input_icon = null;
    if(icon){input_icon = icon;}     

    const input_disabled = disabled ?? true;
    const size =  RadixConf.SIZES.size_2;
    const radius = ThemeCompStyle.COMP_CONT_RADIUS;    
    const variant = RadixConf.variant.surface;

    return (
        <TextField.Root type={input_type}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        variant={variant} 
                        size={size} color={color} radius={radius}            
                        disabled={input_disabled} >

            {icon?<TextField.Slot>{icon}</TextField.Slot>:null}

        </TextField.Root>
    );

}//end 
