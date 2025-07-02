//src\libcomp\inputselect.tsx


import { forwardRef, useEffect, useState } from "react";


import React from "react";
import { Box,Text, Flex, Select } from "@radix-ui/themes";
import { TextField } from "@radix-ui/themes";
import { ThemeCompStyle } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";

interface InputSelectProps {
    children?: React.ReactNode;
    name: string;
    inline?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    collection: string[];
    label?: string;
    placeholder?: string;
    value?: string;
    maxlen?: number;
    autofocus?: boolean;
    onchange?: (value: string) => void;
}                  
export const InputSelect = forwardRef<HTMLSelectElement, InputSelectProps>(({    
    name, collection, label, placeholder, value: defaultvalue,
    inline, readonly, disabled,children,
    maxlen, autofocus, onchange }, ref) => {

    const size = RadixConf.SIZES.size_2;
    const variant = RadixConf.VARIANTS.surface;
    const color = RadixConf.COLORS.gray;

    const showInline: boolean = inline ?? false;
    const isReadOnly: boolean = readonly ?? false;
    const isDisabled: boolean = disabled ?? false;

    const handleOnChange = (value: string) => {
        if (onchange) {
            onchange(value);
        }
    }

    const renderReadComp = () => {
        return (
            <Select.Root
                defaultValue={defaultvalue}                    
                onValueChange={onchange}
                disabled={true}
                size={size}  >
                <Select.Trigger variant={variant} color={color} placeholder={placeholder} />
                <Select.Content>
                    {collection.map((item, index) => (
                        <Select.Item  key={index} value={item}>
                            {item}
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select.Root>
        )
    }

    const renderEditComp = () => {
        let cell_style: string = "";
        if (isDisabled) { cell_style = ThemeCompStyle.C_SELECT_DISABLED_STYLE; }
        else { cell_style = ThemeCompStyle.C_SELECT_EDIT_STYLE; }

        return (            
            <Select.Root
                defaultValue={defaultvalue}                    
                onValueChange={onchange}
                disabled={disabled}
                size={size}  >
                <Select.Trigger variant={variant} color={color} placeholder={placeholder} />
                <Select.Content>
                    {collection.map((item, index) => (
                        <Select.Item  key={index} value={item}>
                            {item}
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select.Root>            
        )
    }

    const renderRowSimpleContent = () => {
        return (
            <Box>
                {isReadOnly ? renderReadComp() :
                    renderEditComp()}
            </Box>
        )
    }

    const renderRowLabelContent = () => {
        return (
            <Flex  direction={"row"} gap="2" >
                <Box pt={"1"} >
                    <Text size="3" >
                    {label}

                    </Text>
                </Box>
                {renderRowSimpleContent()}
            </Flex>
        )
    }

    const renderColSimpleContent = () => {
        return (
            <Box>
                {isReadOnly ? renderReadComp() :
                    renderEditComp()}
            </Box>
        )
    }

    const renderColLabelContent = () => {
        return (
            <Flex  direction={"column"} gap="2" >
                {label}
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
}

)//end component
