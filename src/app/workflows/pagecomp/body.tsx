//src\app\workflows\pagecomp\wfmain.tsx


import React, { useEffect, useRef, useState } from "react";
import { Flex} from "@radix-ui/themes";

import { AppWorkflows } from "@/app_front/workflows/appworkflows";
import { WorkflowsConfig } from "@/app/workflows/config";
import { getAll } from "@/db/services/read/srvreadcodelangs";
import { DbTables } from "@/db/dbcatalog";
import { getAllByTable } from "@/db/services/generic/srvreadcmcollections";
import { Codelang } from "@/db/model/codelang";
import { parseCollection } from "@/common/parsers/javascriptparser";

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
}
export  function MainContent({section}: CompProps) {

    const [compReady,setCompReady] = useState<boolean>(false);
    const [codelangs,setCodelangs] = useState<Codelang[]|null>(null);

    let initialized: boolean = false;
    useEffect(() => {
        /*
        if(initialized) {return;}

        const init = async () => {                      
            const response = await getAllByTable(DbTables.codelang);
            if(response === null) {return false;}            
            setCodelangs(parseCollection<Codelang>(response));
            setCompReady(true);
            //alert("init end");
        };
        init();
        */
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
        if(section==WorkflowsConfig.SC_WORKFLOWS.id) {
            return (
                <p>
                    SC_WORKFLOWS
                </p>
            );
        }
    }

    return (
        <Flex width="100%" direction="column" gapY="2" style={mainContentStyle} >
            {section==WorkflowsConfig.SC_WORKFLOWS.id ? renderManWorkflows() : null}
            {section==WorkflowsConfig.SC_TASKTYPES.id ? renderTaskTypes() : null}
            {section==WorkflowsConfig.SC_WORKFLOW_SQL.id ? renderSql() : null}
            {section==WorkflowsConfig.SC_WORKFLOW_JSON.id ? renderJson() : null}
        </Flex>
    );

}//end component
