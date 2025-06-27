"use client";

import React from "react";
import Layout from "@/components/Layout";
import ComponentExample from "@/components/ComponentExample";
import { Heading, Flex, Text, Button, Dialog, HoverCard, Popover, Tooltip, IconButton, Avatar, Link as RadixLink, Box } from "@radix-ui/themes";
import { Cross2Icon, GitHubLogoIcon, MixerHorizontalIcon, PlusIcon } from "@radix-ui/react-icons";

export default function OverlaysPage() {
  return (
    <Layout>
      <Heading size="7" mb="5" trim="start">Overlays</Heading>

      {/* Dialog Example */}
      <ComponentExample title="Dialog" id="dialog">
        <Flex direction="column" gap="3">
          <Text size="2" as="p">
            A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
          </Text>

          <Dialog.Root>
            <Dialog.Trigger>
              <Button size="2">Open Dialog</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
              <Dialog.Title>Edit Profile</Dialog.Title>
              <Dialog.Description size="2" mb="4">
                Make changes to your profile here. Click save when you're done.
              </Dialog.Description>

              <Flex direction="column" gap="3">
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Name
                  </Text>
                  <input
                    style={{
                      width: '100%',
                      padding: '8px',
                      border: '1px solid var(--gray-7)',
                      borderRadius: '4px',
                      fontSize: '14px',
                      backgroundColor: 'var(--color-background)',
                      color: 'var(--gray-12)'
                    }}
                    defaultValue="Pedro Duarte"
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Email
                  </Text>
                  <input
                    style={{
                      width: '100%',
                      padding: '8px',
                      border: '1px solid var(--gray-7)',
                      borderRadius: '4px',
                      fontSize: '14px',
                      backgroundColor: 'var(--color-background)',
                      color: 'var(--gray-12)'
                    }}
                    defaultValue="pedro@example.com"
                  />
                </label>
              </Flex>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray" size="2">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button size="2">Save</Button>
                </Dialog.Close>
              </Flex>

              <Dialog.Close>
                <IconButton
                  variant="ghost"
                  color="gray"
                  aria-label="Close"
                  style={{ position: 'absolute', top: '10px', right: '10px' }}
                >
                  <Cross2Icon />
                </IconButton>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Root>
        </Flex>
      </ComponentExample>

      {/* Hover Card Example */}
      <ComponentExample title="Hover Card" id="hovercard">
        <Flex direction="column" gap="3">
          <Text size="2" as="p">
            For sighted users to preview content available behind a link.
          </Text>
          <HoverCard.Root>
            <HoverCard.Trigger>
              <RadixLink href="https://github.com/radix-ui" target="_blank">
                <Flex align="center" gap="1">
                  <GitHubLogoIcon /> Radix UI
                </Flex>
              </RadixLink>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ maxWidth: 300 }}>
              <Flex gap="4">
                <Avatar
                  size="3"
                  fallback="R"
                  radius="full"
                  src="https://avatars.githubusercontent.com/u/75042455?s=200&v=4"
                />
                <Box>
                  <Heading size="2" as="h3">Radix UI</Heading>
                  <Text as="p" size="1" color="gray">
                    Unstyled, accessible components for building high-quality design systems and web apps.
                  </Text>
                  <Flex gap="2" mt="2">
                    <Text as="p" size="1" weight="bold">10k</Text>
                    <Text as="p" size="1" color="gray">Followers</Text>
                    <Text as="p" size="1" weight="bold">300</Text>
                    <Text as="p" size="1" color="gray">Following</Text>
                  </Flex>
                </Box>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>
        </Flex>
      </ComponentExample>

      {/* Popover Example */}
      <ComponentExample title="Popover" id="popover">
        <Flex direction="column" gap="3">
          <Text size="2" as="p">
            Displays rich content in a portal, triggered by a button.
          </Text>
          <Popover.Root>
            <Popover.Trigger>
              <Button variant="soft" size="2">
                <MixerHorizontalIcon width="16" height="16" />
                Settings
              </Button>
            </Popover.Trigger>
            <Popover.Content style={{ width: 360 }}>
              <Flex gap="3" direction="column">
                <Text size="2" weight="bold">Popover Content</Text>
                <Text size="1">This is some content inside the popover. You can put anything here, like forms or settings.</Text>
                <label>
                  <Text as="div" size="1" mb="1" weight="medium">Width</Text>
                  <input 
                    style={{
                      width: '100%',
                      padding: '4px',
                      border: '1px solid var(--gray-7)',
                      borderRadius: '4px',
                      fontSize: '13px',
                      backgroundColor: 'var(--color-background)',
                      color: 'var(--gray-12)'
                    }}
                    defaultValue="300px" 
                  />
                </label>
                 <label>
                  <Text as="div" size="1" mb="1" weight="medium">Height</Text>
                  <input 
                    style={{
                      width: '100%',
                      padding: '4px',
                      border: '1px solid var(--gray-7)',
                      borderRadius: '4px',
                      fontSize: '13px',
                      backgroundColor: 'var(--color-background)',
                      color: 'var(--gray-12)'
                    }}
                    defaultValue="auto" 
                  />
                </label>
              </Flex>
               <Popover.Close
                  aria-label="Close"
                  style={{ position: 'absolute', top: '8px', right: '8px' }}
               >
                 <IconButton size="1" variant="ghost" color="gray"><Cross2Icon/></IconButton>
              </Popover.Close>
            </Popover.Content>
          </Popover.Root>
        </Flex>
      </ComponentExample>

      {/* Tooltip Example */}
      <ComponentExample title="Tooltip" id="tooltip">
        <Flex direction="column" gap="3">
          <Text size="2" as="p">
            A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
          </Text>
          
          <Tooltip content="Add to library">
            <IconButton size="2">
              <PlusIcon />
            </IconButton>
          </Tooltip>

          <Text size="2" as="p" mt="3">
            With different sides:
          </Text>
          
          <Flex gap="2">
            <Tooltip content="Top tooltip" side="top">
              <Button size="1" variant="soft">Top</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" side="right">
              <Button size="1" variant="soft">Right</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" side="bottom">
              <Button size="1" variant="soft">Bottom</Button>
            </Tooltip>
            <Tooltip content="Left tooltip" side="left">
              <Button size="1" variant="soft">Left</Button>
            </Tooltip>
          </Flex>
        </Flex>
      </ComponentExample>
    </Layout>
  );
}
