//src\app\testcomp\page.tsx

"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Box, Separator, Flex, Text, Button, Grid } from "@radix-ui/themes";
import {PrimaryBar} from "@/app/testcomp/testprimarybar";
import {TestHeader} from "@/app/testcomp/testheader";
import {TestSecondBar} from "@/app/testcomp/testsecondbar";
import { PgForms } from "@/app/testcomp/forms/pgforms";
import { GenerateKeys } from "@/common/helper/generatekeys";
import { AppGenerator } from "@/front/app";
import { Template } from "@/db/model/template";


const layoutStyle = {
    background: 'rgb(153, 17, 62)',
    padding: '0',
};

export const columnStyle = {
    borderColor: 'rgb(98, 97, 98)',
    background: 'rgb(7, 7, 7)'
};

/**
 * Page Test Components
 */
export default function PageTest() {

    const [ready, setReady] = useState<boolean>(false);

    useEffect(() => {
        if(ready) {return;} 
        const init = async () => { 
            await AppGenerator.saveInMemoryProglanguages();                         
            setReady(true);
        };
        init();
    }, []);

    // entity form
    //.......................................................................................
    const item_id:string = GenerateKeys.genAlphaNum16();

    const onSubmit = (entity:Template)=>{
        alert("Form Submitted");
        console.log(entity.toJsonString());        
    };//end

    const onCancel = () => {
        alert("Form Cancelled");
    };//end
    
    // component render
    //.......................................................................................
    return (
        <Grid height="100vh" rows="auto 1fr" columns="16% 68% 16%" style={layoutStyle} >
            
            <Flex gridColumn="1/4" gridRow="1" >
                 <TestHeader  />  
            </Flex>

            <Flex gridColumn="1" gridRow="2" >
                <PrimaryBar  />
            </Flex>

            <Flex gridColumn="2" direction="column" gridRow="2" p="3" > 
                {ready ? 
                    <PgForms itemId={item_id}
                                title="New Template"
                                onSubmit={onSubmit}
                                onCancel={onCancel} />:null}      
            </Flex>
            
            <Flex gridColumn="3" gridRow="2" >
                <TestSecondBar  />
            </Flex>

        </Grid>
    );


}//end class
