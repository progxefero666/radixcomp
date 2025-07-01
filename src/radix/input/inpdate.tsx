//src\radix\input\inpdate.tsx

import { forwardRef } from "react";
import { TextField } from "@radix-ui/themes"
import DatePicker from 'react-datepicker';
import "@radix-ui/themes/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "radix-themes-datepicker-styles";

import { Flex, Text, Box } from "@radix-ui/themes";
import { ThemeCompStyle } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";


import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { es } from 'date-fns/locale/es';
registerLocale('es', es);


interface CompProps {
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
    const color = RadixConf.COLORS.gray;
            
    const showInline: boolean = inline ?? false;
    const isReadOnly: boolean = readonly ?? false;
    const isDisabled: boolean = disabled ?? false;

    const handleOnChange = (value: boolean) => {
        if (onchange) {
            alert("InputCheck: handleOnChange: " + value);
        }
    }
    const renderReadComp = () => {
        return (
            <Box>
                <Text as="label" size={size}>
                    <Flex gap="2" align="center">
                        <DatePicker selected ={value}
                            disabled={true}
                            showPopperArrow={false}
                            popperPlacement="bottom-start"
                            customInput={<TextField.Root />} />                        
            
                    </Flex>
                </Text>
            </Box>
        )
    }

    const renderEditComp = () => {
        let cell_style: string = "";
        if (isDisabled) { cell_style = ThemeCompStyle.C_CHECK_DISABLED_STYLE }
        else { cell_style = ThemeCompStyle.C_CHECK_STYLE }

        return (
            <Box>
                <Text as="label" size={size}>
                    <Flex gap="2" align="center">
                        <DatePicker selected ={value}
                            disabled={disabled}
                            showPopperArrow={false}
                            popperPlacement="bottom-start"
                            placeholderText="Select date"  />            
                    </Flex>
                </Text>
            </Box>
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

})//end component

/*
const [startDate, setStartDate] = useState(new Date());
<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />;
<DatePicker selected={date} onChange={handleDateChange} showTimeSelect dateFormat="Pp" />        
*/