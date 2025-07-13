//src\app\gencode\pagecomp\outputmonitor.tsx

import { useEffect, useState } from "react";
import { Box, Separator, Flex, Text, Button, Link, Grid } from "@radix-ui/themes";
import CardCode from "@/app/gencode/comp/cardcode";
import { BARCFG_EXPORT_COPY } from "@/radix/appbars";
import BarButtons from "@/radix/cbars/btbar";
import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";

import { GenCodeModuleConfig } from "../config";
import { CodeGenConfig } from "@/codegen/cgconfig";


interface CompProps {
    section: string|null;
    format?: string;
    code?: string | null;
    fileName?: string;
}
export function GenCodeViewer({ section, format, code, fileName }: CompProps) {
    const [alertMessage, setAlertMessage] = useState<string>(GenCodeModuleConfig.NOT_DEF);
    const [codeCharged, setCodeCharged] = useState<boolean>(false);
    const [barButtons, setBarbuttons] = useState<BarButtonsCfg>(BARCFG_EXPORT_COPY);

    const expFileName: string = fileName ?? GenCodeModuleConfig.NOT_DEF;
    const codeFormat: string = format ?? CodeGenConfig.FORMAT_TYPESCRIPT.key;

    useEffect(() => {
        const init = (): void => {
            if (code && code !== null) {
                setCodeCharged(true);
            }
        }
        init();
    }, []);


    const onClick = (opId?: string) => {

        if (!codeCharged) { 
            showAlert("not code charged");
            return; 
        }
        if (opId==GenCodeModuleConfig.ACT_COPY) {
            navigator.clipboard.writeText(code!);
            showAlert("Code copied to clipboard");
            return; 
        }
        if (opId==GenCodeModuleConfig.ACT_EXPORT) {
            if(!fileName){
                showAlert("not file name defined");
                return;                 
            }   
            //exportFile(getExportFileMimetype(),code!,fileName);
            return;      
        }                   
    }//end


    const showAlert = (message:string) => {
        alert("Alert: " + message);
    }

    return (
        <Flex className="h-full" direction="column"   >
            <Flex width={"100%"} justify="between" px="2" py="1" align="start" >
                <Text size="3" align="left">{"Output Monitor"}</Text>
                <BarButtons barconfig={barButtons} onclick={onClick} />
            </Flex>

            <Separator orientation="horizontal" size="4" mb="2" />
            <CardCode title="Output Monitor"
                code={code ?? "No code generated yet."} />
            
        </Flex>
    );

}//end component




//{(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}    


        /*
        setAlertMessage("Code copied to clipboard");
               //setTimeout(() => setAlertMessage(AppConstants.NOT_DEF), 3000);    
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