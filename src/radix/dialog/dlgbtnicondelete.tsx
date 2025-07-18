//src\radix\dialog\dlgiconconfirm.tsx

import React from "react";
import { Button, Flex, Text, Dialog, IconButton } from "@radix-ui/themes";
import { ThemeButtonsStyle, ThemeIconsStyle, TextStyle } from '@/radix/radixtheme';
import { CheckIcon, Cross2Icon, TrashIcon } from "@radix-ui/react-icons";
import { RadixOpsText } from "../radixconstants";


/**
 * DialogForm component
 */
interface CompProps {
    title: string;
    message: string;
    onconfirm: () => void;
}
export const DlgBtnIconDeleteConfirm = ({title,message,onconfirm }: CompProps) => {

    //const renderIcon = () => {}

    return (
        <Dialog.Root >

            <Dialog.Trigger>
                <IconButton size={ThemeIconsStyle.DEF_SIZE}>
                    <TrashIcon  width={ThemeIconsStyle.DEF_WIDTH}
                                height={ThemeIconsStyle.DEF_HEIGHT}/>
                </IconButton>
            </Dialog.Trigger>

            <Dialog.Content>

                <Dialog.Title>
                    <Text size={TextStyle.DIALOG_TITLE_SIZE}>{title}</Text>
                </Dialog.Title>

                <Dialog.Description>
                    <Text size={TextStyle.DEFAULT_SIZE}>{message}</Text>
                </Dialog.Description>

                <Dialog.Close>
                    <Flex width="100%" direction="row" justify="center" gapX="2" mt="2">
                        <Button type="submit"
                            color={ThemeButtonsStyle.COLOR_SAVE}
                            size={ThemeButtonsStyle.BTN_DEF_SIZE}
                            onClick={onconfirm} >
                            {RadixOpsText.OK}
                            <CheckIcon width={ThemeIconsStyle.DEF_HEIGHT}
                                        height={ThemeIconsStyle.DEF_WIDTH} />
                        </Button>
                        <Button color={ThemeButtonsStyle.COLOR_CLOSE}
                            size={ThemeButtonsStyle.BTN_DEF_SIZE} >
                            {RadixOpsText.CANCEL}
                            <Cross2Icon width={ThemeIconsStyle.DEF_HEIGHT}
                                        height={ThemeIconsStyle.DEF_WIDTH} />
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