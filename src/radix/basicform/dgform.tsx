//src/radix/dialog/dlginputoption.tsx

import React from "react";
import { Label } from "radix-ui";
import { Button, Box, Flex, Text, Dialog, TextField } from "@radix-ui/themes";

import { ButtonsStyle, IconsStyle, TextStyle } from '@/radix/radixtheme';
import { CheckIcon, Cross2Icon, FilePlusIcon } from "@radix-ui/react-icons";
import { InputField } from "@/common/model/inputfield";



/**
 * DialogForm component
 */
interface CompProps {
    buttontext: string;
    title: string;
    items: InputField[];
    onsave: (values: InputField[]) => void;
}
export const DialogForm = ({ buttontext, title, items, onsave }: CompProps) => {

    //const onCancel = () => { if (oncancel) { oncancel(); } }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        for (let idx = 0; idx < items.length; idx++) {
            items[idx].value = formData.get(items[idx].id)?.toString();
        }
        onsave(items);
    };//end

    const renderInput = (input: InputField) => {
        return (
            <fieldset>
                <Label.Root>{input.label}</Label.Root>
                <TextField.Root name={input.id} type="text"
                    placeholder={input.placeholder}
                    radius="small" />
            </fieldset>
        )
    };//end

    return (
        <Dialog.Root>

            <Dialog.Trigger>
                <Button size={ButtonsStyle.DEF_SIZE}>
                    <FilePlusIcon width={IconsStyle.DEF_HEIGHT}
                        height={IconsStyle.DEF_WIDTH} />
                    <Text size={ButtonsStyle.TEXT_SIZE}>
                        {buttontext}
                    </Text>
                </Button>
            </Dialog.Trigger>

            {/*<Dialog.Description>description</Dialog.Description>*/}
            <Dialog.Content>

                <Dialog.Title>
                    <Text size={TextStyle.SIZE_TITLE_DIALOG}>{title}</Text>
                </Dialog.Title>

                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); onSubmit(event); }}>
                    <Flex width="100%" direction="column" gapY="2" >
                        {items.map((item, index) => (
                            <Box key={index.toString()}>
                                {renderInput(item)}
                            </Box>
                        ))}
                    </Flex>
                    <Dialog.Close>
                        <Flex width="100%" direction="row" justify="center" gapX="2" mt="2">
                            <Button type="submit"
                                color={ButtonsStyle.COLOR_SAVE}
                                size={ButtonsStyle.DEF_SIZE}>
                                "save"
                                <CheckIcon width={IconsStyle.DEF_HEIGHT}
                                    height={IconsStyle.DEF_WIDTH} />
                            </Button>
                            <Button color={ButtonsStyle.COLOR_CLOSE}
                                size={ButtonsStyle.DEF_SIZE} >
                                "Cancel"
                                <Cross2Icon width={IconsStyle.DEF_HEIGHT}
                                    height={IconsStyle.DEF_WIDTH} />
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