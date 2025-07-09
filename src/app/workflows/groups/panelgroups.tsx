//src\app\workflows\goups\panelgroups.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { Taskgroup } from "@generated/prisma";
import { EditableOption } from "@/common/models";
import { getAllByTable } from "@/db/services/generic/serviceread";
import { DbTables } from "@/db/dbcatalog";

import { EditCollection } from "@/radix/collection/editcollection";
import { EditOption } from "@/radix/collection/editoption";

const compStyle={
    background: 'rgb(56, 56, 56)'
};

interface CompProps {
    onedition?: () => void;
}
export const PanelTaskgroups = ({onedition}: CompProps) => {
    
    const [ready,setReady] = useState<boolean>(false);
    const [groups,setGroups] = useState<Taskgroup[]>([]);
    const [collection,setCollection] = useState<EditableOption[]>([]);

    const loadWfGroups = async ()  =>{
        const response = await getAllByTable(DbTables.codelang);
            //if(response === null) {return false;}     
    }

    const loadDummyCollection = () => {
        const edOption_1:EditableOption = new EditableOption("option_1",1,"Option 2");
        const edOption_2:EditableOption = new EditableOption("option_2",2,"Option 2");
        const edOption_3:EditableOption = new EditableOption("option_3",3,"Option 3");
        const edOption_4:EditableOption = new EditableOption("option_4",4,"Option 4");
        setCollection([edOption_1,edOption_2,edOption_3,edOption_4]);
    }

    useEffect(() => {
        if(ready) {return;}
        const init = async () => {      
            //await loadWfGroups();            
            loadDummyCollection();                                 
            setReady(true);alert("init end");
        };
        init();
    }, []);   

    const execAction = (id:string,action:string) => {
        alert(`id: ${id} - Action: ${action}`);

    }    
    return (
        <Flex width ="100%" direction="column" style={compStyle}>
            {collection.map((item, index) => (
                <Box key={index.toString()}>
                    <EditOption option={item} onclick={execAction} />
                </Box>                 
            ))}
        </Flex>
    );

}//end component
