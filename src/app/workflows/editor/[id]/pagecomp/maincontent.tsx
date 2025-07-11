//src\app\workflows\editor\[id]\pagecomp\wfeditor.tsx


//src\app\workflows\pagecomp\wfmain.tsx


import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Text} from "@radix-ui/themes";


import { DbTables } from "@/db/dbcatalog";
import { getAllByTable } from "@/db/services/generic/serviceread";
import { Codelang } from "@/db/model/codelang";


import { Workflow } from "@/db/model/workflow";
import { parseResponseCollection } from "@/front/parser/javascriptparser";
import { DB_ITEM_COMMAND } from "@/db/dboperations";

import { useRouter } from "next/navigation";


const mainContentStyle = {
    background: 'rgb(56, 56, 56)',
    borderTop: 'none',    
    borderBottom: 'none',   
    borderLeft: '1px solid rgb(167, 176, 188)', 
    borderRight: '1px solid rgb(125, 134, 145)',
};

// const appRef = useRef<AppWorkflows>(null);
interface CompProps { 
    workflow:Workflow;
}
export  function MainContent({workflow}: CompProps) {
    const router = useRouter();
    const [ready,setReady] = useState<boolean>(false);
    
    useEffect(() => {        
        if(ready) {return;}
        const init = async () => {     
            /*
            const response = await getAllByTable(DbTables.workflow);       
            if(response === null) {return false;} 
            const collection:Workflow[]|null = parseResponseCollection<Workflow>(response);
            if(collection==null) {return;}
            */
                   
            setReady(true);
        };
        init();
        
    }, []);    

    const execOperation = (itemIndex:number,action:string) => {
    };

    if (!workflow) {
        return (
            <Flex width="100%" direction="column" px="2" pt="0" pb="2" >
                <p>No workflow selected</p>
            </Flex>
        )
    };

    //AppMemmory.saveWorkflowId(workflows![itemIndex].id);
    const renderAux = () => {
        return (
            <>
            </>
        )
    };

    return (
        <Flex width="100%" direction="column" px="3" py="3" gapY="2" style={mainContentStyle} >
                      
        </Flex>
    );

}//end component

