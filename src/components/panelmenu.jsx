"use client";

import React from "react";
import Link from "next/link";
import { Text, Button } from "@radix-ui/themes";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/examples/inputs", label: "Inputs" },
    { href: "/examples/overlays", label: "Overlays" },
    { href: "/examples/menus", label: "Menus" },
    { href: "/examples/layout-components", label: "Content Layout" },
    { href: "/examples/navigation", label: "Navigation" },
    { href: "/examples/simple-accordion", label: "Simple Accordion" },
    { href: "/examples/accessibility", label: "Accessibility" },
    { href: "/examples/misc", label: "Miscellaneous" },
];

export default function PanelMenu() {
    const pathname = usePathname();

    return (
        <>
            <Text size="1" weight="bold" color="gray" mb="1" ml="1">
                Primitives
            </Text>
            {navItems.map((item) => (
                <Link key={item.href} href={item.href} passHref>
                    <Button
                        variant={pathname === item.href ? "solid" : "soft"}
                        color="gray"
                        className="w-full justify-start"
                        size="2"
                    >
                        {item.label}
                    </Button>
                </Link>
            ))}
        </>
    );
}
