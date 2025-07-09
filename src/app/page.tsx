//src\app\workflows\page.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid, Flex, Text } from "@radix-ui/themes";

import { WorkflowsConfig }  from "@/app/workflows/config";
import { Header }       from "@/app/workflows/pagecomp/header";
import { PrimaryBar }       from "@/app/workflows/pagecomp/primarybar";
import { MainContent }      from "@/app/workflows/pagecomp/body";
import { SecondBar }        from "@/app/workflows/pagecomp/secondbar";
import { Codelang } from "@/db/model/codelang";
import { getAllByTable } from "@/db/services/generic/serviceread";
import { DbTables } from "@/db/dbcatalog";
import { parseCollection } from "@/front/parser/javascriptparser";



const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

/**
 * Page Workflows Manegement
 *  const router = useRouter();
 */
export default function PageWorkflows() {
    const [codelangs,setCodelangs] = useState<Codelang[]|null>(null);
    
    const [ready,setReady] = useState<boolean>(false);
    const [actsection, setActSection] = useState<string>(WorkflowsConfig.MODULES[0].id);
    const onSelection = (section:string) => {setActSection(section);};

    useEffect(() => {
        if(ready) {return;}
        const init = async () => {                      
            const response = await getAllByTable(DbTables.codelang);
            if(response === null) {return false;}            

            const coll_codelang:Codelang[]|null =parseCollection<Codelang>(response)

            setCodelangs(parseCollection<Codelang>(response));
            setReady(true);
            alert("init end");
        };
        init();
    }, []);    

    return (
        <Grid height="100vh" rows="auto 1fr" columns="16% 68% 16%" style={layoutStyle} >
            
            <Flex gridColumn="1/4" gridRow="1" >
                <Header codelangs={codelangs}
                        section={actsection} />   
            </Flex>

            <Flex gridColumn="1" gridRow="2" >
                <PrimaryBar section={actsection} 
                            onselection={onSelection} />
            </Flex>

            <Flex gridColumn="2" gridRow="2" > 
                <MainContent codelangs={codelangs}
                             section={actsection} />
            </Flex>
            
            <Flex gridColumn="3" gridRow="2" >
                <SecondBar codelangs={codelangs}
                           section={actsection} />
            </Flex>

        </Grid>
    );

}//end page