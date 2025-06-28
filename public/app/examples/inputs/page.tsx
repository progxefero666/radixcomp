"use client"; 

import React from "react";

import { Heading, Flex, Text, Checkbox as RadixCheckbox, RadioGroup,
         Slider as RadixSlider, Switch as RadixSwitch, Button, 
         TextField, Select as RadixSelect } from "@radix-ui/themes";

import Layout from "@/app_front/comp/layout";
import CardExample from "@/components/cardexample";
import InputText from "@/radix/input/inptext";
import InputNumber from "@/radix/notready/inputnumber";
import Checkbox from "@/components/checkbox";
import Select from "@/components/select";
import Switch from "@/radix/notready/switch";
import Slider from "@/radix/notready/slider";
import RadioGroupComponent from "@/radix/notready/radiogroup";
import ToggleGroupComponent from "@/radix/notready/togglegroup";

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
