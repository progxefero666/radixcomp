//src\app\workflows\wfeditor\pagecomp\primarybar.tsx

import React, { useState } from "react";
import { Button, Box, Flex, IconButton, Text } from "@radix-ui/themes";
import { ChevronUpIcon, ChevronDownIcon, CrossCircledIcon,  } from "@radix-ui/react-icons";
import { Taskcategory } from "@/db/model/taskcategory";
import { ManagerTaskcategories } from "../categories/mantaskcats";
import { EditOptionId } from "@/radix/collection/editoption";
import { getTaskcatsAsEditableOptions } from "@/db/modelutil/workflowutil";
import { COMP_BORDER_STYLE } from "@/radix/radixtheme";
import {  DB_ITEM_CMD } from "@/db/dboperations";
import { DialogForm} from "@/radix/dialog/dlginputoption";
import { NEW_TASKCAT_FIELDS } from "@/front/appworkflows";
import { EditableOptionId } from "@/common/model/editoption";
import { InputItem } from "@/common/model/option";



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

    const [formDefItems, setFormDefItems] = useState<InputItem[]>([]);

        

    const execItemOperation = (id: number, action: string) => {
        alert(id);

        if (action === DB_ITEM_CMD.EDIT) {
            alert("EDIT");
        }
        else if (action === DB_ITEM_CMD.DELETE) {
            alert("DELETE");
        }
        else if (action === DB_ITEM_CMD.MOVEUP) {
            alert("MOVEUP");
        }
        else if (action === DB_ITEM_CMD.MOVEDOWN) {
            alert("MOVEDOWN");
        }
    };//end

    const clearCollection = () => {
        alert("clearCollection");
    };//end


    //const onCancelNewItem = () => {};
    const onSaveNewItem = (values: InputItem[]) => {
        //alert("onSaveNewItem");
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
                        {index == 0 ?
                            <EditOptionId option={item} />
                            :
                            <EditOptionId option={item} onclick={execItemOperation} />
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

                <DialogForm buttontext="add" title="new task category" 
                            items={NEW_TASKCAT_FIELDS} 
                            onsave={onSaveNewItem} />

                <Button color="blue" size="2" onClick={() => clearCollection()}>
                    <CrossCircledIcon />
                    clear
                </Button>

            </Flex>
        </Flex>
    );

}//end component