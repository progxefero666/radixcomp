//src\app\index\mainrender.tsx

import { Button, Box, Text, Flex, Separator, IconButton } from "@radix-ui/themes";

import { Application } from "@/client/models/Application";
import { Agent } from "@/client/models/Agent";
import { Service } from "@/client/models/Service";
import { Server } from "@/client/models/Server";
import ContCollapsible from "@/radix/container/collapsible";
import { BarButtonsCfg } from "@/common/modelui/barbuttonscfg";
import { BARCFG_DELETE_OPEN } from "@/app_front/ui/appbars";

export const renderListServices = (servs: Service[]) => {
    const barConfig: BarButtonsCfg = BARCFG_DELETE_OPEN;
    return (
        <>
            {servs.map((service, index) => (
                <ContCollapsible id={index} key={index.toString()}
                    barbuttonscfg={barConfig}
                    title={service.name}
                    intro={service.stype!}
                    opened={false}>
                    {/* children */}
                    <Text size="2">
                        {service.description}
                    </Text>
                </ContCollapsible>
            ))}
        </>
    )
}//end jsx render

export const renderListServers = (servs: Server[]) => {
    const barConfig: BarButtonsCfg = BARCFG_DELETE_OPEN;
    return (
        <>
            {servs.map((server, index) => (
                <ContCollapsible id={index} key={index.toString()}
                    barbuttonscfg={barConfig}
                    title={server.name}
                    intro={server.srvtype!}
                    opened={false}>
                    {/* children */}
                    <Text size="2">
                        {server.description}
                    </Text>
                </ContCollapsible>
            ))}
        </>
    )
}//end jsx render

export const renderListAgents = (ags: Agent[]) => {
    console.log("renderAgents");
    const barConfig: BarButtonsCfg = BARCFG_DELETE_OPEN;
    return (
        <>
            {ags.map((agent, index) => (
                <ContCollapsible id={index} key={index.toString()}
                    barbuttonscfg={barConfig}
                    title={agent.name}
                    intro={agent.agtype!}
                    opened={false}>
                    {/* children */}
                    <Text size="2">
                        {agent.description}
                    </Text>
                </ContCollapsible>
            ))}
        </>
    )
}//end jsx render

export const renderListApplications = (apps: Application[]) => {
    const barConfig: BarButtonsCfg = BARCFG_DELETE_OPEN;
    return (
        <>
            {apps.map((app, index) => (
                <ContCollapsible id={index} key={index.toString()}
                    barbuttonscfg={barConfig}
                    title={app.name}
                    intro={app.reference!}
                    opened={false}>
                    {/* children */}
                    <Text size="2">
                        {app.description}
                    </Text>
                </ContCollapsible>
            ))}
        </>
    )
}//end jsx render

/**
 * 
 * @param apps 
 * @returns 
 */
export const renderTableApplications = (apps: Application[]) => {
    const barConfig: BarButtonsCfg = BARCFG_DELETE_OPEN;
    return (
        <>
            {apps.map((app, index) => (
                <div key={index.toString()}>
                  
                </div>
            ))}
        </>
    )
}//end jsx render
