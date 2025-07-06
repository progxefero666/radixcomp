"use client";

import { useRouter } from "next/navigation";
import { Box, Grid, Flex ,Text} from "@radix-ui/themes";


import PrimaryBar from "@/app/index/primarybar";
import IndexHeader from "./index/header";
import { useEffect, useRef, useState } from "react";
import { AppConfig } from "@/app_front/appconfig";
import SecondBar from "./index/secondbar";
import { AppIndex } from "@/app_front/appindex";




/**
 * Application Main page 
 */
export default function Home() {
    const router = useRouter();
    const appRef = useRef<AppIndex>(null);
    const [actmodule, setActModule] = useState<string>(AppConfig.INDEX.id);
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
        setActModule(sectionId);
    }
    
    const renderMainContent = () => {
        if (actmodule === AppConfig.MOD_WORKFLOWS.id) {
            return (<p>sds</p>);
        }        
        else if (actmodule === AppConfig.MOD_APPLICATIONS.id) {
            return (<p>sds</p>);
        }
        else if (actmodule === AppConfig.MOD_PLATFORM.id) {
           return (<p>sds</p>);
        }
    };

    return (
        <Flex direction="column" className="h-screen">
            <IndexHeader onselection={onSelection} />
            <Flex className="flex-1 overflow-hidden">
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-r border-gray-6 overflow-y-auto">
                    <PrimaryBar section={actmodule} onselection={onSelection} />
                </Box>
                <Flex width="68%" direction="column" gapY="2" className="h-full">
                    {initialized ? renderMainContent():null}
                </Flex>
                <Box className="w-[16%] bg-gray-1 dark:bg-gray-2 p-4 border-l border-gray-6 overflow-y-auto">
                    <SecondBar actsection={actmodule} />
                </Box>
            </Flex>
        </Flex>
    );

}//end class
