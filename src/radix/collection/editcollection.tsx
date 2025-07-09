//src\radix\collection\editcollection.tsx

import { Button,Box, Flex, Popover } from "@radix-ui/themes";
import { EditableCollection, EditableOption } from "@/common/models";
import { EditOption } from "./editoption";


/**
 * Component to edit a collection of options
 * @param collection EditableCollection to edit
 */
interface CompProps {    
    collection: EditableOption[];
    label?: string;
}
export const EditCollection = ({collection,label}: CompProps) => {

    const handlerOnclick = (id:string,action:string) => {
        alert(`id: ${id} - Action: ${action}`);

    }

    return (
        <Flex width="100%" direction="column" gapY="2" >
                {collection.map((item, index) => (
                    <Box key={index.toString()}>
                        <EditOption 
                            option={item} 
                            onclick={handlerOnclick} />
                    </Box>                 
                ))}
        </Flex>
    );

}//end component