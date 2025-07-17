//src\radix\input\inpnumber.tsx

"use client";

import React, { useState } from "react";
import { forwardRef } from "react";
import { Box, Flex,TextField } from "@radix-ui/themes";
import { ThemeCompStyleOld } from "@/radix/radixtheme";
import { Label } from "radix-ui";
import { RadixConf } from "@/radix/radixconf";
import { radixTypeComp } from "../radixtypes";
import { RADIX_COLORS, RadixKeys,RADIX_SIZES } from "../radixconstants";
/**
 * InputTextComponent
 *  format: string; //"numdefdigits:numdecdigits"
 */
interface CompProps {
    autocommit?: boolean;
    inline?: boolean;
    isdecimal?: boolean;
    format?: string; //"numdefdigits:numdecdigits"
    name?: string;
    label?: string;
    readonly?: boolean;
    disabled?: boolean
    value?: string;
    onchange?: (value: number, name?: string) => void;
    onsubmit?: (value: number, name?: string) => void;
    step?: number;
    autofocus?: boolean;
}


export const XInputNumber = forwardRef<HTMLInputElement,CompProps>
    (({isdecimal,format,step,inline,name,label,value,onchange,onsubmit,readonly,disabled }, ref) => {  

    const color = "gray";
    const size = RadixConf.SIZES.size_2;
    const radius = ThemeCompStyleOld.COMP_CONT_RADIUS;
    const variant = RadixConf.VARIANTS.surface;
    const showInline: boolean = inline ?? false;
    
    const isDecimal: boolean = isdecimal ?? false; 
    const decFormat:string|null = format ?? null; 
    const input_step = step ?? (isDecimal ? 0.01 : 1);
    const [internalValue, setInternalValue] = useState<string>(value || "");

    // Parse format if provided
    let maxIntegerDigits: number | null = null;
    let maxDecimalDigits: number | null = null;
    
    if (decFormat) {
        const parts = decFormat.split(':');
        if (parts.length === 2) {
            maxIntegerDigits = parseInt(parts[0]) || null;
            maxDecimalDigits = parseInt(parts[1]) || null;
        }
    }

    //const input_icon     = icon ?? null;       
    const input_readonly = readonly ?? false;
    const input_disabled = disabled ?? false;

    const triggerOnChange = (newValue: string) => {
        if (onchange) {
            onchange(Number(newValue), name);
        }
    };

    const triggerOnSubmit = (newValue: string) => {
        if (onsubmit) {
            onsubmit(Number(newValue), name);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;        
        // Validate
        if (decFormat && (maxIntegerDigits || maxDecimalDigits)) {
            const parts = newValue.split(".");
            const integerPart = parts[0] || "";
            const decimalPart = parts[1] || "";            
            if (maxIntegerDigits && integerPart.length > maxIntegerDigits) {
                return;
            }            
            if (isDecimal && maxDecimalDigits && decimalPart.length > maxDecimalDigits) {
                return; 
            }            
            if (!isDecimal && newValue.includes(".")) {return;}
        }        
        setInternalValue(newValue);        
        triggerOnChange(newValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === RadixKeys.KEY_INTRO) {
            triggerOnSubmit(internalValue);
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
                size={size} 
                color={color} 
                radius={radius}
                disabled={input_disabled}/>
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

