//src\radix\group\grpradio.tsx

import { forwardRef, useEffect, useState } from "react";
import { Flex, Text, RadioGroup, CheckboxGroup } from "@radix-ui/themes";
import { RadixConf } from "@/radix/radixconf";
import { Option } from "@/common/model/option";
import { radixTypeComp, radixTypeDirection } from "@/radix/radixtypes";
import { StringsHelper } from "@/common/util/stringshelper";
import { ModelHelper } from "@/common/util/modelhelper";
import { RadixUtil } from "../radixutil";
import { TOption, TSelected, TSelection } from "@/common/types";
import { RadixConstants } from "../radixconstants";

/*
<CheckboxGroup.Root defaultValue={["1"]} name="example">
    <CheckboxGroup.Item value="1">Fun</CheckboxGroup.Item>
    <CheckboxGroup.Item value="2">Serious</CheckboxGroup.Item>
    <CheckboxGroup.Item value="3">Smart</CheckboxGroup.Item>
</CheckboxGroup.Root>

*/
/**
 * TSelection
 * XRadioGroup
 */
interface CompProps {
    inline?: boolean;
    autocommit?: boolean;
    name?: string;
    options:TOption[];
    label?: string;
    direction?: radixTypeDirection;
    onselect: (options:TOption[],name?:string) => void;
    autofocus?: boolean;
}
export const XCheckGroup = forwardRef<HTMLInputElement, CompProps>(({
    autocommit, inline, options, name, label, direction, onselect }, ref) => {

    const [rootValues,setRootValues] = useState<string[]>
        (RadixUtil.getArrayChar(RadixConstants.ITEM_UNCHECKED, options.length));

    const [collValues,setCollValues] = useState<boolean[]>(RadixUtil.getArrayFalse(options.length));

    const showInline: boolean = inline ?? false;
    const auto: boolean = autocommit ?? false;
    const compDirection: radixTypeDirection = direction ?? "column";

    const compStyle: radixTypeComp = {
        color: RadixConf.COLORS.gray,
        size: RadixConf.SIZES.size_3,
        variant: RadixConf.VARIANTS.surface,
        radius: RadixConf.RADIUS.medium
    }
    
    useEffect(() => {      
        const init =  () => {
            const coll_values:boolean[] = [];
            const root_values: string[] = [];
            for(let i=0; i<options.length; i++) {
                coll_values[i] = options[i].selected;
                if(options[i].selected) {root_values[i] = RadixConstants.ITEM_CHECKED;} 
                else                    {root_values[i] = RadixConstants.ITEM_UNCHECKED;}
            }
            setCollValues(coll_values);
            setRootValues(root_values);
        };
        init();
    }, []);

    const getValue = (compName?:string):TSelection => {
        let items: TSelected[] = [];
        for(let i=0; i<collValues.length; i++) {
            items.push({id: options[i].name,value: collValues[i]});
        }
        return {id:compName??"undefined",items:items};
    }

    const onSelect = (value: string) => {
        const itemIndex: number = ModelHelper.getTOptionIndex(options, value);
        let coll_values:boolean[] = collValues;
        coll_values[itemIndex] = !coll_values[itemIndex];
        options[itemIndex].selected = coll_values[itemIndex];

        setCollValues(coll_values);        

        
        //const groupSelection: TSelection = getValue(name);
        if (auto) {
            if (name) { onselect(options, name); }
            else { onselect(options); }
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
                    <CheckboxGroup.Root key={index.toString()} onClick={() => onSelect(opt.name)}
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
