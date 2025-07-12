//src/radix/dialog/dlginputoption.tsx
import React, { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";

import { Label } from "radix-ui";
import { Button, Box, Flex, IconButton, Text, Dialog, TextField } from "@radix-ui/themes";

import { CheckIcon, Cross2Icon, FilePlusIcon } from "@radix-ui/react-icons";

import { InputItem, Option } from "@/common/models";
import { ThemeButtonsStyle, ThemeIconsStyle, ThemeTextStyle } from '@/radix/radixtheme';
import { OPERATIONS } from '@/common/constants';

interface CompProps {
    buttontext: string;
    title: string;
    items: InputItem[];
    onsave: (values: InputItem[]) => void;
}

export const DialogForm = ({buttontext, title, items, onsave }: CompProps) => {

    //const onCancel = () => { if (oncancel) { oncancel(); } }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        for (let idx = 0; idx < items.length; idx++) {
            items[idx].value = formData.get(items[idx].id)?.toString();
        }
        onsave(items);
    };//end

    const renderFormInputs = () => {
        return (
            <Flex width="100%" direction="column" gapY="2" >
                {items.map((item, index) => (
                    <Box key={index.toString()}>
                        <fieldset>
                            <Label.Root>{items[index].label}</Label.Root>
                            <TextField.Root name={items[index].id} 
                                            placeholder={items[index].placeholder}
                                radius="small" />
                        </fieldset>                          
                    </Box>                 
                ))}
            </Flex>
        )
    };//end

    return (
        <Dialog.Root >
            <Dialog.Trigger>
                <Button size={ThemeButtonsStyle.BTN_DEF_SIZE}>
                    <FilePlusIcon width={ThemeIconsStyle.ICON_DEF_SIZE.width}
                                  height={ThemeIconsStyle.ICON_DEF_SIZE.height} />
                    <Text size={ThemeButtonsStyle.BTN_TEXT_SIZE}>
                        {buttontext}
                    </Text>                                  
                </Button>
            </Dialog.Trigger>

            <Dialog.Content className="DialogContent">

                <Dialog.Title className="DialogTitle">
                    <Text size={ThemeTextStyle.DIALOG_TITLE_SIZE}>{title}</Text>
                </Dialog.Title>

                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => 
                                {event.preventDefault();onSubmit(event);}}>

                    {renderFormInputs()}
  
                    <Dialog.Close >

                        <Flex width="100%" direction="row" justify="center" gapX="2" mt="2">
                            <Button type="submit"
                                color={ThemeButtonsStyle.COLOR_SAVE}
                                size={ThemeButtonsStyle.BTN_DEF_SIZE}>
                                {OPERATIONS.SAVE}
                                <CheckIcon width={ThemeIconsStyle.ICON_DEF_SIZE.width}
                                    height={ThemeIconsStyle.ICON_DEF_SIZE.height} />
                            </Button>
                            <Button color={ThemeButtonsStyle.COLOR_CLOSE}
                                size={ThemeButtonsStyle.BTN_DEF_SIZE} >
                                {OPERATIONS.CANCEL}
                                <Cross2Icon width={ThemeIconsStyle.ICON_DEF_SIZE.width}
                                    height={ThemeIconsStyle.ICON_DEF_SIZE.height} />
                            </Button>
                        </Flex>

                    </Dialog.Close>
                </form>

            </Dialog.Content>

        </Dialog.Root>
    )

}//end component

/*
//oncancel?: () => void;
<Dialog.Description className="DialogDescription">
    Make changes
</Dialog.Description>

with defaultValue
.......................................................
<TextField.Root name="item_0" id="item_0"
    defaultValue={items[0].value}
    radius="small" placeholder="input ..." />

with onCancelCaptureEvent
.......................................................
<Button  color="yellow" size="2" onClick={onCancel} >
    Cancel
    <Cross2Icon width="20px" height="20px" />
</Button>    

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
*/