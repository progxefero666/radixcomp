//src\app\workflows\pagecomp\wfmain.tsx


import React, { useEffect, useRef, useState } from "react";
import { Flex} from "@radix-ui/themes";

import { AppWorkflows } from "@/app_front/workflows/appworkflows";
import { WorkflowsConfig } from "@/app/workflows/config";

const mainContentStyle = {
    background: 'rgb(30, 40, 63)',
    borderTop: 'none',    
    borderBottom: 'none',   
    borderLeft: '1px solid rgb(167, 176, 188)', 
    borderRight: '1px solid rgb(125, 134, 145)',
};

interface CompProps { 
    section:string;
}
export  function MainContent({section}: CompProps) {

    const appRef = useRef<AppWorkflows>(null);

    const template = (data: string): string => {
		let result: string = "";
        return result;        
    }	
	    
    let initialized: boolean = false;
    useEffect(() => {
        if(initialized) {return;}         
        const init = async () => {                      
            appRef.current = new AppWorkflows();
            const res: boolean = await appRef.current.loadInitCollections();
            if(!res) {return;}              
            initialized =true;
        };
        init();
    }, []);    

    const renderMainContent = () => {
        if(section==WorkflowsConfig.SC_WORKFLOWS.id) {
            return (
                <p>
                    SDASDASDASD
                </p>
            );
        }
        return null;
    };

    return (
        <Flex width="100%" direction="column" gapY="2" style={mainContentStyle} >
            {initialized ? renderMainContent() : null}
        </Flex>
    );

}
