//src\radix\cbars\barsubmit.tsx

import { Button, Box, Flex, IconButton, Text, Dialog, TextField } from "@radix-ui/themes";

import { CheckIcon, Cross2Icon, FilePlusIcon } from "@radix-ui/react-icons";

import { ButtonsStyle, IconsStyle, TextStyle } from '@/radix/radixtheme';
import { OpConstants } from "@/common/constants";

export const BarSubmit = () => {

    return (
        <Flex width="100%" direction="row" justify="center" gapX="2" mt="2">
            <Button type="submit"
                color={ButtonsStyle.COLOR_SAVE}
                size={ButtonsStyle.DEF_SIZE}>
                {OpConstants.OP_TEXT_SAVE}
                <CheckIcon width={IconsStyle.DEF_HEIGHT}
                    height={IconsStyle.DEF_WIDTH} />
            </Button>
            <Button color={ButtonsStyle.COLOR_CLOSE}
                size={ButtonsStyle.DEF_SIZE} >
                {OpConstants.OP_TEXT_CANCEL}
                <Cross2Icon width={IconsStyle.DEF_HEIGHT}
                    height={IconsStyle.DEF_WIDTH} />
            </Button>
        </Flex>
    );

}//end comp