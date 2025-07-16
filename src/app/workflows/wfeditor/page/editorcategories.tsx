//src\app\workflows\wfeditor\pagecomp\editorcategories.tsx

import React, { useEffect, useState } from "react";
import { Button, Box, Flex, IconButton, Text } from "@radix-ui/themes";
import { ChevronUpIcon, ChevronDownIcon, CrossCircledIcon,  } from "@radix-ui/react-icons";
import { EditOptionId } from "@/radix/collection/editoption";
import { COMP_BORDER_STYLE, ThemeButtonsStyle } from "@/radix/radixtheme";
import { DB_ITEM_CMD} from "@/common/database/dbkernel";
import { DialogForm} from "@/radix/form/dgform";
import { CollectionItem } from "@/common/model/collitem";
import { InputField } from "@/common/model/inputfield";

import { AppWorkflows, AppWorkflowsCrud, AppWorkflowsReader, ManagerTaskcategories } from "@/front/appworkflows";
import { getTaskcatsAsEditableOptions } from "@/db/services/util/workflowutil";
import { Taskcategory } from "@/db/model/taskcategory";



interface PanelWfTaskcategoriesProps {
    workflowid: number;
    
    onsave?: () => void;
}

export const PanelWfTaskcategories = ({ workflowid }: PanelWfTaskcategoriesProps) =>{

    let initialized: boolean = false;
    const [open, setOpen] = useState<boolean>(true);
    const [categories, setCategories] = useState<Taskcategory[]>([]);
    const [collection, setCollection] = useState<CollectionItem[]>([]);

    const manager = React.useRef<ManagerTaskcategories>(null);


    useEffect(() => {          
        if(initialized) { return; }
        const init = async () => {
            const read_categories:Taskcategory[]|null = await AppWorkflowsReader.read_taskcategories(workflowid);
            //if(read_categories === null) {alert("Error reading task categories");return;}
            setCollection(getTaskcatsAsEditableOptions(read_categories!));
            setCategories(read_categories!);
            manager.current = new ManagerTaskcategories(read_categories!);
            initialized = true;
        };
        init();
    }, []);

    const clearCategories = () => {
        alert("clearCollection");
    };//end

    const execItemOperation = (id: number, action: string) => {
  
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


    const onSaveNewItem = async (fields: InputField[]) => {
        alert("onSaveNewItem");        
        const taskcategoryId:number|null = await AppWorkflowsCrud
                .insert_taskcategory(workflowid,fields[0].value,fields[1].value);
        const taskcategory:Taskcategory = new Taskcategory
            (taskcategoryId,workflowid,fields[0].value,fields[1].value);
        alert(taskcategoryId);
        manager.current!.execOp(DB_ITEM_CMD.INSERT,taskcategory);
    };//end

    
    const handlerOnOpen = () => {
        setOpen(!open);
    };//end


    const renderMainContent = () => {
        if (!open) {return(null);}
        return (
            <Flex width="100%" direction="column" gapY="2" >
                {collection.map((item, index) => (
                    <Box key={index.toString()}>
                        {index == 0 ?
                            <EditOptionId option={item} /> :
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

            {initialized ? renderMainContent():null}

            <Flex width="100%" direction="row" px="2" py="1" gapX="2" justify="center"
                  style={COMP_BORDER_STYLE} >

                <DialogForm buttontext="add" title="new task category" 
                            items={AppWorkflows.NEW_TASKCAT_FIELDS} 
                            onsave={onSaveNewItem} />

                <Button color={ThemeButtonsStyle.COLOR_ADD} 
                        size={ThemeButtonsStyle.BTN_DEF_SIZE}
                         radius={ThemeButtonsStyle.BTN_DEF_RADIUS}
                        onClick={() => clearCategories()}>
                    <CrossCircledIcon />
                    clear
                </Button>
            </Flex>
        </Flex>
    );

}//end component