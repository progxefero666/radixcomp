//src\radix\group\grpradio.tsx

import { forwardRef, useEffect, useState } from "react";
import { Flex, Text, RadioGroup, CheckboxGroup } from "@radix-ui/themes";
import { RadixConf } from "@/radix/radixconf";
import { Option } from "@/common/model/option";
import { radixTypeComp, radixTypeDirection } from "@/radix/radixtypes";
import { StringsHelper } from "@/common/util/stringshelper";
import { ModelHelper } from "@/common/util/modelhelper";
import { RadixUtil } from "../radixutil";
import { TSelected, TSelection } from "@/common/types";

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
    defaultValues?: boolean[];
    onselect: (group:TSelection,name?:string) => void;
    autofocus?: boolean;
}
export const XCheckGroup = forwardRef<HTMLInputElement, CompProps>(({
    autocommit, inline, options, name, label, defaultValues, direction, onselect }, ref) => {

    const [rootValues,setRootValues] = useState<string[]>(RadixUtil.getArrayChar("1", options.length));
    const [collValues,setCollValues] = useState<boolean[]>(RadixUtil.getArrayFalse(options.length));

  
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
            if(defaultValues!=null) {
                const coll_values:boolean[] = [];
                const root_values: string[] = [];
                for(let i=0; i<defaultValues.length; i++) {
                    coll_values[i] = defaultValues[i];
                    if(defaultValues[i] === true) {root_values[i] = "1";}
                    else                          {root_values[i] = "2";}                    
                }
                setCollValues(coll_values);
                setRootValues(root_values);
            }
        };
        init();
    }, []);

    const getValue = (compName?:string):TSelection => {
        let items: TSelected[] = [];
        for(let i=0; i<collValues.length; i++) {
            items.push({id: options[i].id,value: collValues[i]});
        }
        return {id:compName??"undefined",items:items};
    }

    const onSelect = (value: string) => {
        const itemIndex: number = ModelHelper.getElementIndex(options, value);
        let coll_values:boolean[] = collValues;
        coll_values[itemIndex] = !coll_values[itemIndex];
        setCollValues(coll_values);
        
        const groupSelection: TSelection = getValue(name);
        if (auto) {
            if (name) { onselect(groupSelection, name); }
            else { onselect(groupSelection); }
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
                    <CheckboxGroup.Root key={index.toString()} onClick={() => onSelect(opt.id)}
                        name={name}
                        defaultValue={["1"]} 
                        size    = {compStyle.size}
                        color   = {compStyle.color}
                        variant = {compStyle.variant} > 

                        <CheckboxGroup.Item  
                            value={rootValues[index]} >
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
