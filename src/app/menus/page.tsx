"use client";

import React from "react";
import Layout from "@/app_front/comp/layout";
import CardExample from "@/app_front/comp/cardexample";
import DropdownMenuComponent from "@/components/inputs/dropdown";
import ContextMenuComponent from "@/components/inputs/contextmenu";
import { Heading, Flex, Text } from "@radix-ui/themes";

export default function MenusPage() {
  return (
    <Layout>
      <Heading size="7" mb="5" trim="start">Menus</Heading>

      <CardExample title="Context Menu" id="contextmenu">
        <ContextMenuComponent />
      </CardExample>

      <CardExample title="Dropdown Menu" id="dropdownmenu">
        <DropdownMenuComponent />
      </CardExample>

      <CardExample title="Menubar" id="menubar">
        <Flex direction="column" gap="3" align="start">
          <Text size="2" as="p">
            Menubar is not available in Radix UI Themes. For similar functionality, use DropdownMenu or ContextMenu components.
          </Text>
        </Flex>
      </CardExample>
    </Layout>
  );
}
