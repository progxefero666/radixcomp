"use client";

import React, { useState } from "react";
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Flex, Text, Box } from "@radix-ui/themes";
import { 
  FontBoldIcon, 
  FontItalicIcon, 
  UnderlineIcon, 
  TextAlignLeftIcon, 
  TextAlignCenterIcon, 
  TextAlignRightIcon,
  StrikethroughIcon,
  CodeIcon,
  Link1Icon,
  ListBulletIcon,
  SizeIcon,
  ColorWheelIcon,
  MixIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
  SpeakerLoudIcon,
  SpeakerModerateIcon,
  SpeakerOffIcon
} from "@radix-ui/react-icons";

interface ToggleGroupProps {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
  showExample?: boolean;
}

export default function ToggleGroupComponentExample({
  type = "multiple",
  defaultValue,
  disabled = false,
  orientation = "horizontal",
  showExample = true
}: ToggleGroupProps) {
  const [textFormatting, setTextFormatting] = useState<string[]>(["bold"]);
  const [alignment, setAlignment] = useState<string>("center");
  const [editorTools, setEditorTools] = useState<string[]>(["bold", "italic"]);
  const [mediaControls, setMediaControls] = useState<string>("pause");
  const [volume, setVolume] = useState<string>("moderate");
  const [viewMode, setViewMode] = useState<string>("grid");

  if (!showExample) {
    if (type === "single") {
      return (
        <ToggleGroup.Root
          type="single"
          defaultValue={defaultValue as string}
          disabled={disabled}
          orientation={orientation}
          aria-label="Toggle group"
        >
          <ToggleGroup.Item value="item1" aria-label="Item 1">
            Item 1
          </ToggleGroup.Item>
          <ToggleGroup.Item value="item2" aria-label="Item 2">
            Item 2
          </ToggleGroup.Item>
          <ToggleGroup.Item value="item3" aria-label="Item 3">
            Item 3
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      );
    } else {
      return (
        <ToggleGroup.Root
          type="multiple"
          defaultValue={defaultValue as string[]}
          disabled={disabled}
          orientation={orientation}
          aria-label="Toggle group"
        >
          <ToggleGroup.Item value="item1" aria-label="Item 1">
            Item 1
          </ToggleGroup.Item>
          <ToggleGroup.Item value="item2" aria-label="Item 2">
            Item 2
          </ToggleGroup.Item>
          <ToggleGroup.Item value="item3" aria-label="Item 3">
            Item 3
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      );
    }
  }

  return (
    <Flex direction="column" gap="4">
      {/* Basic Multiple Selection */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Multiple Selection (Text Formatting):
        </Text>
        <ToggleGroup.Root
          type="multiple"
          value={textFormatting}
          onValueChange={setTextFormatting}
          aria-label="Text formatting"
        >
          <ToggleGroup.Item value="bold" aria-label="Bold">
            <FontBoldIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="italic" aria-label="Italic">
            <FontItalicIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="underline" aria-label="Underline">
            <UnderlineIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="strikethrough" aria-label="Strikethrough">
            <StrikethroughIcon />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <Text size="1" color="gray" mt="1">
          Selected: {textFormatting.length > 0 ? textFormatting.join(", ") : "None"}
        </Text>
      </Box>

      {/* Single Selection */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Single Selection (Text Alignment):
        </Text>
        <ToggleGroup.Root
          type="single"
          value={alignment}
          onValueChange={(value: string) => { if (value) setAlignment(value); }}
          aria-label="Text alignment"
        >
          <ToggleGroup.Item value="left" aria-label="Left aligned">
            <TextAlignLeftIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="center" aria-label="Center aligned">
            <TextAlignCenterIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="right" aria-label="Right aligned">
            <TextAlignRightIcon />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <Text size="1" color="gray" mt="1">Selected: {alignment}</Text>
      </Box>

      {/* Extended Editor Tools */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Rich Text Editor Tools (Multiple):
        </Text>
        <ToggleGroup.Root
          type="multiple"
          value={editorTools}
          onValueChange={setEditorTools}
          aria-label="Editor tools"
        >
          <ToggleGroup.Item value="bold" aria-label="Bold">
            <FontBoldIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="italic" aria-label="Italic">
            <FontItalicIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="underline" aria-label="Underline">
            <UnderlineIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="code" aria-label="Code">
            <CodeIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="link" aria-label="Link">
            <Link1Icon />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="list" aria-label="Bullet List">
            <ListBulletIcon />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <Text size="1" color="gray" mt="1">
          Active tools: {editorTools.length > 0 ? editorTools.join(", ") : "None"}
        </Text>
      </Box>

      {/* Media Controls */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Media Controls (Single):
        </Text>
        <ToggleGroup.Root
          type="single"
          value={mediaControls}
          onValueChange={(value: string) => { if (value) setMediaControls(value); }}
          aria-label="Media controls"
        >
          <ToggleGroup.Item value="play" aria-label="Play">
            <PlayIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="pause" aria-label="Pause">
            <PauseIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="stop" aria-label="Stop">
            <StopIcon />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <Text size="1" color="gray" mt="1">Status: {mediaControls}</Text>
      </Box>

      {/* Volume Control */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Volume Level (Single):
        </Text>
        <ToggleGroup.Root
          type="single"
          value={volume}
          onValueChange={(value: string) => { if (value) setVolume(value); }}
          aria-label="Volume level"
        >
          <ToggleGroup.Item value="off" aria-label="Mute">
            <SpeakerOffIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="moderate" aria-label="Moderate volume">
            <SpeakerModerateIcon />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="loud" aria-label="Loud volume">
            <SpeakerLoudIcon />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <Text size="1" color="gray" mt="1">Volume: {volume}</Text>
      </Box>

      {/* View Mode with Text Labels */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          View Mode with Text (Single):
        </Text>
        <ToggleGroup.Root
          type="single"
          value={viewMode}
          onValueChange={(value: string) => { if (value) setViewMode(value); }}
          aria-label="View mode"
        >
          <ToggleGroup.Item value="list" aria-label="List view">
            List
          </ToggleGroup.Item>
          <ToggleGroup.Item value="grid" aria-label="Grid view">
            Grid
          </ToggleGroup.Item>
          <ToggleGroup.Item value="card" aria-label="Card view">
            Card
          </ToggleGroup.Item>
        </ToggleGroup.Root>
        <Text size="1" color="gray" mt="1">View: {viewMode}</Text>
      </Box>

      {/* Mixed Content */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Mixed Content (Icons + Text):
        </Text>
        <ToggleGroup.Root
          type="multiple"
          defaultValue={["format"]}
          aria-label="Mixed content options"
        >
          <ToggleGroup.Item value="format" aria-label="Text formatting">
            <Flex align="center" gap="1">
              <FontBoldIcon />
              <Text size="1">Format</Text>
            </Flex>
          </ToggleGroup.Item>
          <ToggleGroup.Item value="color" aria-label="Color options">
            <Flex align="center" gap="1">
              <ColorWheelIcon />
              <Text size="1">Color</Text>
            </Flex>
          </ToggleGroup.Item>
          <ToggleGroup.Item value="size" aria-label="Size options">
            <Flex align="center" gap="1">
              <SizeIcon />
              <Text size="1">Size</Text>
            </Flex>
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </Box>

      {/* Vertical Orientation */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Vertical Orientation:
        </Text>
        <ToggleGroup.Root
          type="single"
          defaultValue="option2"
          orientation="vertical"
          aria-label="Vertical options"
        >
          <ToggleGroup.Item value="option1" aria-label="Option 1">
            Option 1
          </ToggleGroup.Item>
          <ToggleGroup.Item value="option2" aria-label="Option 2">
            Option 2
          </ToggleGroup.Item>
          <ToggleGroup.Item value="option3" aria-label="Option 3">
            Option 3
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </Box>

      {/* Disabled States */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Disabled States:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="1" color="gray" mb="1">Entire group disabled:</Text>
            <ToggleGroup.Root
              type="multiple"
              defaultValue={["bold", "italic"]}
              disabled
              aria-label="Disabled formatting"
            >
              <ToggleGroup.Item value="bold" aria-label="Bold">
                <FontBoldIcon />
              </ToggleGroup.Item>
              <ToggleGroup.Item value="italic" aria-label="Italic">
                <FontItalicIcon />
              </ToggleGroup.Item>
              <ToggleGroup.Item value="underline" aria-label="Underline">
                <UnderlineIcon />
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Individual items disabled:</Text>
            <ToggleGroup.Root
              type="multiple"
              defaultValue={["bold"]}
              aria-label="Mixed disabled state"
            >
              <ToggleGroup.Item value="bold" aria-label="Bold">
                <FontBoldIcon />
              </ToggleGroup.Item>
              <ToggleGroup.Item value="italic" disabled aria-label="Italic (disabled)">
                <FontItalicIcon />
              </ToggleGroup.Item>
              <ToggleGroup.Item value="underline" aria-label="Underline">
                <UnderlineIcon />
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </Box>
        </Flex>
      </Box>

      {/* Practical Examples */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Practical Examples:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="1" color="gray" mb="1">Dashboard Widgets (Multiple):</Text>
            <ToggleGroup.Root
              type="multiple"
              defaultValue={["analytics", "sales"]}
              aria-label="Dashboard widgets"
            >
              <ToggleGroup.Item value="analytics" aria-label="Analytics widget">
                Analytics
              </ToggleGroup.Item>
              <ToggleGroup.Item value="sales" aria-label="Sales widget">
                Sales
              </ToggleGroup.Item>
              <ToggleGroup.Item value="users" aria-label="Users widget">
                Users
              </ToggleGroup.Item>
              <ToggleGroup.Item value="reports" aria-label="Reports widget">
                Reports
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Data Period (Single):</Text>
            <ToggleGroup.Root
              type="single"
              defaultValue="week"
              aria-label="Data period"
            >
              <ToggleGroup.Item value="day" aria-label="Daily data">
                Day
              </ToggleGroup.Item>
              <ToggleGroup.Item value="week" aria-label="Weekly data">
                Week
              </ToggleGroup.Item>
              <ToggleGroup.Item value="month" aria-label="Monthly data">
                Month
              </ToggleGroup.Item>
              <ToggleGroup.Item value="year" aria-label="Yearly data">
                Year
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Filter Options (Multiple):</Text>
            <ToggleGroup.Root
              type="multiple"
              defaultValue={["active"]}
              aria-label="Filter options"
            >
              <ToggleGroup.Item value="active" aria-label="Show active items">
                Active
              </ToggleGroup.Item>
              <ToggleGroup.Item value="inactive" aria-label="Show inactive items">
                Inactive
              </ToggleGroup.Item>
              <ToggleGroup.Item value="pending" aria-label="Show pending items">
                Pending
              </ToggleGroup.Item>
              <ToggleGroup.Item value="archived" aria-label="Show archived items">
                Archived
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </Box>
        </Flex>
      </Box>

      {/* Large Button Style */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Large Button Style:
        </Text>
        <ToggleGroup.Root
          type="single"
          defaultValue="monthly"
          aria-label="Subscription plan"
          style={{ display: 'flex', gap: '8px' }}
        >
          <ToggleGroup.Item 
            value="monthly" 
            aria-label="Monthly plan"
            style={{ 
              padding: '12px 24px', 
              borderRadius: '8px',
              border: '1px solid var(--gray-6)',
              background: 'var(--gray-1)',
              minWidth: '100px'
            }}
          >
            <Flex direction="column" align="center" gap="1">
              <Text size="2" weight="medium">Monthly</Text>
              <Text size="1" color="gray">$10/mo</Text>
            </Flex>
          </ToggleGroup.Item>
          <ToggleGroup.Item 
            value="yearly" 
            aria-label="Yearly plan"
            style={{ 
              padding: '12px 24px', 
              borderRadius: '8px',
              border: '1px solid var(--gray-6)',
              background: 'var(--gray-1)',
              minWidth: '100px'
            }}
          >
            <Flex direction="column" align="center" gap="1">
              <Text size="2" weight="medium">Yearly</Text>
              <Text size="1" color="gray">$100/yr</Text>
            </Flex>
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </Box>
    </Flex>
  );
}
