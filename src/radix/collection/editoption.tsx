//src\radix\collection\editoption.tsx

import { EditableOption } from "@/common/models";
import { ArrowDownIcon, ArrowUpIcon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { Flex,Box,Text,IconButton } from "@radix-ui/themes";


/**
 * Component to edit an option in a collection
 * @param option EditableOption to edit
 */
interface CompProps {
    option: EditableOption;
    onclick: (id:string,action:string) => void;
}
export const EditOption = ({option,onclick}: CompProps) => {

    const handlerOnclick = (action:string) => {
        onclick(option.id,action);
    }

    return (
        <Flex direction="row" align="center" justify="between">
            <Flex direction="row" >
                <Box width="50px">
                    <Text size="2">
                        {option.orden.toString()}
                    </Text>
                </Box>            
                <Box width="auto" >
                    <Text size="2">
                        {option.text}
                    </Text>
                </Box>
            </Flex>

            <Flex direction="row" gap="2" >
                <IconButton onClick={() => { handlerOnclick("edit") }} >
	                <Pencil2Icon />
                </IconButton>
                <IconButton onClick={() => { handlerOnclick("delete") }} >
	                <TrashIcon />
                </IconButton>
                <IconButton onClick={() => { handlerOnclick("moveup") }} >
	                <ArrowUpIcon />
                </IconButton>             
                <IconButton onClick={() => { handlerOnclick("movedown") }} >
	                <ArrowDownIcon />
                </IconButton>                     
            </Flex>
        </Flex>
    );

}//end component