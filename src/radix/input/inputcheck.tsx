//src\libcomp\inputcheck.tsx


import { forwardRef } from "react";
import { Checkbox, Flex, Text, Box } from "@radix-ui/themes";
import { ThemeCompStyleOld } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";
import { radixTypeComp } from "../radixtypes";
import { RADIX_COLORS, RADIX_SIZES } from "../radixconstants";

interface CompProps {
    autocommit?: boolean;
    name: string;
    label?: string;
    inline?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    value?: boolean;
    onchange?: (value: boolean, name?: string) => void;
    autofocus?: boolean;
}
export const XInputCheck = forwardRef<HTMLInputElement, CompProps>(({
    name, label, value, inline, readonly, disabled, autofocus, onchange }, ref) => {

    const size = RADIX_SIZES.size_2;
    const variant = RadixConf.VARIANTS.surface;
    const color = RADIX_COLORS.gray;

    const showInline: boolean = inline ?? false;
    const isReadOnly: boolean = readonly ?? false;
    const isDisabled: boolean = disabled ?? false;

    const handleOnChange = (value: boolean) => {
        if (onchange) {
            onchange(value, name);
        }
    }
    const renderReadComp = () => {
        return (
            <Box>
                <Text as="label" size={size}>
                    <Flex gap="2" align="center">
                        <Checkbox
                            defaultChecked={value}
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
        if (isDisabled) { cell_style = ThemeCompStyleOld.C_CHECK_DISABLED_STYLE }
        else { cell_style = ThemeCompStyleOld.C_CHECK_STYLE }

        return (
            <Box>
                <Text as="label" size={size}>
                    <Flex gap="2" align="center">
                        <Checkbox
                            defaultChecked={value}
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
            <div className={ThemeCompStyleOld.C_CELL_STYLE}>
                {isReadOnly ? renderReadComp() :
                    renderEditComp()}
            </div>
        )
    }

    const renderRowLabelContent = () => {
        return (
            <Flex direction="row" mt="1"
                width="100%"
                gap="2" align="center">
                <Checkbox
                    defaultChecked={value}
                    variant={variant}
                    size={size}
                    color={color}
                    onCheckedChange={handleOnChange}
                    disabled={disabled} />
                {label}
            </Flex>
        )
    }

    const renderColSimpleContent = () => {
        return (
            <div className={ThemeCompStyleOld.C_CELL_STYLE}>
                {isReadOnly ? renderReadComp() :
                    renderEditComp()}
            </div>
        )
    }

    const renderColLabelContent = () => {
        return (
            <div className={ThemeCompStyleOld.C_INCLABEL_COL_STYLE}>
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
