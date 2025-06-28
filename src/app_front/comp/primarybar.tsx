"use client";

import React from "react";
import Link from "next/link";
import { Flex, Text, Button, Separator } from "@radix-ui/themes";
import { usePathname } from "next/navigation"; // To highlight active link
import PanelMenu from "@/components/panelmenu";
import MenuButtons from "@/radix/cbars/btmenu";

export default function PrimaryBar() {
    const pathname = usePathname();

   
    const onselection = (name: string) => { 
    
    }

    return (
        <Flex direction="column" gap="2">
            <Link href="/" passHref>
                <Button
                    variant={pathname === "/" ? "solid" : "soft"}
                    color="gray"
                    className="w-full justify-start"
                    size="2" >
                    Home
                </Button>
            </Link>
            <Separator size="4" my="2" />
			
			{/*!!! NUEVO COMPONENTE PANEL MENU !!!
            <MenuButtons onselection={onselection} />*/}
            
            <PanelMenu  />
			
        </Flex>
    );
}
