"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import ComponentExample from "@/components/ComponentExample";
import DropdownMenuComponent from "@/components/inputs/dropdownmenu";
import ContextMenuComponent from "@/components/inputs/contextmenu";
import { Heading, Flex, Text } from "@radix-ui/themes";

export default function MenusPage() {
  return (
    <Layout>
      <Heading size="7" mb="5" trim="start">Menus</Heading>

      <ComponentExample title="Context Menu" id="contextmenu">
        <ContextMenuComponent />
      </ComponentExample>

      <ComponentExample title="Dropdown Menu" id="dropdownmenu">
        <DropdownMenuComponent />
      </ComponentExample>

      <ComponentExample title="Menubar" id="menubar">
        <Flex direction="column" gap="3" align="start">
          <Text size="2" as="p">
            Menubar is not available in Radix UI Themes. For similar functionality, use DropdownMenu or ContextMenu components.
          </Text>
        </Flex>
      </ComponentExample>
    </Layout>
  );
}
