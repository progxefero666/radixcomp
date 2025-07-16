//src\app\gencode\pagecomp\outputmonitor.tsx

import { useEffect, useState } from "react";
import { Box, Separator, Flex, Text, Button, Link, Grid } from "@radix-ui/themes";
import CardCode from "@/app/gencode/cards/cardcode";
import { BARCFG_EXPORT_COPY } from "@/radix/appbars";
import BarButtons from "@/radix/cbars/btbar";
import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";

import { GenCodeModuleConfig } from "../config";
import { CodeGenConfig } from "@/codegen/cgconfig";

//

interface CompProps {
    format?: string;
    code: string;
    exportdata: () => void;
}
export function GenCodeViewer({ format, code,exportdata }: CompProps) {

    const [barButtons, setBarbuttons] = useState<BarButtonsCfg>(BARCFG_EXPORT_COPY);

    useEffect(() => {
         console.log(code);
    }, []);


    const onClick = (opId?: string) => {

        if (opId==GenCodeModuleConfig.ACT_COPY) {
            navigator.clipboard.writeText(code!);
            alert("Code copied to clipboard");
            return; 
        }
        else if (opId==GenCodeModuleConfig.ACT_EXPORT) {
            exportdata();
        }                   
    };//end


    return (
        <Flex className="h-full" direction="column"   >
            <Flex width={"100%"} justify="between" px="2" py="1" align="start" >
                <Text size="3" align="left">{"Output Monitor"}</Text>
                <BarButtons barconfig={barButtons} onclick={onClick} />
            </Flex>

            <Separator orientation="horizontal" size="4" mb="2" />
            <CardCode title="Output Monitor" code={code} />
            
        </Flex>
    );

}//end component


