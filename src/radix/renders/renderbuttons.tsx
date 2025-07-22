//src\radix\renders\renderbuttons.tsx

import React from 'react';
import { Text, Button } from "@radix-ui/themes";
import { ButtonsStyle } from "@/radix/radixtheme";

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


export const renderIconButton = (icon:string) => {
    return (
        {icon}  
    );
};
