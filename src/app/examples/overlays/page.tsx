"use client";

import React from "react";
import { Heading } from "@radix-ui/themes";


import Layout from "@/app_front/comp/layout";
import CardExample from "@/components/cardexample";
import DialogComponent from "@/components/dialog";
import HoverCardComponent from "@/components/hovercard";
import PopoverComponent from "@/components/popover";
import TooltipComponent from "@/components/tooltip";

export default function OverlaysPage() {
    return (
        <Layout>
            <Heading size="7" mb="5" trim="start">Overlays</Heading>

            <CardExample title="Dialog" id="dialog">
                <DialogComponent />
            </CardExample>

            <CardExample title="Hover Card" id="hovercard">
                <HoverCardComponent />
            </CardExample>

            <CardExample title="Popover" id="popover">
                <PopoverComponent />
            </CardExample>

            <CardExample title="Tooltip" id="tooltip">
                <TooltipComponent />
            </CardExample>
        </Layout>
    );
}
