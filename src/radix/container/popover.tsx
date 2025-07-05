//src\radix\container\popover.ts

import React, { MouseEventHandler } from "react";
import { Button, Flex, Popover } from "@radix-ui/themes";
import { BarButtonsCfg } from "@/common/modelui/barbuttonscfg";


interface CompProps {
    barbuttonscfg?: BarButtonsCfg;
    text: string;    
    children?: React.ReactNode;   
}
export const XPopOver = ({text,children,barbuttonscfg}: CompProps) => {

    const onClick = (btn:HTMLButtonElement) => {
        alert(btn.value);
    }

    const toConsole = (open:boolean) => {
        console.log(open);
    }

    return (
        <Popover.Root onOpenChange={(open) => {toConsole(open)}} >
            <Popover.Trigger >
                <Button >
                    {text}
                </Button>
            </Popover.Trigger>
            <Flex width="100%" direction="column" gap="2" >
                <Popover.Content sideOffset={5} align="start">
                    {children}
                </Popover.Content>

                <Popover.Close>
                    <Button size="1" onClick={() => {onClick}} >
                        close
                    </Button>
                </Popover.Close>                
            </Flex>
                                
       </Popover.Root>

    );  
}
