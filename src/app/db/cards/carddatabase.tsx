//src\libcomp\inputselect.tsx

import React, { useEffect, useState } from "react";

import { Box,Text, Flex, Select, TextField, Button } from "@radix-ui/themes";
import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";
import { BARCFG_EXPORT } from "../../../radix/appbars";
import ContCollapsible from "@/radix/container/collap";
import { Label } from "@radix-ui/react-label";
import { SeparatorH } from "@/radix/container/separatorh";


const cardStyle = {    
    borderRadius: 'var(--radius-1)',
    border: '2px solid var(--blue-7)',
    padding: 'var(--space-2)',
    boxShadow: '0px 0px 1px rgba(253, 72, 6, 0.9)' 
};
interface CompProps {
    initsquemapath: string;
}
export function CardDatabase({initsquemapath}: CompProps) {
    const barbuttonscfg: BarButtonsCfg = BARCFG_EXPORT;
 
    const [squemaPath, setSquemaPath] = useState<string>(initsquemapath); 
        
    //const [squemaPath, setSquemaPath] = useState<string>(squemaInitPath);
    //useEffect(() => { }, []);

    return(
            <ContCollapsible title="Database Config." >
                <Flex width="100%" direction="column" pt="2" pl="2">
                    <Text size="3" >
                        <Flex width="100%" direction="row" justify="between" gapY="1">
                            <Box>
                                <Label>Database Schema: </Label>
                            </Box>
                            <Box>
                                <Button color="blue" >
                                    upload
                                </Button>
                            </Box>
                        </Flex>
                        <SeparatorH />
                        <Flex width="100%" direction="row" mt="2" >
                            {squemaPath}
                        </Flex>
                    </Text>

                    <Box width="100%" >
                    </Box>
                </Flex>
            </ContCollapsible>
    )

}//end component
