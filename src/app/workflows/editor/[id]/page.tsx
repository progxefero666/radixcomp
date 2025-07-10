//src\app\workflows\editor\page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from 'next/navigation';
import { Box, Flex, Grid, Text} from "@radix-ui/themes";
import { parseResponseCollection } from "@/front/parser/javascriptparser";

//db models
import { DbTables } from "@/db/dbcatalog";
import { Codelang } from "@/db/model/codelang";
import { Workflow } from "@/db/model/workflow";
import { AppMemmory } from "@/app/appmemory";


const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

/**
 * Page Workflows Manegement
 *  const router = useRouter();
 */
export default function WorkflowEditor() {
    const [ready,setReady] = useState<boolean>(false);
    const [codelangs,setCodelangs] = useState<Codelang[]|null>(null);
    
    const params = useParams();
    let workflowId:number = -1;
    if(params && params.id) {
        workflowId = Number(params.id);
    }

    const loadInitCollections = async () => {  
        const codelangsJson = AppMemmory.readCodelangs();
        if(codelangsJson!=null) {
            setCodelangs(parseResponseCollection<Codelang>(codelangsJson));
            setReady(true);  
        }          
    };

    useEffect(() => {
        alert(workflowId);
        if(ready) {return;}
        loadInitCollections().then(() => {setReady(true);})
        .catch((error) => {
            console.error("Error loading initial collections:", error);
        })
    },[]);    

	if(!ready) {    
        return (
            <Box style={layoutStyle} >
                <Text>Loading...</Text>
            </Box>
        );
    }

    return (
        <Grid height="100vh" rows="auto 1fr" columns="14% 41% 41% 4%" style={layoutStyle} >
            
            <Flex gridColumn="1/5" gridRow="1" >
                header
            </Flex>

            <Flex gridColumn="1" gridRow="2" >
                Primary bar
            </Flex>

            <Flex gridColumn="2" gridRow="2" > 
                Main Content
            </Flex>
            
            <Flex gridColumn="3" gridRow="2" > 
                Second Content
            </Flex>   

            <Flex gridColumn="4" gridRow="2" >
                aux
            </Flex>

        </Grid>
    );

}//end page


