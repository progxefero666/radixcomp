//src\app\workflows\editor\page.tsx


import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Grid, Text} from "@radix-ui/themes";
import { parseResponseCollection } from "@/front/parser/javascriptparser";
import { DB_ITEM_COMMAND } from "@/db/dboperations";

//db models
import { DbTables } from "@/db/dbcatalog";
//import { Codelang } from "@/db/model/codelang";
import { Workflow } from "@/db/model/workflow";
import { Header } from "@radix-ui/react-accordion";
import { WorkflowsConfig, UiSecondPanels } from "../config";
import { PrimaryBar } from "../pagecomp/primarybar";
import { SecondBar } from "../pagecomp/secondbar";
import { SecondContent } from "../pagecomp/secondcontent";
import { Codelang } from "@/db/model/codelang";
import { AppMemmory } from "@/app/appmemory";
import { set } from "date-fns";



const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};


/**
 * Page Workflows Manegement
 *  const router = useRouter();
 */
export default function WorkflowEditor() {
    //const [codelangs,setCodelangs] = useState<Codelang[]|null>(null);
    
    const [ready,setReady] = useState<boolean>(false);
    const [codelangs,setCodelangs] = useState<Codelang[]|null>(null);

    const test = (value:string) => {
    };

    useEffect(() => {
        if(ready) {return;}
        const init =  () => {   
            const codelangsJson = AppMemmory.readCodelangs();
            if(codelangsJson!=null) {
                setCodelangs(parseResponseCollection<Codelang>(codelangsJson));
                setReady(true);  
            }
            else {
                alert("No codelangs found.");
            }               
        };
        init();
        
    }, []);    

	    
    return (
        <Grid height="100vh" rows="auto 1fr" columns="14% 41% 41% 4%" style={layoutStyle} >
            
            <Flex gridColumn="1/5" gridRow="1" >
              
            </Flex>

            <Flex gridColumn="1" gridRow="2" >

            </Flex>

            <Flex gridColumn="2" gridRow="2" > 

            </Flex>
            
            <Flex gridColumn="3" gridRow="2" > 
 
            </Flex>   

            <Flex gridColumn="4" gridRow="2" >
 
            </Flex>

        </Grid>
    );

}//end page
