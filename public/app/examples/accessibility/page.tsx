"use client";

import React from "react";
import Layout from "@/app_front/comp/layout";
import CardExample from "@/components/cardexample";
import {
    Heading, Flex, Text, VisuallyHidden as RadixVisuallyHidden,
    Button, TextField, Box, IconButton
} from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function AccessibilityPage() {

    return (
        <Layout>
            <Heading as="h1" size="7" mb="5" trim="start">Accessibility</Heading>

            {/* VisuallyHidden Example */}
            <CardExample title="Visually Hidden" id="visuallyhidden">
                <Flex direction="column" gap="3">
                    <Text size="2" as="p">
                        Makes content visually hidden but still accessible to screen readers. Useful for icons, labels, or messages that should only be announced by assistive technologies.
                    </Text>
                    <Button>
                        <MagnifyingGlassIcon />
                        <RadixVisuallyHidden>Search</RadixVisuallyHidden>
                    </Button>

                    <Box mt="3">
                        <Text size="2" as="p" mb="1">
                            Another common use case is to provide a visually hidden label for an input field when a visible label is not desired, but still necessary for accessibility.
                        </Text>
                        <Flex align="center" gap="2">
                            <RadixVisuallyHidden>
                                <label htmlFor="search-field-vh">Search all items</label>
                            </RadixVisuallyHidden>
                            <TextField.Root
                                id="search-field-vh"
                                placeholder="Search..."
                                size="2"
                            >
                                <TextField.Slot>
                                    <MagnifyingGlassIcon height="14" width="14" />
                                </TextField.Slot>
                            </TextField.Root>
                            <Button size="2">Go</Button>
                        </Flex>
                        <Text size="1" mt="1" color="gray">
                            (Inspect the button and input with developer tools to see the hidden label/text if you are not using a screen reader)
                        </Text>
                    </Box>
                </Flex>
            </CardExample>

            {/* FocusScope is not available in Radix UI Themes */}
            <CardExample title="Focus Scope" id="focusscope">
                <Flex direction="column" gap="3">
                    <Text size="2" as="p">
                        FocusScope is not available in Radix UI Themes. For focus management, use Dialog, Popover, or other overlay components that have built-in focus management.
                    </Text>
                </Flex>
            </CardExample>
        </Layout>
    );
}
