"use client";

import { useRouter } from "next/navigation";
import { Box, Grid, Flex ,Text} from "@radix-ui/themes";


import PrimaryBar from "@/app/index/primarybar";
import IndexHeader from "./header";
import { useEffect, useRef, useState } from "react";
import { AppConfig } from "@/app_front/appconfig";
import SecondBar from "./secondbar";
import { AppIndex } from "@/app_front/appindex";

import { renderListAgents, renderListApplications, renderListServers, renderListServices } from "./mainrender";


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
            const res: boolean = await appRef.current.loadInitCollections();
            setInitialized(true);
        };
        init();
    }, []);

    const onSelection = (sectionId: string) => {    
        setSection(sectionId);
    }

    return (
        <Flex direction="column" className="h-screen">

            <IndexHeader onselection={onSelection} />

            <Flex className="flex-1 overflow-hidden">
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-r border-gray-6 overflow-y-auto">
                    <PrimaryBar section={section} onselection={onSelection} />
                </Box>
                <Box className="w-[68%] bg-gray-0 dark:bg-gray-1 p-4 overflow-y-auto">
                    {initialized ?
                        <IndexMainContent section={section} />
                        : null}
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

}
function IndexMainContent({ section, }: IndexMainContentProps) {

    //useEffect(() => { }, []);

    const renderMainContent = () => {
        if (section === AppConfig.MOD_APPLICATIONS.id) {
            return (<p>sds</p>);
        }
        else if (section === AppConfig.MOD_SERVICES.id) {
            return (<p>sds</p>);
        }
        else if (section === AppConfig.MOD_SERVERS.id) {
            return (<p>sds</p>);
        }
        else if (section === AppConfig.MOD_AGENTS.id) {
           return (<p>sds</p>);
        }
    };

    return (
        <Flex direction="column" gapY="5" className="h-full">
            {renderMainContent()}
        </Flex>
    );

}//end PrimaryBar
