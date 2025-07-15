//src\app\diagrams\page\maincontent.tsx

import React, { useState, useEffect } from "react";
import { Box, Grid, Flex, Text, Button, Link, TextField } from "@radix-ui/themes";


import { ImageLoader } from "@/graph2d/util/imageloader";

const mainContentStyle = {
    background: 'rgb(56, 56, 56)',
    borderTop: 'none',
    borderBottom: 'none',
    borderLeft: '1px solid rgb(167, 176, 188)',
    borderRight: '1px solid rgb(125, 134, 145)',
};


interface CompProps {
    value?: string;
}
export function MainContent({ value }: CompProps) {

    const [ready, setReady] = useState<boolean>(false);

    const handleModelChange = (changes: any) => {
        alert('GoJS model changed!');
    }

    const init = async () => {
     
        setReady(true);
    }
    useEffect(() => {
        if(ready){return;}
        init();
    }, []);

    return (
        <Flex width="100%" direction="column" px="3" py="2" style={mainContentStyle} >

        </Flex>
    );

}//end PrimaryBar


/*

import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';

*/