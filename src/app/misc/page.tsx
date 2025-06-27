"use client";

import React from "react";
import Layout from "@/app_front/comp/layout";
import CardExample from "@/components/cardexample";
import { Heading, Flex, Text, Box, IconButton, Button, TextField } from "@radix-ui/themes";
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { RowSpacingIcon, Cross2Icon, CheckIcon, ChevronDownIcon, ChevronUpIcon, FontBoldIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';


const SelectItem = React.forwardRef<HTMLDivElement, { children: React.ReactNode, className?: string, value: string }>(
    ({ children, className, ...props }, forwardedRef) => {
        return (
            <SelectPrimitive.Item className={classNames('SelectItem', className)} {...props} ref={forwardedRef}>
                <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="SelectItemIndicator">
                    <CheckIcon />
                </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
        );
    });
SelectItem.displayName = "SelectItem";


export default function MiscPage() {
    const [openCollapsible, setOpenCollapsible] = React.useState(false);
    const [progress, setProgress] = React.useState(13);
    const [selectValue, setSelectValue] = React.useState("apple");
    const [togglePressed, setTogglePressed] = React.useState(false);


    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Layout>
            <Heading size="7" mb="5" trim="start">Miscellaneous</Heading>

            {/* AspectRatio Example */}
            <CardExample title="Aspect Ratio" id="aspectratio">
                <Flex direction="column" gap="3">
                    <Text size="2" as="p">
                        A container that maintains a specific aspect ratio. Useful for images, videos, or embeds.
                    </Text>
                    <Box style={{ width: 300 }}>
                        <AspectRatioPrimitive.Root ratio={16 / 9}>
                            <img
                                src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                                alt="Landscape photo by Tobias Tullius"
                                style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 'var(--radius-2)' }}
                            />
                        </AspectRatioPrimitive.Root>
                    </Box>
                    <Box style={{ width: 200, marginTop: 'var(--space-3)' }}>
                        <Text size="1" mb="1" color="gray">1:1 Ratio</Text>
                        <AspectRatioPrimitive.Root ratio={1}>
                            <Box style={{ width: '100%', height: '100%', backgroundColor: 'var(--accent-a5)', borderRadius: 'var(--radius-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Text size="5" weight="bold" color="blue">1:1</Text>
                            </Box>
                        </AspectRatioPrimitive.Root>
                    </Box>
                </Flex>
            </CardExample>

            {/* Avatar Example */}
            <CardExample title="Avatar" id="avatar">
                <Flex direction="column" gap="3">
                    <Text size="2" as="p">
                        An image element with a fallback for representing the user.
                    </Text>
                    <Flex gap="4" align="center">
                        <AvatarPrimitive.Root className="AvatarRoot">
                            <AvatarPrimitive.Image
                                className="AvatarImage"
                                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                                alt="Colm Tuite"
                            />
                            <AvatarPrimitive.Fallback className="AvatarFallback" delayMs={600}>CT</AvatarPrimitive.Fallback>
                        </AvatarPrimitive.Root>
                        <AvatarPrimitive.Root className="AvatarRoot">
                            <AvatarPrimitive.Image
                                className="AvatarImage"
                                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                                alt="Pedro Duarte"
                            />
                            <AvatarPrimitive.Fallback className="AvatarFallback" delayMs={600}>PD</AvatarPrimitive.Fallback>
                        </AvatarPrimitive.Root>
                        <AvatarPrimitive.Root className="AvatarRoot">
                            <AvatarPrimitive.Fallback className="AvatarFallback">JD</AvatarPrimitive.Fallback>
                        </AvatarPrimitive.Root>
                        <AvatarPrimitive.Root className="AvatarRoot" style={{ backgroundColor: 'var(--red-9)' }}>
                            <AvatarPrimitive.Fallback className="AvatarFallback" style={{ color: 'white' }}>Err</AvatarPrimitive.Fallback>
                        </AvatarPrimitive.Root>
                    </Flex>
                </Flex>
            </CardExample>

            {/* Collapsible Example */}
            <CardExample title="Collapsible" id="collapsible">
                <Flex direction="column" gap="3" align="start">
                    <Text size="2" as="p">
                        An interactive component which expands/collapses a content section.
                    </Text>
                    <CollapsiblePrimitive.Root className="CollapsibleRoot" open={openCollapsible} onOpenChange={setOpenCollapsible}>
                        <Flex style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text size="2" style={{ color: 'var(--violet-11)' }}>@peduarte starred 3 repositories</Text>
                            <CollapsiblePrimitive.Trigger asChild>
                                <IconButton variant="ghost" size="2" color="gray">
                                    {openCollapsible ? <Cross2Icon /> : <RowSpacingIcon />}
                                </IconButton>
                            </CollapsiblePrimitive.Trigger>
                        </Flex>

                        <Box className="Repository">
                            <Text size="2">@radix-ui/primitives</Text>
                        </Box>

                        <CollapsiblePrimitive.Content className="CollapsibleContent">
                            <Box className="Repository">
                                <Text size="2">@radix-ui/colors</Text>
                            </Box>
                            <Box className="Repository">
                                <Text size="2">@stitches/react</Text>
                            </Box>
                        </CollapsiblePrimitive.Content>
                        <Button size="1" variant="soft" mt="2" onClick={() => setOpenCollapsible(!openCollapsible)}>
                            Toggle manually
                        </Button>
                    </CollapsiblePrimitive.Root>
                </Flex>
            </CardExample>

            {/* Label Example */}
            <CardExample title="Label" id="labelprimitive">
                <Flex direction="column" gap="3" align="start">
                    <Text size="2" as="p">
                        Renders an accessible label associated with a form control.
                    </Text>
                    <Flex direction="column" gap="1" style={{ width: 200 }}>
                        <LabelPrimitive.Root htmlFor="firstName" className="LabelPrimitive">First Name</LabelPrimitive.Root>
                        <TextField.Root id="firstName" defaultValue="Pedro" size="2" />
                    </Flex>
                    <Flex direction="column" gap="1" style={{ width: 200 }} mt="2">
                        <LabelPrimitive.Root htmlFor="lastName" className="LabelPrimitive">Last Name</LabelPrimitive.Root>
                        <TextField.Root id="lastName" defaultValue="Duarte" size="2" />
                    </Flex>
                </Flex>
            </CardExample>

            {/* Progress Example */}
            <CardExample title="Progress" id="progress">
                <Flex direction="column" gap="3" align="start">
                    <Text size="2" as="p">
                        Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
                    </Text>
                    <ProgressPrimitive.Root className="ProgressRoot" value={progress}>
                        <ProgressPrimitive.Indicator
                            className="ProgressIndicator"
                            style={{ transform: `translateX(-${100 - progress}%)` }}
                        />
                    </ProgressPrimitive.Root>
                    <Text size="1" color="gray" mt="1">Current progress: {progress}%</Text>
                    <Button size="1" variant="outline" mt="2" onClick={() => setProgress(Math.floor(Math.random() * 100))}>
                        Randomize Progress
                    </Button>
                </Flex>
            </CardExample>

            {/* Select Example */}
            <CardExample title="Select" id="select">
                <Flex direction="column" gap="3" align="start">
                    <Text size="2" as="p">
                        Displays a list of options for the user to pick from—triggered by a button.
                    </Text>
                    <SelectPrimitive.Root value={selectValue} onValueChange={setSelectValue}>
                        <SelectPrimitive.Trigger className="SelectTrigger" aria-label="Food">
                            <SelectPrimitive.Value placeholder="Select a fruit…" />
                            <SelectPrimitive.Icon className="SelectIcon">
                                <ChevronDownIcon />
                            </SelectPrimitive.Icon>
                        </SelectPrimitive.Trigger>
                        <SelectPrimitive.Portal>
                            <SelectPrimitive.Content className="SelectContent">
                                <SelectPrimitive.ScrollUpButton className="SelectScrollButton">
                                    <ChevronUpIcon />
                                </SelectPrimitive.ScrollUpButton>
                                <SelectPrimitive.Viewport className="SelectViewport">
                                    <SelectPrimitive.Group>
                                        <SelectPrimitive.Label className="SelectLabel">Fruits</SelectPrimitive.Label>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectPrimitive.Group>
                                    <SelectPrimitive.Separator className="SelectSeparator" />
                                    <SelectPrimitive.Group>
                                        <SelectPrimitive.Label className="SelectLabel">Vegetables</SelectPrimitive.Label>
                                        <SelectItem value="aubergine">Aubergine</SelectItem>
                                        <SelectItem value="broccoli">Broccoli</SelectItem>
                                        <SelectItem value="carrot">Carrot</SelectItem>
                                        <SelectItem value="courgette">Courgette</SelectItem>
                                        <SelectItem value="leek">Leek</SelectItem>
                                    </SelectPrimitive.Group>
                                </SelectPrimitive.Viewport>
                                <SelectPrimitive.ScrollDownButton className="SelectScrollButton">
                                    <ChevronDownIcon />
                                </SelectPrimitive.ScrollDownButton>
                            </SelectPrimitive.Content>
                        </SelectPrimitive.Portal>
                    </SelectPrimitive.Root>
                    <Text size="1" color="gray" mt="1">Selected: {selectValue}</Text>
                </Flex>
            </CardExample>

            {/* Toggle Example */}
            <CardExample title="Toggle" id="toggle">
                <Flex direction="column" gap="3" align="start">
                    <Text size="2" as="p">
                        A two-state button that can be either on or off.
                    </Text>
                    <TogglePrimitive.Root
                        className="Toggle"
                        aria-label="Toggle italic"
                        pressed={togglePressed}
                        onPressedChange={setTogglePressed}
                    >
                        <FontBoldIcon />
                    </TogglePrimitive.Root>
                    <Text size="1" color="gray">Pressed: {togglePressed ? 'Yes' : 'No'}</Text>

                    <TogglePrimitive.Root className="Toggle" aria-label="Toggle strikethrough" disabled defaultPressed>
                        <Cross2Icon />
                    </TogglePrimitive.Root>
                    <Text size="1" color="gray">(Disabled Toggle)</Text>
                </Flex>
            </CardExample>


            <style>{`
        .AvatarRoot {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
          overflow: hidden;
          user-select: none;
          width: 45px;
          height: 45px;
          border-radius: 100%;
          background-color: var(--gray-a3);
          box-shadow: 0 0 0 1px var(--gray-a6);
        }
        .AvatarImage {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
        }
        .AvatarFallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--gray-3);
          color: var(--accent-11);
          font-size: 15px;
          line-height: 1;
          font-weight: 500;
        }
        .CollapsibleRoot {
          width: 300px;
          background-color: var(--gray-2);
          border-radius: var(--radius-2);
          padding: var(--space-3);
          box-shadow: 0 1px 5px var(--black-a4);
        }
        .Repository {
          background-color: var(--gray-3);
          border-radius: var(--radius-1);
          padding: 10px;
          margin-top: 10px;
          box-shadow: 0 1px 3px var(--black-a3);
        }
        .CollapsibleContent[data-state='open'] {
          animation: slideDownCollapsible 300ms ease-out;
        }
        .CollapsibleContent[data-state='closed'] {
          animation: slideUpCollapsible 300ms ease-out;
        }
        @keyframes slideDownCollapsible {
          from { height: 0; opacity: 0; }
          to { height: var(--radix-collapsible-content-height); opacity: 1; }
        }
        @keyframes slideUpCollapsible {
          from { height: var(--radix-collapsible-content-height); opacity: 1;}
          to { height: 0; opacity: 0; }
        }
        .LabelPrimitive {
          font-size: 14px;
          font-weight: 500;
          color: var(--gray-12);
          user-select: none;
          margin-bottom: 4px;
        }
        .ProgressRoot {
          position: relative;
          overflow: hidden;
          background: var(--black-a6);
          border-radius: 99999px;
          width: 300px;
          height: 20px;
          transform: translateZ(0);
        }
        .ProgressIndicator {
          background-color: var(--accent-9);
          width: 100%;
          height: 100%;
          transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
        }
        .SelectTrigger {
          all: unset;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          padding: 0 15px;
          font-size: 13px;
          line-height: 1;
          height: 35px;
          gap: 5px;
          background-color: var(--gray-2);
          color: var(--violet-11);
          box-shadow: 0 2px 10px var(--black-a7);
        }
        .SelectTrigger:hover { background-color: var(--gray-a3); }
        .SelectTrigger:focus { box-shadow: 0 0 0 2px black; }
        .SelectTrigger[data-placeholder] { color: var(--violet-9); }

        .SelectIcon { color: var(--violet-11); }

        .SelectContent {
          overflow: hidden;
          background-color: var(--gray-2);
          border-radius: 6px;
          box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
        }
        .SelectViewport { padding: 5px; }
        .SelectItem {
          all: unset;
          font-size: 13px;
          line-height: 1;
          color: var(--violet-11);
          border-radius: 3px;
          display: flex;
          align-items: center;
          height: 25px;
          padding: 0 35px 0 25px;
          position: relative;
          user-select: none;
        }
        .SelectItem[data-disabled] {
          color: var(--mauve-8);
          pointer-events: none;
        }
        .SelectItem[data-highlighted] {
          background-color: var(--accent-9);
          color: var(--accent-1);
        }
        .SelectLabel {
          padding: 0 25px;
          font-size: 12px;
          line-height: 25px;
          color: var(--mauve-11);
        }
        .SelectSeparator {
          height: 1px;
          background-color: var(--violet-6);
          margin: 5px;
        }
        .SelectItemIndicator {
          position: absolute;
          left: 0;
          width: 25px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .SelectScrollButton {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 25px;
          background-color: var(--gray-2);
          color: var(--violet-11);
          cursor: default;
        }
        .Toggle {
          all: unset;
          background-color: var(--gray-2);
          color: var(--mauve-11);
          height: 35px;
          width: 35px;
          border-radius: 4px;
          display: flex;
          font-size: 15px;
          line-height: 1;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px var(--black-a7);
        }
        .Toggle:hover { background-color: var(--gray-a3); }
        .Toggle[data-state=on] {
          background-color: var(--accent-5);
          color: var(--accent-11);
        }
        .Toggle:focus { box-shadow: 0 0 0 2px black; }
        .Toggle[data-disabled] {
            background-color: var(--gray-a2);
            color: var(--gray-8);
            pointer-events: none;
        }
      `}</style>
        </Layout>
    );
}
