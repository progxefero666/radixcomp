//src\app\gencode\pagecomp\outputmonitor.tsx

import { useEffect, useRef, useState } from "react";

import { usePathname, useRouter } from "next/navigation";
import { Box, Separator, Flex, Text, Button, Link, Grid } from "@radix-ui/themes";
import { Option } from "@/common/model/option";
import { AppConfig } from "@/app_front/appconfig";
import { AppIndex } from "@/app_front/appindex";
import MenuButtons from "@/radix/cbars/btmenu";
import { ThemeButtonsStyle } from "@/radix/radixtheme";
import { RadixConf } from "@/radix/radixconf";
import { GenCodeControl } from "@/app/gencode/pagecomp/gccontrol";
import CardCode from "@/app/gencode/comp/cardcode";
import { AppConstants } from "@/app_front/appconstants";
import { BARCFG_EXPORT, BARCFG_EXPORT_COPY } from "@/app_front/ui/appbars";
import BarButtons from "@/radix/cbars/btbar";
import { BarButtonsCfg } from "@/common/modelui/barbuttonscfg";

interface CompProps {
    section: string;
    format?: string;
    code?: string | null;
    fileName?: string;
}
export function GenCodeViewer({ section, code, fileName }: CompProps) {
    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const [codeCharged, setCodeCharged] = useState<boolean>(false);
    const [barButtons, setBarbuttons] = useState<BarButtonsCfg>(BARCFG_EXPORT_COPY);

    const expFileName: string = fileName ?? AppConstants.NOT_DEF;

    useEffect(() => {
        const init = (): void => {
            if (code && code !== null) {
                setCodeCharged(true);
            }
        }
        init();
    }, []);

    const onFileExport = (code:string, fileName?:string) => {
        alert("onFileExport");
        if (!codeCharged) { 
            alert("not code charged");
            return; 
        }

        /*
        let result = true; //CodeGenCfg.exportCode(code);
        if (fileName && fileName !== AppConstants.NOT_DEF) {
            //result = CodeGenCfg.exportCode(code, fileName);
        }
        
        if (result) {
            setAlertMessage(AppEditorMessages.MSG_EXPORT_SUCCESS);
        }
        else {
            setAlertMessage(AppEditorMessages.MSG_EXPORT_ERROR);
        }
        setTimeout(() => setAlertMessage(AppConstants.NOT_DEF), 3000);
        */
    }

    const onClick = (opId?: string) => {
  
        if (!codeCharged) { 
            renderAlert("not code charged");
            return; 
        }

        if (opId==AppConstants.ACT_COPY) {
            navigator.clipboard.writeText(code!);
            setAlertMessage("Code copied to clipboard");
            //setTimeout(() => setAlertMessage(AppConstants.NOT_DEF), 3000);  
            return; 
        }
        else if (opId==AppConstants.ACT_EXPORT) {
            setAlertMessage("File exported success");
            //setTimeout(() => setAlertMessage(AppConstants.NOT_DEF), 3000);       
            return;      
        }        
           
    }//end


    const renderAlert = (message:string) => {
        alert("Alert: " + message);
    }

    return (
        <Flex className="h-full" direction="column"   >
            <Flex width={"100%"} justify="between" px="2" pt="1" align="start" >
                <Text size="4" align="left">{"Output Monitor"}</Text>
                <BarButtons barconfig={barButtons} onclick={onClick} />
            </Flex>

            <Separator orientation="horizontal" size="4" mb="2" />
            <CardCode title="Output Monitor"
                code={code ?? "No code generated yet."} />
            
        </Flex>
    );

}//end component

//{(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}    