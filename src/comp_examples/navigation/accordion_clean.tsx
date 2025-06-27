"use client";

import React from "react";
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from 'classnames';

interface AccordionProps {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  collapsible?: boolean;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
  children?: React.ReactNode;
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode; className?: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = "AccordionContent";

export default function AccordionComponent({
  type = "single",
  defaultValue,
  collapsible = true,
  disabled = false,
  orientation = "vertical",
  children
}: AccordionProps) {
  if (type === "single") {
    return (
      <Accordion.Root
        type="single"
        defaultValue={defaultValue as string}
        collapsible={collapsible}
        disabled={disabled}
        orientation={orientation}
        className="AccordionRoot"
      >
        {children || (
          <>
            <Accordion.Item className="AccordionItem" value="item-1">
              <AccordionTrigger>Item 1</AccordionTrigger>
              <AccordionContent>Content for item 1</AccordionContent>
            </Accordion.Item>
            <Accordion.Item className="AccordionItem" value="item-2">
              <AccordionTrigger>Item 2</AccordionTrigger>
              <AccordionContent>Content for item 2</AccordionContent>
            </Accordion.Item>
          </>
        )}
      </Accordion.Root>
    );
  }

  return (
    <Accordion.Root
      type="multiple"
      defaultValue={defaultValue as string[]}
      disabled={disabled}
      orientation={orientation}
      className="AccordionRoot"
    >
      {children || (
        <>
          <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content for item 1</AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>Content for item 2</AccordionContent>
          </Accordion.Item>
        </>
      )}
    </Accordion.Root>
  );
}

export { AccordionTrigger, AccordionContent };
