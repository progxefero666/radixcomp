//src\radix\renders\renderbuttons.tsx

import { useState, useEffect, useRef } from "react";
import { TypeScriptViewer } from "@/app/gencode/cgtypescript/typescriptviewer";
import { Box, Grid, Flex, Text, Button, Tabs, TextField, Separator, Slider, ChevronDownIcon, } from "@radix-ui/themes";
import { COMP_BORDER_STYLE, ButtonsStyle } from "@/radix/radixtheme";
import { JsxOps, TsOps } from "@/codegen/data/cgdataoperations";
import { XRadioGroup } from "@/radix/keyvalue/inpgrpradio";

import { InputPattern } from '@/codegen/data/model/inputpattern';
import { RADIX_COLORS } from '@/radix/radixconstants';
import { PlayIcon, ReloadIcon, TextAlignTopIcon, TrashIcon } from '@radix-ui/react-icons';
import { OpConstants } from '@/common/constants';
import { DlgBtnDeleteConfirm } from '@/radix/dialog/dlgbtndelete';
import { RadixConf } from '@/radix/radixconf';
import { CgDataProcessor } from '@/codegen/data/cgdataproc';
import { Keyvalue } from '@/common/model/keyvalue';
import React from 'react';
import { SeparatorH } from "@/radix/container/separatorh";
import { CgDataPatterns } from '@/codegen/data/cgdatapatterns';


const renderIcon = (icon:string) => {
    return (
        {icon}  
    );
};

export const renderButton = (text:string, 
                             color:any,
                             icon: React.ReactNode,
                             commandId:string,
                             onClick: (commandId: String) => void) => {
    return (
        <Button color={color} 
            size={ButtonsStyle.DEF_SIZE}
            radius={ButtonsStyle.DEF_RADIUS}
            onClick={(e) => onClick(commandId)}>
                {icon}
            <Text color={ButtonsStyle.DEF_TEXT_COLOR} 
                  size={ButtonsStyle.DEF_SIZE}>{text}</Text>
        </Button>    
    );
};//end