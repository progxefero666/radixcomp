"use client";

import React, { useState } from "react";
import { RadioGroup, Flex, Text, Box } from "@radix-ui/themes";

interface RadioGroupProps {
  defaultValue?: string;
  disabled?: boolean;
  size?: "1" | "2" | "3";
  color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";
  variant?: "classic" | "surface" | "soft";
  highContrast?: boolean;
  showExample?: boolean;
}

export default function RadioGroupComponent({
  defaultValue = "option1",
  disabled = false,
  size = "2",
  color = "gray",
  variant = "surface",
  highContrast = false,
  showExample = true
}: RadioGroupProps) {
  const [basicValue, setBasicValue] = useState("option1");
  const [colorValue, setColorValue] = useState("blue");
  const [sizeValue, setSizeValue] = useState("medium");
  const [orientationValue, setOrientationValue] = useState("vertical");

  if (!showExample) {
    return (
      <RadioGroup.Root
        defaultValue={defaultValue}
        disabled={disabled}
        size={size}
        color={color}
        variant={variant}
        highContrast={highContrast}
      >
        <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
        <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
        <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
      </RadioGroup.Root>
    );
  }

  return (
    <Flex direction="column" gap="4">
      {/* Basic RadioGroup */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Basic RadioGroup:
        </Text>
        <RadioGroup.Root value={basicValue} onValueChange={setBasicValue} name="basic">
          <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
          <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
          <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
        </RadioGroup.Root>
        <Text size="1" color="gray" mt="1">Selected: {basicValue}</Text>
      </Box>

      {/* Sizes */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Sizes:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="1" color="gray" mb="1">Size 1 (Small):</Text>
            <RadioGroup.Root defaultValue="small1" size="1" name="size1">
              <RadioGroup.Item value="small1">Small Option 1</RadioGroup.Item>
              <RadioGroup.Item value="small2">Small Option 2</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Size 2 (Medium):</Text>
            <RadioGroup.Root value={sizeValue} onValueChange={setSizeValue} size="2" name="size2">
              <RadioGroup.Item value="medium">Medium Option 1</RadioGroup.Item>
              <RadioGroup.Item value="medium2">Medium Option 2</RadioGroup.Item>
            </RadioGroup.Root>
            <Text size="1" color="gray" mt="1">Selected: {sizeValue}</Text>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Size 3 (Large):</Text>
            <RadioGroup.Root defaultValue="large1" size="3" name="size3">
              <RadioGroup.Item value="large1">Large Option 1</RadioGroup.Item>
              <RadioGroup.Item value="large2">Large Option 2</RadioGroup.Item>
            </RadioGroup.Root>
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
            <RadioGroup.Root defaultValue="classic1" variant="classic" name="classic">
              <RadioGroup.Item value="classic1">Classic Option 1</RadioGroup.Item>
              <RadioGroup.Item value="classic2">Classic Option 2</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Surface:</Text>
            <RadioGroup.Root defaultValue="surface1" variant="surface" name="surface">
              <RadioGroup.Item value="surface1">Surface Option 1</RadioGroup.Item>
              <RadioGroup.Item value="surface2">Surface Option 2</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Soft:</Text>
            <RadioGroup.Root defaultValue="soft1" variant="soft" name="soft">
              <RadioGroup.Item value="soft1">Soft Option 1</RadioGroup.Item>
              <RadioGroup.Item value="soft2">Soft Option 2</RadioGroup.Item>
            </RadioGroup.Root>
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
            <RadioGroup.Root value={colorValue} onValueChange={setColorValue} color="blue" name="colors">
              <RadioGroup.Item value="blue">Blue Color</RadioGroup.Item>
              <RadioGroup.Item value="blue2">Blue Option 2</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Green:</Text>
            <RadioGroup.Root defaultValue="green1" color="green" name="green">
              <RadioGroup.Item value="green1">Green Color</RadioGroup.Item>
              <RadioGroup.Item value="green2">Green Option 2</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Red:</Text>
            <RadioGroup.Root defaultValue="red1" color="red" name="red">
              <RadioGroup.Item value="red1">Red Color</RadioGroup.Item>
              <RadioGroup.Item value="red2">Red Option 2</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Purple:</Text>
            <RadioGroup.Root defaultValue="purple1" color="purple" name="purple">
              <RadioGroup.Item value="purple1">Purple Color</RadioGroup.Item>
              <RadioGroup.Item value="purple2">Purple Option 2</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
        </Flex>
        <Text size="1" color="gray" mt="1">Selected color option: {colorValue}</Text>
      </Box>

      {/* Practical Examples */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Practical Examples:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="1" color="gray" mb="1">Payment Method:</Text>
            <RadioGroup.Root defaultValue="credit" color="blue" name="payment">
              <RadioGroup.Item value="credit">Credit Card</RadioGroup.Item>
              <RadioGroup.Item value="debit">Debit Card</RadioGroup.Item>
              <RadioGroup.Item value="paypal">PayPal</RadioGroup.Item>
              <RadioGroup.Item value="crypto">Cryptocurrency</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Shipping Options:</Text>
            <RadioGroup.Root defaultValue="standard" color="green" name="shipping">
              <RadioGroup.Item value="standard">Standard Shipping (5-7 days)</RadioGroup.Item>
              <RadioGroup.Item value="express">Express Shipping (2-3 days)</RadioGroup.Item>
              <RadioGroup.Item value="overnight">Overnight Shipping</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Notification Frequency:</Text>
            <RadioGroup.Root defaultValue="daily" color="purple" name="notifications">
              <RadioGroup.Item value="real-time">Real-time</RadioGroup.Item>
              <RadioGroup.Item value="hourly">Hourly</RadioGroup.Item>
              <RadioGroup.Item value="daily">Daily</RadioGroup.Item>
              <RadioGroup.Item value="weekly">Weekly</RadioGroup.Item>
              <RadioGroup.Item value="never">Never</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
        </Flex>
      </Box>

      {/* Orientation Example */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Layout Orientation:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="1" color="gray" mb="1">Vertical (Default):</Text>
            <RadioGroup.Root value={orientationValue} onValueChange={setOrientationValue} name="orientation">
              <RadioGroup.Item value="vertical">Vertical Layout</RadioGroup.Item>
              <RadioGroup.Item value="horizontal">Horizontal Layout</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Horizontal (Using Flex):</Text>
            <Flex gap="4">
              <RadioGroup.Root defaultValue="left" name="horizontal">
                <Flex gap="4">
                  <RadioGroup.Item value="left">Left</RadioGroup.Item>
                  <RadioGroup.Item value="center">Center</RadioGroup.Item>
                  <RadioGroup.Item value="right">Right</RadioGroup.Item>
                </Flex>
              </RadioGroup.Root>
            </Flex>
          </Box>
        </Flex>
        <Text size="1" color="gray" mt="1">Selected orientation: {orientationValue}</Text>
      </Box>

      {/* Disabled States */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Disabled States:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="1" color="gray" mb="1">Entire Group Disabled:</Text>
            <RadioGroup.Root defaultValue="option1" disabled name="disabled-group">
              <RadioGroup.Item value="option1">Disabled Option 1</RadioGroup.Item>
              <RadioGroup.Item value="option2">Disabled Option 2</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">Individual Items Disabled:</Text>
            <RadioGroup.Root defaultValue="enabled1" name="mixed-disabled">
              <RadioGroup.Item value="enabled1">Enabled Option</RadioGroup.Item>
              <RadioGroup.Item value="disabled1" disabled>Disabled Option</RadioGroup.Item>
              <RadioGroup.Item value="enabled2">Another Enabled Option</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
        </Flex>
      </Box>

      {/* High Contrast */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          High Contrast:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="1" color="gray" mb="1">Normal:</Text>
            <RadioGroup.Root defaultValue="normal1" color="blue" name="normal">
              <RadioGroup.Item value="normal1">Normal Contrast</RadioGroup.Item>
              <RadioGroup.Item value="normal2">Normal Option 2</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
          <Box>
            <Text size="1" color="gray" mb="1">High Contrast:</Text>
            <RadioGroup.Root defaultValue="high1" color="blue" highContrast name="high-contrast">
              <RadioGroup.Item value="high1">High Contrast</RadioGroup.Item>
              <RadioGroup.Item value="high2">High Contrast Option 2</RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
        </Flex>
      </Box>

      {/* Complex Example */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Complex Form Example:
        </Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="2" weight="medium" as="p" mb="1">Account Type:</Text>
            <RadioGroup.Root defaultValue="personal" size="2" color="blue" name="account-type">
              <RadioGroup.Item value="personal">
                <Flex direction="column" align="start">
                  <Text weight="medium">Personal Account</Text>
                  <Text size="1" color="gray">For individual use</Text>
                </Flex>
              </RadioGroup.Item>
              <RadioGroup.Item value="business">
                <Flex direction="column" align="start">
                  <Text weight="medium">Business Account</Text>
                  <Text size="1" color="gray">For companies and organizations</Text>
                </Flex>
              </RadioGroup.Item>
              <RadioGroup.Item value="enterprise">
                <Flex direction="column" align="start">
                  <Text weight="medium">Enterprise Account</Text>
                  <Text size="1" color="gray">For large organizations with advanced needs</Text>
                </Flex>
              </RadioGroup.Item>
            </RadioGroup.Root>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
