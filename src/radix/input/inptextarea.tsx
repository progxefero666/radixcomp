"use client";

import React from "react";
import { forwardRef } from "react";
import { Box, Flex,TextArea } from "@radix-ui/themes";
import { ThemeCompStyleOld } from "@/radix/radixtheme";
import { Label } from "radix-ui";
import { RadixConf } from "@/radix/radixconf";
import { RADIX_COLORS, RADIX_SIZES } from "../radixconstants";
import { radixTypeComp } from "../radixtypes";

/**
 * InputTextComponent
 */
interface CompProps {
    autocommit?: boolean;
    inline?: boolean;
    name?: string;
    label?: string;
    readonly?: boolean;
    disabled?: boolean
    defaul?: string;
    onsubmmit?: (value:string) => void;
    type?: any;
    placeholder?: string;
    autofocus?: boolean;
    minlen?: number;
    maxlen?: number;
}

const areaStyle = {
    width: '100%',   
    height: '600px',
     
    border: '2px solid rgb(28, 28, 43)',
    padding: '2px'
};

export const XInputTextArea = forwardRef<HTMLInputElement, CompProps>
        (({ inline, label,maxlen, placeholder, defaul: value, onsubmmit, readonly, disabled }, ref) => {        

    const color = "gray";
    const size = RadixConf.SIZES.size_2;
    const radius = ThemeCompStyleOld.COMP_CONT_RADIUS;
    const variant = RadixConf.VARIANTS.surface;
    const showInline: boolean = inline ?? false;
      
    const input_readonly = readonly ?? false;
    const input_disabled = disabled ?? false;

    const renderReadComp = () => {
        return (
            <TextArea value={value} style={areaStyle}  size={size} 
                      variant={variant} color={color} radius={radius}
                      disabled={true} />          
        )
    }

    const renderEditComp = () => {
        return (
             <TextArea value={value} 
                style={areaStyle}  
                size={size}            
                placeholder={placeholder}
                onChange={(e) => {if(onsubmmit) {onsubmmit(e.target.value);}}}
                variant={variant}  
                color={color} 
                radius={radius}
                disabled={input_disabled} />            
        )
    }

    const renderRowSimpleContent = () => {
        return (
            <Box >
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
            <Flex  width={"100%"} gap="1"> 
                <Label.Root>{label}</Label.Root> 
                {renderRowSimpleContent()}
             </Flex>
        )
    }

    const renderColLabelContent = () => {
        //className="LabelRoot"
        return (
            <Flex width={"100%"} direction="column" gap="1">    
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

