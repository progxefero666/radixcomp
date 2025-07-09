//src\radix\collection\editoption.tsx

import { EditableOption } from "@/common/models";
import { ArrowDownIcon, ArrowUpIcon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { Flex,Box,Text,IconButton } from "@radix-ui/themes";


interface CompProps {
    option: EditableOption;
    onclick: (action:string) => void;
}
/*
export class EditableOption {
    public id:   string;
    public orden: number;
    public text: string;
*/
export const EditOption = ({option,onclick}: CompProps) => {

    const handlerOnclick = (action:string) => {
        onclick(action);
    }

    return (
        <Flex direction="row" align="center" justify="between">
            <Box>
                <Text size="2">
                    {option.text}
                </Text>
            </Box>
            <Flex direction="row" gap="2" >
                <IconButton onClick={() => { handlerOnclick("edit") }} >
	                <Pencil2Icon />
                </IconButton>
                <IconButton onClick={() => { handlerOnclick("delete") }} >
	                <TrashIcon />
                </IconButton>
                <IconButton onClick={() => { handlerOnclick("up") }} >
	                <ArrowUpIcon />
                </IconButton>             
                <IconButton onClick={() => { handlerOnclick("down") }} >
	                <ArrowDownIcon />
                </IconButton>                     
            </Flex>
        </Flex>
    );

}//end component