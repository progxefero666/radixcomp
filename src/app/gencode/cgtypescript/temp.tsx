//

import { Box, Flex } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";

/**
 * Jsx Comp asas
 */
export interface CompProps {
    dfgdg: string;
    dfg?: boolean;
    dfgf: (value: string) => void;
}
export default function asas({dfgdg, dfg, dfgf }: CompProps) {

    const inputRef = useRef<HTMLInputElement>(null);
    const [ready, setReady] = useState<boolean>(false);

    useEffect(() => {
        if(ready) {return;}
        
        setReady(true);
    }, []);

    return (
        <Flex width="100%" direction="column" px="2" py="1" align="center" justify="center">
            <Box width="100%">
                
            </Box>
        </Flex>
    )
};//end component