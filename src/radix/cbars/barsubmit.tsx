//src\radix\cbars\barsubmit.tsx

import { Button, Box, Flex, IconButton, Text, Dialog, TextField } from "@radix-ui/themes";

import { CheckIcon, Cross2Icon, FilePlusIcon } from "@radix-ui/react-icons";

import { ThemeButtonsStyle, ThemeIconsStyle, ThemeTextStyle } from '@/radix/radixtheme';
import { OPERATIONS } from '@/common/constants';

export const BarSubmit = () => {

    return (
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
    );

}//end comp