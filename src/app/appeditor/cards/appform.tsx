//src\app_front\editapplication\form\appform.tsx

import React, { useRef } from "react";
import { Flex } from "@radix-ui/themes";
import { format, addDays, differenceInDays } from "date-fns";

import { XInputText } from "@/radix/input/inptext";
import { XInputSelect } from "@/radix/input/inpselect";
import { InputCheck } from "@/radix/input/inputcheck";
import { XInputNumber } from "@/radix/input/inpnumber";
import { XInputDate } from "@/radix/input/inpdate";


import { XInputTextArea } from "@/radix/input/inptextarea";
import { Application } from "@/db/model/application";



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

    public static readonly fdef_localdev: boolean = false;
    public static readonly fdef_usedocker: boolean = false;
    public static readonly fdef_controlusers: boolean = false;
    public static readonly fdef_useui: boolean = false;
    public static readonly fdef_useagents: boolean = false;
    public static readonly fdef_consumedb: boolean = false;
    public static readonly fdef_consumeapi: boolean = false;
    public static readonly fdef_consumeai: boolean = false;
    public static readonly fdef_exposedb: boolean = false;
    public static readonly fdef_exposeapi: boolean = false;

}//end class



/**
 * class AppForm
 */
interface AppFormProps {
    proglanguages: string[];
    apptypes: string[];
    item: Application;
    readonly?: boolean;
    disabled?: boolean
}
export function AppForm({ item, proglanguages, apptypes, disabled, readonly }: AppFormProps) {

    //const item_date: string = format(new Date(), "yyyy/MM/dd");
    const item_date: Date = new Date();
    const dateRef = useRef<HTMLInputElement>(null);

    const typeRef = useRef<HTMLSelectElement>(null);
    const proglanguageRef = useRef<HTMLSelectElement>(null);

    const nameRef = useRef<HTMLInputElement>(null);
    const osystemRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);
    const repositoryRef = useRef<HTMLInputElement>(null);
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

            <XInputText
                name="name"
                label="Name"
                ref={nameRef}                
                defaul={item.anname}
                maxlen={5}
                readonly={readonly} 
                disabled={disabled} />

            <XInputText
                name="author"
                ref={authorRef} 
                label="Auhor"
                defaul={item.author}
                maxlen={AppDef.AUTHOR_MAXLEN}
                readonly={readonly}
                disabled={disabled} />

            <XInputText
                name="repository"
                ref={repositoryRef}
                label="repository"
                defaul={item.repository}
                maxlen={AppDef.REFERENCE_MAXLEN}
                readonly={readonly}
                disabled={disabled} />

            <XInputText
                name="description"
                ref={descriptionRef}
                label="Description"
                defaul={item.description}
                maxlen={AppDef.DESCRIPTION_MAXLEN}
                readonly={readonly}
                disabled={disabled} />

            <XInputText 
                name="url" 
                ref={urlRef} 
                label="url"
                defaul={item.appurl} 
                maxlen={AppDef.URL_MAXLEN}
                readonly={readonly} 
                disabled={disabled} />

            <XInputText
                name="path"
                ref={pathRef}
                label="path"
                defaul={item.apppath}
                maxlen={AppDef.PATH_MAXLEN}
                readonly={readonly}
                disabled={disabled} />

            {/*
            <XInputSelect
                name="type"
                ref={typeRef}
                inline={true}
                label="Type"
                collection={apptypes}
                default={item.apptype}
                readonly={readonly}
                disabled={disabled} />

            <XInputSelect
                name="proglanguage"
                ref={proglanguageRef}
                label="code lang"
                collection={proglanguages}
                default={item.proglanguage!}
                readonly={readonly}
                disabled={disabled} />

            <XInputText
                name="opsystem"
                ref={osystemRef}
                label="system"
                default={item.osystem}
                maxlen={AppDef.OSSYSTEM_MAXLEN}
                readonly={readonly}
                disabled={disabled} /> 
            */}

            <XInputTextArea
                name="opsystem"
                ref={osystemRef}
                label="system"
                defaul={item.osystem}
                maxlen={AppDef.OSSYSTEM_MAXLEN}
                readonly={readonly}
                disabled={disabled} />

            <XInputNumber
                name="opsystem"
                ref={osystemRef}
                label="system"
                value={item.osystem}
                step={1}
                readonly={readonly}
                disabled={disabled} />

            <XInputDate
                name="inputdate"
                ref={dateRef}
                label="creation date"
                value={item_date}
                readonly={readonly}
                disabled={disabled} />

            <InputCheck
                name="localdev"
                ref={localdevRef}
                label="local dev"
                value={item.localdev!}
                readonly={readonly}
                disabled={disabled} />

            <InputCheck
                name="usedocker"
                ref={usedockerRef}
                label="use docker"
                value={item.usedocker!}
                readonly={readonly}
                disabled={disabled} />

            <InputCheck
                name="controlusers"
                ref={controlusersRef!}
                label="control users"
                value={item.controlusers!}
                readonly={readonly}
                disabled={disabled} />

            <InputCheck
                name="useui"
                ref={useuiRef}
                label="use ui"
                value={item.useui!}
                readonly={readonly}
                disabled={disabled} />

            <InputCheck
                name="useagents"
                ref={useagentsRef}
                label="use agents"
                value={item.useagents!}
                readonly={readonly}
                disabled={disabled} />

            <InputCheck
                name="consumedb" ref={consumedbRef}
                label="consume db"
                value={item.consumedb!}
                readonly={readonly} disabled={disabled} />

            <InputCheck name="consumeapi" ref={consumeapiRef}
                label="consume api"
                value={item.consumeapi!}
                readonly={readonly} disabled={disabled} />

            <InputCheck name="consumeai" ref={consumeaiRef}
                label="consume ai"
                value={item.consumeai!}
                readonly={readonly} disabled={disabled} />

            <InputCheck name="exposedb" ref={exposedbRef}
                label="expose db"
                value={item.exposedb!}
                readonly={readonly} disabled={disabled} />

            <InputCheck name="exposeapi" ref={exposeapiRef}
                label="expose api"
                value={item.exposeapi!}
                readonly={readonly} disabled={disabled} />

        </Flex>

    );

}//end AppForm

