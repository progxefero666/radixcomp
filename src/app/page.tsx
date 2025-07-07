"use client";

import { useRouter } from "next/navigation";
import { Box, Grid, Flex ,Text} from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";

import Header from "@/app/index/header";
import PrimaryBar from "@/app/index/primarybar";
import SecondBar from "@/app/index/secondbar";
import MainContent from "@/app/index/maincontent";
import { AppConfig } from "@/app_front/appconfig";
import { AppIndex } from "@/app_front/appindex";

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
        //AppContext.saveCodelangs(appRef.current.codelangs);
        const init = async () => {
            appRef.current = new AppIndex();
            const res: boolean = await appRef.current.loadInitCollections();
            //console.log(appRef.current.codelangs);
            setInitialized(true);
        };
        init();
    }, []);

    const onSelection = (sectionId: string) => {    
        router.push(`/${sectionId}`);
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
                <Header module={actmodule} />    
            </Flex>

            <Flex gridColumn="1" gridRow="2" >
                <PrimaryBar module={actmodule} onselection={onSelection} />
            </Flex>

            <Flex gridColumn="2" gridRow="2" > 
                <MainContent module={actmodule} />
            </Flex>
            
            <Flex gridColumn="3" gridRow="2" >
                <SecondBar module={actmodule} />
            </Flex>

        </Grid>
    );


}//end class
