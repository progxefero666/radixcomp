//src\libcomp\inputselect.tsx


import { forwardRef, useEffect, useState } from "react";

import React from "react";
import { Select } from "@radix-ui/themes";
import { CompStyleOld } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";
import {RADIX_COLORS} from '@/radix/radixconf';

/*
<Flex direction="column" gap="4">
    <Box>
        <Text size="2" weight="medium" as="p" mb="2">
            Basic Dropdown Menu:
        </Text>
        <DropdownMenu.Root>
        
            <DropdownMenu.Trigger>
                <Button variant="soft" size="2">
                    File <ChevronDownIcon />
                </Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content size="1">

                <DropdownMenu.Item shortcut="⌘ N">
                    <FileTextIcon /> New Document
                </DropdownMenu.Item>
                <DropdownMenu.Item shortcut="⌘ S">
                    <CheckIcon /> Save
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item shortcut="⌘ P">
                    Print
                </DropdownMenu.Item>

            </DropdownMenu.Content>
        </DropdownMenu.Root>
    </Box>
</Flex>
*/

interface InputMenuProps {
    autocommit?: boolean;
    children?: React.ReactNode;
    name: string;
    inline?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    collection: string[];
    label?: string;
    placeholder?: string;
    default?: string;
    maxlen?: number;
    autofocus?: boolean;
    onchange?: (value: string) => void;
}
export const InputMenu = forwardRef<HTMLSelectElement, InputMenuProps>(({
    name, collection, label, placeholder, default: defaultvalue,
    inline, readonly, disabled,children,
    maxlen, autofocus, onchange }, ref) => {

    const size = RadixConf.SIZES.size_2;
    const variant = RadixConf.VARIANTS.surface;
    const color = RADIX_COLORS.gray;

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
        if (isDisabled) { cell_style = CompStyleOld.C_SELECT_DISABLED_STYLE; }
        else { cell_style = CompStyleOld.C_SELECT_EDIT_STYLE; }

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
            <div className={CompStyleOld.C_CELL_STYLE}>
                {isReadOnly ? renderReadComp() :
                    renderEditComp()}
            </div>
        )
    }

    const renderRowLabelContent = () => {
        return (
            <div className={CompStyleOld.C_INCLABEL_ROW_STYLE}>
                <div className={CompStyleOld.C_CELL_STYLE}>
                    {label}
                </div>
                {renderRowSimpleContent()}
            </div>
        )
    }

    const renderColSimpleContent = () => {
        return (
            <div className={CompStyleOld.C_CELL_STYLE}>
                {isReadOnly ? renderReadComp() :
                    renderEditComp()}
            </div>
        )
    }

    const renderColLabelContent = () => {
        return (
            <div className={CompStyleOld.C_INCLABEL_COL_STYLE}>
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
