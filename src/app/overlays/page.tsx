"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import ComponentExample from "@/components/ComponentExample";
import { Heading } from "@radix-ui/themes";
import DialogComponent from "@/components/overlays/dialog";
import HoverCardComponent from "@/components/overlays/hovercard";
import PopoverComponent from "@/components/overlays/popover";
import TooltipComponent from "@/components/overlays/tooltip";

export default function OverlaysPage() {
  return (
    <Layout>
      <Heading size="7" mb="5" trim="start">Overlays</Heading>

      <ComponentExample title="Dialog" id="dialog">
        <DialogComponent />
      </ComponentExample>

      <ComponentExample title="Hover Card" id="hovercard">
        <HoverCardComponent />
      </ComponentExample>

      <ComponentExample title="Popover" id="popover">
        <PopoverComponent />
      </ComponentExample>

      <ComponentExample title="Tooltip" id="tooltip">
        <TooltipComponent />
      </ComponentExample>
    </Layout>
  );
}
