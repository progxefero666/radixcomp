"use client";

import React from "react";
import { TextField } from "@radix-ui/themes";

interface InputNumberProps {
    placeholder?: string;
    disabled?: boolean;
    variant?: "classic" | "surface" | "soft";
    size?: "1" | "2" | "3";
    color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";
    radius?: "none" | "small" | "medium" | "large" | "full";
    min?: number;
    max?: number;
    step?: number;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputNumberComponent({
    placeholder = "Enter number...",
    disabled = false,
    variant = "surface",
    size = "2",
    color = "gray",
    radius = "medium",
    min = 0,
    max = 100,
    step = 1,
    value,
    onChange
}: InputNumberProps) {
    return (
        <TextField.Root
            variant={variant}
            size={size}
            color={color}
            radius={radius}
            disabled={disabled}
            type="number"
            placeholder={placeholder}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
        />
    );
}
