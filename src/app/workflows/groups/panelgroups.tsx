//src\app\workflows\goups\panelgroups.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Grid, Flex, Text } from "@radix-ui/themes";
import { Taskgroup } from "@generated/prisma";
import { EditableCollection, EditableOption } from "@/common/models";
import { getAllByTable } from "@/db/services/generic/serviceread";
import { DbTables } from "@/db/dbcatalog";

const compStyle={background: 'rgb(56, 56, 56)'};

interface CompProps {
    onedition: () => void;
}
export const PanelTaskgroups = ({onedition}: CompProps) => {
    
    const [ready,setReady] = useState<boolean>(false);
    const [groups,setGroups] = useState<Taskgroup[]>([]);

    const loadWfGroups = async ()  =>{
        const response = await getAllByTable(DbTables.codelang);
            //if(response === null) {return false;}     
    }

    const loadDummyCollection = () => {
        const edOption_1:EditableOption = new EditableOption("option_1",1,"Option 2");
        const edOption_2:EditableOption = new EditableOption("option_2",2,"Option 2");
        const edOption_3:EditableOption = new EditableOption("option_3",3,"Option 3");
        const edOption_4:EditableOption = new EditableOption("option_4",4,"Option 4");
        const options:EditableOption[] = [edOption_1,edOption_2,edOption_3,edOption_4];
        const edCollection:EditableCollection = new EditableCollection("Taskgroups",options,null);
    }


    useEffect(() => {
        if(ready) {return;}
        const init = async () => {      
            //await loadWfGroups();            
            loadDummyCollection();              
                   
            setReady(true);
            //alert("init end");
        };
        init();
    }, []);   

    return (
        <Flex direction="column" height="100vh" style={compStyle}>

        </Flex>
    );

}//end component
