"use client";

import { useRouter } from "next/navigation";
import { Box, Grid, Flex } from "@radix-ui/themes";
import { Option } from "@/common/model/option";
import ThemeSwitcher from "@/app_front/theme/themeswitcher";
import PrimaryBar from "@/app/index/primarybar";
import IndexHeader from "./index/header";
import { useEffect, useRef, useState } from "react";
import { AppConfig } from "@/app_front/appconfig";
import SecondBar from "./index/secondbar";
import { AppIndex } from "@/app_front/appindex";
import { Application } from "@/client/models/Application";
import { Agent } from "@/client/models/Agent";
import { Service } from "@/client/models/Service";
import { Server } from "@/client/models/Server";



/**
 * Application Main page 
 */
export default function Home() {
    const router = useRouter();
    const appRef = useRef<AppIndex>(null);
    const [section, setSection] = useState<string>(AppConfig.INDEX.id);
    const [initialized, setInitialized] = useState<boolean>(false);

    useEffect(() => {
        const init = async () => {
           appRef.current = new AppIndex();
           const res:boolean = await appRef.current.loadInitCollections(); 
           setInitialized(true);
        };
        init();
    }, []);
        
    const onSelection = (sectionId: string) => {
        alert("sectionId: " + sectionId);
        setSection(sectionId);
    }

    return (
        <Flex direction="column" className="h-screen">

            <IndexHeader onselection={onSelection} />

            <Flex className="flex-1 overflow-hidden">
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-r border-gray-6 overflow-y-auto">
                    <PrimaryBar section={section} onselection={onSelection} />
                </Box>
                <Box className="w-[68%] bg-gray-0 dark:bg-gray-1 p-6 overflow-y-auto">
                    {initialized ? 
                        <IndexMainContent section={section} 
                                          applications={appRef.current?.applications!} 
                                          services={appRef.current?.services!} 
                                          servers={appRef.current?.servers!} 
                                          agents={[]} />
                        :null}
                </Box>
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-l border-gray-6 overflow-y-auto">
                    <SecondBar actsection={section} />
                </Box>
            </Flex>

        </Flex>
    );

}//end class

/**
 * Page Index Main Content
 * in central column
 */
interface IndexMainContentProps {
    section: string;
    applications: Application[];
    services: Service[];
    servers:  Server[]
    agents:   Agent[] 
}
function IndexMainContent({ section,applications,services,servers,agents }: IndexMainContentProps) {

    useEffect(() => {
        alert(applications.length);
        alert(services.length);
        alert(servers.length);
    }, []);

    const renderMainContent = () => {
        if (section === AppConfig.MOD_APPLICATIONS.id) {
            return (<div>p</div>);
        }
        else if (section === AppConfig.MOD_SERVICES.id) {
            return (<div>p</div>);
        }
        else if (section === AppConfig.MOD_SERVERS.id) {
            return (<div>p</div>);
        }
        else if (section === AppConfig.MOD_AGENTS.id) {
            return (<div>p</div>);
        }                
    };

    return (
        <Flex direction="column" className="h-full">
            {renderMainContent()}
        </Flex>
    );

}//end PrimaryBar
