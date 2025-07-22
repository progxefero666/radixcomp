//src\radix\cbars\barsubmit.tsx

import { Button, Box, Flex, Text } from "@radix-ui/themes";
import { CheckIcon, Cross2Icon} from "@radix-ui/react-icons";
import { ButtonsStyle, IconsStyle } from '@/radix/radixtheme';
import { OpConstants } from "@/common/constants";

/**
 * BarSubmit component
 * @param onSubmit function to call on submit
 * @param onCancel function to call on cancel
 * @returns JSX Element for the submit bar
 */
export const barStyle = {
    borderBottom: '1px solid rgb(98, 97, 98)',
    borderTop: '1px solid rgb(98, 97, 98)',
};
interface BarSubmitProps {
    onSubmit:()=>void;
    onCancel:()=>void;
}
export const BarSubmit = ({onSubmit,onCancel}:BarSubmitProps) => {

    return (
        <Flex width="100%" direction="row" justify="center" gapX="2" py="2" style={barStyle} >
            
            <Button type="submit"
                    color={ButtonsStyle.COLOR_SAVE}
                    size={ButtonsStyle.DEF_SIZE}
                    radius={ButtonsStyle.DEF_RADIUS} 
                    onClick={() => onSubmit()} >
                
                <Text size={ButtonsStyle.TEXT_SIZE}>
                    {OpConstants.OP_TEXT_SAVE}
                </Text>

                <CheckIcon width={IconsStyle.DEF_HEIGHT}
                           height={IconsStyle.DEF_WIDTH} />
            </Button>
            
            <Button color={ButtonsStyle.COLOR_CANCEL}
                    size={ButtonsStyle.DEF_SIZE} 
                    radius={ButtonsStyle.DEF_RADIUS} 
                    onClick={() => onCancel()} >

                <Text size={ButtonsStyle.TEXT_SIZE}>
                    {OpConstants.OP_TEXT_CANCEL}
                </Text>
              
                <Cross2Icon width={IconsStyle.DEF_HEIGHT}
                            height={IconsStyle.DEF_WIDTH} />
            </Button>

        </Flex>
    );

}//end comp