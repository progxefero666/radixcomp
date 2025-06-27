"use client";

import React, { useState } from "react";
import { DropdownMenu, Button, IconButton, Flex, Text, Box, Avatar } from "@radix-ui/themes";
import {
    ChevronDownIcon,
    HamburgerMenuIcon,
    DotsVerticalIcon,
    DotsHorizontalIcon,
    PersonIcon,
    GearIcon,
    ExitIcon,
    BellIcon,
    FileTextIcon,
    Share1Icon,
    CopyIcon,
    TrashIcon,
    Pencil1Icon,
    DownloadIcon,
    StarIcon,
    BookmarkIcon,
    ArchiveIcon,
    EyeOpenIcon,
    EyeNoneIcon,
    LockClosedIcon,
    MixIcon,
    ColorWheelIcon,
    SizeIcon,
    FontBoldIcon,
    FontItalicIcon,
    UnderlineIcon,
    StrikethroughIcon,
    CheckIcon,
    Cross2Icon
} from "@radix-ui/react-icons";

interface DropdownMenuProps {
    variant?: "soft" | "classic" | "surface" | "outline" | "ghost";
    size?: "1" | "2" | "3";
    color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";
    showExample?: boolean;
}

export default function DropdownMenuComponent({
    variant = "soft",
    size = "2",
    color = "gray",
    showExample = true
}: DropdownMenuProps) {
    // Estados para diferentes ejemplos
    const [showBookmarks, setShowBookmarks] = useState(true);
    const [showUrls, setShowUrls] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState("Pedro Duarte");
    const [textFormat, setTextFormat] = useState<string[]>(["bold"]);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [autoSave, setAutoSave] = useState(false);
    const [theme, setTheme] = useState("system");
    const [language, setLanguage] = useState("english");

    if (!showExample) {
        return (
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Button variant={variant} size={size} color={color}>
                        Options <ChevronDownIcon />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Item>Item 1</DropdownMenu.Item>
                    <DropdownMenu.Item>Item 2</DropdownMenu.Item>
                    <DropdownMenu.Item>Item 3</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        );
    }

    return (
        <Flex direction="column" gap="4">
            {/* Basic Dropdown */}
            <Box>
                <Text size="2" weight="medium" as="p" mb="2">
                    Basic Dropdown Menu:
                </Text>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="soft" size="2">
                            File <ChevronDownIcon />
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content size="1">
                        <DropdownMenu.Item shortcut="⌘ N">
                            <FileTextIcon /> New Document
                        </DropdownMenu.Item>
                        <DropdownMenu.Item shortcut="⌘ O">
                            <DownloadIcon /> Open
                        </DropdownMenu.Item>
                        <DropdownMenu.Item shortcut="⌘ S">
                            <CheckIcon /> Save
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item shortcut="⌘ P">
                            Print
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item color="red" shortcut="⌘ Q">
                            <Cross2Icon /> Quit
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </Box>

            {/* User Profile Menu */}
            <Box>
                <Text size="2" weight="medium" as="p" mb="2">
                    User Profile Menu:
                </Text>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="ghost" style={{ padding: '8px' }}>
                            <Flex align="center" gap="2">
                                <Avatar size="1" fallback="JD" />
                                <Text size="2">John Doe</Text>
                                <ChevronDownIcon />
                            </Flex>
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content size="2" style={{ minWidth: '200px' }}>
                        <DropdownMenu.Label>
                            <Flex direction="column" gap="1">
                                <Text weight="medium">John Doe</Text>
                                <Text size="1" color="gray">john.doe@example.com</Text>
                            </Flex>
                        </DropdownMenu.Label>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item>
                            <PersonIcon /> Profile
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                            <BellIcon /> Notifications
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                            <GearIcon /> Settings
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item>
                            <StarIcon /> Upgrade to Pro
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item color="red">
                            <ExitIcon /> Sign Out
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </Box>

            {/* Actions Menu with Checkboxes */}
            <Box>
                <Text size="2" weight="medium" as="p" mb="2">
                    Actions Menu with Checkboxes:
                </Text>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="outline">
                            View Options <ChevronDownIcon />
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content size="1">
                        <DropdownMenu.CheckboxItem
                            checked={showBookmarks}
                            onCheckedChange={setShowBookmarks}
                        >
                            <BookmarkIcon /> Show Bookmarks
                            <div style={{ marginLeft: 'auto', color: 'var(--gray-a10)' }}>⌘B</div>
                        </DropdownMenu.CheckboxItem>
                        <DropdownMenu.CheckboxItem
                            checked={showUrls}
                            onCheckedChange={setShowUrls}
                        >
                            <EyeOpenIcon /> Show Full URLs
                        </DropdownMenu.CheckboxItem>
                        <DropdownMenu.Separator />
                        <DropdownMenu.CheckboxItem
                            checked={notificationsEnabled}
                            onCheckedChange={setNotificationsEnabled}
                        >
                            <BellIcon /> Enable Notifications
                        </DropdownMenu.CheckboxItem>
                        <DropdownMenu.CheckboxItem
                            checked={autoSave}
                            onCheckedChange={setAutoSave}
                        >
                            <CheckIcon /> Auto Save
                        </DropdownMenu.CheckboxItem>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
                <Text size="1" color="gray" mt="1">
                    Bookmarks: {showBookmarks ? "On" : "Off"}, URLs: {showUrls ? "On" : "Off"}
                </Text>
            </Box>

            {/* Radio Group Menu */}
            <Box>
                <Text size="2" weight="medium" as="p" mb="2">
                    Radio Group Selection:
                </Text>
                <Flex gap="2">
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" color="blue">
                                <PersonIcon /> {selectedPerson} <ChevronDownIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content size="1">
                            <DropdownMenu.Label>Assign to Person</DropdownMenu.Label>
                            <DropdownMenu.Separator />
                            <DropdownMenu.RadioGroup value={selectedPerson} onValueChange={setSelectedPerson}>
                                <DropdownMenu.RadioItem value="Pedro Duarte">
                                    Pedro Duarte
                                </DropdownMenu.RadioItem>
                                <DropdownMenu.RadioItem value="Colm Tuite">
                                    Colm Tuite
                                </DropdownMenu.RadioItem>
                                <DropdownMenu.RadioItem value="John Smith">
                                    John Smith
                                </DropdownMenu.RadioItem>
                                <DropdownMenu.RadioItem value="Jane Doe">
                                    Jane Doe
                                </DropdownMenu.RadioItem>
                            </DropdownMenu.RadioGroup>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" color="green">
                                Theme: {theme} <ChevronDownIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content size="1">
                            <DropdownMenu.Label>Theme Selection</DropdownMenu.Label>
                            <DropdownMenu.Separator />
                            <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
                                <DropdownMenu.RadioItem value="light">
                                    ☀️ Light
                                </DropdownMenu.RadioItem>
                                <DropdownMenu.RadioItem value="dark">
                                    🌙 Dark
                                </DropdownMenu.RadioItem>
                                <DropdownMenu.RadioItem value="system">
                                    💻 System
                                </DropdownMenu.RadioItem>
                            </DropdownMenu.RadioGroup>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Flex>
            </Box>

            {/* Icon Button Menus */}
            <Box>
                <Text size="2" weight="medium" as="p" mb="2">
                    Icon Button Menus:
                </Text>
                <Flex gap="2">
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <IconButton variant="ghost" size="2">
                                <DotsVerticalIcon />
                            </IconButton>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content size="1">
                            <DropdownMenu.Item>
                                <Pencil1Icon /> Edit
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <CopyIcon /> Duplicate
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <Share1Icon /> Share
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>
                                <ArchiveIcon /> Archive
                            </DropdownMenu.Item>
                            <DropdownMenu.Item color="red">
                                <TrashIcon /> Delete
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <IconButton variant="soft" size="2">
                                <HamburgerMenuIcon />
                            </IconButton>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content size="1">
                            <DropdownMenu.Item>
                                <FileTextIcon /> New Document
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <DownloadIcon /> Import
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>
                                <GearIcon /> Settings
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <BellIcon /> Notifications
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <IconButton variant="outline" size="2">
                                <DotsHorizontalIcon />
                            </IconButton>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content size="1">
                            <DropdownMenu.Item>
                                <EyeOpenIcon /> View Details
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <LockClosedIcon /> Make Private
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <StarIcon /> Add to Favorites
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>
                                <DownloadIcon /> Download
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Flex>
            </Box>

            {/* Nested Submenu */}
            <Box>
                <Text size="2" weight="medium" as="p" mb="2">
                    Nested Submenu:
                </Text>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="soft" color="purple">
                            Format <ChevronDownIcon />
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content size="1">
                        <DropdownMenu.Item>
                            <FontBoldIcon /> Bold
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                            <FontItalicIcon /> Italic
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                            <UnderlineIcon /> Underline
                        </DropdownMenu.Item>
                        <DropdownMenu.Separator />

                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger>
                                <ColorWheelIcon /> Text Color
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.SubContent>
                                <DropdownMenu.Item>🔴 Red</DropdownMenu.Item>
                                <DropdownMenu.Item>🟢 Green</DropdownMenu.Item>
                                <DropdownMenu.Item>🔵 Blue</DropdownMenu.Item>
                                <DropdownMenu.Item>🟡 Yellow</DropdownMenu.Item>
                                <DropdownMenu.Item>🟣 Purple</DropdownMenu.Item>
                                <DropdownMenu.Separator />
                                <DropdownMenu.Item>🎨 Custom Color...</DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>

                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger>
                                <SizeIcon /> Font Size
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.SubContent>
                                <DropdownMenu.Item>Small (12px)</DropdownMenu.Item>
                                <DropdownMenu.Item>Medium (14px)</DropdownMenu.Item>
                                <DropdownMenu.Item>Large (16px)</DropdownMenu.Item>
                                <DropdownMenu.Item>Extra Large (18px)</DropdownMenu.Item>
                                <DropdownMenu.Separator />
                                <DropdownMenu.Item>Custom Size...</DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>

                        <DropdownMenu.Separator />
                        <DropdownMenu.Item>
                            <StrikethroughIcon /> Strike Through
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </Box>

            {/* Language Selection */}
            <Box>
                <Text size="2" weight="medium" as="p" mb="2">
                    Language Selection:
                </Text>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="outline">
                            🌐 {language} <ChevronDownIcon />
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content size="1">
                        <DropdownMenu.Label>Choose Language</DropdownMenu.Label>
                        <DropdownMenu.Separator />
                        <DropdownMenu.RadioGroup value={language} onValueChange={setLanguage}>
                            <DropdownMenu.RadioItem value="english">
                                🇺🇸 English
                            </DropdownMenu.RadioItem>
                            <DropdownMenu.RadioItem value="spanish">
                                🇪🇸 Español
                            </DropdownMenu.RadioItem>
                            <DropdownMenu.RadioItem value="french">
                                🇫🇷 Français
                            </DropdownMenu.RadioItem>
                            <DropdownMenu.RadioItem value="german">
                                🇩🇪 Deutsch
                            </DropdownMenu.RadioItem>
                            <DropdownMenu.RadioItem value="japanese">
                                🇯🇵 日本語
                            </DropdownMenu.RadioItem>
                            <DropdownMenu.RadioItem value="chinese">
                                🇨🇳 中文
                            </DropdownMenu.RadioItem>
                        </DropdownMenu.RadioGroup>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
                <Text size="1" color="gray" mt="1">Current language: {language}</Text>
            </Box>

            {/* Data Table Actions */}
            <Box>
                <Text size="2" weight="medium" as="p" mb="2">
                    Data Table Row Actions:
                </Text>
                <Flex align="center" justify="between" p="3" style={{
                    backgroundColor: 'var(--gray-a3)',
                    borderRadius: '6px',
                    border: '1px solid var(--gray-6)'
                }}>
                    <Flex direction="column" gap="1">
                        <Text size="2" weight="medium">Project Alpha</Text>
                        <Text size="1" color="gray">Created 2 days ago</Text>
                    </Flex>
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <IconButton variant="ghost" size="1">
                                <DotsVerticalIcon />
                            </IconButton>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content size="1" align="end">
                            <DropdownMenu.Item>
                                <EyeOpenIcon /> View Details
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <Pencil1Icon /> Edit
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <CopyIcon /> Duplicate
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>
                                <Share1Icon /> Share
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <DownloadIcon /> Export
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item>
                                <ArchiveIcon /> Archive
                            </DropdownMenu.Item>
                            <DropdownMenu.Item color="red">
                                <TrashIcon /> Delete
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Flex>
            </Box>

            {/* Multiple Size Examples */}
            <Box>
                <Text size="2" weight="medium" as="p" mb="2">
                    Different Sizes:
                </Text>
                <Flex gap="2" align="center">
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" size="1">
                                Small <ChevronDownIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content size="1">
                            <DropdownMenu.Item>Small Item 1</DropdownMenu.Item>
                            <DropdownMenu.Item>Small Item 2</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" size="2">
                                Medium <ChevronDownIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content size="2">
                            <DropdownMenu.Item>Medium Item 1</DropdownMenu.Item>
                            <DropdownMenu.Item>Medium Item 2</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" size="3">
                                Large <ChevronDownIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content size="2">
                            <DropdownMenu.Item>Large Item 1</DropdownMenu.Item>
                            <DropdownMenu.Item>Large Item 2</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Flex>
            </Box>

            {/* Color Variants */}
            <Box>
                <Text size="2" weight="medium" as="p" mb="2">
                    Color Variants:
                </Text>
                <Flex gap="2" wrap="wrap">
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" color="blue" size="2">
                                Blue <ChevronDownIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>Blue Option 1</DropdownMenu.Item>
                            <DropdownMenu.Item>Blue Option 2</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" color="green" size="2">
                                Green <ChevronDownIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>Green Option 1</DropdownMenu.Item>
                            <DropdownMenu.Item>Green Option 2</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" color="red" size="2">
                                Red <ChevronDownIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>Red Option 1</DropdownMenu.Item>
                            <DropdownMenu.Item color="red">Red Option 2</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button variant="soft" color="purple" size="2">
                                Purple <ChevronDownIcon />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>Purple Option 1</DropdownMenu.Item>
                            <DropdownMenu.Item>Purple Option 2</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Flex>
            </Box>

            {/* Complex Menu with Mixed Content */}
            <Box>
                <Text size="2" weight="medium" as="p" mb="2">
                    Complex Mixed Content Menu:
                </Text>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="outline" size="2">
                            <MixIcon /> All Options <ChevronDownIcon />
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content size="2" style={{ minWidth: '250px' }}>
                        <DropdownMenu.Label>
                            <Flex align="center" gap="2">
                                <Avatar size="1" fallback="U" />
                                <Text>User Dashboard</Text>
                            </Flex>
                        </DropdownMenu.Label>
                        <DropdownMenu.Separator />

                        <DropdownMenu.Item>
                            <PersonIcon /> Profile Settings
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                            <BellIcon /> Notifications
                        </DropdownMenu.Item>

                        <DropdownMenu.Separator />
                        <DropdownMenu.Label>Preferences</DropdownMenu.Label>

                        <DropdownMenu.CheckboxItem
                            checked={notificationsEnabled}
                            onCheckedChange={setNotificationsEnabled}
                        >
                            Enable Push Notifications
                        </DropdownMenu.CheckboxItem>
                        <DropdownMenu.CheckboxItem
                            checked={autoSave}
                            onCheckedChange={setAutoSave}
                        >
                            Auto-save Documents
                        </DropdownMenu.CheckboxItem>

                        <DropdownMenu.Separator />
                        <DropdownMenu.Label>Theme</DropdownMenu.Label>
                        <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
                            <DropdownMenu.RadioItem value="light">Light Mode</DropdownMenu.RadioItem>
                            <DropdownMenu.RadioItem value="dark">Dark Mode</DropdownMenu.RadioItem>
                            <DropdownMenu.RadioItem value="system">System Default</DropdownMenu.RadioItem>
                        </DropdownMenu.RadioGroup>

                        <DropdownMenu.Separator />
                        <DropdownMenu.Sub>
                            <DropdownMenu.SubTrigger>
                                <GearIcon /> Advanced Settings
                            </DropdownMenu.SubTrigger>
                            <DropdownMenu.SubContent>
                                <DropdownMenu.Item>Developer Tools</DropdownMenu.Item>
                                <DropdownMenu.Item>Experimental Features</DropdownMenu.Item>
                                <DropdownMenu.Item>Debug Mode</DropdownMenu.Item>
                                <DropdownMenu.Separator />
                                <DropdownMenu.Item>Reset to Defaults</DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Sub>

                        <DropdownMenu.Separator />
                        <DropdownMenu.Item>
                            <FileTextIcon /> Help & Documentation
                        </DropdownMenu.Item>
                        <DropdownMenu.Item color="red">
                            <ExitIcon /> Sign Out
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </Box>
        </Flex>
    );
}
