"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import ComponentExample from "@/components/ComponentExample";
import { Heading, Flex, Text, Link as RadixLink, Box, IconButton } from "@radix-ui/themes";
import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { CaretDownIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from 'classnames';
import AccordionComponent from "@/components/navigation/accordion";
import CollapsibleComponent from "@/components/navigation/collapsible";


const NavListItem = React.forwardRef<HTMLAnchorElement, { children: React.ReactNode, title: string, className?: string, href: string }>(
  ({ className, children, title, href, ...props }, forwardedRef) => (
    <li>
      <RadixNavigationMenu.Link asChild>
        <RadixLink
          href={href}
          className={classNames('ListItemLink', className)}
          {...props}
          ref={forwardedRef}
          size="2"
        >
          <div className="ListItemHeading">{title}</div>
          <Text as="p" className="ListItemText">{children}</Text>
        </RadixLink>
      </RadixNavigationMenu.Link>
    </li>
  )
);
NavListItem.displayName = "NavListItem";

export default function NavigationPage() {
  return (
    <Layout>
      <Heading size="7" mb="5" trim="start">Navigation</Heading>

      {/* NavigationMenu Example */}
      <ComponentExample title="Navigation Menu" id="navigationmenu">
        <Flex direction="column" gap="3" align="start">
          <Text size="2" as="p">
            A collection of links for navigating websites. It includes support for nested links and screen reader accessibility.
          </Text>
          <RadixNavigationMenu.Root className="NavigationMenuRoot">
            <RadixNavigationMenu.List className="NavigationMenuList">
              <RadixNavigationMenu.Item>
                <RadixNavigationMenu.Trigger className="NavigationMenuTrigger_ButtonLook">
                  Learn <CaretDownIcon className="CaretDown" aria-hidden />
                </RadixNavigationMenu.Trigger>
                <RadixNavigationMenu.Content className="NavigationMenuContent">
                  <ul className="List two">
                    <NavListItem href="https://stitches.dev/" title="Stitches">
                      CSS-in-JS with near-zero runtime.
                    </NavListItem>
                    <NavListItem href="/colors" title="Colors">
                      Beautiful, thought-out palettes with auto dark mode.
                    </NavListItem>
                    <NavListItem href="https://icons.radix-ui.com/" title="Icons">
                      A crisp set of 15x15 icons, balanced and consistent.
                    </NavListItem>
                  </ul>
                </RadixNavigationMenu.Content>
              </RadixNavigationMenu.Item>

              <RadixNavigationMenu.Item>
                <RadixNavigationMenu.Trigger className="NavigationMenuTrigger_ButtonLook">
                  Overview <CaretDownIcon className="CaretDown" aria-hidden />
                </RadixNavigationMenu.Trigger>
                <RadixNavigationMenu.Content className="NavigationMenuContent">
                  <ul className="List one">
                    <NavListItem title="Introduction" href="/primitives/docs/overview/introduction">
                      Build high-quality, accessible design systems and web apps.
                    </NavListItem>
                    <NavListItem title="Getting started" href="/primitives/docs/overview/getting-started">
                      A quick tutorial to get you up and running with Radix Primitives.
                    </NavListItem>
                    <NavListItem title="Styling" href="/primitives/docs/guides/styling">
                      Unstyled and compatible with any styling solution.
                    </NavListItem>
                  </ul>
                </RadixNavigationMenu.Content>
              </RadixNavigationMenu.Item>

              <RadixNavigationMenu.Item>
                <RadixNavigationMenu.Link className="NavigationMenuLink_ButtonLook" href="https://github.com/radix-ui">
                  Github
                </RadixNavigationMenu.Link>
              </RadixNavigationMenu.Item>

              <RadixNavigationMenu.Indicator className="NavigationMenuIndicator">
                <div className="Arrow" />
              </RadixNavigationMenu.Indicator>
            </RadixNavigationMenu.List>

            <div className="ViewportPosition">
              <RadixNavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
          </RadixNavigationMenu.Root>
        </Flex>
      </ComponentExample>

      {/* Accordion Example */}
      <ComponentExample title="Accordion" id="accordion">
        <AccordionComponent />
      </ComponentExample>

      {/* Collapsible Example */}
      <ComponentExample title="Collapsible" id="collapsible">
        <CollapsibleComponent />
      </ComponentExample>

      <style>{`
        /* reset */
        button,
        a {
          all: unset;
        }

        .NavigationMenuRoot {
          position: relative;
          display: flex;
          justify-content: center;
          width: 100%;
          z-index: 1;
        }

        .NavigationMenuList {
          display: flex;
          justify-content: center;
          background-color: var(--gray-a3);
          padding: 4px;
          border-radius: 6px;
          list-style: none;
          box-shadow: 0 2px 10px var(--black-a7);
          margin: 0;
        }

        .NavigationMenuTrigger_ButtonLook,
        .NavigationMenuLink_ButtonLook {
          padding: 8px 12px;
          outline: none;
          user-select: none;
          font-weight: 500;
          line-height: 1;
          border-radius: 4px;
          font-size: 14px;
          color: var(--gray-11);
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .NavigationMenuTrigger_ButtonLook:focus, .NavigationMenuLink_ButtonLook:focus {
          box-shadow: 0 0 0 2px var(--accent-7);
        }
        .NavigationMenuTrigger_ButtonLook:hover, .NavigationMenuLink_ButtonLook:hover {
          background-color: var(--accent-a3);
        }
        .NavigationMenuTrigger_ButtonLook[data-state='open'] {
           background-color: var(--accent-5);
           color: var(--accent-11);
        }


        .NavigationMenuContent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          animation-duration: 250ms;
          animation-timing-function: ease;
        }
        .NavigationMenuContent[data-motion='from-start'] {
          animation-name: enterFromLeft;
        }
        .NavigationMenuContent[data-motion='from-end'] {
          animation-name: enterFromRight;
        }
        .NavigationMenuContent[data-motion='to-start'] {
          animation-name: exitToLeft;
        }
        .NavigationMenuContent[data-motion='to-end'] {
          animation-name: exitToRight;
        }

        .List {
          display: grid;
          padding: 22px;
          margin: 0;
          column-gap: 10px;
          list-style: none;
          width: auto;
        }
        .List.one {
          grid-template-columns: repeat(1, 1fr);
           min-width: 250px;
        }
        .List.two {
          grid-template-columns: repeat(2, 1fr);
          min-width: 400px;
        }

        .ListItemLink {
          display: block;
          outline: none;
          text-decoration: none;
          user-select: none;
          padding: 12px;
          border-radius: 6px;
          font-size: 14px;
          line-height: 1;
        }
        .ListItemLink:focus {
          box-shadow: 0 0 0 2px var(--accent-7);
        }
        .ListItemLink:hover {
          background-color: var(--accent-a3);
        }

        .ListItemHeading {
          font-weight: 500;
          line-height: 1.2;
          margin-bottom: 5px;
          color: var(--accent-11);
        }

        .ListItemText {
          color: var(--gray-11);
          line-height: 1.4;
          font-weight: initial;
          font-size: 13px;
        }

        .CaretDown {
          position: relative;
          color: var(--accent-10);
          top: 1px;
          transition: transform 250ms ease;
          margin-left: 3px;
        }
        .NavigationMenuTrigger_ButtonLook[data-state='open'] > .CaretDown {
          transform: rotate(-180deg);
        }

        .NavigationMenuIndicator {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          height: 10px;
          top: 100%;
          overflow: hidden;
          z-index: 1;
          transition: width, transform 250ms ease;
        }
        .NavigationMenuIndicator[data-state='visible'] {
          animation: fadeIn 200ms ease;
        }
        .NavigationMenuIndicator[data-state='hidden'] {
          animation: fadeOut 200ms ease;
        }

        .Arrow {
          position: relative;
          top: 70%;
          background-color: var(--gray-2);
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
          border-top-left-radius: 2px;
        }

        .ViewportPosition {
          position: absolute;
          display: flex;
          justify-content: center;
          width: 100%;
          top: 100%;
          left: 0;
          perspective: 2000px;
        }

        .NavigationMenuViewport {
          position: relative;
          transform-origin: top center;
          margin-top: 10px;
          width: var(--radix-navigation-menu-viewport-width);
          background-color: var(--gray-2);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
          height: var(--radix-navigation-menu-viewport-height);
          transition: width, height, 300ms ease;
        }
        .NavigationMenuViewport[data-state='open'] {
          animation: scaleIn 200ms ease;
        }
        .NavigationMenuViewport[data-state='closed'] {
          animation: scaleOut 200ms ease;
        }

        @keyframes enterFromRight {
          from { opacity: 0; transform: translateX(200px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes enterFromLeft {
          from { opacity: 0; transform: translateX(-200px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes exitToRight {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(200px); }
        }
        @keyframes exitToLeft {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-200px); }
        }
        @keyframes scaleIn {
          from { transform: rotateX(-30deg) scale(0.9); opacity: 0; }
          to { transform: rotateX(0deg) scale(1); opacity: 1; }
        }
        @keyframes scaleOut {
          from { transform: rotateX(0deg) scale(1); opacity: 1; }
          to { transform: rotateX(-10deg) scale(0.95); opacity: 0;}
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>
    </Layout>
  );
}
