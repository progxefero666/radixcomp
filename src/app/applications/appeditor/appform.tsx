//src\app_front\editapplication\form\appform.tsx

import React, { useRef } from "react";
import { Box, Grid, Text, Flex, Heading, CheckboxCards } from "@radix-ui/themes";
import { XInputText } from "@/radix/input/inptext";

import { Application } from "@/client";
import { InputSelect } from "@/radix/input/inpselect";
import { InputCheck } from "@/radix/input/inputcheck";

export class AppDef {
    //creationdate?: string;
    //updatedate?: string;

    public static readonly NAME_MAXLEN = 50;
    public static readonly REFERENCE_MAXLEN = 50;
    public static readonly AUTHOR_MAXLEN = 100;
    public static readonly OSSYSTEM_MAXLEN = 100;
    public static readonly URL_MAXLEN = 500;
    public static readonly PATH_MAXLEN = 500;
    public static readonly DESCRIPTION_MAXLEN = 255;

    public static readonly fdef_localdev:boolean   = false;
    public static readonly fdef_usedocker:boolean   = false;
    public static readonly fdef_controlusers:boolean= false;
    public static readonly fdef_useui:boolean       = false;
    public static readonly fdef_useagents:boolean   = false;
    public static readonly fdef_consumedb:boolean   = false;
    public static readonly fdef_consumeapi:boolean  = false;
    public static readonly fdef_consumeai:boolean   = false;
    public static readonly fdef_exposedb:boolean    = false;
    public static readonly fdef_exposeapi:boolean   = false;
    
}//end class



/**
 * class AppForm
 */
interface AppFormProps {
    proglanguages: string[];
    apptypes: string[];
    app: Application;
    readonly?: boolean;
    disabled?: boolean
}
export function AppForm({ app, proglanguages, apptypes,
    disabled, readonly }: AppFormProps) {

    const typeRef = useRef<HTMLSelectElement>(null);
    const proglanguageRef = useRef<HTMLSelectElement>(null);

    const nameRef = useRef<HTMLInputElement>(null);
    const osystemRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);
    const referenceRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const urlRef = useRef<HTMLInputElement>(null);
    const pathRef = useRef<HTMLInputElement>(null);

    const localdevRef = useRef<HTMLInputElement>(null);
    const usedockerRef = useRef<HTMLInputElement>(null);
    const controlusersRef = useRef<HTMLInputElement>(null);
    const useuiRef = useRef<HTMLInputElement>(null);
    const useagentsRef = useRef<HTMLInputElement>(null);
    const consumedbRef = useRef<HTMLInputElement>(null);
    const consumeapiRef = useRef<HTMLInputElement>(null);
    const consumeaiRef = useRef<HTMLInputElement>(null);
    const exposedbRef = useRef<HTMLInputElement>(null);
    const exposeapiRef = useRef<HTMLInputElement>(null);


    return (

        <Flex direction="column" gap="2">

            <XInputText name="name" ref={nameRef} label="Name"
                value={app.name} maxlen={AppDef.NAME_MAXLEN}
                readonly={readonly} disabled={disabled} />

            <XInputText name="author" ref={authorRef} label="Auhor"
                value={app.author} maxlen={AppDef.AUTHOR_MAXLEN}
                readonly={readonly} disabled={disabled} />

            <XInputText name="reference" ref={referenceRef} label="reference"
                value={app.reference} maxlen={AppDef.REFERENCE_MAXLEN}
                readonly={readonly} disabled={disabled} />

            <XInputText name="description" ref={descriptionRef} label="Description"
                value={app.description} maxlen={AppDef.DESCRIPTION_MAXLEN}
                readonly={readonly} disabled={disabled} />

            <XInputText name="url" ref={urlRef} label="url"
                value={app.appurl} maxlen={AppDef.URL_MAXLEN}
                readonly={readonly} disabled={disabled} />

            <XInputText name="path" ref={pathRef} label="path"
                value={app.apppath} maxlen={AppDef.PATH_MAXLEN}
                readonly={readonly} disabled={disabled} />

            <InputSelect name="type" ref={typeRef} inline={true}
                label="Type"
                collection={apptypes}
                value={app.apptype}
                readonly={readonly} disabled={disabled} />

            <InputSelect name="proglanguage" ref={proglanguageRef} inline={true}
                label="code lang"
                collection={proglanguages}
                value={app.proglanguage!}
                readonly={readonly} disabled={disabled} />

            <XInputText name="opsystem" ref={osystemRef} inline={true}
                label="system"
                value={app.osystem}
                maxlen={AppDef.OSSYSTEM_MAXLEN}
                readonly={readonly} disabled={disabled} />

            <InputCheck name="localdev" ref={localdevRef} inline={true}
                label="local dev"
                defaultvalue={app.localdev!}
                readonly={readonly} disabled={disabled} />

            <InputCheck name="usedocker" ref={usedockerRef} inline={true}
                label="use docker"
                defaultvalue={app.usedocker!}
                readonly={readonly} disabled={disabled} />

            <InputCheck name="controlusers" ref={controlusersRef!} inline={true}
                label="control users"
                defaultvalue={app.controlusers!}
                readonly={readonly} disabled={disabled} />

            <InputCheck name="useui" ref={useuiRef} inline={true}
                label="use ui"
                defaultvalue={app.useui!}
                readonly={readonly} disabled={disabled} />

            <InputCheck name="useagents" ref={useagentsRef} inline={true}
                label="use agents"
                defaultvalue={app.useagents!}
                readonly={readonly} disabled={disabled} />

            <InputCheck name="consumedb" ref={consumedbRef} inline={true}
                label="consume db"
                defaultvalue={app.consumedb!}
                readonly={readonly} disabled={disabled} />

            <InputCheck name="consumeapi" ref={consumeapiRef} inline={true}
                label="consume api"
                defaultvalue={app.consumeapi!}
                readonly={readonly} disabled={disabled} />

            <InputCheck name="consumeai" ref={consumeaiRef} inline={true}
                label="consume ai"
                defaultvalue={app.consumeai!}
                readonly={readonly} disabled={disabled} />

            <InputCheck name="exposedb" ref={exposedbRef} inline={true}
                label="expose db"
                defaultvalue={app.exposedb!}
                readonly={readonly} disabled={disabled} />

            <InputCheck name="exposeapi" ref={exposeapiRef} inline={true}
                label="expose api"
                defaultvalue={app.exposeapi!}
                readonly={readonly} disabled={disabled} />

        </Flex>

    );

}//end AppForm


