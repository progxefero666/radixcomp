//src\app\index\maincontent.tsx

import React, { useEffect, useState } from "react";
import { Flex} from "@radix-ui/themes";

import { AppConfig } from "@/app/index/appconfig";
import { Codelang } from "@/db/model/codelang";
import { insertCodelang } from "@/db/services/crud/srvcrudcodelang";


const mainContentStyle = {
    background: 'rgb(30, 40, 63)',
    borderTop: 'none',    
    borderBottom: 'none',   
    borderLeft: '1px solid rgb(167, 176, 188)', 
    borderRight: '1px solid rgb(125, 134, 145)',
};


interface CompProps {
    module:string;
}
export default function MainContent({module}: CompProps) {
    const [ready, setReady] = useState<boolean>(false);
    
    useEffect(() => {
        if(ready) {return;} 
        const init = async () => {              
            const newRow:Codelang = new Codelang(10, "csharp", "csharp");       
            const response = await insertCodelang(JSON.stringify(newRow));  
            setReady(true);
        };
        init();
    }, []);
        
    const renderModPlatform = () => {
        return (
            <p>FSDFSDFSDFSDFSSDFSDF
                SDASDASDASD
            </p>
        );
    };

    const renderModApplications = () => {
         return (
            <p>FSDFSDFSDFSDFSSDFSDF
                SDASDASDASD
            </p>
        );
    };    

    const renderModWorkFlows = () => {
        return (
            <p>FSDFSDFSDFSDFSSDFSDF
                SDASDASDASD
            </p>
        );
    };

    return (
            <Flex width="100%" direction="column" gapY="2" style={mainContentStyle} >

                {module === AppConfig.MOD_APPLICATIONS.id?renderModApplications():null}
                {module === AppConfig.MOD_PLATFORM.id?    renderModPlatform() : null}
            </Flex>
    );

}//end PrimaryBar
