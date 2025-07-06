"use client";

import { useRouter } from "next/navigation";
import { Box, Grid, Flex ,Text} from "@radix-ui/themes";
import { Option } from "@/common/model/option";
import PrimaryBar from "@/app/index/primarybar";
import Header from "./index/header";
import { useEffect, useRef, useState } from "react";
import { AppConfig } from "@/app_front/appconfig";
import SecondBar from "./index/secondbar";
import { AppIndex } from "@/app_front/appindex";
import MainContent from "./index/maincontent";


const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};



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
    };

    if(!initialized) {
        return (
            <Box style={layoutStyle} >
                <Text>Loading...</Text>
            </Box>
        );
    }
    return (
        <Grid height="100vh" rows="auto 1fr" columns="16% 68% 16%" style={layoutStyle} >
            
            <Flex gridColumn="1/4" gridRow="1" >
                <Header section={actmodule} />    
            </Flex>

            <Flex gridColumn="1" gridRow="2" >
                <PrimaryBar section={actmodule} onselection={onSelection} />
            </Flex>

            <Flex gridColumn="2" gridRow="2" > 
                <MainContent section={actmodule} />
            </Flex>
            
            <Flex gridColumn="3" gridRow="2" >
                <SecondBar section={actmodule} />
            </Flex>

        </Grid>
    );


}//end class
