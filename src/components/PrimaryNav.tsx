"use client";

import React from "react";
import Link from "next/link";
import { Flex, Text, Button, Separator } from "@radix-ui/themes";
import { usePathname } from "next/navigation"; // To highlight active link

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/inputs", label: "Inputs" },
  { href: "/overlays", label: "Overlays" },
  { href: "/menus", label: "Menus" },
  { href: "/layout-components", label: "Content Layout" },
  { href: "/navigation", label: "Navigation" },
  { href: "/simple-accordion", label: "Simple Accordion" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/misc", label: "Miscellaneous" },
];

export default function PrimaryNav() {
  const pathname = usePathname();

  return (
    <Flex direction="column" gap="2">
      <Link href="/" passHref>
        <Button
          variant={pathname === "/" ? "solid" : "soft"}
          color="gray"
          className="w-full justify-start"
          size="2"
        >
          Home
        </Button>
      </Link>
      <Separator size="4" my="2" />
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
    </Flex>
  );
}
