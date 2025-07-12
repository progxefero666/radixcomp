//src\radix\data\infonotdata.tsx

import { Box, Flex, Text } from "@radix-ui/themes";
import { COMP_BORDER_STYLE } from "../radixtheme";

interface CompProps {
    message: string;
}
export const InfoNotdata = ({ message }: CompProps) => {

    return (
        <Flex width="100%" justify="center" align="center"
                px="3" py="2" style={COMP_BORDER_STYLE} >
            <Text size="2">{message}</Text>
        </Flex>
    );

}//end comp