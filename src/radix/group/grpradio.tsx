//src\radix\group\grpradio.tsx

//src\libcomp\inputcheck.tsx


import { forwardRef } from "react";
import { Checkbox, Flex, Text, Box } from "@radix-ui/themes";

import { RadixConf } 	  from "@/radix/radixconf";
import { ThemeCompStyle } from "@/radix/radixtheme";

interface CompProps {
    name: string;
    label?: string;
    inline?: boolean;
    value?: boolean;
    onchange?: (value: string, name?: string) => void;
    autofocus?: boolean;
}
export const TemplateComp = forwardRef<HTMLInputElement, CompProps>(({
    name, label, value,inline,  autofocus, onchange }, ref) => {

    const size = RadixConf.SIZES.size_2;
    const variant = RadixConf.VARIANTS.surface;
    const color = RadixConf.COLORS.gray;
            
    const showInline: boolean = inline ?? false;


    const handleOnChange = (value: boolean) => {
        if (onchange) {
            alert("InputCheck: handleOnChange: " + value);
        }
    }

    const renderMainContent = () => {
        return (
            <div className="w-full">
                {label}
                {value}
            </div>
        )
    }

    return (
        <>
            {renderMainContent()}
        </>
    )
}

)//end component