/*
<CheckboxCards.Root  
    columns={{ initial: "3", sm: "3" }}
    defaultValue={["1","2","3","4","5","6","7","8","9"]} >

    <CheckboxCards.Item value="1">
        <Flex direction="column" width="100%">
            <Text >local dev</Text>            
        </Flex>
    </CheckboxCards.Item>

    <CheckboxCards.Item value="2">
        <Flex direction="column" width="100%">
            <Text >use docker</Text>            
        </Flex> 
    </CheckboxCards.Item>

    <CheckboxCards.Item value="3">  
        <Flex direction="column" width="100%">
            <Text >control users</Text>            
        </Flex>         
    </CheckboxCards.Item>

    <CheckboxCards.Item value="4">
        <Flex direction="column" width="100%">
            <Text >use ui</Text>            
        </Flex> 
    </CheckboxCards.Item>

    <CheckboxCards.Item value="5">
        <Flex direction="column" width="100%">
            <Text >use agents</Text>            
        </Flex>
    </CheckboxCards.Item>

    <CheckboxCards.Item value="6">
        <Flex direction="column" width="100%">
            <Text >consume db</Text>            
        </Flex>     
    </CheckboxCards.Item>

    <CheckboxCards.Item value="7">
        <Flex direction="column" width="100%">
            <Text >consume api</Text>            
        </Flex> 
    </CheckboxCards.Item>
    <CheckboxCards.Item value="8">
        <Flex direction="column" width="100%">
            <Text >consume ai</Text>            
        </Flex>
    </CheckboxCards.Item>

    <CheckboxCards.Item value="9">
        <Flex direction="column" width="100%">
            <Text >expose db</Text>            
        </Flex>
    </CheckboxCards.Item>


</CheckboxCards.Root>

*/

