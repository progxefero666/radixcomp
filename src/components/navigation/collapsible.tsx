"use client";

import React, { useState } from "react";
import * as Collapsible from '@radix-ui/react-collapsible';
import { Flex, Text, Box, Button, IconButton } from "@radix-ui/themes";
import { 
  ChevronDownIcon,
  ChevronRightIcon,
  Cross2Icon,
  HamburgerMenuIcon,
  InfoCircledIcon,
  GearIcon,
  PersonIcon,
  BellIcon,
  FileTextIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  MinusIcon
} from "@radix-ui/react-icons";

interface CollapsibleProps {
  defaultOpen?: boolean;
  disabled?: boolean;
  showExample?: boolean;
}

export default function CollapsibleComponent({
  defaultOpen = false,
  disabled = false,
  showExample = true
}: CollapsibleProps) {
  const [basicOpen, setBasicOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  if (!showExample) {
    return (
      <Collapsible.Root defaultOpen={defaultOpen} disabled={disabled}>
        <Collapsible.Trigger asChild>
          <Button variant="ghost">
            Toggle content
            <ChevronDownIcon />
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Box p="3" style={{ backgroundColor: "var(--gray-a3)" }}>
            <Text>This is the collapsible content.</Text>
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    );
  }

  return (
    <Flex direction="column" gap="4">
      {/* Basic Collapsible */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Basic Collapsible:
        </Text>
        <Collapsible.Root open={basicOpen} onOpenChange={setBasicOpen}>
          <Collapsible.Trigger asChild>
            <Button variant="ghost" style={{ justifyContent: 'flex-start', width: '100%' }}>
              <Flex align="center" gap="2">
                {basicOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
                <Text>Click to {basicOpen ? 'hide' : 'show'} content</Text>
              </Flex>
            </Button>
          </Collapsible.Trigger>
          <Collapsible.Content className="CollapsibleContent">
            <Box p="3" mt="2" style={{ 
              backgroundColor: "var(--gray-a3)", 
              borderRadius: "6px",
              border: "1px solid var(--gray-6)"
            }}>
              <Text size="2">
                This is the collapsible content. It can contain any elements you want, 
                including text, images, buttons, or other components.
              </Text>
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
        <Text size="1" color="gray" mt="1">Status: {basicOpen ? "Open" : "Closed"}</Text>
      </Box>

      {/* Mobile Menu Example */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Mobile Menu Example:
        </Text>
        <Collapsible.Root open={menuOpen} onOpenChange={setMenuOpen}>
          <Flex align="center" justify="between" p="2" style={{ 
            backgroundColor: "var(--gray-a3)", 
            borderRadius: "6px",
            border: "1px solid var(--gray-6)"
          }}>
            <Text size="2" weight="medium">Mobile Menu</Text>
            <Collapsible.Trigger asChild>
              <IconButton variant="ghost" size="2">
                {menuOpen ? <Cross2Icon /> : <HamburgerMenuIcon />}
              </IconButton>
            </Collapsible.Trigger>
          </Flex>
          <Collapsible.Content className="CollapsibleContent">
            <Box p="2" style={{ 
              backgroundColor: "var(--gray-a2)", 
              borderRadius: "0 0 6px 6px",
              border: "1px solid var(--gray-6)",
              borderTop: "none"
            }}>
              <Flex direction="column" gap="2">
                <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                  <Flex align="center" gap="2">
                    <PersonIcon />
                    <Text>Profile</Text>
                  </Flex>
                </Button>
                <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                  <Flex align="center" gap="2">
                    <GearIcon />
                    <Text>Settings</Text>
                  </Flex>
                </Button>
                <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                  <Flex align="center" gap="2">
                    <BellIcon />
                    <Text>Notifications</Text>
                  </Flex>
                </Button>
                <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
                  <Flex align="center" gap="2">
                    <FileTextIcon />
                    <Text>Documentation</Text>
                  </Flex>
                </Button>
              </Flex>
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </Box>

      {/* Settings Panel */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Settings Panel:
        </Text>
        <Collapsible.Root open={settingsOpen} onOpenChange={setSettingsOpen}>
          <Collapsible.Trigger asChild>
            <Button variant="soft" style={{ justifyContent: 'flex-start', width: '100%' }}>
              <Flex align="center" gap="2">
                <GearIcon />
                <Text>Advanced Settings</Text>
                {settingsOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
              </Flex>
            </Button>
          </Collapsible.Trigger>
          <Collapsible.Content className="CollapsibleContent">
            <Box p="3" mt="2" style={{ 
              backgroundColor: "var(--gray-a2)", 
              borderRadius: "6px",
              border: "1px solid var(--gray-6)"
            }}>
              <Flex direction="column" gap="3">
                <Text size="2" weight="medium">Configuration Options</Text>
                <Flex direction="column" gap="2">
                  <Flex align="center" justify="between">
                    <Text size="1">Auto-save</Text>
                    <Text size="1" color="green">Enabled</Text>
                  </Flex>
                  <Flex align="center" justify="between">
                    <Text size="1">Dark mode</Text>
                    <Text size="1" color="blue">Auto</Text>
                  </Flex>
                  <Flex align="center" justify="between">
                    <Text size="1">Notifications</Text>
                    <Text size="1" color="gray">Disabled</Text>
                  </Flex>
                  <Flex align="center" justify="between">
                    <Text size="1">Analytics</Text>
                    <Text size="1" color="green">Enabled</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </Box>

      {/* Search Interface */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Advanced Search:
        </Text>
        <Collapsible.Root open={searchOpen} onOpenChange={setSearchOpen}>
          <Flex direction="column" gap="2">
            <Flex align="center" gap="2">
              <Box style={{ flex: 1 }}>
                <input 
                  placeholder="Search..."
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--gray-6)',
                    borderRadius: '6px',
                    backgroundColor: 'var(--gray-1)',
                    color: 'var(--gray-12)'
                  }}
                />
              </Box>
              <Collapsible.Trigger asChild>
                <Button variant="outline" size="2">
                  <Flex align="center" gap="1">
                    <Text size="1">Filters</Text>
                    {searchOpen ? <MinusIcon /> : <PlusIcon />}
                  </Flex>
                </Button>
              </Collapsible.Trigger>
            </Flex>
            <Collapsible.Content className="CollapsibleContent">
              <Box p="3" style={{ 
                backgroundColor: "var(--gray-a2)", 
                borderRadius: "6px",
                border: "1px solid var(--gray-6)"
              }}>
                <Flex direction="column" gap="3">
                  <Text size="2" weight="medium">Search Filters</Text>
                  <Flex direction="column" gap="2">
                    <Flex align="center" gap="2">
                      <Text size="1" style={{ minWidth: '80px' }}>Date range:</Text>
                      <select style={{
                        padding: '4px 8px',
                        border: '1px solid var(--gray-6)',
                        borderRadius: '4px',
                        backgroundColor: 'var(--gray-1)'
                      }}>
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last year</option>
                        <option>All time</option>
                      </select>
                    </Flex>
                    <Flex align="center" gap="2">
                      <Text size="1" style={{ minWidth: '80px' }}>Category:</Text>
                      <select style={{
                        padding: '4px 8px',
                        border: '1px solid var(--gray-6)',
                        borderRadius: '4px',
                        backgroundColor: 'var(--gray-1)'
                      }}>
                        <option>All categories</option>
                        <option>Documents</option>
                        <option>Images</option>
                        <option>Videos</option>
                      </select>
                    </Flex>
                    <Flex align="center" gap="2">
                      <Text size="1" style={{ minWidth: '80px' }}>Sort by:</Text>
                      <select style={{
                        padding: '4px 8px',
                        border: '1px solid var(--gray-6)',
                        borderRadius: '4px',
                        backgroundColor: 'var(--gray-1)'
                      }}>
                        <option>Relevance</option>
                        <option>Date created</option>
                        <option>Date modified</option>
                        <option>Name</option>
                      </select>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            </Collapsible.Content>
          </Flex>
        </Collapsible.Root>
      </Box>

      {/* Notification Center */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Notification Center:
        </Text>
        <Collapsible.Root open={notificationsOpen} onOpenChange={setNotificationsOpen}>
          <Collapsible.Trigger asChild>
            <Button variant="soft" color="blue" style={{ justifyContent: 'flex-start', width: '100%' }}>
              <Flex align="center" gap="2">
                <BellIcon />
                <Text>Notifications</Text>
                <Box style={{ 
                  backgroundColor: 'var(--red-9)', 
                  color: 'white', 
                  borderRadius: '10px', 
                  padding: '2px 6px',
                  fontSize: '10px',
                  fontWeight: 'bold'
                }}>
                  3
                </Box>
                {notificationsOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
              </Flex>
            </Button>
          </Collapsible.Trigger>
          <Collapsible.Content className="CollapsibleContent">
            <Box p="3" mt="2" style={{ 
              backgroundColor: "var(--gray-a2)", 
              borderRadius: "6px",
              border: "1px solid var(--gray-6)"
            }}>
              <Flex direction="column" gap="3">
                <Flex align="center" justify="between">
                  <Text size="2" weight="medium">Recent Notifications</Text>
                  <Button variant="ghost" size="1">
                    <Text size="1">Mark all read</Text>
                  </Button>
                </Flex>
                <Flex direction="column" gap="2">
                  <Box p="2" style={{ 
                    backgroundColor: 'var(--blue-a3)', 
                    borderRadius: '4px',
                    border: '1px solid var(--blue-6)'
                  }}>
                    <Text size="1" weight="medium">New message received</Text>
                    <Text size="1" color="gray">2 minutes ago</Text>
                  </Box>
                  <Box p="2" style={{ 
                    backgroundColor: 'var(--green-a3)', 
                    borderRadius: '4px',
                    border: '1px solid var(--green-6)'
                  }}>
                    <Text size="1" weight="medium">Task completed successfully</Text>
                    <Text size="1" color="gray">1 hour ago</Text>
                  </Box>
                  <Box p="2" style={{ 
                    backgroundColor: 'var(--orange-a3)', 
                    borderRadius: '4px',
                    border: '1px solid var(--orange-6)'
                  }}>
                    <Text size="1" weight="medium">System maintenance scheduled</Text>
                    <Text size="1" color="gray">3 hours ago</Text>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </Box>

      {/* Product Details */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Product Details:
        </Text>
        <Collapsible.Root open={detailsOpen} onOpenChange={setDetailsOpen}>
          <Box style={{ 
            border: '1px solid var(--gray-6)',
            borderRadius: '6px',
            overflow: 'hidden'
          }}>
            <Flex align="center" justify="between" p="3" style={{ backgroundColor: 'var(--gray-a2)' }}>
              <Flex direction="column" gap="1">
                <Text size="2" weight="medium">Premium Wireless Headphones</Text>
                <Text size="1" color="gray">SKU: WH-1000XM4</Text>
              </Flex>
              <Collapsible.Trigger asChild>
                <IconButton variant="ghost">
                  <InfoCircledIcon />
                </IconButton>
              </Collapsible.Trigger>
            </Flex>
            <Collapsible.Content className="CollapsibleContent">
              <Box p="3" style={{ backgroundColor: 'var(--gray-a1)' }}>
                <Flex direction="column" gap="3">
                  <Flex direction="column" gap="1">
                    <Text size="1" weight="medium">Description</Text>
                    <Text size="1" color="gray">
                      Industry-leading noise canceling with Dual Noise Sensor technology. 
                      Up to 30 hours of battery life with quick charge.
                    </Text>
                  </Flex>
                  <Flex direction="column" gap="1">
                    <Text size="1" weight="medium">Specifications</Text>
                    <Flex direction="column" gap="0">
                      <Text size="1" color="gray">• Driver Unit: 40mm</Text>
                      <Text size="1" color="gray">• Frequency Response: 4Hz-40kHz</Text>
                      <Text size="1" color="gray">• Battery Life: 30 hours</Text>
                      <Text size="1" color="gray">• Weight: 254g</Text>
                    </Flex>
                  </Flex>
                  <Flex align="center" justify="between">
                    <Text size="2" weight="bold" color="blue">$349.99</Text>
                    <Button size="2" variant="solid">Add to Cart</Button>
                  </Flex>
                </Flex>
              </Box>
            </Collapsible.Content>
          </Box>
        </Collapsible.Root>
      </Box>

      {/* Disabled State */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Disabled State:
        </Text>
        <Collapsible.Root disabled>
          <Collapsible.Trigger asChild>
            <Button variant="ghost" disabled style={{ justifyContent: 'flex-start', width: '100%' }}>
              <Flex align="center" gap="2">
                <ChevronRightIcon />
                <Text>Disabled Collapsible</Text>
              </Flex>
            </Button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            <Box p="3" mt="2" style={{ backgroundColor: "var(--gray-a3)" }}>
              <Text>This content is not accessible.</Text>
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </Box>

      <style jsx>{`
        .CollapsibleContent {
          overflow: hidden;
        }
        .CollapsibleContent[data-state='open'] {
          animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        .CollapsibleContent[data-state='closed'] {
          animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }

        @keyframes slideDown {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            height: var(--radix-collapsible-content-height);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            height: var(--radix-collapsible-content-height);
            opacity: 1;
          }
          to {
            height: 0;
            opacity: 0;
          }
        }

        input, select {
          font-family: inherit;
        }
        
        input:focus, select:focus {
          outline: 2px solid var(--focus-8);
          outline-offset: 2px;
        }
      `}</style>
    </Flex>
  );
}
