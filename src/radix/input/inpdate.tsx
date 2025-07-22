//src\radix\input\inpdate.tsx

import { forwardRef, useState, useRef } from "react";
import { TextField } from "@radix-ui/themes"
import DatePicker from 'react-datepicker';
import "@radix-ui/themes/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "radix-themes-datepicker-styles";

import { Flex, Text, Box } from "@radix-ui/themes";
import { CompStyleOld } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";


import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { es } from 'date-fns/locale/es';
import { RADIX_COLORS } from "@/radix/radixconstants";

registerLocale('es', es);

//returnFormat?: 'iso' | 'local'; 
interface CompProps {
    autocommit?: boolean;
    name: string;
    label?: string;
    inline?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    value: Date;
    onchange?: (value:string, name?: string) => void;
    placeholder?: string;
    autofocus?: boolean;
}
export const XInputDate = forwardRef<HTMLInputElement, CompProps>(({
    name, label, placeholder, value,
    inline, readonly, disabled, autofocus, onchange }, ref) => {

    const size = RadixConf.SIZES.size_2;
    const variant = RadixConf.VARIANTS.surface;
    const color = RADIX_COLORS.gray;
            
    const showInline: boolean = inline ?? false;
    const isReadOnly: boolean = readonly ?? false;
    const isDisabled: boolean = disabled ?? false;

    const [internalValue, setInternalValue] = useState<Date>(value);
    const isFromCalendarClick = useRef<boolean>(false);

    const triggerCallback = (date: Date) => {
        if (onchange) {
            // Always use UTC format: ISO 8601
            const dateString = date.toISOString(); // "2023-10-05T18:25:30.123Z"
            onchange(dateString, name);
        }
    };

    const handleOnChange = (date: Date | null) => {
        if (date) {
            setInternalValue(date);
            // Solo disparar callback si viene del calendar popup
            if (isFromCalendarClick.current) {
                triggerCallback(date);
                isFromCalendarClick.current = false; // Reset flag
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && internalValue) {
            triggerCallback(internalValue);
        }
    };

    const handleCalendarOpen = () => {
        isFromCalendarClick.current = true;
    };
    const renderReadComp = () => {
        return (
            <Box>
                <Text as="label" size={size}>
                    <Flex gap="2" align="center">
                        <DatePicker selected={internalValue}
                            disabled={true}
                            showPopperArrow={false}
                            popperPlacement="bottom-start"
                            locale="es"
                            dateFormat="dd/MM/yyyy"
                            customInput={<TextField.Root />} />                        
            
                    </Flex>
                </Text>
            </Box>
        )
    }

    const renderEditComp = () => {
        let cell_style: string = "";
        if (isDisabled) { cell_style = CompStyleOld.C_CHECK_DISABLED_STYLE }
        else { cell_style = CompStyleOld.C_CHECK_STYLE }

        return (
            <Box>
                <Text as="label" size={size}>
                    <Flex gap="2" align="center">
                        <DatePicker 
                            selected={internalValue}
                            onChange={handleOnChange}
                            onCalendarOpen={handleCalendarOpen}
                            onKeyDown={handleKeyDown}
                            disabled={disabled}
                            showPopperArrow={false}
                            popperPlacement="bottom-start"
                            placeholderText={placeholder || "Seleccionar fecha"}
                            locale="es"
                            dateFormat="dd/MM/yyyy"
                            customInput={<TextField.Root />} />            
                    </Flex>
                </Text>
            </Box>
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

})//end component
