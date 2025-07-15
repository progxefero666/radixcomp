//src\app\workflows\wfeditor\pagecomp\primarybar.tsx

import React, { useState } from "react";
import { Button, Box, Flex, IconButton, Text } from "@radix-ui/themes";
import { ChevronUpIcon, ChevronDownIcon, CrossCircledIcon,  } from "@radix-ui/react-icons";
import { EditOptionId } from "@/radix/collection/editoption";
import { COMP_BORDER_STYLE } from "@/radix/radixtheme";
import {  DB_ITEM_CMD, DbOps } from "@/common/database/dbkernel";
import { DialogForm} from "@/radix/dialog/dlginputoption";
import { CollectionItem } from "@/common/model/collitem";
import { InputField } from "@/common/model/inputfield";

import { NEW_TASKCAT_FIELDS } from "@/front/appworkflows";
import { getTaskcatsAsEditableOptions } from "@/db/services/util/workflowutil";
import { Taskcategory } from "@/db/model/taskcategory";
import { ManagerTaskcategories } from "../categories/mantaskcats";
import { insertTaskcategory } from "@/db/services/crud/srvcrudtaskcategory";
import { parseResponseItem } from "@/common/parsers/javascriptparser";


const primaryBarStyle = {
    background: 'rgb(24, 24, 27)',
};

interface CompProps {
    workflowid: number;
    collection: Taskcategory[] | null;
    onsave?: () => void;
}
export default function WorkflowPrimaryBar({ workflowid,collection }: CompProps) {


    return (
        <Flex width="100%" direction="column" px="3" py="3" style={primaryBarStyle} >
            {collection ? <PanelWfTaskcategories workflowid={workflowid}
                                                 initcollection={collection} /> : null}
        </Flex>
    );

}//end component

interface PanelWfTaskcategoriesProps {
    workflowid: number;
    initcollection: Taskcategory[];
    onsave?: () => void;
}
function PanelWfTaskcategories({ workflowid,initcollection }: PanelWfTaskcategoriesProps) {

    console.log(initcollection);

    const manCategories = React.useRef<ManagerTaskcategories>(new ManagerTaskcategories(initcollection));
    const [coll, setColl] = useState<Taskcategory[]>(initcollection);
    const [open, setOpen] = useState<boolean>(true);

    const [collOptions, setCollOptions]
        = useState<CollectionItem[]>(getTaskcatsAsEditableOptions(initcollection));

    const [formDefItems, setFormDefItems] = useState<InputField[]>([]);

    let isNewWorkflow:boolean = true;
    if (workflowid != DbOps.NEW_ROW_ID) {isNewWorkflow = false;}
    
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
    const onSaveNewItem = async (fields: InputField[]) => {
        alert("start");
        const newItem = new Taskcategory(DbOps.NEW_ROW_ID,workflowid,fields[0].value,fields[1].value);
        const newRecord = await insertTaskcategory(JSON.stringify(newItem));
        if(newRecord==null){
            alert("Error inserting new task category");
            return;
        }
        const taskcategory: Taskcategory|null = parseResponseItem<Taskcategory>(newRecord);
        if(taskcategory===null){
            alert("Error parsing new task category");
            return;
        }
        alert("end");
        manCategories.current.execOp(DB_ITEM_CMD.INSERT,taskcategory);
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