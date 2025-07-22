//src\app\testcomp\playground.tsx

import React, { useEffect, useRef, useState } from "react";

import { Flex, Text, Button, Box, Grid, Separator } from "@radix-ui/themes";
import { Constants } from "@/common/constants";
import { Option } from "@/common/model/option";
import { AppMemmory } from "@/front/appmemory";
import { Validation } from "@/common/model/validation";
import { Validator } from "@/common/forms/validator";
import { TextStyle } from "@/radix/radixtheme";
import { XForms } from "@/codegen/forms/cgforms";
import { BarSubmit } from "@/radix/cbars/barsubmit";
import { XInputText } from "@/radix/input/inptext";
import { XInputSelect } from "@/radix/input/inpselect";
import { XInputTextArea } from "@/radix/input/inptextarea";

import { Template } from "@/db/model/template";

const componentStyle = {
    background: 'rgb(30, 40, 63)',
    border: '1px solid rgb(125, 134, 145)',
};

export const headerStyle = {
    borderBottom: '1px solid rgb(98, 97, 98)',
};

export const styleBar = {
    borderBottom: '1px solid rgb(98, 97, 98)',
    borderTop: '1px solid rgb(98, 97, 98)',
};



interface CompProps { 
    itemId: string; 
    title:string;
    onSubmit:(entity:Template)=>void;
    onCancel?:()=>void;
};
export function PgForms({ itemId, title, onSubmit, onCancel }: CompProps) {

    const execAllValidations:boolean = false;

    const [validations,setValidations] = useState<Validation[]>([]);    

    // entity
    //.......................................................................................
    const [entity, setEntity] = useState<Template>(new Template(itemId,null,null,null));
    const proglanguageRef = useRef<HTMLSelectElement>(null);
    const nameRef         = useRef<HTMLInputElement>(null);
    const datacodeRef     = useRef<HTMLInputElement>(null);
    const proglanguages:Option[] = AppMemmory.readProglanguages();

    // validations
    //.......................................................................................    
    const validate = (): boolean => {

        let result: boolean = true;
        const validations: Validation[] = [];

        // validate field: "name" "datacode"
        let validation: Validation = Validator.ValidateItem(
            XForms.FT_TEXT,
            nameRef.current?.value,
            null,
            entity.minlen("name"),
            entity.maxlen("name") );

        if (validation.result !== Constants.SUCCESS) {
            Validator.showErrorMessage("name", validation.message!);
            if(!execAllValidations) {return result;}
            else {
                result = false;
                validations.push(validation);
            }
        }

        // validate field: "datacode"
        validation = Validator.ValidateItem(
            XForms.FT_TEXTAREA,
            datacodeRef.current?.value,
            null,
            entity.minlen("datacode"),
            entity.maxlen("datacode") );

        if (validation.result !== Constants.SUCCESS) {
            Validator.showErrorMessage("datacode", validation.message!);
            if(!execAllValidations) {return result;}
            else {
                result = false;
                validations.push(validation);
            }
        }

        if(!result){setValidations(validations);}
        return result;
    };//end

    // form submission
    //.......................................................................................
    const onFormSubmit = () => {
        let valid: boolean = validate();
        if (!valid) {return;}

        // set entity values
        entity.id              = itemId;
        entity.name            = nameRef.current!.value;
        entity.proglanguage_id = proglanguageRef.current!.value;
        entity.datacode        = datacodeRef.current!.value;

        onSubmit(entity);
    };//end

    const onFormCancel = () => {
        if (onCancel) {onCancel();}
    };//end

    // component render
    //.......................................................................................
    return (
        <Box  py="2" px="4" style={componentStyle} >
  
            {/* Header */}
            <Flex direction="row" pb="1" style={headerStyle}  >
                <Text size={TextStyle.SIZE_MEDIUM} 
                      color={TextStyle.COLOR_HEADER}>
                    {title}
                </Text>
            </Flex>
            
            {/* Form Fields */}
            <Flex direction="column" gapY="2" pt="2" mb="2" >
  
                <XInputText 
                    ref={nameRef}
                    name="name"
                    label="Name"
                    autofocus={true}
                    placeholder="template name"
                    minlen={5}
                    maxlen={100} />

                <XInputSelect 
                    ref={proglanguageRef} 
                    name="Code language"
                    label="Code language"
                    collection={proglanguages} 
                    defaul={proglanguages[0].id} />    

                <XInputTextArea 
                    ref={datacodeRef}
                    name="datacode"
                    label="Data code"
                    placeholder="template data code"
                    minlen={5} />
 
            </Flex>

            {/* Submit Bar */}
            <BarSubmit onSubmit={onFormSubmit}
                       onCancel={onFormCancel} />

        </Box>
    );

}//end component

/*
    const [ready, setReady] = useState<boolean>(false);
    const init = async () => {setReady(true);};
    useEffect(() => {if (ready) {return;}init();}, []);
*/