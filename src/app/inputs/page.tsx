"use client"; // Required for useState and event handlers

import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import ComponentExample from "@/components/ComponentExample";
import { Heading, Flex, Text, Checkbox as RadixCheckbox, RadioGroup, Slider, Switch as RadixSwitch, Button, TextField, Select as RadixSelect } from "@radix-ui/themes";
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { CheckIcon, FontBoldIcon, FontItalicIcon, UnderlineIcon, TextAlignLeftIcon, TextAlignCenterIcon, TextAlignRightIcon } from "@radix-ui/react-icons";
import InputText from "@/components/inputs/inputtext";
import InputNumber from "@/components/inputs/inputnumber";
import Checkbox from "@/components/inputs/checkbox";
import Select from "@/components/inputs/select";
import Switch from "@/components/inputs/switch";

export default function InputsPage() {
  const [radioValue, setRadioValue] = useState("option1");
  const [sliderValue, setSliderValue] = useState<number[]>([50]);
  const [toggleGroupValue, setToggleGroupValue] = useState<string[]>(["bold"]);
  const [singleToggleValue, setSingleToggleValue] = useState<string>("center");


  return (
    <Layout>
      <Heading size="7" mb="5" trim="start">Inputs</Heading>

      {/* Text Field Example */}
      <ComponentExample title="Text Field" id="textfield">
        <InputText />
      </ComponentExample>

      {/* Number Field Example */}
      <ComponentExample title="Number Field" id="numberfield">
        <InputNumber />
      </ComponentExample>

      {/* Checkbox Example */}
      <ComponentExample title="Checkbox" id="checkbox">
        <Checkbox />
      </ComponentExample>

      {/* Select Example */}
      <ComponentExample title="Select" id="select">
        <Select />
      </ComponentExample>

      {/* RadioGroup Example */}
      <ComponentExample title="Radio Group" id="radiogroup">
        <Flex direction="column" gap="3">
          <Text size="2" as="p">
            A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
          </Text>
          <RadioGroup.Root value={radioValue} onValueChange={setRadioValue} name="example">
            <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
            <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
            <RadioGroup.Item value="option3" disabled>Option 3 (Disabled)</RadioGroup.Item>
          </RadioGroup.Root>
          <Text size="1">Selected value: {radioValue}</Text>
        </Flex>
      </ComponentExample>

      {/* Slider Example */}
      <ComponentExample title="Slider" id="slider">
        <Flex direction="column" gap="3">
          <Text size="2" as="p">
            A control that allows users to select a value from a range.
          </Text>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            style={{ width: 200 }}
            value={sliderValue}
            onValueChange={setSliderValue}
          />
          <Text size="1">Current value: {sliderValue.join(", ")}</Text>

          <Text size="2" as="p" mt="2">Disabled Slider:</Text>
          <Slider defaultValue={[25]} max={100} step={1} style={{ width: 200 }} disabled />
        </Flex>
      </ComponentExample>

      {/* Switch Example */}
      <ComponentExample title="Switch" id="switch">
        <Switch />
      </ComponentExample>

      {/* ToggleGroup Example */}
      <ComponentExample title="Toggle Group" id="togglegroup">
        <Flex direction="column" gap="3">
          <Text size="2" as="p">
            A set of two-state buttons that can be toggled on or off.
          </Text>
          <Text size="2" weight="medium" as="p">Multiple selection:</Text>
          <ToggleGroup.Root
            type="multiple"
            value={toggleGroupValue}
            onValueChange={setToggleGroupValue}
            aria-label="Text formatting"
          >
            <ToggleGroup.Item value="bold" aria-label="Bold">
              <FontBoldIcon />
            </ToggleGroup.Item>
            <ToggleGroup.Item value="italic" aria-label="Italic">
              <FontItalicIcon />
            </ToggleGroup.Item>
            <ToggleGroup.Item value="underline" aria-label="Underline">
              <UnderlineIcon />
            </ToggleGroup.Item>
          </ToggleGroup.Root>
          <Text size="1">Selected: {toggleGroupValue.join(", ")}</Text>

          <Text size="2" weight="medium" as="p" mt="2">Single selection:</Text>
          <ToggleGroup.Root
            type="single"
            defaultValue="center"
            aria-label="Text alignment"
            value={singleToggleValue}
            onValueChange={(value: string) => { if (value) setSingleToggleValue(value);}}
          >
            <ToggleGroup.Item value="left" aria-label="Left aligned">
              <TextAlignLeftIcon />
            </ToggleGroup.Item>
            <ToggleGroup.Item value="center" aria-label="Center aligned">
              <TextAlignCenterIcon />
            </ToggleGroup.Item>
            <ToggleGroup.Item value="right" aria-label="Right aligned">
              <TextAlignRightIcon />
            </ToggleGroup.Item>
          </ToggleGroup.Root>
          <Text size="1">Selected: {singleToggleValue}</Text>

          <Text size="2" weight="medium" as="p" mt="2">Disabled Group:</Text>
          <ToggleGroup.Root type="multiple" defaultValue={["bold"]} disabled>
            <ToggleGroup.Item value="bold" aria-label="Bold"><FontBoldIcon /></ToggleGroup.Item>
            <ToggleGroup.Item value="italic" aria-label="Italic"><FontItalicIcon /></ToggleGroup.Item>
          </ToggleGroup.Root>
        </Flex>
      </ComponentExample>
    </Layout>
  );
}
