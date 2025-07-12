//src/radix/dialog/dlginputoption.tsx
import React, { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";

import { Label } from "radix-ui";
import { Button, Box, Flex, IconButton, Text, Dialog, TextField } from "@radix-ui/themes";

import { CheckIcon, Cross2Icon, FilePlusIcon } from "@radix-ui/react-icons";

import { InputItem, Option } from "@/common/models";

interface CompProps {
    title: string;
    items: InputItem[];
    onsave: (values: InputItem[]) => void;
    oncancel?: () => void;
}

export const DialogForm = ({ title, items, onsave, oncancel }: CompProps) => {

    const onCancel = () => { if (oncancel) { oncancel(); } }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        for (let idx = 0; idx < items.length; idx++) {
            items[idx].value = formData.get(items[idx].id)?.toString();
        }
        onsave(items);
    };

    return (
        <Dialog.Root >
            <Dialog.Trigger>
                <Button size="2">
                    <FilePlusIcon  width="20px" height="20px" />
                    add
                </Button>
            </Dialog.Trigger>

            <Dialog.Content className="DialogContent">

                <Dialog.Title className="DialogTitle">
                    <Text size="3">{title}</Text>
                </Dialog.Title>

                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    onSubmit(event); }}>

                    <Flex width="100%" direction="column" gapY="2" >
                        <fieldset>
                            <Label.Root>{items[0].label}</Label.Root>
                            <TextField.Root name={items[0].id} placeholder={items[0].placeholder}
                                radius="small" />
                        </fieldset>

                        <fieldset >
                            <Label.Root >{items[1].label}</Label.Root>
                            <TextField.Root name={items[1].id} placeholder={items[1].placeholder}
                                radius="small" />
                        </fieldset>
                    </Flex>


                    <Dialog.Close >
                        <Flex width="100%" direction="row" justify="center" gapX="2" mt="2">
                            <Button type="submit" color="green" size="2" >
                                Save
                                <CheckIcon width="20px" height="20px" />
                            </Button>
                            <Button color="yellow" size="2" onClick={onCancel} >
                                Cancel
                                <Cross2Icon width="20px" height="20px" />
                            </Button>
                        </Flex>
                    </Dialog.Close>
                </form>

            </Dialog.Content>

        </Dialog.Root>
    )

}//end component

/*

<Dialog.Description className="DialogDescription">
    Make changes
</Dialog.Description>

with defaultValue
.......................................................
<TextField.Root name="item_0" id="item_0"
    defaultValue={items[0].value}
    radius="small" placeholder="input ..." />
*/