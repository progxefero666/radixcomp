//src\app\workflows\goups\panelgroups.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid, Flex, Text } from "@radix-ui/themes";


const compStyle={background: 'rgb(56, 56, 56)'};

interface CompProps {
    onclose: () => void;
}
export const PanelTaskgroups = ({onclose}: CompProps) => {
    
    const [ready,setReady] = useState<boolean>(false);

    useEffect(() => {
        if(ready) {return;}
        const init = async () => {                      
            //const response = await getAllByTable(DbTables.codelang);
            //if(response === null) {return false;}                      
            setReady(true);
            //alert("init end");
        };
        init();
    }, []);   

    return (
        <Flex direction="column" height="100vh" style={compStyle}>

        </Flex>
    );

}//end component
