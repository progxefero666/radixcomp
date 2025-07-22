//src\app\testcomp\playground.tsx

import React, { useEffect, useRef, useState } from "react";

import { Flex, Text, Button, Box, Grid, Separator } from "@radix-ui/themes";
import { Option } from "@/common/model/option";
import { Validation } from "@/common/model/validation";

import { XInputText } from "@/radix/input/inptext";
import { XInputSelect } from "@/radix/input/inpselect";

import { Template } from "@/db/model/template";
import { AppMemmory } from "@/front/appmemory";
import { XInputTextArea } from "@/radix/input/inptextarea";
import { ButtonsStyle, COMP_BORDER_STYLE, TextStyle } from "@/radix/radixtheme";
import { DB_ITEM_CMD_TEXT } from "@/common/database/dbkernel";
import { Constants, OpConstants } from "@/common/constants";
import { XForms } from "@/codegen/forms/xforms";
import { BarSubmit } from "@/radix/cbars/barsubmit";
import { set } from "date-fns";
import { Validator } from "@/common/forms/validator";




const mainContentStyle = {
    background: 'rgb(30, 40, 63)',
    borderTop: 'none',    
    borderBottom: 'none',   
    borderLeft: '1px solid rgb(167, 176, 188)', 
    borderRight: '1px solid rgb(125, 134, 145)',
};

export const headerStyle = {
    borderBottom: '1px solid rgb(98, 97, 98)',
};

export const styleBbar = {
    borderBottom: '1px solid rgb(98, 97, 98)',
    borderTop: '1px solid rgb(98, 97, 98)',
};

/*
    const [ready, setReady] = useState<boolean>(false);
    const init = async () => {        
        //load related collections             
        setReady(true);
    };
    useEffect(() => {
        if (ready) {return;}
        init();
    }, []);
*/

interface CompProps { 
    itemId: string; 
    title:string;
    onSubmit:(entity:Template)=>void;
    onCancel?:()=>void;
};
export function PgForms({ itemId, title, onSubmit, onCancel }: CompProps) {

    const execAllValidations:boolean = false;

    const [validations,setValidations] = useState<Validation[]>([]);    
    const [entity, setEntity] = useState<Template>(new Template(itemId,null,null,null));

    const proglanguageRef = useRef<HTMLSelectElement>(null);
    const nameRef         = useRef<HTMLInputElement>(null);
    const datacodeRef     = useRef<HTMLInputElement>(null);

    const proglanguages:Option[] = AppMemmory.readProglanguages();


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

    return (
        <Box width="100%" py="2" px="4" style={mainContentStyle} >
  
            {/* Header */}
            <Flex width="100%" direction="row" pb="1" style={headerStyle}  >
                <Text size={TextStyle.SIZE_MEDIUM} 
                      color={TextStyle.COLOR_HEADER}>
                    {title}
                </Text>
            </Flex>
            

            {/* Form Fields */}
            <Flex width="100%" direction="column" gapY="2" pt="2" mb="2" >
  
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


export const jsonTemplate: string =
`export class Template {

    public id: string;
    public name: string|null;
    public proglanguage_id: string|null;
    public datacode: string|null;

    constructor(id:string,name:string|null,proglanguage_id:string|null,datacode: string|null) {
        this.id = id;
        this.name = name;
        this.proglanguage_id = proglanguage_id;
        this.datacode = datacode;
    };//end


    public minlen(fieldName: string): number | null {
        return 0;
     };//end

    public maxlen(fieldName: string): number | null {
        if (fieldName === "id") {
            return 16;
        }
        if (fieldName === "name") {
            return 100;
        }
        if (fieldName === "proglanguage_id") {
            return 16;
        }
        if (fieldName === "datacode") {
            return -1; // unlimited length
        }
        return 0;
     };//end

}`;