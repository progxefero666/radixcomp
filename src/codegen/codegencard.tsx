//src\app\appeditor\cards\appcard.tsx

import React, { useEffect, useRef, useState } from "react";

import { CodeGenStyle } from "@/codegen/cgstyle";
import { Option } from "@/common/model/option";
const CARD_DATA_STYLE: string = "w-full h-auto p-2 rounded-md";

/**
 * src\app_front\manapplications\appeditorcfg.ts
 */
export interface CardOutputCodeProp {  
    code: string;
    execexport?: (code:string) => void;
}
export default function CardOutputCode({code,execexport}: CardOutputCodeProp) {
    
    const onClick = (opId?:string) => {
        execexport
    };

    const codeStyle =
            {whiteSpace: 'pre-wrap',
             fontFamily: 'monospace',
             fontSize: '14px',
             lineHeight: '1.4' };

    return (
        <div className={CodeGenStyle.style_component}>            
            <div className={CARD_DATA_STYLE}>
                <code style={codeStyle}>
                    {code}
                </code>                
            </div>
        </div>
    )

} //end component
