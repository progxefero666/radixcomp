import React, { useState } from "react";
import { forwardRef } from "react";
import { Box, Flex, TextField } from "@radix-ui/themes";
import { ThemeCompStyle, ThemeCompStyleOld } from "@/radix/radixtheme";
import { Label } from "radix-ui";
import { RadixConf } from "@/radix/radixconf";
import { RadixKeys } from "../radixconstants";


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
    defaul?: string;
    onChange?: (value:string,name?: string) => void;
    onsubmit?: (value:string|null,name?: string) => void;
    type?: any;
    placeholder?: string;
    icon?: any | null;
    autofocus?: boolean;
    minlen?: number;
    maxlen?: number;
}
export const XInputText = forwardRef<HTMLInputElement, InputTextProps>(({
    name, defaul, autocommit, type, inline, label, placeholder, onChange,onsubmit, icon, readonly, disabled }, ref) => {

    const [value, setValue] = useState<string|null>(defaul ?? null);

    const color   = RadixConf.COLORS.gray;
    const size    = RadixConf.SIZES.size_2;
    const radius  = ThemeCompStyle.CONT_RADIUS;
    const variant = RadixConf.VARIANTS.surface;

    const showInline: boolean = inline ?? false;
    const auto: boolean = autocommit ?? false;
    const input_type = type ?? RadixConf.INPUT_TEXT_TYPES.text;
    const input_readonly = readonly ?? false;
    const input_disabled = disabled ?? false;

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        if (auto) {
            if (onChange) {
                if (name !== null) {onChange(event.target.value, name);}
                else {onChange(event.target.value);}
            }
        }
    }

    const handleOnSubmmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === RadixKeys.KEY_INTRO) {
            if (onsubmit) {
                if (name !== null) {onsubmit(value, name);}
                else {onsubmit(value);}
            }
        }
    };
 
    const renderReadComp = () => {
        return (
            <TextField.Root type={input_type}
                value={defaul}
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
                defaultValue={defaul}
                placeholder={placeholder}
                onChange={handleOnChange}
                variant={variant}
                size={size} color={color}
                radius={radius}
                onKeyDown={handleOnSubmmit}
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
            <Flex gap="1">
                <Label.Root>{label}</Label.Root>
                {renderRowSimpleContent()}
            </Flex>
        )
    }

    const renderColLabelContent = () => {
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

