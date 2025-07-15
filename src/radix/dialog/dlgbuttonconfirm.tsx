//src\radix\dialog\dlgbuttonconfirm.tsx

import React from "react";
import { Button, Box, Flex, Text, Dialog } from "@radix-ui/themes";
import { ThemeButtonsStyle, ThemeIconsStyle, ThemeTextStyle } from '@/radix/radixtheme';
import { CheckIcon, Cross2Icon, FilePlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { RadixOpsText } from "../radixconstants";
import { RadixConf } from "../radixconf";


/**
 * DialogForm component
 */
interface CompProps {
    buttontext: string;
    buttonicon: string;
    title: string;
    message: string;
    onconfirm: () => void;
}
export const DialogButtonConfirm = ({ buttontext,buttonicon, title, message, onconfirm }: CompProps) => {

    const renderButton = () => {
        if(buttonicon === RadixConf.ICON_DELETE) {
            return (
                <Button size={ThemeButtonsStyle.BTN_DEF_SIZE}>
                    <TrashIcon  width={ThemeIconsStyle.ICON_DEF_SIZE.width}
                        height={ThemeIconsStyle.ICON_DEF_SIZE.height} />
                    <Text size={ThemeButtonsStyle.BTN_TEXT_SIZE}>
                        {buttontext}
                    </Text>
                </Button>
            )
        }
    }
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

            <Dialog.Content>

                <Dialog.Title>
                    <Text size={ThemeTextStyle.DIALOG_TITLE_SIZE}>{title}</Text>
                </Dialog.Title>

                <Dialog.Description>
                    <Text size={ThemeTextStyle.DEFAULT_SIZE}>{message}</Text>
                </Dialog.Description>

                <Dialog.Close>
                    <Flex width="100%" direction="row" justify="center" gapX="2" mt="2">
                        <Button type="submit"
                            color={ThemeButtonsStyle.COLOR_SAVE}
                            size={ThemeButtonsStyle.BTN_DEF_SIZE}
                            onClick={onconfirm} >
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

            </Dialog.Content>
        </Dialog.Root>
    )

}//end component


/*
//oncancel?: () => void;
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