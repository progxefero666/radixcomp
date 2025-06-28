"use client";

import React, { useState } from "react";
import { TextField, Flex, Text, Box } from "@radix-ui/themes";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

interface InputNumberProps {
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  variant?: "classic" | "surface" | "soft";
  size?: "1" | "2" | "3";
  color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";
  radius?: "none" | "small" | "medium" | "large" | "full";
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  showExample?: boolean;
}

export default function InputNumber({
  placeholder = "Enter number...",
  label,
  disabled = false,
  variant = "surface",
  size = "2",
  color = "gray",
  radius = "medium",
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 0,
  showExample = true
}: InputNumberProps) {
  const [value, setValue] = useState(defaultValue.toString());
  const [age, setAge] = useState("25");
  const [quantity, setQuantity] = useState("1");
  const [percentage, setPercentage] = useState("50");

  const handleValueChange = (newValue: string) => {
    // Solo permitir números enteros
    const numericValue = newValue.replace(/[^0-9]/g, '');
    setValue(numericValue);
  };

  const handleSpecificChange = (newValue: string, setter: (value: string) => void) => {
    // Solo permitir números enteros
    const numericValue = newValue.replace(/[^0-9]/g, '');
    setter(numericValue);
  };

  if (!showExample) {
    return (
      <TextField.Root
        variant={variant}
        size={size}
        color={color}
        radius={radius}
        disabled={disabled}
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleValueChange(e.target.value)}
      />
    );
  }

  return (
    <Flex direction="column" gap="3">
      <Text size="2" as="p">
        Numeric input field that accepts only whole numbers (integers).
      </Text>
      
      {/* Basic Number Input */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="1">
          Basic Number Input:
        </Text>
        <TextField.Root
          variant="surface"
          size="2"
          type="number"
          placeholder="Enter your age..."
          value={value}
          onChange={(e) => handleValueChange(e.target.value)}
        />
        <Text size="1" color="gray" mt="1">Current value: {value || "0"}</Text>
      </Box>

      {/* Different Variants */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Different Variants:
        </Text>
        <Flex direction="column" gap="2">
          <TextField.Root variant="classic" size="2" type="number" placeholder="Classic variant" />
          <TextField.Root variant="surface" size="2" type="number" placeholder="Surface variant (default)" />
          <TextField.Root variant="soft" size="2" type="number" placeholder="Soft variant" />
        </Flex>
      </Box>

      {/* Different Sizes */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Different Sizes:
        </Text>
        <Flex direction="column" gap="2">
          <TextField.Root variant="surface" size="1" type="number" placeholder="Size 1 (small)" />
          <TextField.Root variant="surface" size="2" type="number" placeholder="Size 2 (medium)" />
          <TextField.Root variant="surface" size="3" type="number" placeholder="Size 3 (large)" />
        </Flex>
      </Box>

      {/* Practical Examples */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Practical Examples:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text as="label" size="2" weight="medium" mb="1" style={{ display: 'block' }}>
              Age:
            </Text>
            <TextField.Root
              variant="surface"
              size="2"
              type="number"
              placeholder="25"
              value={age}
              onChange={(e) => handleSpecificChange(e.target.value, setAge)}
            />
          </Box>
          
          <Box>
            <Text as="label" size="2" weight="medium" mb="1" style={{ display: 'block' }}>
              Quantity:
            </Text>
            <TextField.Root
              variant="surface"
              size="2"
              type="number"
              placeholder="1"
              value={quantity}
              onChange={(e) => handleSpecificChange(e.target.value, setQuantity)}
            />
          </Box>
          
          <Box>
            <Text as="label" size="2" weight="medium" mb="1" style={{ display: 'block' }}>
              Percentage (0-100):
            </Text>
            <TextField.Root
              variant="surface"
              size="2"
              type="number"
              placeholder="50"
              value={percentage}
              onChange={(e) => handleSpecificChange(e.target.value, setPercentage)}
            />
          </Box>
        </Flex>
      </Box>

      {/* With Min/Max Attributes */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          With Min/Max Constraints:
        </Text>
        <Flex direction="column" gap="2">
          <TextField.Root
            variant="surface"
            size="2"
            type="number"
            placeholder="Min: 0, Max: 10"
            min={0}
            max={10}
          />
          <TextField.Root
            variant="surface"
            size="2"
            type="number"
            placeholder="Min: 18, Max: 65"
            min={18}
            max={65}
          />
        </Flex>
      </Box>

      {/* Disabled State */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Disabled State:
        </Text>
        <Flex direction="column" gap="2">
          <TextField.Root variant="surface" size="2" type="number" placeholder="Disabled input" disabled />
          <TextField.Root variant="surface" size="2" type="number" defaultValue="42" disabled />
        </Flex>
      </Box>

      {/* Color Variants */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Color Variants:
        </Text>
        <Flex direction="column" gap="2">
          <TextField.Root variant="surface" size="2" type="number" color="blue" placeholder="Blue color" />
          <TextField.Root variant="surface" size="2" type="number" color="green" placeholder="Green color" />
          <TextField.Root variant="surface" size="2" type="number" color="red" placeholder="Red color" />
          <TextField.Root variant="surface" size="2" type="number" color="purple" placeholder="Purple color" />
        </Flex>
      </Box>

      {/* Form Example */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Form Example:
        </Text>
        <Flex direction="column" gap="3" p="3" style={{ backgroundColor: 'var(--gray-2)', borderRadius: 'var(--radius-3)' }}>
          <Text size="2" weight="bold">Product Information</Text>
          <Flex direction="column" gap="2">
            <Text as="label" size="2" weight="medium">
              Product ID:
              <TextField.Root variant="surface" size="2" type="number" placeholder="12345" mt="1" />
            </Text>
            <Text as="label" size="2" weight="medium">
              Stock Quantity:
              <TextField.Root variant="surface" size="2" type="number" placeholder="100" mt="1" />
            </Text>
            <Text as="label" size="2" weight="medium">
              Price (cents):
              <TextField.Root variant="surface" size="2" type="number" placeholder="2999" mt="1" />
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
