"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import ComponentExample from "@/components/ComponentExample";
import { Heading, Flex, Text, ScrollArea as RadixScrollArea, Box, Separator as RadixSeparator, Tabs as RadixTabs, Button } from "@radix-ui/themes";
import { StitchesLogoIcon } from '@radix-ui/react-icons';

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export default function LayoutComponentsPage() {
  return (
    <Layout>
      <Heading size="7" mb="5" trim="start">Content Layout</Heading>

      {/* ScrollArea Example */}
      <ComponentExample title="Scroll Area" id="scrollarea">
        <Flex direction="column" gap="3">
          <Text size="2" as="p">
            Augments native scroll functionality for custom, cross-browser styling.
          </Text>
          <RadixScrollArea style={{ width: 200, height: 225, borderRadius: 'var(--radius-3)', border: '1px solid var(--gray-a6)', padding: '15px 20px' }}>
              <Text size="2" weight="bold" mb="2">Tags</Text>
              {TAGS.map((tag) => (
                <Text
                  as="div"
                  size="1"
                  key={tag}
                  style={{
                    color: 'var(--gray-11)',
                    marginTop: tag === TAGS[0] ? undefined : 10,
                    borderTop: tag === TAGS[0] ? undefined : '1px solid var(--gray-a5)',
                    paddingTop: tag === TAGS[0] ? undefined : 10,
                  }}
                >
                  {tag}
                </Text>
              ))}
          </RadixScrollArea>
        </Flex>
      </ComponentExample>

      {/* Separator Example */}
      <ComponentExample title="Separator" id="separator">
        <Flex direction="column" gap="3">
          <Text size="2" as="p">
            Visually or semantically separates content.
          </Text>
          <Box>
            <Text size="2" weight="bold">Radix Primitives</Text>
            <Text size="2" as="p">An open-source UI component library.</Text>
            <RadixSeparator my="3" size="4" />
            <Flex gap="3" align="center">
              <Text size="2">Blog</Text>
              <RadixSeparator orientation="vertical" />
              <Text size="2">Docs</Text>
              <RadixSeparator orientation="vertical" />
              <Text size="2">Source</Text>
            </Flex>
          </Box>
          <Box mt="3">
            <Text size="2" weight="bold">Horizontal (decorative)</Text>
            <RadixSeparator my="2" size="2" decorative />
             <Text size="2" as="p">This separator is decorative and will not be announced by screen readers.</Text>
          </Box>
        </Flex>
      </ComponentExample>

      {/* Tabs Example */}
      <ComponentExample title="Tabs" id="tabs">
        <Flex direction="column" gap="3">
          <Text size="2" as="p">
            A set of layered sections of content—known as tab panels—that are displayed one at a time.
          </Text>
          <RadixTabs.Root defaultValue="tab1" style={{width: 300}}>
            <RadixTabs.List>
              <RadixTabs.Trigger value="tab1">Account</RadixTabs.Trigger>
              <RadixTabs.Trigger value="tab2">Password</RadixTabs.Trigger>
              <RadixTabs.Trigger value="tab3" disabled>Settings</RadixTabs.Trigger>
            </RadixTabs.List>
            <Box pt="3">
              <RadixTabs.Content value="tab1">
                <Text size="2">Make changes to your account here. Click save when you're done.</Text>
              </RadixTabs.Content>
              <RadixTabs.Content value="tab2">
                <Text size="2">Change your password here. After saving, you'll be logged out.</Text>
              </RadixTabs.Content>
               <RadixTabs.Content value="tab3">
                <Text size="2">This tab is disabled.</Text>
              </RadixTabs.Content>
            </Box>
          </RadixTabs.Root>
        </Flex>
      </ComponentExample>

      {/* Toolbar is not available in Radix UI Themes */}
      <ComponentExample title="Toolbar" id="toolbar">
        <Flex direction="column" gap="3">
          <Text size="2" as="p">
            Toolbar is not available in Radix UI Themes. For similar functionality, use Flex containers with Button components or other interactive elements.
          </Text>
        </Flex>
      </ComponentExample>
    </Layout>
  );
}
