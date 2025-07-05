//src\radix\group\grpradio.tsx

import { forwardRef, useEffect, useState } from "react";
import { Flex, Text, RadioGroup, CheckboxGroup } from "@radix-ui/themes";
import { RadixConf } from "@/radix/radixconf";
import { Option } from "@/common/model/option";
import { radixTypeComp, radixTypeDirection } from "@/radix/radixtypes";
import { StringsHelper } from "@/common/util/stringshelper";
import { ModelHelper } from "@/common/util/modelhelper";
import { RadixUtil } from "../radixutil";


/*
<CheckboxGroup.Root defaultValue={["1"]} name="example">
    <CheckboxGroup.Item value="1">Fun</CheckboxGroup.Item>
    <CheckboxGroup.Item value="2">Serious</CheckboxGroup.Item>
    <CheckboxGroup.Item value="3">Smart</CheckboxGroup.Item>
</CheckboxGroup.Root>

*/
/**
 * XRadioGroup
 */
interface CompProps {
    inline?: boolean;
    autocommit?: boolean;
    name?: string;
    options: Option[];
    label?: string;
    direction?: radixTypeDirection;
    values?: boolean[];
    onselect: (index: number, name?: string) => void;
    autofocus?: boolean;
}
export const XCheckGroup = forwardRef<HTMLInputElement, CompProps>(({
    autocommit, inline, options, name, label, values, direction, onselect }, ref) => {

    const [rootValues,setRootValues] = useState<string[]>(RadixUtil.getArrayChar("1", options.length));

    const showInline: boolean = inline ?? false;
    const auto: boolean = autocommit ?? false;
    //const def_value: string = value || options[0].id;
    const compDirection: radixTypeDirection = direction ?? "column";

    const compStyle: radixTypeComp = {
        color: RadixConf.COLORS.gray,
        size: RadixConf.SIZES.size_3,
        variant: RadixConf.VARIANTS.surface,
        radius: RadixConf.RADIUS.medium
    }

    useEffect(() => {        
        const init =  () => {
            if(values!=null) {
                const root_values: string[] = [];
                for(let i=0; i<values.length; i++) {
                    if(values[i] === true) {root_values[i] = "1";}
                    else                   {root_values[i] = "2";}
                }
                setRootValues(root_values);
            }
        };
        init();
    }, []);

    const onSelect = (value: string) => {
        const itemIndex: number = ModelHelper.getElementIndex(options, value);
        if (auto) {
            if (name) { onselect(itemIndex, name); }
            else { onselect(itemIndex); }
            return;
        }
    }

    const renderItem = (key: string, id: string, text: string) => {
        return (
            <CheckboxGroup.Item key={key} 
                value="1" onChange={() => onSelect(id)} >
                <Text size="2" >
                    {text}
                </Text>
            </CheckboxGroup.Item>   
        )
    }

    const renderRowContent = () => {
        return (
            <p>aa</p>
        )
    }

    const renderColumnContent = () => {

        if(name!=null){}         
        return (
            <Flex direction = {compDirection} gap="2">
                {options.map((opt, index) => (
                    <CheckboxGroup.Root key={index.toString()}
                        name={name}
                        defaultValue={["1"]} 
                        size    = {compStyle.size}
                        color   = {compStyle.color}
                        variant = {compStyle.variant} >                
                                <CheckboxGroup.Item  
                                    value={rootValues[index]} onChange={() => onSelect(opt.id)} >
                                    <Text size="2" >
                                        {opt.text}
                                    </Text>
                                </CheckboxGroup.Item>      
                    </CheckboxGroup.Root>
                ))}                    
            </Flex>
        )
    }
    return (
        <>
            {showInline ?
                label ? renderColumnContent() :
                    renderColumnContent()
                :
                label ? renderColumnContent() :
                    renderColumnContent()
            }
        </>
    )

})//end component
