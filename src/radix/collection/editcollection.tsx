//src\radix\collection\editcollection.tsx

import { Button,Box, Flex, Popover } from "@radix-ui/themes";

import { EditOptionId } from "./editoption";
import { CollectionItem } from "@/common/model/collitem";


/**
 * Component to edit a collection of options
 * @param collection EditableCollection to edit
 */
interface CompProps {    
    collection: CollectionItem[];
    label?: string;
}
export const EditCollection = ({collection,label}: CompProps) => {

    const handlerOnclick = (id:number,action:string) => {
        alert(`id: ${id} - Action: ${action}`);

    }

    return (
        <Flex width="100%" direction="column" gapY="2" >
                {collection.map((item, index) => (
                    <Box key={index.toString()}>
                        <EditOptionId 
                            option={item} 
                            onclick={handlerOnclick} />
                    </Box>                 
                ))}
        </Flex>
    );

}//end component