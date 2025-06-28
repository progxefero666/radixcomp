//src\libcomp\inputcheck.tsx


import { forwardRef } from "react";
import { Checkbox, Flex, Text, Box } from "@radix-ui/themes";
import { RadixColors, ThemeCompStyle } from "../radixtheme";
import { RadixConf } from "../radixconf";

interface InputCheckIfc {
    name: string;
    label?: string;
    inline?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    defaultvalue?: boolean;
    onchange?: (value: string, name?: string) => void;
    placeholder?: string;
    autofocus?: boolean;
}
export const InputCheck = forwardRef<HTMLInputElement, InputCheckIfc>(({
    name, label, placeholder, defaultvalue,
    inline, readonly, disabled, autofocus, onchange }, ref) => {

    const size = RadixConf.SIZES.size_2;
    const variant = RadixConf.VARIANTS.surface;
    const color = RadixColors.colors.gray;
            
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
                        <Checkbox
                            defaultChecked={defaultvalue}
                            variant={variant}
                            size={size}
                            color={color}                      
                            disabled={true} />
                        {label}
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
                        <Checkbox
                            defaultChecked={defaultvalue}
                            variant={variant}
                            size={size}
                            color={color}                                                        
                            onCheckedChange={handleOnChange} 
                            disabled={disabled} />
                        {label}
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
}

)//end component
