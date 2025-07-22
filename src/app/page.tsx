//src\app\testcomp\page.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Box, Separator, Flex, Text, Button, Link, Grid, Container } from "@radix-ui/themes";
import { Option } from "@/common/model/option";

import { SeparatorH } from "@/radix/container/separatorh";
import {PrimaryBar} from "@/app/testcomp/testprimarybar";
import {TestHeader} from "@/app/testcomp/testheader";
import {TestSecondBar} from "@/app/testcomp/testsecondbar";
import { PgForms } from "@/app/testcomp/forms/pgforms";
import { SeparatorV } from "@/radix/container/separatorv";
import { GenerateKeys } from "@/common/helper/generatekeys";
import { AppGenerator } from "@/front/app";
import { Template } from "@/db/model/template";


export const pageStyle = {
  
    background: '#1e1a24ff'
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

    const item_id:string = GenerateKeys.genAlphaNum16();

    const onSubmit = (entity:Template)=>{
        alert("Form Submitted");
        console.log(entity.toJsonString());        
    };//end

    const onCancel = () => {
        alert("Form Cancelled");
    };//end
    
    return (

        <Flex width="100%" direction="column" style={pageStyle} >

            { /* Header */}
            <TestHeader  />
            <SeparatorH />
            
            { /* Main content */}
            <Flex width="100%"  direction="row" >

                <Box width="16%" >
                    <PrimaryBar  />
                </Box>    
            
                <Box width="68%" >
                    {ready ? 
                        <PgForms itemId={item_id}
                                 title="New Template"
                                 onSubmit={onSubmit}
                                 onCancel={onCancel} />:null}                    
                </Box>

                <Box width="16%">                    
                    <TestSecondBar  />
                </Box>                
            </Flex> 

        </Flex>
    );

}//end class
