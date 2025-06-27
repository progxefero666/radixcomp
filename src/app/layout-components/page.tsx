"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import ComponentExample from "@/components/ComponentExample";
import { Heading } from "@radix-ui/themes";
import ScrollAreaComponent from "@/components/common/scrollarea";
import SeparatorComponent from "@/components/layout/separator";
import TabsComponent from "@/components/layout/tabs";
import ToolbarComponent from "@/components/bars/toolbar";

export default function LayoutComponentsPage() {
  return (
    <Layout>
      <Heading size="7" mb="5" trim="start">Content Layout</Heading>

      <ComponentExample title="Scroll Area" id="scrollarea">
        <ScrollAreaComponent />
      </ComponentExample>

      <ComponentExample title="Separator" id="separator">
        <SeparatorComponent />
      </ComponentExample>

      <ComponentExample title="Tabs" id="tabs">
        <TabsComponent />
      </ComponentExample>

      <ComponentExample title="Toolbar" id="toolbar">
        <ToolbarComponent />
      </ComponentExample>
    </Layout>
  );
}
