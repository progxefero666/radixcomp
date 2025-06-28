"use client";

import React from "react";
import * as Accordion from '@radix-ui/react-accordion';
import { Flex, Text, Box } from "@radix-ui/themes";
import { ChevronDownIcon } from "@radix-ui/react-icons";

interface SimpleAccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  collapsible?: boolean;
}

export default function SimpleAccordion({ 
  children, 
  type = "single", 
  defaultValue, 
  collapsible = true 
}: SimpleAccordionProps) {
  const accordionProps = type === "single" 
    ? { 
        type: "single" as const, 
        defaultValue: defaultValue as string | undefined, 
        collapsible 
      }
    : { 
        type: "multiple" as const, 
        defaultValue: defaultValue as string[] | undefined 
      };

  return (
    <Accordion.Root
      {...accordionProps}
      style={{
        backgroundColor: 'var(--gray-a2)',
        borderRadius: 'var(--radius-3)',
        border: '1px solid var(--gray-a6)',
        overflow: 'hidden'
      }}
    >
      {children}
    </Accordion.Root>
  );
}

// Componente para los items del accordion
export function AccordionItem({ 
  value, 
  title, 
  children 
}: { 
  value: string; 
  title: string; 
  children: React.ReactNode 
}) {
  return (
    <Accordion.Item 
      value={value}
      style={{
        borderBottom: '1px solid var(--gray-a6)'
      }}
    >
      <Accordion.Header>
        <Accordion.Trigger
          style={{
            all: 'unset',
            fontFamily: 'inherit',
            padding: '16px 20px',
            height: 50,
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            backgroundColor: 'transparent',
            color: 'var(--gray-12)',
            boxSizing: 'border-box',
            transition: 'background-color 150ms ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--gray-a3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <Text size="2" weight="medium">{title}</Text>
          <ChevronDownIcon
            style={{
              color: 'var(--gray-11)',
              transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
              transform: 'rotate(0deg)'
            }}
            width="16"
            height="16"
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content
        style={{
          overflow: 'hidden',
          fontSize: '14px',
          color: 'var(--gray-11)',
          backgroundColor: 'var(--gray-a1)'
        }}
      >
        <Box p="4">
          {children}
        </Box>
      </Accordion.Content>
    </Accordion.Item>
  );
}
