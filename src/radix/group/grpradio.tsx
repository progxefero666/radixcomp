//src\radix\group\grpradio.tsx

import { Option } from "@/common/model/option";


import { forwardRef } from "react";
import { Checkbox, Flex, Text, Box, RadioGroup, Button } from "@radix-ui/themes";

import { RadixConf } from "@/radix/radixconf";
import { ThemeButtonsStyle, ThemeCompStyle } from "@/radix/radixtheme";

interface CompProps {
    autocommit?: boolean;
    name: string;
    options: Option[];
    label?: string;
    inline?: boolean;
    value?: boolean;
    onselect: (operation: string) => void;
    autofocus?: boolean;
}
export const XRadioGoup = forwardRef<HTMLInputElement, CompProps>(({
    autocommit,options, name, label, value, inline, autofocus, onselect }, ref) => {

    const auto: boolean = autocommit ?? false;    
    const showInline: boolean = inline ?? false;
    const direction: "row" | "column" = showInline ? "row" : "column";
    const size = RadixConf.SIZES.size_2;
    const variant = RadixConf.VARIANTS.surface;
    const color = RadixConf.COLORS.gray;

    const onSelect = (value:string) => {
        if(auto) {
            onselect(value);
            return
        }
        console.log('Value:', value);
    }

    const renderItem = (key: string, value: string, text: string) => {
        return (
            <RadioGroup.Item key={key} value={value}  >
                {text}
            </RadioGroup.Item>
        )
    }

    return (
        <Flex direction = {direction} gap="2" >
            <RadioGroup.Root 
                color = {color} variant={variant}
                size={size}
                defaultValue="1"  
                onValueChange={onSelect}>

                {options.map((opt, index) => (
                    renderItem(index.toString(),(index + 1).toString(), opt.text)         
                ))}

            </RadioGroup.Root>
        </Flex>
    )

})//end component

/*
import { RadioGroup, Flex, Text } from '@radix-ui/themes';

function MyRadioGroup() {
  const handleSelectionChange = (value: string) => {
    console.log('Valor seleccionado:', value);
    // Tu lógica aquí
  };

  return (
    <RadioGroup.Root 
      defaultValue="1" 
      onValueChange={handleSelectionChange}
    >
      <Flex direction="column" gap="2">
        <Text as="label" size="2">
          <RadioGroup.Item value="1" /> Opción 1
        </Text>
        <Text as="label" size="2">
          <RadioGroup.Item value="2" /> Opción 2
        </Text>
        <Text as="label" size="2">
          <RadioGroup.Item value="3" /> Opción 3
        </Text>
      </Flex>
    </RadioGroup.Root>
  );
}
*/