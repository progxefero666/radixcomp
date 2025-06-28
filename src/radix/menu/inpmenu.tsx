//src\libcomp\inputselect.tsx


import { forwardRef, useEffect, useState } from "react";


import React from "react";
import { Select } from "@radix-ui/themes";
import { TextField } from "@radix-ui/themes";
import { RadixColors, ThemeCompStyle } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";

interface InputMenuProps {
    children?: React.ReactNode;
    name: string;
    inline?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    collection: string[];
    label?: string;
    placeholder?: string;
    defaultvalue?: string;
    maxlen?: number;
    autofocus?: boolean;
    onchange?: (value: string) => void;
}
export const InputMenu = forwardRef<HTMLSelectElement, InputMenuProps>(({
    name, collection, label, placeholder, defaultvalue,
    inline, readonly, disabled,children,
    maxlen, autofocus, onchange }, ref) => {

    const size = RadixConf.SIZES.size_2;
    const variant = RadixConf.variant.surface;
    const color = RadixColors.colors.gray;

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
            <>
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
            </>
        )
    }

    const renderRowSimpleContent = () => {
        return (
            <div className={ThemeCompStyle.C_CELL_STYLE}>
                {isReadOnly ? renderReadComp() :
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

    const renderColSimpleContent = () => {
        return (
            <div className={ThemeCompStyle.C_CELL_STYLE}>
                {isReadOnly ? renderReadComp() :
                    renderEditComp()}
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
}

)//end component
