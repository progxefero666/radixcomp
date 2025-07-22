//src\app_front\editapplication\form\appform.tsx

import React, { useEffect, useRef, useState } from "react";
import { Flex } from "@radix-ui/themes";
import { format, addDays, differenceInDays } from "date-fns";

import { XInputText } from "@/radix/input/inptext";
import { XInputSelect } from "@/radix/input/inpselect";
import { XInputCheck } from "@/radix/input/inputcheck";
import { XInputNumber } from "@/radix/input/inpnumber";
import { XInputDate } from "@/radix/input/inpdate";


import { XInputTextArea } from "@/radix/input/inptextarea";
import { Application } from "../application";
import { InputValue } from "@/common/model/inputvalue";



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
 *  format(new Date(), "yyyy/MM/dd");
 */
interface AppFormProps {
    apptypes: string[];
    item: Application;
}
export function AppForm({ item, apptypes,}: AppFormProps) {

    const [inputValues, setInputValues] = 
        useState<Map<string,any>>(new Map<string,any>());


    const item_date: Date = new Date();

    const apptypesRef = useRef<HTMLSelectElement>(null);

    const nameRef = useRef<HTMLInputElement>(null);
    const osystemRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);
    const repositoryRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const urlRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const localdevRef = useRef<HTMLInputElement>(null);
    const usedockerRef = useRef<HTMLInputElement>(null);
    const controlusersRef = useRef<HTMLInputElement>(null);
    const useuiRef = useRef<HTMLInputElement>(null);
    const useagentsRef = useRef<HTMLInputElement>(null);
    const consumedbRef = useRef<HTMLInputElement>(null);
  

    useEffect(() => {
        const map = new Map<string, any>();
        map.set("name",         item.name        || null);
        map.set("author",       item.author      || null);        
        map.set("apptype_id",   item.apptype_id  || null);
        map.set("repository",   item.repository  || null);
        map.set("description",  item.description || null);
        map.set("url",          item.appurl      || null); 
        map.set("osystem",      item.osystem     || null);
        map.set("localdev",     item.localdev    || false);
        map.set("usedocker",    item.usedocker   || false);    
        map.set("useui",        item.useui       || false);
        map.set("useagents",    item.useagents   || false);
        map.set("consumedb",    item.consumedb   || false);
        setInputValues(map);

    }, []);

    const valideInput = (inputName:string) => {
        
    };

    const validation = () => {
    };

    const onSubmit = () => {
        inputValues.get("name") == nameRef.current?.value;
        inputValues.get("apptype_id") == apptypesRef.current?.value;
        inputValues.get("author") == authorRef.current?.value;
        inputValues.get("repository") == repositoryRef.current?.value;
        inputValues.get("description") == descriptionRef.current?.value;
        inputValues.get("url") == urlRef.current?.value;
        inputValues.get("osystem") == osystemRef.current?.value;
        inputValues.get("localdev") == localdevRef.current?.checked;
        inputValues.get("usedocker") == usedockerRef.current?.checked;
        inputValues.get("controlusers") == controlusersRef.current?.checked;
        inputValues.get("useui") == useuiRef.current?.checked;
        inputValues.get("useagents") == useagentsRef.current?.checked;
        inputValues.get("consumedb") == consumedbRef.current?.checked;
        inputValues.get("inputdate") == dateRef.current?.value;
    };//end

    /*

        const nameRef = useRef<HTMLInputElement>(null);        
        for(let idx = 0; idx < inputValues.length; idx++) {
            formData[idx].value = nameRef.current?.value || null;
            `new InputValue("name", null)`
        }
        const validation: boolean = true; //validate(formData);
        if (!validation) {
            alert("Validation error");
            return;
        }
        
    */

    return (

        <Flex direction="column" gap="2">

            <XInputText
                name="name"
                label="Name"
                ref={nameRef}                
                value={item.name}
                maxlen={5} />

            {/*
            <XInputSelect
                name="type"
                ref={typeRef}
                inline={true}
                label="Type"
                collection={apptypes}
                value={item.apptype}
                readonly={readonly}
                disabled={disabled} />
            */}

            <XInputText
                name="author"
                ref={authorRef} 
                label="Auhor"
                value={item.author!}
                maxlen={AppDef.AUTHOR_MAXLEN} />

            <XInputText
                name="repository"
                ref={repositoryRef}
                label="repository"
                value={item.repository!}
                maxlen={AppDef.REFERENCE_MAXLEN}/>

            <XInputText
                name="description"
                ref={descriptionRef}
                label="Description"
                value={item.description!}
                maxlen={AppDef.DESCRIPTION_MAXLEN} />

            <XInputText 
                name="url" 
                ref={urlRef} 
                label="url"
                value={item.appurl!} 
                maxlen={AppDef.URL_MAXLEN} />


            <XInputTextArea
                name="opsystem"
                ref={osystemRef}
                label="system"
                defaul={item.osystem!}
                maxlen={AppDef.OSSYSTEM_MAXLEN} />

            <XInputNumber
                name="opsystem"
                ref={osystemRef}
                label="system"
                value={item.osystem!}
                step={1}/>

            <XInputDate
                name="inputdate"
                ref={dateRef}
                label="creation date"
                value={item_date} />

            <XInputCheck
                name="localdev"
                ref={localdevRef}
                label="local dev"
                value={item.localdev!} />

            <XInputCheck
                name="usedocker"
                ref={usedockerRef}
                label="use docker"
                value={item.usedocker!} />

            <XInputCheck
                ref={controlusersRef!}
                name="controlusers"                
                label="control users"
                value={item.controluser!} />

            <XInputCheck
                ref={useuiRef}
                name="useui"                
                label="use ui"
                value={item.useui!} />

            <XInputCheck
                ref={useagentsRef}
                name="useagents"                
                inline={true}
                label="use agents"
                value={item.useagents!} />

            <XInputCheck
                ref={consumedbRef}
                inline={true}
                name="consumedb" 
                label="consume db"
                value={item.consumedb!}/>

        </Flex>

    );

}//end AppForm

