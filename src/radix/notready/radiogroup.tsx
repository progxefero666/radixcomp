"use client";

import React from "react";
import * as RadioGroup from '@radix-ui/react-radio-group';

interface RadioGroupProps {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    orientation?: "horizontal" | "vertical";
    children?: React.ReactNode;
}

export default function RadioGroupComponent({
    defaultValue,
    value,
    onValueChange,
    disabled = false,
    orientation = "vertical",
    children
}: RadioGroupProps) {
    return (
        <RadioGroup.Root
            defaultValue={defaultValue}
            value={value}
            onValueChange={onValueChange}
            disabled={disabled}
            orientation={orientation}
        >
            {children}
        </RadioGroup.Root>
    );
}
