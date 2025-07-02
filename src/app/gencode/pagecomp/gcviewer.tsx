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
import { FilesMimeTypes } from "@/codegen/kernel/cgconstants";
import { exportFile } from "@/app_front/common/filesmanager";

interface CompProps {
    section: string;
    format?: string;
    code?: string | null;
    fileName?: string;
}
export function GenCodeViewer({ section, format, code, fileName }: CompProps) {
    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const [codeCharged, setCodeCharged] = useState<boolean>(false);
    const [barButtons, setBarbuttons] = useState<BarButtonsCfg>(BARCFG_EXPORT_COPY);

    const expFileName: string = fileName ?? AppConstants.NOT_DEF;
    const codeFormat: string = format ?? FilesMimeTypes.TYPESCRIPT;

    useEffect(() => {
        const init = (): void => {
            if (code && code !== null) {
                setCodeCharged(true);
            }
        }
        init();
    }, []);



    
    const getExportFileMimetype = () => {
        let mimetype: string = "";
        if(codeFormat === FilesMimeTypes.TYPESCRIPT) {
            mimetype = FilesMimeTypes.TYPESCRIPT;
        }      
        else if(codeFormat === FilesMimeTypes.JSON) {
            mimetype = FilesMimeTypes.JSON; 
        }          
        else if(codeFormat === FilesMimeTypes.JAVASCRIPT) {
            mimetype = FilesMimeTypes.JAVASCRIPT;
        } 
        else if(codeFormat === FilesMimeTypes.PYTHON) {
            mimetype = FilesMimeTypes.PYTHON;
        }
        else if(codeFormat === FilesMimeTypes.SQL) {
            mimetype = FilesMimeTypes.SQL;
        }        
        else if(codeFormat === FilesMimeTypes.HTML) {
            mimetype = FilesMimeTypes.HTML;
        }
        else if(codeFormat === FilesMimeTypes.CSS) {
            mimetype = FilesMimeTypes.CSS;
        }
        else {
            mimetype = FilesMimeTypes.TXT; 
        }
        return mimetype;
    }

    const onClick = (opId?: string) => {

        if (!codeCharged) { 
            showAlert("not code charged");
            return; 
        }
        if (opId==AppConstants.ACT_COPY) {
            navigator.clipboard.writeText(code!);
            showAlert("Code copied to clipboard");
            return; 
        }
        if (opId==AppConstants.ACT_EXPORT) {
            if(!fileName){
                showAlert("not file name defined");
                return;                 
            }   
            exportFile(getExportFileMimetype(),code!,fileName);
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