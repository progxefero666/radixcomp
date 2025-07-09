//src\app\workflows\pagecomp\wfsecomdbar.tsx

import { Codelang } from "@/db/model/codelang";
import { Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";



const secondBarStyle = {
    background: 'rgb(24, 24, 27)',
};


interface CompProps {
    section: string|null;
}
export function SecondBar({section}: CompProps) {
    
//collection: TOption[]

    const onSelection = (sectionId: string) => {
    }

    useEffect(() => {
   
    }, []);    

    return (
        <Flex width="100%" direction="column" px="3" py="2" gapY="2" style={secondBarStyle} >
            <p>Second Bar</p>
        </Flex>
    );

}//end PrimaryBar

