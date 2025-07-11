//src\app\workflows\wfeditor\pagecomp\maincontent.tsx

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Text} from "@radix-ui/themes";

import { Workflow } from "@/db/model/workflow";
import { parseResponseCollection } from "@/front/parser/javascriptparser";
import { DB_ITEM_CMD } from "@/db/dboperations";


const mainContentStyle = {
    background: 'rgb(56, 56, 56)',
    borderTop: 'none',    
    borderBottom: 'none',   
    borderLeft: '1px solid rgb(167, 176, 188)', 
    borderRight: '1px solid rgb(125, 134, 145)',
};

// const appRef = useRef<AppWorkflows>(null);
interface CompProps { 
    workflow:Workflow|null;
}
export  function WorkflowEditor({workflow}: CompProps) {
    const router = useRouter();
    const [ready,setReady] = useState<boolean>(false);
    
    useEffect(() => {        
        if(ready) {return;}
        const init = async () => {                        
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

    const renderMainContent = () => {
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

