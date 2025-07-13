//src\app\diagrams\page.tsx

import { useEffect, useState } from "react";
import { Box, Grid, Flex } from "@radix-ui/themes";
import { SecondBar } from "./page/secondbar";
import { Header } from "./page/header";
import { MainBar } from "./page/mainbar";
import { MainContent } from "./page/maincontent";
import { SecondContent } from "./page/secondcontent";


const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

export default function PageDiagrams() {

    const [actsection, setActSection]  = useState<string>("section_1");
        
    useEffect(() => {

    }, []);

    const onSelection = (section: string) => {
        setActSection(section);
    };

    return (
        <Grid height="100vh" rows="auto 1fr" columns="14% 41% 41% 4%" style={layoutStyle} >

            <Flex gridColumn="1/5" gridRow="1" >
                <Header section={actsection} />
            </Flex>

            <Flex gridColumn="1" gridRow="2" >
                <MainBar section={actsection}
                    onselection={onSelection} />
            </Flex>

            <Flex gridColumn="2" gridRow="2" >
                <MainContent  />
            </Flex>

            <Flex gridColumn="3" gridRow="2" >
                <SecondContent  />
            </Flex>

            <Flex gridColumn="4" gridRow="2" >
                rbd
            </Flex>

        </Grid>
    );

}//end page
