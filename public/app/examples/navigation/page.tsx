"use client";

import React from "react";
import Layout from "@/app_front/comp/layout";
import CardExample from "../../../components/cardexample";
import { Heading, Flex, Text, Link as RadixLink, Box, IconButton } from "@radix-ui/themes";
import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from 'classnames';

import CollapsibleComponent from "@/radix/container/collapsible";


/**
 * NavListItem
 */
const NavListItem = React.forwardRef<HTMLAnchorElement,
    { children: React.ReactNode, title: string, className?: string, href: string }>(

        ({ className, children, title, href, ...props }, forwardedRef) => (
            <li>
                <RadixNavigationMenu.Link asChild>
                    <RadixLink
                        href={href}
                        className={className}
                        {...props}
                        ref={forwardedRef}
                        size="2" >
                        <div >{title}</div>
                        <Text as="p" >{children}</Text>
                    </RadixLink>
                </RadixNavigationMenu.Link>
            </li>
        )
    );
NavListItem.displayName = "NavListItem";

/**
 * NavigationPage
 * @returns 
 */
export default function NavigationPage() {
    return (
        <Layout>
            <Heading size="7" mb="5" trim="start">Navigation</Heading>

  
            <CardExample title="Navigation Menu" id="navigationmenu">

                <Flex direction="column" gap="3" align="start">

                    <Text size="2" as="p">
                        A collection of links for navigating websites. It includes
                        support for nested links and screen reader accessibility.
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
                                        <NavListItem title="Introduction"
                                             href="/primitives/docs/overview/introduction">
                                            Build high-quality, accessible design systems and web apps.
                                        </NavListItem>
                                        <NavListItem title="Getting started" 
                                            href="/primitives/docs/overview/getting-started">
                                            A quick tutorial to get you up and running with Radix Primitives.
                                        </NavListItem>
                                        <NavListItem title="Styling" 
                                            href="/primitives/docs/guides/styling">
                                            Unstyled and compatible with any styling solution.
                                        </NavListItem>
                                    </ul>
                                </RadixNavigationMenu.Content>
                            </RadixNavigationMenu.Item>

                            <RadixNavigationMenu.Item>
                                <RadixNavigationMenu.Link 
                                    className="NavigationMenuLink_ButtonLook" 
                                    href="https://github.com/radix-ui">
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
            </CardExample>

            {/* Collapsible Example */}
            <CardExample title="Collapsible" id="collapsible">
                <CollapsibleComponent />
            </CardExample>
            
        </Layout>
    );

}//end page
