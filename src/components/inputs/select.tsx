"use client";

import React, { useState } from "react";
import { Select, Flex, Text, Box } from "@radix-ui/themes";
import { ChevronDownIcon, PersonIcon, GlobeIcon } from "@radix-ui/react-icons";

interface SelectComponentProps {
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  variant?: "classic" | "surface" | "soft" | "ghost";
  size?: "1" | "2" | "3";
  color?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";
  radius?: "none" | "small" | "medium" | "large" | "full";
  showExample?: boolean;
}

export default function SelectComponent({
  placeholder = "Select an option...",
  defaultValue,
  disabled = false,
  variant = "surface",
  size = "2",
  color = "gray",
  radius = "medium",
  showExample = true
}: SelectComponentProps) {
  const [value, setValue] = useState(defaultValue || "");

  if (!showExample) {
    return (
      <Select.Root
        value={value}
        onValueChange={setValue}
        disabled={disabled}
        size={size}
      >
        <Select.Trigger
          variant={variant}
          color={color}
          placeholder={placeholder}
        />
        <Select.Content>
          <Select.Item value="option1">Option 1</Select.Item>
          <Select.Item value="option2">Option 2</Select.Item>
          <Select.Item value="option3">Option 3</Select.Item>
        </Select.Content>
      </Select.Root>
    );
  }

  return (
    <Flex direction="column" gap="3">
      <Text size="2" as="p">
        Displays a list of options for the user to pick from—triggered by a button.
      </Text>
      
      {/* Basic Select */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="1">
          Basic Select:
        </Text>
        <Select.Root value={value} onValueChange={setValue}>
          <Select.Trigger placeholder="Choose a fruit..." />
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
            <Select.Item value="grape">Grape</Select.Item>
            <Select.Item value="strawberry">Strawberry</Select.Item>
          </Select.Content>
        </Select.Root>
        <Text size="1" color="gray" mt="1">
          Selected value: "{value || "none"}"
        </Text>
      </Box>

      {/* Different Variants */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Different Variants:
        </Text>
        <Flex direction="column" gap="2">
          <Select.Root defaultValue="classic">
            <Select.Trigger variant="classic" placeholder="Classic variant" />
            <Select.Content>
              <Select.Item value="classic">Classic variant</Select.Item>
              <Select.Item value="option2">Option 2</Select.Item>
            </Select.Content>
          </Select.Root>
          
          <Select.Root defaultValue="surface">
            <Select.Trigger variant="surface" placeholder="Surface variant" />
            <Select.Content>
              <Select.Item value="surface">Surface variant (default)</Select.Item>
              <Select.Item value="option2">Option 2</Select.Item>
            </Select.Content>
          </Select.Root>
          
          <Select.Root defaultValue="soft">
            <Select.Trigger variant="soft" placeholder="Soft variant" />
            <Select.Content>
              <Select.Item value="soft">Soft variant</Select.Item>
              <Select.Item value="option2">Option 2</Select.Item>
            </Select.Content>
          </Select.Root>
          
          <Select.Root defaultValue="ghost">
            <Select.Trigger variant="ghost" placeholder="Ghost variant" />
            <Select.Content>
              <Select.Item value="ghost">Ghost variant</Select.Item>
              <Select.Item value="option2">Option 2</Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>
      </Box>

      {/* Different Sizes */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Different Sizes:
        </Text>
        <Flex direction="column" gap="2">
          <Select.Root defaultValue="size1" size="1">
            <Select.Trigger placeholder="Size 1 (small)" />
            <Select.Content>
              <Select.Item value="size1">Size 1 (small)</Select.Item>
              <Select.Item value="option2">Option 2</Select.Item>
            </Select.Content>
          </Select.Root>
          
          <Select.Root defaultValue="size2" size="2">
            <Select.Trigger placeholder="Size 2 (medium)" />
            <Select.Content>
              <Select.Item value="size2">Size 2 (medium)</Select.Item>
              <Select.Item value="option2">Option 2</Select.Item>
            </Select.Content>
          </Select.Root>
          
          <Select.Root defaultValue="size3" size="3">
            <Select.Trigger placeholder="Size 3 (large)" />
            <Select.Content>
              <Select.Item value="size3">Size 3 (large)</Select.Item>
              <Select.Item value="option2">Option 2</Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>
      </Box>

      {/* Color Variants */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Color Variants:
        </Text>
        <Flex direction="column" gap="2">
          <Select.Root defaultValue="blue">
            <Select.Trigger color="blue" placeholder="Blue color" />
            <Select.Content>
              <Select.Item value="blue">Blue color</Select.Item>
              <Select.Item value="option2">Option 2</Select.Item>
            </Select.Content>
          </Select.Root>
          
          <Select.Root defaultValue="green">
            <Select.Trigger color="green" placeholder="Green color" />
            <Select.Content>
              <Select.Item value="green">Green color</Select.Item>
              <Select.Item value="option2">Option 2</Select.Item>
            </Select.Content>
          </Select.Root>
          
          <Select.Root defaultValue="red">
            <Select.Trigger color="red" placeholder="Red color" />
            <Select.Content>
              <Select.Item value="red">Red color</Select.Item>
              <Select.Item value="option2">Option 2</Select.Item>
            </Select.Content>
          </Select.Root>
          
          <Select.Root defaultValue="purple">
            <Select.Trigger color="purple" placeholder="Purple color" />
            <Select.Content>
              <Select.Item value="purple">Purple color</Select.Item>
              <Select.Item value="option2">Option 2</Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>
      </Box>

      {/* With Groups and Separators */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          With Groups and Separators:
        </Text>
        <Select.Root>
          <Select.Trigger placeholder="Choose a programming language..." />
          <Select.Content>
            <Select.Group>
              <Select.Label>Frontend</Select.Label>
              <Select.Item value="javascript">JavaScript</Select.Item>
              <Select.Item value="typescript">TypeScript</Select.Item>
              <Select.Item value="react">React</Select.Item>
              <Select.Item value="vue">Vue.js</Select.Item>
            </Select.Group>
            
            <Select.Separator />
            
            <Select.Group>
              <Select.Label>Backend</Select.Label>
              <Select.Item value="nodejs">Node.js</Select.Item>
              <Select.Item value="python">Python</Select.Item>
              <Select.Item value="java">Java</Select.Item>
              <Select.Item value="csharp">C#</Select.Item>
            </Select.Group>
            
            <Select.Separator />
            
            <Select.Group>
              <Select.Label>Database</Select.Label>
              <Select.Item value="postgresql">PostgreSQL</Select.Item>
              <Select.Item value="mysql">MySQL</Select.Item>
              <Select.Item value="mongodb">MongoDB</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </Box>

      {/* Disabled States */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Disabled States:
        </Text>
        <Flex direction="column" gap="2">
          <Select.Root disabled>
            <Select.Trigger placeholder="Disabled select" />
            <Select.Content>
              <Select.Item value="option1">Option 1</Select.Item>
            </Select.Content>
          </Select.Root>
          
          <Select.Root defaultValue="selected">
            <Select.Trigger placeholder="With disabled option" />
            <Select.Content>
              <Select.Item value="selected">Selected option</Select.Item>
              <Select.Item value="enabled">Enabled option</Select.Item>
              <Select.Item value="disabled" disabled>Disabled option</Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>
      </Box>

      {/* High Contrast */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          High Contrast:
        </Text>
        <Select.Root defaultValue="highcontrast">
          <Select.Trigger placeholder="High contrast select" />
          <Select.Content>
            <Select.Item value="highcontrast">High contrast option</Select.Item>
            <Select.Item value="option2">Another option</Select.Item>
          </Select.Content>
        </Select.Root>
      </Box>

      {/* Complex Options */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Complex Options:
        </Text>
        <Select.Root>
          <Select.Trigger placeholder="Choose a country..." />
          <Select.Content>
            <Select.Item value="us">🇺🇸 United States</Select.Item>
            <Select.Item value="uk">🇬🇧 United Kingdom</Select.Item>
            <Select.Item value="ca">🇨🇦 Canada</Select.Item>
            <Select.Item value="de">🇩🇪 Germany</Select.Item>
            <Select.Item value="fr">🇫🇷 France</Select.Item>
            <Select.Item value="es">🇪🇸 Spain</Select.Item>
            <Select.Item value="jp">🇯🇵 Japan</Select.Item>
            <Select.Item value="au">🇦🇺 Australia</Select.Item>
          </Select.Content>
        </Select.Root>
      </Box>

      {/* With Default Value */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          With Default Value:
        </Text>
        <Select.Root defaultValue="medium">
          <Select.Trigger placeholder="Choose size..." />
          <Select.Content>
            <Select.Item value="small">Small</Select.Item>
            <Select.Item value="medium">Medium (default)</Select.Item>
            <Select.Item value="large">Large</Select.Item>
            <Select.Item value="xlarge">Extra Large</Select.Item>
          </Select.Content>
        </Select.Root>
      </Box>
    </Flex>
  );
}
