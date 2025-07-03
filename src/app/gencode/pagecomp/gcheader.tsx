//src\app\gencode\pagecomp\gcheader.ts

import { useState, useEffect, useRef } from "react";

import { Option } from "@/common/model/option";
import { Box, Grid, Separator, Flex, Text, Button, Link } from "@radix-ui/themes";


import { format, addDays, differenceInDays } from "date-fns";
import { es } from 'date-fns/locale/es';

import { SchemaService } from "@/client/metadata/schemaservice";
import { XRadioGroup } from "@/radix/input/inpgrpradio";
import { SeparatorH } from "@/radix/container/separatorh";
import { SeparatorV } from "@/radix/container/separatorv";
import { getTextFile } from "@/app_server/actions/gettextfile";
import { ModelTable } from "@/codegen/kernel/cgmodel";

import { XInputTextArea } from "@/radix/input/inptextarea";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { CodeGenSql } from "@/codegen/kernel/cgsqlmotor";

import { CodeGenTsMotor } from "@/codegen/kernel/cgtsmotor";
import { InputFiles } from "@/radix/notready/inputfiles";
import { RadixConf, RadixConfTexts } from "@/radix/radixconf";
import { CodeGenJson } from "@/codegen/kernel/cgjsonmotor";
import { ModuleConfig } from "../config";
import { InputSelect } from "@/radix/input/inpselect";
import { CodeGenConfig } from "@/codegen/cgconfig";

import { TsEntFilesOperations } from "@/codegen/operations/tsentfilesops";
import { JsonEntFilesOperations } from "@/codegen/operations/jsonentfilesops";
import { PyEntServiceFilesOperations } from "@/codegen/operations/pyentservicefilesops";
import { TsxEntFormsOperations } from "@/codegen/operations/tsxentformsops";
import { TsEntServiceFilesOperations } from "@/codegen/operations/tsentservicefilesops";
import { AppConstants } from "@/app_front/appconstants";
import { AppContext } from "@/app_front/appcontext";
import { ThemeButtonsStyle } from "@/radix/radixtheme";
import { usePathname } from "next/navigation";



/**
 * Page Header
 */
interface PageHeaderProps {onselection:(sectionId:string)=>void;}
export function PageHeader({onselection}:PageHeaderProps) {

    const pathname = usePathname();

    const onSelection = (sectionId: string) => {
        alert("Home: onselection: " + sectionId);
    }

    const renderHomeButton = () => {
        return (
            <Link href="/" >
                <Button
                    variant={pathname === "/" ? RadixConf.VARIANTS.solid :
                                                RadixConf.VARIANTS.soft}
                    color={ThemeButtonsStyle.BTN_HOME_COLOR}
                    className={ThemeButtonsStyle.BTN_HOME_STYLE}
                    size={ThemeButtonsStyle.BTN_DEF_SIZE} >
                    Home
                </Button>
            </Link>
        )
    }

    return (
        <Flex className="w-full h-auto py-3 bg-gray-2 dark:bg-gray-3 border-b border-gray-6" >

            <Flex direction="row" gap="2" justify="between" 
                 className="full h-auto w-[14%] bg-gray-1 dark:bg-gray-2 px-4 border-r border-gray-6">
                <Text size="5" weight="bold" className="text-gray-12">
                    Radix UI
                </Text>   
                <Box>
                 {renderHomeButton()}  
                </Box>  
                         
            </Flex>

            <Box className="h-auto w-[82%] bg-gray-0 dark:bg-gray-1 px-6 overflow-y-auto">
                <Text size="5" weight="bold" className="text-gray-12">
                    Primitives Sandbox
                </Text>
            </Box>

            <Box className="h-auto w-[4%] bg-gray-1 dark:bg-gray-2 px-4 border-l border-gray-6">
                
            </Box>

        </Flex>
    );

}//end PrimaryBar

