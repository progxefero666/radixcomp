
import { useEffect, useRef, useState } from "react";
import { Box,Flex,Text,Grid,Button,IconButton,Tabs} from "@radix-ui/themes";
import { Keyvalue } from "@/common/model/keyvalue";


// template component
//............................................................................
export interface CompProps {
    name:       string;    
    inline?:    boolean;
    callback:   (value:string) => void;
}
export default function TemplateComp({ callback }: CompProps) {

    const inputRef = useRef<HTMLInputElement>(null);
    const [ready, setReady] = useState<boolean>(false);
             
    useEffect(() => {

    }, []);

    return(
        <Flex width="100%" direction="column" px="2" py="1" align="center" justify="center">
            <p>template</p>
        </Flex>
    )

};

