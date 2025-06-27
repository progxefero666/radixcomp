"use client";

import React, { useState } from "react";
import * as Accordion from '@radix-ui/react-accordion';
import { Flex, Text, Box } from "@radix-ui/themes";
import { 
  ChevronDownIcon,
  QuestionMarkCircledIcon,
  InfoCircledIcon,
  GearIcon,
  PersonIcon,
  LockClosedIcon,
  BellIcon
} from "@radix-ui/react-icons";
import classNames from 'classnames';

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode; className?: string; icon?: React.ReactNode }
>(({ children, className, icon, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      <Flex align="center" gap="2">
        {icon && <span className="AccordionIcon">{icon}</span>}
        {children}
      </Flex>
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

export default function AccordionExamples() {
  const [faqValue, setFaqValue] = useState<string>("item-1");
  const [settingsValue, setSettingsValue] = useState<string[]>(["general"]);

  return (
    <Flex direction="column" gap="4">
      {/* Basic Single Accordion */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Basic Single Accordion (collapsible):
        </Text>
        <Accordion.Root
          type="single"
          value={faqValue}
          onValueChange={setFaqValue}
          collapsible
          className="AccordionRoot"
        >
          <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern and includes full keyboard navigation support.
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
              Yes. It's unstyled by default, giving you freedom over the look and feel.
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>
              Yes! You can animate the Accordion with CSS or JavaScript. The height and opacity are automatically handled.
            </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
        <Text size="1" color="gray" mt="1">Currently open: {faqValue || "None"}</Text>
      </Box>

      {/* Multiple Accordion */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Multiple Accordion (multiple items can be open):
        </Text>
        <Accordion.Root
          type="multiple"
          value={settingsValue}
          onValueChange={setSettingsValue}
          className="AccordionRoot"
        >
          <Accordion.Item className="AccordionItem" value="general">
            <AccordionTrigger icon={<GearIcon />}>General Settings</AccordionTrigger>
            <AccordionContent>
              <Flex direction="column" gap="2">
                <Text size="2">Configure general application settings:</Text>
                <Text size="1" color="gray">• Language preferences</Text>
                <Text size="1" color="gray">• Theme selection</Text>
                <Text size="1" color="gray">• Default views</Text>
              </Flex>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="account">
            <AccordionTrigger icon={<PersonIcon />}>Account Settings</AccordionTrigger>
            <AccordionContent>
              <Flex direction="column" gap="2">
                <Text size="2">Manage your account:</Text>
                <Text size="1" color="gray">• Profile information</Text>
                <Text size="1" color="gray">• Email preferences</Text>
                <Text size="1" color="gray">• Privacy settings</Text>
              </Flex>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="security">
            <AccordionTrigger icon={<LockClosedIcon />}>Security</AccordionTrigger>
            <AccordionContent>
              <Flex direction="column" gap="2">
                <Text size="2">Security and privacy options:</Text>
                <Text size="1" color="gray">• Two-factor authentication</Text>
                <Text size="1" color="gray">• Password management</Text>
                <Text size="1" color="gray">• Login history</Text>
              </Flex>
            </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
        <Text size="1" color="gray" mt="1">
          Currently open: {settingsValue.length > 0 ? settingsValue.join(", ") : "None"}
        </Text>
      </Box>

      {/* FAQ Example */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          FAQ Example:
        </Text>
        <Accordion.Root
          type="single"
          defaultValue="faq-1"
          collapsible
          className="AccordionRoot"
        >
          <Accordion.Item className="AccordionItem" value="faq-1">
            <AccordionTrigger icon={<QuestionMarkCircledIcon />}>
              How do I get started?
            </AccordionTrigger>
            <AccordionContent>
              <Text size="2">
                Getting started is easy! Simply sign up for an account, verify your email, 
                and follow our quick setup guide. You'll be up and running in less than 5 minutes.
              </Text>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="faq-2">
            <AccordionTrigger icon={<QuestionMarkCircledIcon />}>
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent>
              <Flex direction="column" gap="2">
                <Text size="2">We accept all major payment methods:</Text>
                <Text size="1" color="gray">• Credit cards (Visa, MasterCard, American Express)</Text>
                <Text size="1" color="gray">• PayPal</Text>
                <Text size="1" color="gray">• Bank transfers</Text>
                <Text size="1" color="gray">• Cryptocurrency (Bitcoin, Ethereum)</Text>
              </Flex>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="faq-3">
            <AccordionTrigger icon={<QuestionMarkCircledIcon />}>
              Is there a free trial?
            </AccordionTrigger>
            <AccordionContent>
              <Text size="2">
                Yes! We offer a 14-day free trial with full access to all features. 
                No credit card required. Cancel anytime during the trial period.
              </Text>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="faq-4">
            <AccordionTrigger icon={<QuestionMarkCircledIcon />}>
              How do I cancel my subscription?
            </AccordionTrigger>
            <AccordionContent>
              <Text size="2">
                You can cancel your subscription at any time from your account settings. 
                Go to Billing → Subscription → Cancel. Your account will remain active until 
                the end of your current billing period.
              </Text>
            </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </Box>

      {/* Help Documentation */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Help Documentation:
        </Text>
        <Accordion.Root
          type="multiple"
          defaultValue={["getting-started"]}
          className="AccordionRoot"
        >
          <Accordion.Item className="AccordionItem" value="getting-started">
            <AccordionTrigger icon={<InfoCircledIcon />}>
              Getting Started
            </AccordionTrigger>
            <AccordionContent>
              <Flex direction="column" gap="3">
                <Text size="2" weight="medium">Quick Start Guide</Text>
                <Text size="1" color="gray">
                  1. Create your account and verify your email address
                </Text>
                <Text size="1" color="gray">
                  2. Complete your profile setup
                </Text>
                <Text size="1" color="gray">
                  3. Explore the dashboard and main features
                </Text>
                <Text size="1" color="gray">
                  4. Invite team members (optional)
                </Text>
                <Text size="1" color="gray">
                  5. Start your first project
                </Text>
              </Flex>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="advanced">
            <AccordionTrigger icon={<GearIcon />}>
              Advanced Features
            </AccordionTrigger>
            <AccordionContent>
              <Flex direction="column" gap="2">
                <Text size="2" weight="medium">Power User Features</Text>
                <Text size="1" color="gray">• API integrations and webhooks</Text>
                <Text size="1" color="gray">• Custom workflows and automation</Text>
                <Text size="1" color="gray">• Advanced reporting and analytics</Text>
                <Text size="1" color="gray">• Team collaboration tools</Text>
                <Text size="1" color="gray">• White-label solutions</Text>
              </Flex>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="troubleshooting">
            <AccordionTrigger icon={<InfoCircledIcon />}>
              Troubleshooting
            </AccordionTrigger>
            <AccordionContent>
              <Flex direction="column" gap="2">
                <Text size="2" weight="medium">Common Issues</Text>
                <Text size="1" color="gray">• Login problems and password reset</Text>
                <Text size="1" color="gray">• Payment and billing issues</Text>
                <Text size="1" color="gray">• Feature not working as expected</Text>
                <Text size="1" color="gray">• Performance and loading issues</Text>
                <Text size="1" color="gray">• Browser compatibility</Text>
              </Flex>
            </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </Box>

      {/* Notification Settings */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Notification Preferences:
        </Text>
        <Accordion.Root
          type="single"
          defaultValue="email-notifications"
          collapsible
          className="AccordionRoot"
        >
          <Accordion.Item className="AccordionItem" value="email-notifications">
            <AccordionTrigger icon={<BellIcon />}>
              Email Notifications
            </AccordionTrigger>
            <AccordionContent>
              <Flex direction="column" gap="3">
                <Text size="2">Choose what emails you want to receive:</Text>
                <Flex direction="column" gap="1">
                  <Text size="1" color="gray">✓ Account security alerts</Text>
                  <Text size="1" color="gray">✓ Weekly summary reports</Text>
                  <Text size="1" color="gray">✗ Marketing updates</Text>
                  <Text size="1" color="gray">✗ Product announcements</Text>
                  <Text size="1" color="gray">✓ Billing and payment reminders</Text>
                </Flex>
              </Flex>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="push-notifications">
            <AccordionTrigger icon={<BellIcon />}>
              Push Notifications
            </AccordionTrigger>
            <AccordionContent>
              <Flex direction="column" gap="3">
                <Text size="2">Configure push notifications:</Text>
                <Flex direction="column" gap="1">
                  <Text size="1" color="gray">✓ Urgent alerts</Text>
                  <Text size="1" color="gray">✓ Task reminders</Text>
                  <Text size="1" color="gray">✗ Social interactions</Text>
                  <Text size="1" color="gray">✓ System maintenance</Text>
                </Flex>
              </Flex>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="in-app-notifications">
            <AccordionTrigger icon={<BellIcon />}>
              In-App Notifications
            </AccordionTrigger>
            <AccordionContent>
              <Text size="2">
                Control which notifications appear within the application interface. 
                These settings affect the notification bell and popup messages.
              </Text>
            </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </Box>

      {/* Disabled State */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Disabled State:
        </Text>
        <Accordion.Root
          type="single"
          defaultValue="disabled-1"
          disabled
          className="AccordionRoot"
        >
          <Accordion.Item className="AccordionItem" value="disabled-1">
            <AccordionTrigger>Disabled Item 1</AccordionTrigger>
            <AccordionContent>This content cannot be accessed.</AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="disabled-2">
            <AccordionTrigger>Disabled Item 2</AccordionTrigger>
            <AccordionContent>This content is also disabled.</AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </Box>

      {/* Non-collapsible Single */}
      <Box>
        <Text size="2" weight="medium" as="p" mb="2">
          Non-collapsible Single (always one open):
        </Text>
        <Accordion.Root
          type="single"
          defaultValue="always-1"
          collapsible={false}
          className="AccordionRoot"
        >
          <Accordion.Item className="AccordionItem" value="always-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>
              This is the first section. Notice that you cannot close all sections - 
              one must always remain open.
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="always-2">
            <AccordionTrigger>Section 2</AccordionTrigger>
            <AccordionContent>
              This is the second section. Try switching between sections - 
              the previous one will close automatically.
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item className="AccordionItem" value="always-3">
            <AccordionTrigger>Section 3</AccordionTrigger>
            <AccordionContent>
              This is the third section. This behavior is useful for tab-like interfaces 
              where you always want content visible.
            </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </Box>

      <style>{`
        .AccordionRoot {
          border-radius: 6px;
          width: 100%;
          background-color: var(--gray-a3);
          box-shadow: 0 2px 10px var(--black-a4);
        }

        .AccordionItem {
          overflow: hidden;
          margin-top: 1px;
        }
        .AccordionItem:first-child {
          margin-top: 0;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        .AccordionItem:last-child {
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }
        .AccordionItem:focus-within {
          position: relative;
          z-index: 1;
          box-shadow: 0 0 0 2px var(--gray-a8);
        }

        .AccordionHeader {
          display: flex;
        }

        .AccordionTrigger {
          font-family: inherit;
          background-color: transparent;
          padding: 0 20px;
          height: 45px;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          line-height: 1;
          color: var(--accent-11);
          box-shadow: 0 1px 0 var(--gray-6);
          cursor: pointer;
          border: none;
        }
        .AccordionTrigger:hover {
          background-color: var(--gray-a4);
        }
        .AccordionTrigger:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .AccordionIcon {
          display: flex;
          align-items: center;
          color: var(--accent-10);
        }

        .AccordionContent {
          overflow: hidden;
          font-size: 14px;
          color: var(--gray-11);
          background-color: var(--gray-a2);
        }
        .AccordionContent[data-state='open'] {
          animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        .AccordionContent[data-state='closed'] {
          animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        .AccordionContentText {
          padding: 15px 20px;
        }

        .AccordionChevron {
          color: var(--accent-10);
          transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
        }
        .AccordionTrigger[data-state='open'] .AccordionChevron {
          transform: rotate(180deg);
        }

        @keyframes slideDown {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            height: var(--radix-accordion-content-height);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            height: var(--radix-accordion-content-height);
            opacity: 1;
          }
          to {
            height: 0;
            opacity: 0;
          }
        }
      `}</style>
    </Flex>
  );
}
