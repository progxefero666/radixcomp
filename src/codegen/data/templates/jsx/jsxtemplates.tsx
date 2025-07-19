
import { useEffect, useRef, useState } from "react";
import { Box,Flex,Text,Grid,Button,IconButton,Tabs} from "@radix-ui/themes";
import { Keyvalue } from "@/common/model/keyvalue";



/**
 * JsxTemplates.t_component
 */
export class JsxTemplates {
//..................................................................................

public static component: string = 
`export interface CompProps {
    ^%v1%^: string;
    ^%v2%^?: boolean;
    ^%v3%^: (value: string) => void;
}
export default function ^%v0%^({^%v1%^, ^%v2%^, ^%v3%^ }: CompProps) {

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
};//end component`;

};//end class
