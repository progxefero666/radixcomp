"use client";

import { useRouter } from "next/navigation";
import { Box, Grid, Flex ,Text} from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";

import Header from "@/app/index/header";
import PrimaryBar from "@/app/index/primarybar";
import SecondBar from "@/app/index/secondbar";
import MainContent from "@/app/index/maincontent";
import { AppConfig } from "@/app/index/appconfig";


const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

/**
 * Application Main page 
 */
export default function Home() {

  
    const router = useRouter();
    const actmodRef = useRef<string>(AppConfig.INDEX.id);

    const onSelection = (sectionId: string) => {    
        router.push(`/${sectionId}`);
    };


    return (
        <Grid height="100vh" rows="auto 1fr" columns="16% 68% 16%" style={layoutStyle} >
            
            <Flex gridColumn="1/4" gridRow="1" >
                <Header module={actmodRef.current} />    
            </Flex>

            <Flex gridColumn="1" gridRow="2" >
                <PrimaryBar module={actmodRef.current} onselection={onSelection} />
            </Flex>

            <Flex gridColumn="2" gridRow="2" > 
                <MainContent module={actmodRef.current} />
            </Flex>
            
            <Flex gridColumn="3" gridRow="2" >
                <SecondBar module={actmodRef.current} />
            </Flex>

        </Grid>
    );


}//end class
