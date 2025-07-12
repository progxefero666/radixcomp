//src\app\workflows\wfeditor\pagecomp\primarybar.tsx

import React, { useState } from "react";
import { Button, Box, Flex, IconButton, Text } from "@radix-ui/themes";
import { ChevronUpIcon, ChevronDownIcon, CrossCircledIcon, FilePlusIcon } from "@radix-ui/react-icons";

import { Taskcategory } from "@/db/model/taskcategory";
import { Task } from "@/db/model/task";
import { useRef } from "react";
import { ManagerTaskcategories } from "../categories/mantaskcats";
import { EditOptionId } from "@/radix/collection/editoption";
import { EditableOption, EditableOptionId } from "@/common/models";
import { getTaskcatsAsEditableOptions } from "@/db/modelutil/workflowutil";
import { InfoNotdata } from "@/radix/data/infonotdata";
import { SeparatorH } from "@/radix/container/separatorh";
import { COMP_BORDER_STYLE } from "@/radix/radixtheme";



const primaryBarStyle = {
    background: 'rgb(24, 24, 27)',
};

interface CompProps {
    collection: Taskcategory[] | null;
    onsave?: () => void;
}
export default function WorkflowPrimaryBar({ collection }: CompProps) {


    return (
        <Flex width="100%" direction="column" px="3" py="3" style={primaryBarStyle} >
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
    const [coll, setColl] = useState<Taskcategory[]>(initcollection);
    const [open, setOpen] = useState<boolean>(true);

    const [collOptions, setCollOptions]
        = useState<EditableOptionId[]>(getTaskcatsAsEditableOptions(initcollection));

    const handlerOnclick = (id: number, action: string) => {
        alert(`id: ${id} - Action: ${action}`);
    };//end

    const handlerOnOpen = () => {
        setOpen(!open);
    };//end

    const renderList = () => {
        if (!open) {
            return (null)
        }
        return (
            <Flex width="100%" direction="column" gapY="2" >
                {collOptions.map((item, index) => (
                    <Box key={index.toString()}>
                        {index==0 ? 
                            <EditOptionId option={item}  />
                        : 
                           <EditOptionId option={item} onclick={handlerOnclick} />
                        }                        
                    </Box>
                ))}
            </Flex>
        );
    };//end

    return (
        <Flex direction="column" gapY="2" >
            <Flex width="100%" direction="row" px="2" py="1" gapX="2" style={COMP_BORDER_STYLE} >
                <IconButton size="1" onClick={() => { handlerOnOpen() }} >
                    {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </IconButton>
                <Text size="2">T. Categories</Text>
            </Flex>
            {collOptions.length > 0 ? renderList() : null}

            <Flex width="100%" direction="row" px="2" py="1" gapX="2" justify="center"
                style={COMP_BORDER_STYLE} >

                <Button color="green" size="2">
                    <FilePlusIcon />
                    add
                </Button>

                <Button color="blue" size="2">
                    <CrossCircledIcon />
                    clear
                </Button>

            </Flex>
        </Flex>
    );

}//end component