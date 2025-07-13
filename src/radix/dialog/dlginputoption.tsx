//src/radix/dialog/dlginputoption.tsx

import React from "react";
import { Label } from "radix-ui";
import { Button, Box, Flex, Text, Dialog, TextField } from "@radix-ui/themes";

import { ThemeButtonsStyle, ThemeIconsStyle, ThemeTextStyle } from '@/radix/radixtheme';
import { BarSubmit } from "@/radix/cbars/barsubmit";
import { FilePlusIcon } from "@radix-ui/react-icons";
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
export const DialogForm = ({buttontext, title, items, onsave }: CompProps) => {

    //const onCancel = () => { if (oncancel) { oncancel(); } }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        for (let idx = 0; idx < items.length; idx++) {
            items[idx].value = formData.get(items[idx].id)?.toString();
        }
        onsave(items);
    };//end

    const renderInput = (input:InputField) => {
        return(
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

                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => 
                                {event.preventDefault();onSubmit(event);}}>
                    <Flex width="100%" direction="column" gapY="2" >
                        {items.map((item, index) => (
                            <Box key={index.toString()}>
                                {renderInput(item)}                        
                            </Box>                 
                        ))}
                    </Flex>
                    <Dialog.Close><BarSubmit /></Dialog.Close>
                </form>
            </Dialog.Content>

        </Dialog.Root>
    )

}//end component