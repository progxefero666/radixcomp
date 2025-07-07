//src\app\workflows\pagecomp\wfmain.tsx


import React, { useEffect, useRef, useState } from "react";
import { Flex} from "@radix-ui/themes";
import { Option } from "@/common/model/option";
import MenuButtons from "@/radix/cbars/btmenu";
import { AppConfig } from "@/app_front/appconfig";
import { AppContext } from "@/app_front/appcontext";
import { Codelang } from "@/db/dmmodels/codelang";
import { parseCollection } from "@/common/parsers/javascriptparser";
import { JSonConsole } from "@/common/util/jsonhelper";
import { AppIndex } from "@/app_front/appindex";
import { readDbSqlScriptFile } from "@/app_server/xeferodb/sqlscripts";
import { AppWorkflows } from "@/app_front/workflows/appworkflows";


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
export default function MainContent({section}: CompProps) {

    let initialized: boolean = false;
    const appRef = useRef<AppWorkflows>(null);

    useEffect(() => {
        if(initialized) {return;} 
        
        const init = async () => {
            //const dbSquema = await readDbSqlScriptFile("dbsquema");            
            appRef.current = new AppWorkflows();
            const res: boolean = await appRef.current.loadInitCollections();
            console.log(appRef.current.codelangs);
            if(!res) {return;}  
            
            initialized =true;
        };
        init();
    }, []);    

    const renderMainContent = () => {
        return (
            <p>FSDFSDFSDFSDFSSDFSDF
                SDASDASDASD
            </p>
        );
    };

    return (
        <Flex width="100%" direction="column" gapY="2" style={mainContentStyle} >
            {renderMainContent()}
        </Flex>
    );

}//end PrimaryBar
