//src\app\diagrams\page\secondbar.tsx

import { Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";


const secondBarStyle = {
    background: 'rgb(24, 24, 27)',
};


interface CompProps {
    value?: string;
}
export function SecondBar({value}: CompProps) {
    

    const onSelection = (value: string) => {
    }

    useEffect(() => {
   
    }, []);    

    return (
        <Flex width="100%" direction="column" px="3" py="2" gapY="2" style={secondBarStyle} >
            <p>Second Bar</p>
        </Flex>
    );

}//end PrimaryBar
