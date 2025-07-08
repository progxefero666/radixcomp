//src\app\workflows\pagecomp\wfmain.tsx


import React, { useEffect, useRef, useState } from "react";
import { Flex, Text} from "@radix-ui/themes";

import { AppWorkflows } from "@/app_front/workflows/appworkflows";
import { WorkflowsConfig } from "@/app/workflows/config";
import { getAll } from "@/db/services/read/srvreadcodelangs";
import { DbTables } from "@/db/dbcatalog";
import { getAllByTable } from "@/db/services/generic/srvreadcmcollections";
import { Codelang } from "@/db/model/codelang";
import { parseCollection } from "@/common/parsers/javascriptparser";
import CardWorkflow from "../cards/cardworkflow";
import { Workflow } from "@/db/model/workflow";

const mainContentStyle = {
    background: 'rgb(30, 40, 63)',
    borderTop: 'none',    
    borderBottom: 'none',   
    borderLeft: '1px solid rgb(167, 176, 188)', 
    borderRight: '1px solid rgb(125, 134, 145)',
};

// const appRef = useRef<AppWorkflows>(null);
interface CompProps { 
    section:string;
    codelangs:Codelang[]|null;
}
export  function MainContent({codelangs,section}: CompProps) {

    const [ready,setReady] = useState<boolean>(false);
    const [workflows,setWorkflows] = useState<Workflow[]|null>([]);
    
    useEffect(() => {        
        if(ready) {return;}
        const init = async () => {     
            const response = await getAllByTable(DbTables.workflow);       
            if(response === null) {return false;}  
            setWorkflows(parseCollection<Workflow>(response));                      
            setReady(true);
        };
        init();
        
    }, []);    

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

    const renderManWorkflows = () => {

        if(workflows==null || workflows.length==0) {
            return (
                <Text size="2" color="gray">
                    not workflows defined
                </Text>                
            );
        } 
        console.log("renderManWorkflows workflows:", workflows);
        return (
            <>
                {workflows.map((workflow, index) => (
                    <CardWorkflow workflow={workflow} />                    
                ))}
            </>
        )
    }

    return (
        <Flex width="100%" direction="column" px="3" py="3" gapY="2" style={mainContentStyle} >
            {section==WorkflowsConfig.SC_WORKFLOWS.id ? renderManWorkflows() : null}
            {section==WorkflowsConfig.SC_TASKTYPES.id ? renderTaskTypes() : null}
            {section==WorkflowsConfig.SC_WORKFLOW_SQL.id ? renderSql() : null}
            {section==WorkflowsConfig.SC_WORKFLOW_JSON.id ? renderJson() : null}
        </Flex>
    );

}//end component
