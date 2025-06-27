"use client";

import React from "react";
import * as ToggleGroup from '@radix-ui/react-toggle-group';

interface ToggleGroupProps {
    type?: "single" | "multiple";
    defaultValue?: string | string[];
    disabled?: boolean;
    orientation?: "horizontal" | "vertical";
    children?: React.ReactNode;
    onValueChange?: (value: string | string[]) => void;
}

export default function ToggleGroupComponent({
    type = "multiple",
    defaultValue,
    disabled = false,
    orientation = "horizontal",
    children,
    onValueChange
}: ToggleGroupProps) {
    if (type === "single") {
        return (
            <ToggleGroup.Root
                type="single"
                defaultValue={defaultValue as string}
                disabled={disabled}
                orientation={orientation}
                onValueChange={onValueChange as (value: string) => void}
                aria-label="Toggle group"
            >
                {children}
            </ToggleGroup.Root>
        );
    }

    return (
        <ToggleGroup.Root
            type="multiple"
            defaultValue={defaultValue as string[]}
            disabled={disabled}
            orientation={orientation}
            onValueChange={onValueChange as (value: string[]) => void}
            aria-label="Toggle group"
        >
            {children}
        </ToggleGroup.Root>
    );
}
