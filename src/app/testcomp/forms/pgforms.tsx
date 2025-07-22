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
import { ButtonsStyle, COMP_BORDER_STYLE } from "@/radix/radixtheme";
import { DB_ITEM_CMD_TEXT } from "@/common/database/dbkernel";
import { Constants, OpConstants } from "@/common/constants";
import { XForms } from "@/codegen/forms/xforms";



export const layoutStyle = {
    background: 'rgba(32, 32, 32, 1)',
    border: '2px solidrgb(98, 97, 98)'
};

export const barStyle = {
    borderBottom: '1px solid rgb(98, 97, 98)',
    borderTop: '1px solid rgb(98, 97, 98)',
};

/**
 * Desktop Forms test
 * const [validations,setValidations] = useState<Validation[]>([]);
 */
interface CompProps { template_id: string; }

export function PgForms({ template_id }: CompProps) {

    const [ready, setReady] = useState<boolean>(false);
    const [validations,setValidations] = useState<Validation[]>([]);    
    const [templates, setTemplates] = useState<Template>(new Template(template_id,null,null,null));

    const proglanguageRef = useRef<HTMLSelectElement>(null);
    const nameRef         = useRef<HTMLInputElement>(null);
    const datacodeRef     = useRef<HTMLInputElement>(null);

    const proglanguages:Option[] = AppMemmory.readProglanguages();

    useEffect(() => {
        //const itemId:string = GenerateKeys.genAlphaNum16(); 
    }, []);


    const onFormSubmit = () => {

    };//end

    const onFormCancel = () => {

    };//end

    return (
        <Box width="100%" py="2" px="4" style={layoutStyle} >
  
            <Flex width="100%" direction="row" pb="1" style={layoutStyle}  >
                <Text size="3" style={{ color: 'white' }}>Template Form</Text>
            </Flex>
            
            <Separator orientation="horizontal" size="4" />

            <Flex width="100%" direction="column" gapY="2" pt="2" mb="2" style={layoutStyle} >
  
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

            
            <Flex direction="row" justify="center" align="center" py="2" gapX="2" mt="2" style={barStyle} >

                <Button color={ButtonsStyle.COLOR_SAVE}
                        radius={ButtonsStyle.DEF_RADIUS}                        
                        size={ButtonsStyle.DEF_SIZE}
                        onClick={() => onFormSubmit()} >
                    {DB_ITEM_CMD_TEXT.SAVE}
                </Button>

                <Button color={ButtonsStyle.COLOR_SAVE}
                        radius={ButtonsStyle.DEF_RADIUS}                        
                        size={ButtonsStyle.DEF_SIZE}
                        onClick={() => onFormCancel()} >
                    {DB_ITEM_CMD_TEXT.CANCEL}
                </Button>

            </Flex>

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