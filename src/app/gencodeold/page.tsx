//src\app\codegen\page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Option } from "@/common/model/option";
import { AppConstants, AppUiConst } from "@/app_front/appconstants";


import PageOutputMonitor from "./outputmonitor";
import { CodeGenStyle } from "../../codegen/cgstyle";
import PageInputEditor from "./inputeditor";

import { CodeFormats } from "@/codegen/kernel/cgconstants";
import { useRouter } from "next/navigation";
import { AppConfig } from "@/app_front/appconfig";
import { ModuleDbModelToolsConfig } from "@/codegen/mod_config";
import { Button } from "@radix-ui/themes";



/**
 * Page Index JSX Client
 * start command:
 *  npx openapi-typescript-codegen --input http://localhost:8000/openapi.json --output ./src/client --client axios
 *  ManApplicationUtil.getFormEntity
 *  
 *  ApplicationEditor
 *  src\app_front\manapplications\appeditorcfg.ts
 */
export const CODEGEN_PATH: string = "./codegen";

//const codeGenControl: DbModelToolsControl = new DbModelToolsControl();

const LAYOUT_STYLE: string = "w-full h-auto ";

export default function PageDbModelTools() {
    const router = useRouter();   
    const execNavToIndex = () => { 
        router.push("./");
    }

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const [outputFormat, setOutputFormat] = useState<string>(CodeFormats.TYPESCRIPT);
    const [code, setCode] = useState<string|null>(null);
    const [section, setSection] = useState<string>(ModuleDbModelToolsConfig.MENU_ACT_OPTION.id);



    const chargeSection = (name: string): void => { 
        if(name == ModuleDbModelToolsConfig.OPT_CREATE_MODELS.id){
        }
        else if(name == ModuleDbModelToolsConfig.OPT_CREATES_SERVICES.id) {
        }
        else if(name == ModuleDbModelToolsConfig.OPT_MODEL_CARDS.id) {
        }        
        else if(name == ModuleDbModelToolsConfig.OPT_MODEL_FOLDER.id) {
        }        
        setSection(section); 
    }

    const runGeneration = (data:string) => {        
        setCode(data);
    }

    const exportFileCode = (fileName:string,code:string) => {        
        console.log("Export file: " + fileName + " with code: " + code);

    }

        const onselection = (sectionId:string) => {        
        console.log("Export file: " + code);

    }


    return (
        <div id = "root"className={LAYOUT_STYLE} >
            <PageHeader />
            <div className={CodeGenStyle.BODY_STYLE}>
                
                <PagePrimaryBar     onselection={onselection}
                    section={section}  />

                <PageInputEditor    section={section} run = {runGeneration}/>      

                <PageOutputMonitor  key={code} 
                                    onexport={exportFileCode}       
                                    format={outputFormat} code={code} />
                
                <PageSecondaryBar   actsection={section} />                
            </div>
        </div>
    );

}//end 

const MODULE_HEADER_STYLE: string
       = "w-full h-auto grid grid-cols-[14%_41%_41%_4%] border-b-1 mb-3 border-b-red-800 py-2";

interface PageHeaderProp {
    value?:string;
     //onfileloaded?: (file: File) => void;
}
function PageHeader({ value }: PageHeaderProp) {
    const router = useRouter(); 
    const execNavToIndex = () => { 
        router.push("./");
    }
    const maxLen: number = 50;
    const onSearchSubmit = (value:string): void => { }
    const onButtonClick = () => { };
    
    return (

        <div className={MODULE_HEADER_STYLE}>

            {/*column left */}
            <div className="w-full h-auto flex flex-row items-center px-4 top-2">
                <div className="flex-1 flex items-center text-white text-2xl translate-y-[-4px]">
                    Code Gen
                </div>
                <div>                   
                    <Button onClick={onButtonClick}  />                           
                </div>
            </div>

            {/*column center */}
            <div className="w-full h-auto flex flex-row ">
                <div className="w-[26%] flex flex-items-center" >
                </div>
            </div>

            {/* column right */}
            <div className="w-full h-auto flex flex-row">
                right
            </div>

        </div>
    )

}//end

const LAYOUT_PRIMARY_BAR: string =
        "w-full min-h-screen flex flex-col px-2 mb-2";
interface PrimaryBarProps {
    section: string;
    onselection: (sectionId:string) => void;
}
function PagePrimaryBar({section,onselection}: PrimaryBarProps) {
    return (
        <div className={LAYOUT_PRIMARY_BAR}>
            {/*
                        <TwDaisyMenu onselection={chargesection}
                options={sections}
                optactname={actsection}
                optcolor={AppThemeMenus.MENU_OPT_COLOR}
                optactcolor={AppThemeMenus.MENU_OPT_ACT_COLOR} />
            */}

        </div>
    )

}//end comp

const LAYOUT_SECONDARY_BAR: string =        
        "w-full min-h-screen flex flex-col p-2";


interface PageSecondaryBarProp {
    actsection: string;
}
function PageSecondaryBar({ actsection }: PageSecondaryBarProp) {

    return (
        <div className = {LAYOUT_SECONDARY_BAR}>
            Editor Tools
        </div>
    )

}//end comp

    /*
    const moduleControl = useRef<DbModelToolsControl>(null); 
    useEffect(() => {
        const init=():void=>{
              moduleControl.current = 
                new DbModelToolsControl(ModuleDbModelToolsConfig.MENU_ACT_OPTION.name);    
        } 
        init();
    }, []);
    */