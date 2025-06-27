"use client";

import React from "react";
import { Select } from "@radix-ui/themes";

interface SelectProps {
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  size?: "1" | "2" | "3";
  variant?: "classic" | "surface" | "soft";
  color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";
  children?: React.ReactNode;
}

export default function SelectComponent({
  placeholder = "Select an option...",
  defaultValue,
  value,
  onValueChange,
  disabled = false,
  size = "2",
  variant = "surface",
  color = "gray",
  children
}: SelectProps) {
  return (
    <Select.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      size={size}
    >
      <Select.Trigger variant={variant} color={color} placeholder={placeholder} />
      <Select.Content>
        {children}
      </Select.Content>
    </Select.Root>
  );
}
