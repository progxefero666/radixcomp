//src\app\workflows\wfeditor\pagecomp\primarybar.tsx

import React, { useState } from "react";
import { Box, Flex,Text} from "@radix-ui/themes";


import { Taskcategory } from "@/db/model/taskcategory";
import { Task } from "@/db/model/task";
import { useRef } from "react";
import { ManagerTaskcategories } from "../categories/mantaskcats";
import { EditOptionId } from "@/radix/collection/editoption";
import { EditableOption, EditableOptionId } from "@/common/models";
import { getTaskcatsAsEditableOptions } from "@/db/modelutil/workflowutil";
import { InfoNotdata } from "@/radix/data/infonotdata";

const primaryBarStyle = {
    background: 'rgb(24, 24, 27)',
};

interface CompProps {
    collection: Taskcategory[] | null;
    onsave?: () => void;
}
export default function WorkflowPrimaryBar({ collection }: CompProps) {


    return (
        <Flex width="100%" direction="column" justify="center" gapY="2" >
            {collection ? <PanelWfTaskcategories initcollection={collection} /> : null}
        </Flex>
    );

}//end component

interface PanelWfTaskcategoriesProps {
    initcollection: Taskcategory[];
    onsave?: () => void;
}
function PanelWfTaskcategories({ initcollection }: PanelWfTaskcategoriesProps) {

    const ref = React.useRef<ManagerTaskcategories>(new ManagerTaskcategories(initcollection));
    const [coll,setColl] = useState<Taskcategory[]>(initcollection);

    const [collOptions,setCollOptions] 
        = useState<EditableOptionId[]>(getTaskcatsAsEditableOptions(initcollection));

    const handlerOnclick = (id:number,action:string) => {
        alert(`id: ${id} - Action: ${action}`);

    }

    const renderList = () => {
        return (
            <Flex width="100%" direction="column" gapY="2" style={primaryBarStyle} >
                    {collOptions.map((item, index) => (
                        <Box key={index.toString()}>
                            <EditOptionId 
                                option={item} 
                                onclick={handlerOnclick} />
                        </Box>                 
                    ))}
            </Flex>
        );
    }
    
    
    return (
        <Flex width="100%" direction="column" justify="center" gapY="2" >
            {collOptions.length > 0 ?
                renderList():
                <InfoNotdata message="Not categories def" />}
        </Flex>
    );

}//end component