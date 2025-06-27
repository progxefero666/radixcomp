"use client";

import React from "react";
import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon, PersonIcon, LockClosedIcon } from "@radix-ui/react-icons";

interface InputTextProps {
  placeholder?: string;
  disabled?: boolean;
  variant?: "classic" | "surface" | "soft";
  size?: "1" | "2" | "3";
  color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";
  radius?: "none" | "small" | "medium" | "large" | "full";
  type?: "text" | "email" | "password" | "search" | "url" | "tel";
  icon?: "search" | "person" | "lock" | null;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputTextComponent({
  placeholder = "Enter text...",
  disabled = false,
  variant = "surface",
  size = "2",
  color = "gray",
  radius = "medium",
  type = "text",
  icon = null,
  value,
  onChange
}: InputTextProps) {
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
      onChange={onChange}
    >
      {icon && <TextField.Slot>{getIcon()}</TextField.Slot>}
    </TextField.Root>
  );
}
