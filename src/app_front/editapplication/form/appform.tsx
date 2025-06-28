//src\app_front\editapplication\form\appform.tsx

import React, { useRef } from "react";
import { Box, Grid, Flex, Heading } from "@radix-ui/themes";
import { InputTextComponent } from "@/radix/input/inptext";
import { AppDef } from "../editapplication";
import { Application } from "@/client";
import { InputSelect } from "@/radix/input/inpselect";
import { InputCheck } from "@/radix/input/inputcheck";


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

            <InputTextComponent name="name" ref={nameRef} label="Name"
                                value={app.name} maxlen={AppDef.NAME_MAXLEN}
                                disabled={disabled} />

            <InputTextComponent name="author" ref={authorRef} label="Auhor"
                                value={app.author} maxlen={AppDef.AUTHOR_MAXLEN}
                                disabled={disabled} />

            <InputTextComponent name="reference" ref={referenceRef} label="reference"
                                value={app.reference} maxlen={AppDef.REFERENCE_MAXLEN}
                                disabled={disabled} />

            <InputTextComponent name="description" ref={descriptionRef} label="Description"
                                value={app.description} maxlen={AppDef.DESCRIPTION_MAXLEN}
                                disabled={disabled} />

            <InputTextComponent name="url" ref={urlRef} label="url"
                                value={app.appurl} maxlen={AppDef.URL_MAXLEN}
                                disabled={disabled} />

            <InputTextComponent name="path" ref={pathRef} label="path"
                                value={app.apppath} maxlen={AppDef.PATH_MAXLEN}
                                disabled={disabled} />

            <InputSelect name="type" ref={typeRef} inline={true}
                         label="Type"
                         collection={[]}
                         value={app.apptype}
                         disabled={disabled} />

            <InputSelect name="proglanguage" ref={proglanguageRef} inline={true}
                        label="code lang"
                        collection={[]}
                        value={app.proglanguage!}
                        disabled={disabled} />

            <InputTextComponent name="opsystem" ref={osystemRef} inline={true}
                                label="system"
                                value={app.osystem}
                                maxlen={AppDef.OSSYSTEM_MAXLEN}
                                disabled={disabled} />

            <InputCheck name="localdev" ref={localdevRef} inline={true}
                        label="local dev"
                        defaultvalue={app.localdev!}
                        disabled={disabled} />

            <InputCheck name="usedocker" ref={usedockerRef} inline={true}
                        label="use docker"
                        defaultvalue={app.usedocker!}
                        disabled={disabled} />

            <InputCheck name="controlusers" ref={controlusersRef!} inline={true}
                        label="control users"
                        defaultvalue={app.controlusers!}
                        disabled={disabled} />

            <InputCheck name="useui" ref={useuiRef} inline={true}
                        label="use ui"
                        defaultvalue={app.useui!}
                        disabled={disabled} />

            <InputCheck name="useagents" ref={useagentsRef} inline={true}
                        label="use agents"
                        defaultvalue={app.useagents!}
                        disabled={disabled} />

            <InputCheck name="consumedb" ref={consumedbRef} inline={true}
                        label="consume db"
                        defaultvalue={app.consumedb!}
                        disabled={disabled} />

            <InputCheck name="consumeapi" ref={consumeapiRef} inline={true}
                        label="consume api"
                        defaultvalue={app.consumeapi!}
                        disabled={disabled} />

            <InputCheck name="consumeai" ref={consumeaiRef} inline={true}
                        label="consume ai"
                        defaultvalue={app.consumeai!}
                        disabled={disabled} />

            <InputCheck name="exposedb" ref={exposedbRef} inline={true}
                        label="expose db"
                        defaultvalue={app.exposedb!}
                        disabled={disabled} />

            <InputCheck name="exposeapi" ref={exposeapiRef} inline={true}
                        label="expose api"
                        defaultvalue={app.exposeapi!}
                        disabled={disabled} />

        </Flex>

    );

}//end AppForm


