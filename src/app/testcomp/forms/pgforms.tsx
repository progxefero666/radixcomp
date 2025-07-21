//src\app\testcomp\playground.tsx

import React, { useEffect, useState } from "react";

import { Link, Flex, Text, Button, Box, Container, Grid } from "@radix-ui/themes";
import { CgConfig } from "@/codegen/cgconfig";
import { TextHelper } from "@/common/helper/texthelper";
import { InputValue } from "@/common/model/inputvalue";
import { Validation } from "@/common/model/validation";

import jsonTable from "@/db/modeljson/tascategory.json";

const jsonObj:any = JSON.parse(jsonTable.toString());

export const layoutStyle = {
    background: 'rgb(7, 7, 7)',
    border: '2px solidrgb(98, 97, 98)',
    padding: 'var(--space-2)',
};

/**
 * Template - Page Header
 */
interface CompProps { mode?: string; }

export function PgForms({ mode }: CompProps) {
  
    //const [validations,setValidations] = useState<Validation[]>([]);
    //const [inputValues, setInputValues] = useState<InputValue[]>([]);
    //const jsonObj = JSON.parse(jsonTable);

    useEffect(() => {
        //const codecont: string = XFormsGen.generateForm(jsonTemplate);
        console.log(jsonObj);
    }, []);


    return (
        <Flex width="100%" direction="column" style={layoutStyle} >
  
        </Flex>
    );

}//end component


export const jsonTemplate: string =
`{
    "name": "taskcategory",
    "fields":[
        {
            "name": "id",
            "type": "text",
            "required": true,
            "generated": false,
            "default": null,
            "format": null,
            "pk": true,
            "fk": false,
            "minlen": null,
            "maxlen": 16,
            "validation":{"result":true,"message":null},
            "relations": null
        },
        {
            "name": "workflow_id",
            "type": "text",
            "required": true,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": true,
            "minlen": null,
            "maxlen": 16,
            "validation":{"result":true,"message":null},
            "relations": [
                {
                    "table": "workflow",
                    "field": "id"
                }
            ]
        },
        {
            "name": "name",
            "type": "text",
            "required": true,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": 100,
            "validation":{"result":true,"message":null},
            "relations": null
        },
        {
            "name": "description",
            "type": "text",
            "required": false,
            "generated": false,
            "default": null,
            "format": null,
            "pk": false,
            "fk": false,
            "minlen": null,
            "maxlen": 100,
            "validation":{"result":true,"message":null},
            "relations": null
        }
    ]
}
`;