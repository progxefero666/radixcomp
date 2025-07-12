//src\radix\collection\editoption.tsx

import { EditableOption, EditableOptionId } from "@/common/models";
import { ArrowDownIcon, ArrowUpIcon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { Flex, Box, Text, IconButton } from "@radix-ui/themes";
import { useState } from "react";
import { XInputText } from "../input/inptext";
import { COMP_BORDER_STYLE } from "../radixtheme";


/**
 * Component to edit an option in a collection
 * @param option EditableOption to edit
 */

const optionStyle = {
    background: 'rgba(14, 141, 67, 1)',
};

interface CompProps {
    option: EditableOptionId;
    onclick: (id: number, action: string) => void;
}
export const EditOptionId = ({ option, onclick }: CompProps) => {

    const [editable,setEditable] = useState<boolean>(false);

    const handlerOnclick = (action: string) => {
        onclick(option.id, action);
    }

    return (
        <Flex width="100%" direction="row"  justify="between" align="center" px="2" py="1"
        style={COMP_BORDER_STYLE}  >
            <Box width="auto">
                <Text size="2">
                    {option.orden.toString()}
                </Text>
            </Box>
            <Flex width="146px" direction="row" gap="2" >
                <XInputText inline={true} defaul={option.value} 
                            disabled={editable} />
            </Flex>
             <Box width="auto" >
                <IconButton size="1" onClick={() => { handlerOnclick("edit") }} >
                    <Pencil2Icon />
                </IconButton>
                <IconButton size="1" onClick={() => { handlerOnclick("delete") }} >
                    <TrashIcon />
                </IconButton>
                <IconButton size="1" onClick={() => { handlerOnclick("moveup") }} >
                    <ArrowUpIcon />
                </IconButton>             
                <IconButton size="1" onClick={() => { handlerOnclick("movedown") }} >
                    <ArrowDownIcon />
                </IconButton>                    
             </Box>
        </Flex>
    );

}//end component


/*
            <Flex direction="row" >
                <Box width="50px">
                    <Text size="2">
                        {option.orden.toString()}
                    </Text>
                </Box>            
                <Box width="auto" >
                    <Text size="2">
                        {option.value}
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
*/