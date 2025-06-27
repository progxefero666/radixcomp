"use client";

import React from "react";
import { Checkbox, Flex, Text } from "@radix-ui/themes";

type CheckedState = boolean | "indeterminate";

interface CheckboxComponentProps {
  label?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  variant?: "classic" | "surface" | "soft";
  size?: "1" | "2" | "3";
  color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";
  checked?: CheckedState;
  onCheckedChange?: (checked: CheckedState) => void;
}

export default function CheckboxComponent({
  label = "Accept terms",
  disabled = false,
  defaultChecked = false,
  variant = "surface",
  size = "2",
  color = "gray",
  checked,
  onCheckedChange
}: CheckboxComponentProps) {
  return (
    <Text as="label" size="2">
      <Flex gap="2" align="center">
        <Checkbox
          variant={variant}
          size={size}
          color={color}
          disabled={disabled}
          defaultChecked={defaultChecked}
          checked={checked}
          onCheckedChange={onCheckedChange}
        />
        {label}
      </Flex>
    </Text>
  );
}
