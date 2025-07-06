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


const mainContentStyle = {
    background: 'rgb(35, 35, 39)',
    borderTop: 'none',    
    borderBottom: 'none',   
    borderLeft: '1px solid rgb(167, 176, 188)', 
    borderRight: '1px solid rgb(125, 134, 145)',
};

const secondBarStyle = {
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
            
            <Flex gridColumn="1/4" gridRow="1" direction="row" >
                <IndexHeader onselection={onSelection} />    
            </Flex>

            <Flex gridColumn="1" gridRow="2" direction="column">
                <PrimaryBar section={actmodule} onselection={onSelection} />
            </Flex>

            <Flex gridColumn="2" gridRow="2"  direction="column" gapY="2" style={mainContentStyle} >
                {initialized ? renderMainContent():null}
            </Flex>
            
            <Flex gridColumn="3" gridRow="2" direction="column" gapY="2" style={secondBarStyle} >
                <SecondBar actsection={actmodule} />
            </Flex>

        </Grid>
    );


}//end class
