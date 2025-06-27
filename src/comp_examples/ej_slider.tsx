"use client";

import React, { useState } from "react";
import { Slider as RadixSlider, Flex, Text, Box } from "@radix-ui/themes";

interface SliderProps {
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  size?: "1" | "2" | "3";
  color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";
  radius?: "none" | "small" | "medium" | "large" | "full";
  variant?: "classic" | "surface" | "soft";
  orientation?: "horizontal" | "vertical";
  showExample?: boolean;
}

export default function Slider({
  defaultValue = [50],
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  size = "2",
  color = "gray",
  radius = "medium",
  variant = "surface",
  orientation = "horizontal",
  showExample = true
}: SliderProps) {
  const [singleValue, setSingleValue] = useState([50]);
  const [rangeValue, setRangeValue] = useState([25, 75]);
  const [volumeValue, setVolumeValue] = useState([70]);
  const [priceValue, setPriceValue] = useState([500]);

  if (!showExample) {
    return (
      <RadixSlider
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        size={size}
        color={color}
        radius={radius}
        variant={variant}
        orientation={orientation}
      />
    );
  }

  return (
    <Flex direction="column" gap="4">
      {/* Basic Single Value Slider */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Basic Single Value:
        </Text>
        <Flex direction="column" gap="2">
          <RadixSlider
            value={singleValue}
            onValueChange={setSingleValue}
            max={100}
            step={1}
            style={{ width: 200 }}
          />
          <Text size="1" color="gray">Value: {singleValue[0]}</Text>
        </Flex>
      </Box>

      {/* Range Slider (Dual Handles) */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Range Slider (Dual Handles):
        </Text>
        <Flex direction="column" gap="2">
          <RadixSlider
            value={rangeValue}
            onValueChange={setRangeValue}
            max={100}
            step={1}
            style={{ width: 200 }}
          />
          <Text size="1" color="gray">Range: {rangeValue[0]} - {rangeValue[1]}</Text>
        </Flex>
      </Box>

      {/* Sizes */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Sizes:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="1" color="gray" mb="1">Size 1 (Small):</Text>
            <RadixSlider
              defaultValue={[30]}
              size="1"
              max={100}
              step={1}
              style={{ width: 150 }}
            />
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Size 2 (Medium):</Text>
            <RadixSlider
              defaultValue={[50]}
              size="2"
              max={100}
              step={1}
              style={{ width: 150 }}
            />
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Size 3 (Large):</Text>
            <RadixSlider
              defaultValue={[70]}
              size="3"
              max={100}
              step={1}
              style={{ width: 150 }}
            />
          </Box>
        </Flex>
      </Box>

      {/* Variants */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Variants:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="1" color="gray" mb="1">Classic:</Text>
            <RadixSlider
              defaultValue={[40]}
              variant="classic"
              max={100}
              step={1}
              style={{ width: 200 }}
            />
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Surface:</Text>
            <RadixSlider
              defaultValue={[60]}
              variant="surface"
              max={100}
              step={1}
              style={{ width: 200 }}
            />
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Soft:</Text>
            <RadixSlider
              defaultValue={[80]}
              variant="soft"
              max={100}
              step={1}
              style={{ width: 200 }}
            />
          </Box>
        </Flex>
      </Box>

      {/* Color Variants */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Color Variants:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="1" color="gray" mb="1">Blue:</Text>
            <RadixSlider
              defaultValue={[25]}
              color="blue"
              max={100}
              step={1}
              style={{ width: 200 }}
            />
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Green:</Text>
            <RadixSlider
              defaultValue={[50]}
              color="green"
              max={100}
              step={1}
              style={{ width: 200 }}
            />
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Red:</Text>
            <RadixSlider
              defaultValue={[75]}
              color="red"
              max={100}
              step={1}
              style={{ width: 200 }}
            />
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Purple:</Text>
            <RadixSlider
              defaultValue={[90]}
              color="purple"
              max={100}
              step={1}
              style={{ width: 200 }}
            />
          </Box>
        </Flex>
      </Box>

      {/* Practical Examples */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Practical Examples:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="1" color="gray" mb="1">Volume Control (0-100):</Text>
            <RadixSlider
              value={volumeValue}
              onValueChange={setVolumeValue}
              min={0}
              max={100}
              step={5}
              color="blue"
              style={{ width: 200 }}
            />
            <Text size="1" color="gray">Volume: {volumeValue[0]}%</Text>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Price Range ($0-$1000):</Text>
            <RadixSlider
              value={priceValue}
              onValueChange={setPriceValue}
              min={0}
              max={1000}
              step={50}
              color="green"
              style={{ width: 200 }}
            />
            <Text size="1" color="gray">Price: ${priceValue[0]}</Text>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Temperature (-20°C to 50°C):</Text>
            <RadixSlider
              defaultValue={[22]}
              min={-20}
              max={50}
              step={1}
              color="orange"
              style={{ width: 200 }}
            />
          </Box>
        </Flex>
      </Box>

      {/* Step Variants */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Step Variants:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="1" color="gray" mb="1">Step 1 (Fine control):</Text>
            <RadixSlider
              defaultValue={[50]}
              max={100}
              step={1}
              style={{ width: 200 }}
            />
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Step 5 (Coarse control):</Text>
            <RadixSlider
              defaultValue={[50]}
              max={100}
              step={5}
              style={{ width: 200 }}
            />
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Step 10 (Very coarse):</Text>
            <RadixSlider
              defaultValue={[50]}
              max={100}
              step={10}
              style={{ width: 200 }}
            />
          </Box>
        </Flex>
      </Box>

      {/* Disabled State */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Disabled State:
        </Text>
        <Flex direction="column" gap="2">
          <RadixSlider
            defaultValue={[25]}
            max={100}
            step={1}
            disabled
            style={{ width: 200 }}
          />
          <Text size="1" color="gray">Disabled slider</Text>
        </Flex>
      </Box>

      {/* Radius Variants */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Radius Variants:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="1" color="gray" mb="1">None:</Text>
            <RadixSlider
              defaultValue={[20]}
              radius="none"
              max={100}
              step={1}
              style={{ width: 200 }}
            />
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Small:</Text>
            <RadixSlider
              defaultValue={[40]}
              radius="small"
              max={100}
              step={1}
              style={{ width: 200 }}
            />
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Medium:</Text>
            <RadixSlider
              defaultValue={[60]}
              radius="medium"
              max={100}
              step={1}
              style={{ width: 200 }}
            />
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Large:</Text>
            <RadixSlider
              defaultValue={[80]}
              radius="large"
              max={100}
              step={1}
              style={{ width: 200 }}
            />
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Full:</Text>
            <RadixSlider
              defaultValue={[100]}
              radius="full"
              max={100}
              step={1}
              style={{ width: 200 }}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
