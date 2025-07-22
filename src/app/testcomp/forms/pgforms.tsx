//src\app\testcomp\playground.tsx

import React, { useEffect, useRef, useState } from "react";

import { Link, Flex, Text, Button, Box, Container, Grid } from "@radix-ui/themes";
import { Option } from "@/common/model/option";
import { Validation } from "@/common/model/validation";

import { XInputText } from "@/radix/input/inptext";
import { XInputSelect } from "@/radix/input/inpselect";

import { Template } from "@/db/model/template";
import { AppMemmory } from "@/front/appmemory";
import { XInputTextArea } from "@/radix/input/inptextarea";
import { ButtonsStyle, COMP_BORDER_STYLE } from "@/radix/radixtheme";
import { DlgBtnDeleteConfirm } from "@/radix/dialog/dlgbtndelete";
import { DB_ITEM_CMD_TEXT } from "@/common/database/dbkernel";
import { OpConstants } from "@/common/constants";


export const layoutStyle = {
    background: 'rgb(7, 7, 7)',
    border: '2px solidrgb(98, 97, 98)',
    padding: 'var(--space-2)'
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

    const onSubmit = (commandId: string) => {

    };//end

    return (
        <Box width="100%" p="2" style={layoutStyle} >
  
            <Flex width="100%" direction="row" style={layoutStyle} >
                <Text size="3" style={{ color: 'white' }}>Template Form</Text>
            </Flex>

            <Flex width="100%" direction="column" gapY="1" style={layoutStyle} >
  
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
            
            <Flex direction="row" justify="center" align="center" gapX="2" 
                  style={COMP_BORDER_STYLE} >

                <Button color={ButtonsStyle.COLOR_SAVE}
                        radius={ButtonsStyle.DEF_RADIUS}                        
                        size={ButtonsStyle.DEF_SIZE}
                        onClick={() => onSubmit(OpConstants.OP_SAVE)} >
                    {DB_ITEM_CMD_TEXT.SAVE}
                </Button>

                <Button color={ButtonsStyle.COLOR_SAVE}
                        radius={ButtonsStyle.DEF_RADIUS}                        
                        size={ButtonsStyle.DEF_SIZE}
                        onClick={() => onSubmit(OpConstants.OP_CANCEL)} >
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