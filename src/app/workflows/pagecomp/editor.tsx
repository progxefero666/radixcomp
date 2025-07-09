//src\app\workflows\pagecomp\wfmain.tsx


import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Text} from "@radix-ui/themes";

import { AppWorkflows } from "@/app/workflows/kernel/appworkflows";
import { WorkflowsConfig } from "@/app/workflows/config";
import { getAll } from "@/db/services/read/srvreadcodelang";
import { DbTables } from "@/db/dbcatalog";
import { getAllByTable } from "@/db/services/generic/serviceread";
import { Codelang } from "@/db/model/codelang";

import CardWorkflowMin from "../cards/cardwfmin";
import { Workflow } from "@/db/model/workflow";
import { parseResponseCollection } from "@/front/parser/javascriptparser";
import { DB_ITEM_COMMAND } from "@/db/dboperations";

const mainContentStyle = {
    background: 'rgb(56, 56, 56)',
    borderTop: 'none',    
    borderBottom: 'none',   
    borderLeft: '1px solid rgb(167, 176, 188)', 
    borderRight: '1px solid rgb(125, 134, 145)',
};

// const appRef = useRef<AppWorkflows>(null);
interface CompProps { 
    section:string;
    //codelangs:Codelang[]|null;
    showwfpreview: (workflow:Workflow) => void;
}
export  function WorkflowEditor({section,showwfpreview}: CompProps) {

    const [ready,setReady] = useState<boolean>(false);
    const [workflows,setWorkflows] = useState<Workflow[]|null>(null);
    
    useEffect(() => {        
        if(ready) {return;}
        const init = async () => {     
            const response = await getAllByTable(DbTables.workflow);       
            if(response === null) {return false;} 

            const collection:Workflow[]|null = parseResponseCollection<Workflow>(response);
            if(collection==null) {return;}
            
            setWorkflows(collection);                      
            setReady(true);
        };
        init();
        
    }, []);    

    const execWfItemCardOperation = (itemIndex:number,action:string) =>    {
                
        if(action == DB_ITEM_COMMAND.SELECT) {
            showwfpreview(workflows![itemIndex]);
            return;
        }           
        else if(action == DB_ITEM_COMMAND.DELETE) {
     
            return;
        }
        else if(action == DB_ITEM_COMMAND.OPEN) {
    
            return;
        }   
             
    }


    const renderManWorkflows = () => {
        if(workflows==null || workflows.length==0) {
            return (
                <Text size="2" color="gray">
                    not defined
                </Text>                
            );
        } 
        return (
            <>
                {workflows.map((workflow, index) => (
                    <Box key={index.toString()}>
                        <CardWorkflowMin 
                            index={index} 
                            workflow={workflow} 
                            callback={execWfItemCardOperation} />   
                    </Box>                 
                ))}
            </>
        )
    }

    return (
        <Flex width="100%" direction="column" px="3" py="3" gapY="2" style={mainContentStyle} >
            {section==WorkflowsConfig.SC_WORKFLOWS.id ? renderManWorkflows() : null}            
        </Flex>
    );

}//end component


/*
    {section==WorkflowsConfig.SC_TASKTYPES.id ? renderTaskTypes() : null}
    {section==WorkflowsConfig.SC_WORKFLOW_SQL.id ? renderSql() : null}
    {section==WorkflowsConfig.SC_WORKFLOW_JSON.id ? renderJson() : null}

    const renderTaskTypes = () => {
        if(section==WorkflowsConfig.SC_WORKFLOWS.id) {
            return (
                <p>
                    renderTaskTypes
                </p>
            );
        }
    }

    const renderSql = () => {
        if(section==WorkflowsConfig.SC_WORKFLOWS.id) {
            return (
                <p>
                    renderSql
                </p>
            );
        }
    }

    const renderJson = () => {
        if(section==WorkflowsConfig.SC_WORKFLOWS.id) {
            return (
                <p>
                    renderJson
                </p>
            );
        }
    }

*/