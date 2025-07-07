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
    codelangs:Codelang[]|null;
}
export  function MainContent({codelangs,section}: CompProps) {

    const [ready,setReady] = useState<boolean>(false);

    useEffect(() => {
        /*
        if(ready) {return;}
        const init = async () => {                      
            setReady(true);
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
        // const barConfig: BarButtonsCfg = BARCFG_DELETE_OPEN;
        /*       
        return (
            <>
                {apps.map((app, index) => (

                    <ContCollapsible id={index} key={index.toString()}
                        barbuttonscfg={barConfig}
                        title={app.anname}
                        intro={app.repository!}
                        opened={false}>

                        <Text size="2">
                            {app.description}
                        </Text>
                    </ContCollapsible>
                    
                ))}
            </>
        )
        */

        if(section==WorkflowsConfig.SC_WORKFLOWS.id) {
            return (
                <p>
                    SC_WORKFLOWS
                </p>
            );
        }
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
