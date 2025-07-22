//src\app\testcomp\playground.tsx

import React, { useEffect, useRef, useState } from "react";

import { Link, Flex, Text, Button, Box, Container, Grid } from "@radix-ui/themes";
import { CgConfig } from "@/codegen/cgconfig";
import { TextHelper } from "@/common/helper/texthelper";
import { InputValue } from "@/common/model/inputvalue";
import { Validation } from "@/common/model/validation";

import jsonObj from "@/db/modeljson/tascategory.json";
import { Taskcategory } from "@/db/model/taskcategory";
import { GenerateKeys } from "@/common/helper/generatekeys";
import { Template } from "@/db/model/template";
import { XInputText } from "@/radix/input/inptext";
import { XInputSelect } from "@/radix/input/inpselect";
import { AppMemmory } from "@/front/appmemory";
import { Proglanguage } from "@/db/model/proglanguage";

//const jsonObj:any = JSON.parse(jsonTable.toString());

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

    const [validations,setValidations] = useState<Validation[]>([]);    
    const [taskcategory, setTaskcategory] = useState<Template>(new Template(template_id,null,null,null));

    const proglanguageRef = useRef<HTMLSelectElement>(null);
    const nameRef         = useRef<HTMLInputElement>(null);
    const datacodeRef     = useRef<HTMLInputElement>(null);

    const proglanguages:Proglanguage[] = AppMemmory.readProglanguages();

    useEffect(() => {
        //const itemId:string = GenerateKeys.genAlphaNum16(); 
    }, []);


    return (
        <Box width="100%" p="2" style={layoutStyle} >
  
            <Flex width="100%" direction="row" style={layoutStyle} >
                <Text size="3" style={{ color: 'white' }}>Template Form</Text>
            </Flex>

            <Flex width="100%" direction="column" p="2" style={layoutStyle} >
  
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
                    collection={[]} 
                    defaul="typescript" />    
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