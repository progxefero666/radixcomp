"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import { Heading } from "@radix-ui/themes";
import { AccordionExamples } from "@/components/common/accordion";

export default function SimpleAccordionPage() {
  return (
    <Layout>
      <Heading size="7" mb="5" trim="start">Simple Accordion</Heading>
      <AccordionExamples />
    </Layout>
  );
}
