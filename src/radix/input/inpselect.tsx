//src\libcomp\inputselect.tsx


import { forwardRef, useEffect, useState } from "react";

import { Option } from "@/common/models";
import React from "react";
import { Box,Text, Flex, Select } from "@radix-ui/themes";
import { TextField } from "@radix-ui/themes";
import { ThemeCompStyleOld } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";
import { radixTypeComp } from "../radixtypes";
import { RADIX_COLORS } from "../radixconstants";
/*
export interface GroupCompProps {
    autocommit?: boolean;
    name?: string;
    options: Option[];
    label?: string;
    direction?: radixTypeDirection;
    value?: any;
    onselect: (value: string,compname?:string) => void;
    autofocus?: boolean;
}
*/
interface CompProps {
    autocommit?: boolean;
    name?: string;
    inline?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    collection: Option[];
    label?: string;
    default?: string;
    maxlen?: number;
    autofocus?: boolean;
    onchange?: (value: string,name?:string) => void;
}                  
export const XInputSelect = forwardRef<HTMLSelectElement, CompProps>(({    
    autocommit,name, collection, label, default: defaultvalue,
    inline, readonly, disabled, autofocus, onchange }, ref) => {

    const size = RadixConf.SIZES.size_2;
    const variant = RadixConf.VARIANTS.surface;
    const color = RADIX_COLORS.gray;

    const showInline: boolean = inline ?? false;
    const isReadOnly: boolean = readonly ?? false;
    const isDisabled: boolean = disabled ?? false;

    const handleOnChange = (value: string) => {
        if(autocommit) {
            if (onchange) {
                if (name) {onchange(value, name);}
                else      {onchange(value);}
            }
        }
    }

    const renderReadComp = () => {
        //placeholder={placeholder}
        return (
            <Select.Root
                defaultValue={defaultvalue}                    
                onValueChange={handleOnChange}
                disabled={true}
                size={size}  >
                <Select.Trigger variant={variant} color={color}  />
                <Select.Content>
                    {collection.map((item, index) => (
                        <Select.Item  key={index} value={item.id}>
                            {item.text}
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select.Root>
        )
    }

    const renderEditComp = () => {
        //placeholder={placeholder}
        let cell_style: string = "";
        if (isDisabled) { cell_style = ThemeCompStyleOld.C_SELECT_DISABLED_STYLE; }
        else { cell_style = ThemeCompStyleOld.C_SELECT_EDIT_STYLE; }

        return (            
            <Select.Root
                defaultValue={defaultvalue}                    
                onValueChange={onchange}
                disabled={disabled}
                size={size}  >
                <Select.Trigger variant={variant} color={color}  />
                <Select.Content>
                    {collection.map((item, index) => (
                        <Select.Item  key={index} value={item.id}>
                            {item.text}
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
                <Text size="3" >
                    {label}
                </Text>
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
