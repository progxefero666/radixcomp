"use client";

import { useRouter } from "next/navigation";
import { Box, Grid, Flex ,Text} from "@radix-ui/themes";
import { Option } from "@/common/model/option";

import { AppConstants } from "@/app_front/appconstants"

import PrimaryBar from "@/app/index/primarybar";
import IndexHeader from "./index/header";
import { useEffect, useRef, useState } from "react";
import { AppConfig } from "@/app_front/appconfig";
import SecondBar from "./index/secondbar";
import { AppIndex } from "@/app_front/appindex";



const boxClassName = "bg-gray-1 dark:bg-gray-2 p-4 border-l border-gray-6";

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
        <Grid height="100vh" rows="auto 1fr" columns="16% 68% 16%" gap="2">
            
            <Flex gridColumn="1/4" gridRow="1">
                <IndexHeader onselection={onSelection} />    
            </Flex>

            <Flex gridColumn="1" gridRow="2" direction="column" p="2">
                <PrimaryBar section={actmodule} onselection={onSelection} />
            </Flex>

            <Flex gridColumn="2" gridRow="2"  direction="column" gapY="2">
                {initialized ? renderMainContent():null}
            </Flex>
            
            <Flex gridColumn="3" gridRow="2" direction="column" gapY="2" className={boxClassName}>
                <SecondBar actsection={actmodule} />
            </Flex>

        </Grid>
    );

    /*
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
    */

}//end class
