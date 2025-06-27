"use client";

import React, { useState } from "react";
import { Switch, Flex, Text, Box } from "@radix-ui/themes";

interface SwitchComponentProps {
  label?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  variant?: "classic" | "surface" | "soft";
  size?: "1" | "2" | "3";
  color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";
  radius?: "none" | "small" | "medium" | "large" | "full";
  showExample?: boolean;
}

export default function SwitchComponent({
  label = "Enable feature",
  disabled = false,
  defaultChecked = false,
  variant = "surface",
  size = "2",
  color = "gray",
  radius = "medium",
  showExample = true
}: SwitchComponentProps) {
  const [checked, setChecked] = useState(defaultChecked);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(true);
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  if (!showExample) {
    return (
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Switch
            variant={variant}
            size={size}
            color={color}
            radius={radius}
            disabled={disabled}
            checked={checked}
            onCheckedChange={setChecked}
          />
          {label}
        </Flex>
      </Text>
    );
  }

  return (
    <Flex direction="column" gap="3">
      <Text size="2" as="p">
        A control that allows the user to toggle between checked and not checked.
      </Text>
      
      {/* Basic Switch */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Basic Switch:
        </Text>
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            <Switch
              checked={checked}
              onCheckedChange={setChecked}
            />
            Enable notifications
          </Flex>
        </Text>
        <Text size="1" color="gray" mt="1">
          Current state: {checked ? "On" : "Off"}
        </Text>
      </Box>

      {/* Different Variants */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Different Variants:
        </Text>
        <Flex direction="column" gap="2">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch variant="classic" defaultChecked />
              Classic variant
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch variant="surface" defaultChecked />
              Surface variant (default)
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch variant="soft" defaultChecked />
              Soft variant
            </Flex>
          </Text>
        </Flex>
      </Box>

      {/* Different Sizes */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Different Sizes:
        </Text>
        <Flex direction="column" gap="2">
          <Text as="label" size="1">
            <Flex gap="2" align="center">
              <Switch size="1" defaultChecked />
              Size 1 (small)
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch size="2" defaultChecked />
              Size 2 (medium)
            </Flex>
          </Text>
          <Text as="label" size="3">
            <Flex gap="2" align="center">
              <Switch size="3" defaultChecked />
              Size 3 (large)
            </Flex>
          </Text>
        </Flex>
      </Box>

      {/* Color Variants */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Color Variants:
        </Text>
        <Flex direction="column" gap="2">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch color="blue" defaultChecked />
              Blue switch
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch color="green" defaultChecked />
              Green switch
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch color="red" defaultChecked />
              Red switch
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch color="purple" defaultChecked />
              Purple switch
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch color="orange" defaultChecked />
              Orange switch
            </Flex>
          </Text>
        </Flex>
      </Box>

      {/* Interactive States */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Interactive States:
        </Text>
        <Flex direction="column" gap="2">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch
                checked={airplaneMode}
                onCheckedChange={setAirplaneMode}
              />
              Airplane mode ({airplaneMode ? "on" : "off"})
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
              Push notifications ({notifications ? "enabled" : "disabled"})
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
              Dark mode ({darkMode ? "on" : "off"})
            </Flex>
          </Text>
        </Flex>
      </Box>

      {/* Disabled States */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Disabled States:
        </Text>
        <Flex direction="column" gap="2">
          <Text as="label" size="2" color="gray">
            <Flex gap="2" align="center">
              <Switch disabled />
              Disabled switch (off)
            </Flex>
          </Text>
          <Text as="label" size="2" color="gray">
            <Flex gap="2" align="center">
              <Switch defaultChecked disabled />
              Disabled switch (on)
            </Flex>
          </Text>
        </Flex>
      </Box>

      {/* High Contrast */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          High Contrast:
        </Text>
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            <Switch defaultChecked highContrast />
            High contrast switch
          </Flex>
        </Text>
      </Box>

      {/* Different Radius */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Different Radius:
        </Text>
        <Flex direction="column" gap="2">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch radius="none" defaultChecked />
              No radius
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch radius="small" defaultChecked />
              Small radius
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch radius="medium" defaultChecked />
              Medium radius (default)
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch radius="large" defaultChecked />
              Large radius
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Switch radius="full" defaultChecked />
              Full radius
            </Flex>
          </Text>
        </Flex>
      </Box>

      {/* Grouped Settings */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Settings Group Example:
        </Text>
        <Flex direction="column" gap="3" p="3" style={{ backgroundColor: 'var(--gray-2)', borderRadius: 'var(--radius-3)' }}>
          <Text size="2" weight="bold">Privacy Settings</Text>
          <Flex direction="column" gap="2">
            <Text as="label" size="2">
              <Flex gap="2" align="center">
                <Switch
                  checked={checked2}
                  onCheckedChange={setChecked2}
                  color="blue"
                />
                Share analytics data
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2" align="center">
                <Switch
                  checked={checked3}
                  onCheckedChange={setChecked3}
                  color="green"
                />
                Allow cookies
              </Flex>
            </Text>
            <Text as="label" size="2" color="gray">
              <Flex gap="2" align="center">
                <Switch disabled color="red" />
                Location tracking (premium feature)
              </Flex>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
