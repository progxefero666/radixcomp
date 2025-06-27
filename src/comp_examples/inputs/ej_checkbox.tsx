"use client";

import React, { useState } from "react";
import { Checkbox, Flex, Text, Box } from "@radix-ui/themes";
import { CheckIcon } from "@radix-ui/react-icons";

type CheckedState = boolean | "indeterminate";

interface CheckboxComponentProps {
  label?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  variant?: "classic" | "surface" | "soft";
  size?: "1" | "2" | "3";
  color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";
  showExample?: boolean;
}

export default function CheckboxComponentExample({
  label = "Accept terms",
  disabled = false,
  defaultChecked = false,
  variant = "surface",
  size = "2",
  color = "gray",
  showExample = true
}: CheckboxComponentProps) {
  const [checked, setChecked] = useState<CheckedState>(defaultChecked);
  const [checked2, setChecked2] = useState<CheckedState>(false);
  const [checked3, setChecked3] = useState<CheckedState>(true);

  const handleCheckedChange = (value: CheckedState) => {
    setChecked(value);
  };

  const handleCheckedChange2 = (value: CheckedState) => {
    setChecked2(value);
  };

  const handleCheckedChange3 = (value: CheckedState) => {
    setChecked3(value);
  };

  if (!showExample) {
    return (
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Checkbox
            variant={variant}
            size={size}
            color={color}
            disabled={disabled}
            checked={checked}
            onCheckedChange={handleCheckedChange}
          />
          {label}
        </Flex>
      </Text>
    );
  }

  return (
    <Flex direction="column" gap="3">
      <Text size="2" as="p">
        A control that allows the user to toggle between checked and not checked.
      </Text>
      
      {/* Basic Checkbox */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Basic Checkbox:
        </Text>
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            <Checkbox
              checked={checked}
              onCheckedChange={handleCheckedChange}
            />
            Accept terms and conditions
          </Flex>
        </Text>
        <Text size="1" color="gray" mt="1">
          Current state: {checked ? "Checked" : "Unchecked"}
        </Text>
      </Box>

      {/* Different Variants */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Different Variants:
        </Text>
        <Flex direction="column" gap="2">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox variant="classic" defaultChecked />
              Classic variant
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox variant="surface" defaultChecked />
              Surface variant (default)
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox variant="soft" defaultChecked />
              Soft variant
            </Flex>
          </Text>
        </Flex>
      </Box>

      {/* Different Sizes */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Different Sizes:
        </Text>
        <Flex direction="column" gap="2">
          <Text as="label" size="1">
            <Flex gap="2" align="center">
              <Checkbox size="1" defaultChecked />
              Size 1 (small)
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox size="2" defaultChecked />
              Size 2 (medium)
            </Flex>
          </Text>
          <Text as="label" size="3">
            <Flex gap="2" align="center">
              <Checkbox size="3" defaultChecked />
              Size 3 (large)
            </Flex>
          </Text>
        </Flex>
      </Box>

      {/* Color Variants */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Color Variants:
        </Text>
        <Flex direction="column" gap="2">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox color="blue" defaultChecked />
              Blue checkbox
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox color="green" defaultChecked />
              Green checkbox
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox color="red" defaultChecked />
              Red checkbox
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox color="purple" defaultChecked />
              Purple checkbox
            </Flex>
          </Text>
        </Flex>
      </Box>

      {/* Interactive States */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Interactive States:
        </Text>
        <Flex direction="column" gap="2">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                checked={checked2}
                onCheckedChange={handleCheckedChange2}
              />
              Toggle me ({checked2 ? "checked" : "unchecked"})
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                checked={checked3}
                onCheckedChange={handleCheckedChange3}
              />
              Toggle me too ({checked3 ? "checked" : "unchecked"})
            </Flex>
          </Text>
        </Flex>
      </Box>

      {/* Disabled States */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Disabled States:
        </Text>
        <Flex direction="column" gap="2">
          <Text as="label" size="2" color="gray">
            <Flex gap="2" align="center">
              <Checkbox disabled />
              Disabled unchecked
            </Flex>
          </Text>
          <Text as="label" size="2" color="gray">
            <Flex gap="2" align="center">
              <Checkbox defaultChecked disabled />
              Disabled checked
            </Flex>
          </Text>
        </Flex>
      </Box>

      {/* Indeterminate State */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Indeterminate State:
        </Text>
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            <Checkbox checked="indeterminate" />
            Partially selected (indeterminate)
          </Flex>
        </Text>
      </Box>

      {/* High Contrast */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          High Contrast:
        </Text>
        <Flex direction="column" gap="2">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox defaultChecked highContrast />
              High contrast checkbox
            </Flex>
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
