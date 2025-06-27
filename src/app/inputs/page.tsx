"use client"; // Required for useState and event handlers

import React from "react";
import Layout from "@/components/layout/Layout";
import CardExample from "@/components/cardexample";
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
      <CardExample title="Text Field" id="textfield">
        <InputText />
      </CardExample>

      {/* Number Field Example */}
      <CardExample title="Number Field" id="numberfield">
        <InputNumber />
      </CardExample>

      {/* Checkbox Example */}
      <CardExample title="Checkbox" id="checkbox">
        <Checkbox />
      </CardExample>

      {/* Select Example */}
      <CardExample title="Select" id="select">
        <Select />
      </CardExample>

      {/* RadioGroup Example */}
      <CardExample title="Radio Group" id="radiogroup">
        <RadioGroupComponent />
      </CardExample>

      {/* Slider Example */}
      <CardExample title="Slider" id="slider">
        <Slider />
      </CardExample>

      {/* Switch Example */}
      <CardExample title="Switch" id="switch">
        <Switch />
      </CardExample>

      {/* ToggleGroup Example */}
      <CardExample title="Toggle Group" id="togglegroup">
        <ToggleGroupComponent />
      </CardExample>
    </Layout>
  );
}
