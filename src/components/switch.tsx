"use client";

import React from "react";
import * as Switch from '@radix-ui/react-switch';

interface SwitchProps {
  defaultChecked?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
}

export default function SwitchComponent({
  defaultChecked,
  checked,
  onCheckedChange,
  disabled = false,
  required,
  name,
  value
}: SwitchProps) {
  return (
    <Switch.Root
      defaultChecked={defaultChecked}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      required={required}
      name={name}
      value={value}
    >
      <Switch.Thumb />
    </Switch.Root>
  );
}
