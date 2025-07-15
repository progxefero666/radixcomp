//src/radix/dialog/dlginputoption.tsx

import React from "react";
import { Label } from "radix-ui";
import { Button, Box, Flex, Text, Dialog, TextField } from "@radix-ui/themes";

import { ThemeButtonsStyle, ThemeIconsStyle, ThemeTextStyle } from '@/radix/radixtheme';
import { BarSubmit } from "@/radix/cbars/barsubmit";
import { CheckIcon, Cross2Icon, FilePlusIcon } from "@radix-ui/react-icons";
import { InputField } from "@/common/model/inputfield";
import { OPERATIONS } from "@/common/constants";
import { RadixOpsText } from "../radixconstants";


/**
 * DialogForm component
 */
interface CompProps {
    buttontext: string;
    title: string;
    item: InputField;
    onsave: (values: InputField) => void;
}
export const FieldTextDialog = ({ buttontext, title, item, onsave }: CompProps) => {

    //const onCancel = () => { if (oncancel) { oncancel(); } }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        item.value = formData.get(item.id)?.toString();
        onsave(item);
    };//end

    const renderInput = (input: InputField) => {
        return (
            <fieldset>
                <Label.Root>{input.label}</Label.Root>
                <TextField.Root name={input.id}
                    placeholder={input.placeholder}
                    radius="small" />
            </fieldset>
        )
    };//end

    return (
        <Dialog.Root>

            <Dialog.Trigger>
                <Button size={ThemeButtonsStyle.BTN_DEF_SIZE}>
                    <FilePlusIcon width={ThemeIconsStyle.ICON_DEF_SIZE.width}
                        height={ThemeIconsStyle.ICON_DEF_SIZE.height} />
                    <Text size={ThemeButtonsStyle.BTN_TEXT_SIZE}>
                        {buttontext}
                    </Text>
                </Button>
            </Dialog.Trigger>

            {/*<Dialog.Description>description</Dialog.Description>*/}
            <Dialog.Content>

                <Dialog.Title>
                    <Text size={ThemeTextStyle.DIALOG_TITLE_SIZE}>{title}</Text>
                </Dialog.Title>

                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); onSubmit(event); }}>
                    <Flex width="100%" direction="column" gapY="2" >
                        <fieldset>
                            <Label.Root>{item.label}</Label.Root>
                            <TextField.Root name={item.id}
                                placeholder={item.placeholder}
                                radius="small" />
                        </fieldset>
                    </Flex>
                    <Dialog.Close>
                        <Flex width="100%" direction="row" justify="center" gapX="2" mt="2">
                            <Button type="submit"
                                color={ThemeButtonsStyle.COLOR_SAVE}
                                size={ThemeButtonsStyle.BTN_DEF_SIZE}>
                                {RadixOpsText.OK}
                                <CheckIcon width={ThemeIconsStyle.ICON_DEF_SIZE.width}
                                    height={ThemeIconsStyle.ICON_DEF_SIZE.height} />
                            </Button>
                            <Button color={ThemeButtonsStyle.COLOR_CLOSE}
                                size={ThemeButtonsStyle.BTN_DEF_SIZE} >
                                {RadixOpsText.CANCEL}
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