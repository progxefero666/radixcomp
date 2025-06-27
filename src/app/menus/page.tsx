"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import ComponentExample from "@/components/ComponentExample";
import { Heading, Flex, Text, ContextMenu, DropdownMenu, Box, Button, IconButton } from "@radix-ui/themes";
import { ChevronDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";

const RADIO_ITEMS = ['Pedro Duarte', 'Colm Tuite'];


export default function MenusPage() {
  const [bookmarksCheckedCtx, setBookmarksCheckedCtx] = React.useState(true);
  const [urlsCheckedCtx, setUrlsCheckedCtx] = React.useState(false);
  const [personCtx, setPersonCtx] = React.useState('pedro');

  const [bookmarksCheckedDd, setBookmarksCheckedDd] = React.useState(true);
  const [urlsCheckedDd, setUrlsCheckedDd] = React.useState(false);
  const [personDd, setPersonDd] = React.useState(RADIO_ITEMS[0]);


  return (
    <Layout>
      <Heading size="7" mb="5" trim="start">Menus</Heading>

      {/* ContextMenu Example */}
      <ComponentExample title="Context Menu" id="contextmenu">
        <Flex direction="column" gap="3" align="start">
          <Text size="2" as="p">
            Displays a menu to the user —such as a set of actions or functions— triggered by a right-click.
          </Text>
          <ContextMenu.Root>
            <ContextMenu.Trigger>
              <Box
                style={{
                  border: '2px dashed var(--gray-a7)',
                  borderRadius: 'var(--radius-3)',
                  padding: 'var(--space-5)',
                  textAlign: 'center',
                  color: 'var(--gray-11)',
                  userSelect: 'none',
                  minWidth: 150,
                }}
              >
                Right-click here
              </Box>
            </ContextMenu.Trigger>
            <ContextMenu.Content size="1">
              <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
              <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item>Move to project…</ContextMenu.Item>
                  <ContextMenu.Item>Move to folder…</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Advanced options…</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Separator />
              <ContextMenu.Item>Share</ContextMenu.Item>
              <ContextMenu.Item>Add to favorites</ContextMenu.Item>
              <ContextMenu.Separator />

              <ContextMenu.CheckboxItem checked={bookmarksCheckedCtx} onCheckedChange={setBookmarksCheckedCtx}>
                Show Bookmarks <div style={{ marginLeft: 'auto', color: 'var(--gray-a10)' }}>⌘ B</div>
              </ContextMenu.CheckboxItem>
              <ContextMenu.CheckboxItem checked={urlsCheckedCtx} onCheckedChange={setUrlsCheckedCtx}>
                Show Full URLs
              </ContextMenu.CheckboxItem>
              <ContextMenu.Separator />

              <ContextMenu.Label>People</ContextMenu.Label>
              <ContextMenu.RadioGroup value={personCtx} onValueChange={setPersonCtx}>
                <ContextMenu.RadioItem value="pedro">
                  Pedro Duarte
                </ContextMenu.RadioItem>
                <ContextMenu.RadioItem value="colm">
                  Colm Tuite
                </ContextMenu.RadioItem>
              </ContextMenu.RadioGroup>

              <ContextMenu.Separator />
              <ContextMenu.Item color="red" shortcut="⌘ 딜리트">
                Delete
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu.Root>
        </Flex>
      </ComponentExample>

      {/* DropdownMenu Example */}
      <ComponentExample title="Dropdown Menu" id="dropdownmenu">
        <Flex direction="column" gap="3" align="start">
          <Text size="2" as="p">
            Displays a menu to the user —such as a set of actions or functions— triggered by a button.
          </Text>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft" size="2">
                Options <ChevronDownIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content size="1">
              <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                  <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator />
              <DropdownMenu.CheckboxItem checked={bookmarksCheckedDd} onCheckedChange={setBookmarksCheckedDd}>
                Show Bookmarks <div style={{ marginLeft: 'auto', color: 'var(--gray-a10)' }}>⌘ B</div>
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem checked={urlsCheckedDd} onCheckedChange={setUrlsCheckedDd}>
                Show Full URLs
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.Separator />

              <DropdownMenu.Label>People</DropdownMenu.Label>
              <DropdownMenu.RadioGroup value={personDd} onValueChange={setPersonDd}>
                <DropdownMenu.RadioItem value={RADIO_ITEMS[0]}>
                  {RADIO_ITEMS[0]}
                </DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem value={RADIO_ITEMS[1]}>
                  {RADIO_ITEMS[1]}
                </DropdownMenu.RadioItem>
              </DropdownMenu.RadioGroup>

              <DropdownMenu.Separator />
              <DropdownMenu.Item color="red" shortcut="⌘ 딜리트">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>

           <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconButton variant="soft" size="2" mt="2">
                <HamburgerMenuIcon />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content size="1">
              <DropdownMenu.Item>New Tab</DropdownMenu.Item>
              <DropdownMenu.Item>New Window</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </ComponentExample>

      {/* Menubar is not available in Radix UI Themes */}
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
