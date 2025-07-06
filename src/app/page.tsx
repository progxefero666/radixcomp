"use client";

import { useRouter } from "next/navigation";
import { Box, Grid, Flex ,Text} from "@radix-ui/themes";
import { Option } from "@/common/model/option";
import PrimaryBar from "@/app/index/primarybar";
import IndexHeader from "./index/header";
import { useEffect, useRef, useState } from "react";
import { AppConfig } from "@/app_front/appconfig";
import SecondBar from "./index/secondbar";
import { AppIndex } from "@/app_front/appindex";


const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

const mainContentStyle = {
    background: 'rgb(35, 35, 39)',
    borderTop: 'none',    
    borderBottom: 'none',   
    borderLeft: '1px solid rgb(167, 176, 188)', 
    borderRight: '1px solid rgb(125, 134, 145)',
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
    }
    
    const renderModPlatform = () => {
        return (
            <p>Platform</p>
        );
    };

    const renderModApplications = () => {
        return (
            <p>sds</p>
        );
    };    

    const renderModWorkFlows = () => {
        return (
            <p>sds</p>
        );
    };


    const renderMainContent = () => {
        return (
            <Flex width="100%" direction="column" gapY="2" style={mainContentStyle} >
                {actmodule === AppConfig.MOD_WORKFLOWS.id ? renderModWorkFlows() :
                actmodule === AppConfig.MOD_APPLICATIONS.id ? renderModApplications() :
                actmodule === AppConfig.MOD_PLATFORM.id ? renderModPlatform() : null}
            </Flex>
        );
    };

    return (
        <Grid height="100vh" rows="auto 1fr" columns="16% 68% 16%" style={layoutStyle} >
            
            <Flex gridColumn="1/4" gridRow="1" direction="row" >
                <IndexHeader onselection={onSelection} />    
            </Flex>

            <Flex gridColumn="1" gridRow="2" direction="column">
                <PrimaryBar section={actmodule} onselection={onSelection} />
            </Flex>

            <Flex gridColumn="2" gridRow="2" >
                {initialized ? renderMainContent():null}
            </Flex>
            
            <Flex gridColumn="3" gridRow="2" direction="column" >
                <SecondBar actsection={actmodule} />
            </Flex>

        </Grid>
    );


}//end class
