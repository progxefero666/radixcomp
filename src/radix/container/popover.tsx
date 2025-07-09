//src\radix\container\popover.ts

import React, { MouseEventHandler } from "react";
import { Button, Flex, Popover } from "@radix-ui/themes";
import { BarButtonsCfg } from "@/common/modelui/barbuttonscfg";


interface CompProps {
    barbuttonscfg?: BarButtonsCfg;
   text?: string;
    children?: React.ReactNode;
}
export const XPopOver = ({ children, barbuttonscfg,text }: CompProps) => {


    const onOpen = (open: boolean) => {
        alert(open);
    }
    
    const onClose = (btn: HTMLButtonElement) => {
        alert("close");
    }

    const triggerButtonText: string = "open";

    return (
        <Popover.Root onOpenChange={(open) => { onOpen(open) }} >
            <Popover.Trigger >
                <Button >
                    {triggerButtonText}
                </Button>
            </Popover.Trigger>
            <Flex width="100%" direction="column" gap="2" >
                <Popover.Content sideOffset={5} align="start">
                    {children}
                    <Popover.Close>
                        <Button size="1" onClick={() => { onClose }} >
                            close
                        </Button>
                    </Popover.Close>
                </Popover.Content>

            </Flex>

        </Popover.Root>

    );
}
