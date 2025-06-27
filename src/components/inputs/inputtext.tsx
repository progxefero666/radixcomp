"use client";

import React, { useState } from "react";
import { TextField, Flex, Text, Box } from "@radix-ui/themes";
import { MagnifyingGlassIcon, PersonIcon, LockClosedIcon } from "@radix-ui/react-icons";

interface InputTextProps {
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  variant?: "classic" | "surface" | "soft";
  size?: "1" | "2" | "3";
  color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";
  radius?: "none" | "small" | "medium" | "large" | "full";
  type?: "text" | "email" | "password" | "search" | "url" | "tel" | "number";
  icon?: "search" | "person" | "lock" | null;
  showExample?: boolean;
}

export default function InputText({
  placeholder = "Enter text...",
  label,
  disabled = false,
  variant = "surface",
  size = "2",
  color = "gray",
  radius = "medium",
  type = "text",
  icon = null,
  showExample = true
}: InputTextProps) {
  const [value, setValue] = useState("");

  const getIcon = () => {
    switch (icon) {
      case "search":
        return <MagnifyingGlassIcon height="16" width="16" />;
      case "person":
        return <PersonIcon height="16" width="16" />;
      case "lock":
        return <LockClosedIcon height="16" width="16" />;
      default:
        return null;
    }
  };

  if (!showExample) {
    return (
      <TextField.Root
        variant={variant}
        size={size}
        color={color}
        radius={radius}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {icon && <TextField.Slot>{getIcon()}</TextField.Slot>}
      </TextField.Root>
    );
  }

  return (
    <Flex direction="column" gap="3">
      <Text size="2" as="p">
        Captures user input with an optional label and various styling options.
      </Text>
      
      {/* Basic TextField */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="1">
          Basic TextField:
        </Text>
        <TextField.Root
          variant="surface"
          size="2"
          placeholder="Enter your name..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Text size="1" color="gray" mt="1">Current value: "{value}"</Text>
      </Box>

      {/* TextField with Icon */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="1">
          With Search Icon:
        </Text>
        <TextField.Root
          variant="surface"
          size="2"
          placeholder="Search..."
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>
      </Box>

      {/* Different Variants */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Different Variants:
        </Text>
        <Flex direction="column" gap="2">
          <TextField.Root variant="classic" size="2" placeholder="Classic variant" />
          <TextField.Root variant="surface" size="2" placeholder="Surface variant (default)" />
          <TextField.Root variant="soft" size="2" placeholder="Soft variant" />
        </Flex>
      </Box>

      {/* Different Sizes */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Different Sizes:
        </Text>
        <Flex direction="column" gap="2">
          <TextField.Root variant="surface" size="1" placeholder="Size 1 (small)" />
          <TextField.Root variant="surface" size="2" placeholder="Size 2 (medium)" />
          <TextField.Root variant="surface" size="3" placeholder="Size 3 (large)" />
        </Flex>
      </Box>

      {/* Different Types */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Different Input Types:
        </Text>
        <Flex direction="column" gap="2">
          <TextField.Root variant="surface" size="2" type="email" placeholder="email@example.com">
            <TextField.Slot>
              <PersonIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
          <TextField.Root variant="surface" size="2" type="password" placeholder="Password">
            <TextField.Slot>
              <LockClosedIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
          <TextField.Root variant="surface" size="2" type="number" placeholder="Enter number" />
          <TextField.Root variant="surface" size="2" type="tel" placeholder="Phone number" />
          <TextField.Root variant="surface" size="2" type="url" placeholder="https://example.com" />
        </Flex>
      </Box>

      {/* Disabled State */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Disabled State:
        </Text>
        <Flex direction="column" gap="2">
          <TextField.Root variant="surface" size="2" placeholder="Disabled input" disabled />
          <TextField.Root variant="surface" size="2" placeholder="Disabled with icon" disabled>
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
        </Flex>
      </Box>

      {/* With Label */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="1">
          With Label:
        </Text>
        <Text as="label" size="2" weight="medium">
          Full Name
          <TextField.Root variant="surface" size="2" placeholder="John Doe" mt="1" />
        </Text>
      </Box>

      {/* Color Variants */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Color Variants:
        </Text>
        <Flex direction="column" gap="2">
          <TextField.Root variant="surface" size="2" color="blue" placeholder="Blue color" />
          <TextField.Root variant="surface" size="2" color="green" placeholder="Green color" />
          <TextField.Root variant="surface" size="2" color="red" placeholder="Red color" />
          <TextField.Root variant="surface" size="2" color="purple" placeholder="Purple color" />
        </Flex>
      </Box>
    </Flex>
  );
}
