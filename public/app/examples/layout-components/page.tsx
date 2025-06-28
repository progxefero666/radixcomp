"use client";

import React from "react";
import Layout from "@/app_front/comp/layout";
import CardExample from "../../../components/cardexample";
import { Heading } from "@radix-ui/themes";
import ScrollAreaComponent from "../../../components/scrollarea";
import SeparatorComponent from "../../../components/separator";
import TabsComponent from "../../../components/tabs";
import ToolbarComponent from "../../../components/toolbar";

export default function LayoutComponentsPage() {
    return (
        <Layout>
            <Heading size="7" mb="5" trim="start">Content Layout</Heading>

            <CardExample title="Scroll Area" id="scrollarea">
                <ScrollAreaComponent />
            </CardExample>

            <CardExample title="Separator" id="separator">
                <SeparatorComponent />
            </CardExample>

            <CardExample title="Tabs" id="tabs">
                <TabsComponent />
            </CardExample>

            <CardExample title="Toolbar" id="toolbar">
                <ToolbarComponent />
            </CardExample>
        </Layout>
    );
}
