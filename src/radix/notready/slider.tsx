"use client";

import React from "react";
import * as Slider from '@radix-ui/react-slider';

interface SliderProps {
    defaultValue?: number[];
    value?: number[];
    onValueChange?: (value: number[]) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    orientation?: "horizontal" | "vertical";
    name?: string;
}

export default function SliderComponent({
    defaultValue = [50],
    value,
    onValueChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    orientation = "horizontal",
    name
}: SliderProps) {
    return (
        <Slider.Root
            defaultValue={defaultValue}
            value={value}
            onValueChange={onValueChange}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            orientation={orientation}
            name={name}
        >
            <Slider.Track>
                <Slider.Range />
            </Slider.Track>
            <Slider.Thumb />
        </Slider.Root>
    );
}
