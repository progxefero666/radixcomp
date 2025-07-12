//src/radix/dialog/dlginputoption.tsx
import React, { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";

import { Label } from "radix-ui";
import { Button, Box, Flex, IconButton, Text, Dialog, TextField } from "@radix-ui/themes";

import { Cross2Icon } from "@radix-ui/react-icons";

import { InputItem, Option } from "@/common/models";

interface CompProps {
    title:string;
    items: InputItem[];
    onsave: (values: InputItem[]) => void;
    oncancel?: () => void;
}

export const DialogForm = ({title, items, onsave, oncancel }: CompProps) => {

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const val0 = formData.get("item_0")?.toString();
        const val1 = formData.get("item_1")?.toString();

        items[0].value = val0;
        items[1].value = val1;
        onsave(items);
    };
    
    const onCancel = () => {
        if(oncancel) {
            oncancel();
        }
    }

    return (
        <Dialog.Root >
            <Dialog.Trigger>
                <Button size="1">add</Button>
            </Dialog.Trigger>

            <Dialog.Content className="DialogContent">

                <Dialog.Title className="DialogTitle">{title}</Dialog.Title>

                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {onSubmit(event);}}>

                    <fieldset className="Fieldset">
                        <Label.Root htmlFor="item_0">
                            {items[0].label}
                        </Label.Root>
                        <TextField.Root name="item_0" id="item_0"
                            defaultValue={items[0].value}
                            radius="small" placeholder="input ..." />
                    </fieldset>

                    <fieldset className="Fieldset">
                        <Label.Root htmlFor="item_1">
                            {items[1].label}
                        </Label.Root>
                        <TextField.Root name="item_1" id="item_1"
                            defaultValue={items[1].value}
                            radius="small" placeholder="input ..." />
                    </fieldset>

                    <div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
                        <Dialog.Close >
                            <Button type="submit" color="green" size="2" >
                                Save
                                <Cross2Icon />
                            </Button>
                        </Dialog.Close>
                    </div>

                </form>

                <Dialog.Close>
                    <Button color="yellow" size="2" onClick={onCancel} >
                        Cancel
                        <Cross2Icon />
                    </Button>
                </Dialog.Close>

            </Dialog.Content>


        </Dialog.Root>
    )

}//end component

/*

<Dialog.Description className="DialogDescription">
    Make changes
</Dialog.Description>
*/