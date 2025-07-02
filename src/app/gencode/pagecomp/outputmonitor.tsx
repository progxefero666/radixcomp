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
import { InputEditor } from "@/app/gencode/panelinput";
import CardCode from "@/app/gencode/comp/cardcode";
import { AppConstants } from "@/app_front/appconstants";

interface CompProps {
    section:string;
    format?: string;
    code?: string|null;
    fileName?: string;
}
export function OutputMonitor({section,code,fileName}:CompProps) {
     const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const [codeCharged, setCodeCharged] = useState<boolean>(false);

    const expFileName: string = fileName ?? AppConstants.NOT_DEF;

    useEffect(() => {
        const init=():void=>{
            if(code && code!==null) {
                setCodeCharged(true);
            }
        } 
        init();
    }, []);

    const onFileExport = () => {

        let result = true; //CodeGenCfg.exportCode(code);
        if (fileName && fileName !== AppConstants.NOT_DEF) {
            //result = CodeGenCfg.exportCode(code, fileName);
        }
        /*
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

        if(!codeCharged) {return;}

        if (opId) {
            switch (opId) {
                case AppConstants.ACT_EXPORT:
                    onFileExport();
                    break;
                case AppConstants.ACT_COPY:
                    navigator.clipboard.writeText(code!);
                    setAlertMessage("Code copied to clipboard");
                    break;
                default:
                    setAlertMessage("Operation not defined");
            }
        }
    };

    return (
        <Flex className="h-full" direction="column"   >
            <CardCode title="Output Monitor"
                      code={code ?? "No code generated yet."} />                      
        </Flex>
    );

}//end component
