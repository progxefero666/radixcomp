//src\app\workflows\pagecomp\wfmain.tsx


import React from "react";
import { Flex} from "@radix-ui/themes";
import { Option } from "@/common/model/option";
import MenuButtons from "@/radix/cbars/btmenu";
import { AppConfig } from "@/app_front/appconfig";


const mainContentStyle = {
    background: 'rgb(32, 215, 90)',
    borderTop: 'none',    
    borderBottom: 'none',   
    borderLeft: '1px solid rgb(167, 176, 188)', 
    borderRight: '1px solid rgb(125, 134, 145)',
};


interface CompProps {
    section:string;
}
export default function MainContent({section}: CompProps) {

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
                {section === AppConfig.MOD_WORKFLOWS.id?   renderModWorkFlows():null}
                {section === AppConfig.MOD_APPLICATIONS.id?renderModApplications():null}
                {section === AppConfig.MOD_PLATFORM.id?    renderModPlatform() : null}
            </Flex>
    );

}//end PrimaryBar
