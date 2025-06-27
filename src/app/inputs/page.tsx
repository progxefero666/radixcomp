"use client"; // Required for useState and event handlers

import React from "react";
import Layout from "@/components/layout/Layout";
import ComponentExample from "@/components/ComponentExample";
import { Heading, Flex, Text, Checkbox as RadixCheckbox, RadioGroup, Slider as RadixSlider, Switch as RadixSwitch, Button, TextField, Select as RadixSelect } from "@radix-ui/themes";
import InputText from "@/components/inputs/inputtext";
import InputNumber from "@/components/inputs/inputnumber";
import Checkbox from "@/components/inputs/checkbox";
import Select from "@/components/inputs/select";
import Switch from "@/components/inputs/switch";
import Slider from "@/components/inputs/slider";
import RadioGroupComponent from "@/components/inputs/radiogroup";
import ToggleGroupComponent from "@/components/inputs/togglegroup";

export default function InputsPage() {

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
        <RadioGroupComponent />
      </ComponentExample>

      {/* Slider Example */}
      <ComponentExample title="Slider" id="slider">
        <Slider />
      </ComponentExample>

      {/* Switch Example */}
      <ComponentExample title="Switch" id="switch">
        <Switch />
      </ComponentExample>

      {/* ToggleGroup Example */}
      <ComponentExample title="Toggle Group" id="togglegroup">
        <ToggleGroupComponent />
      </ComponentExample>
    </Layout>
  );
}
