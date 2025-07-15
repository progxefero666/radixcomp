//src/radix/dialog/dlginputoption.tsx

import React from "react";
import { Label } from "radix-ui";
import { Button, Box, Flex, Text, Dialog, TextField, IconButton } from "@radix-ui/themes";

import { ThemeButtonsStyle, ThemeIconsStyle, ThemeTextStyle } from '@/radix/radixtheme';
import { BarSubmit } from "@/radix/cbars/barsubmit";
import { ArrowUpIcon, CheckIcon, Cross2Icon, FilePlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { InputField } from "@/common/model/inputfield";
import { OPERATIONS } from "@/common/constants";
import { RadixOpsText } from "../radixconstants";
import { TInputText } from "../radixtypes";
import { RadixConf } from "../radixconf";


/**
 * DialogForm component
 */
interface CompProps {
    icon: string;
    title: string;
    message: string;
    onconfirm: () => void;
}
export const DialogIconConfirm = ({ icon, title, message, onconfirm }: CompProps) => {

    const renderIcon = () => {
        if(icon === RadixConf.ICON_DELETE) {
            return (<TrashIcon />)
        }
    }

    return (
        <Dialog.Root >

            <Dialog.Trigger>
                <IconButton variant={RadixConf.VARIANTS.solid} >
                    {renderIcon()}
                </IconButton>
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