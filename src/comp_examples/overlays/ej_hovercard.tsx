"use client";

import React from "react";
import { Flex, Text, HoverCard, Avatar, Box, Badge, Button, Card, Link as RadixLink } from "@radix-ui/themes";
import { GitHubLogoIcon, PersonIcon, CalendarIcon, GlobeIcon, Link2Icon, StarIcon, HeartIcon, ChatBubbleIcon } from "@radix-ui/react-icons";

export default function HoverCardComponentExample() {
  return (
    <Flex direction="column" gap="6">
      <Text size="2" as="p">
        For sighted users to preview content available behind a link.
      </Text>

      {/* Ejemplo básico */}
      <Box>
        <Text size="3" weight="bold" mb="3">Ejemplo básico</Text>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <RadixLink href="https://github.com/radix-ui" target="_blank">
              <Flex align="center" gap="1">
                <GitHubLogoIcon /> Radix UI
              </Flex>
            </RadixLink>
          </HoverCard.Trigger>
          <HoverCard.Content style={{ maxWidth: 300 }}>
            <Flex gap="4">
              <Avatar
                size="3"
                fallback="R"
                radius="full"
                src="https://avatars.githubusercontent.com/u/75042455?s=200&v=4"
              />
              <Box>
                <Text size="3" weight="bold">Radix UI</Text>
                <Text as="p" size="2" style={{ color: 'var(--gray-11)' }}>
                  Unstyled, accessible components for building high-quality design systems and web apps.
                </Text>
                <Flex gap="2" mt="2" align="center">
                  <Text as="p" size="1" weight="bold">10k</Text>
                  <Text as="p" size="1" style={{ color: 'var(--gray-11)' }}>Followers</Text>
                  <Text as="p" size="1" weight="bold">300</Text>
                  <Text as="p" size="1" style={{ color: 'var(--gray-11)' }}>Following</Text>
                </Flex>
              </Box>
            </Flex>
          </HoverCard.Content>
        </HoverCard.Root>
      </Box>

      {/* Perfil de usuario */}
      <Box>
        <Text size="3" weight="bold" mb="3">Perfil de usuario</Text>
        <Text size="2" mb="3">Pasa el mouse sobre los nombres de usuario:</Text>
        <Flex gap="4" wrap="wrap">
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Button variant="ghost" size="2">
                <Flex align="center" gap="2">
                  <Avatar size="1" fallback="JD" />
                  @johndoe
                </Flex>
              </Button>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ maxWidth: 320 }}>
              <Flex gap="3">
                <Avatar
                  size="4"
                  fallback="JD"
                  radius="full"
                />
                <Flex direction="column" gap="2" style={{ flex: 1 }}>
                  <Box>
                    <Text size="3" weight="bold">John Doe</Text>
                    <Text size="2" style={{ color: 'var(--gray-11)' }}>@johndoe</Text>
                  </Box>
                  <Text size="2">
                    Frontend developer passionate about React, TypeScript, and modern web technologies.
                  </Text>
                  <Flex gap="3" align="center">
                    <Flex align="center" gap="1">
                      <GlobeIcon width="14" height="14" />
                      <Text size="1" style={{ color: 'var(--gray-11)' }}>San Francisco, CA</Text>
                    </Flex>
                    <Flex align="center" gap="1">
                      <CalendarIcon width="14" height="14" />
                      <Text size="1" style={{ color: 'var(--gray-11)' }}>Joined 2020</Text>
                    </Flex>
                  </Flex>
                  <Flex gap="2">
                    <Badge color="blue">React</Badge>
                    <Badge color="green">TypeScript</Badge>
                    <Badge color="purple">Next.js</Badge>
                  </Flex>
                </Flex>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>

          <HoverCard.Root>
            <HoverCard.Trigger>
              <Button variant="ghost" size="2">
                <Flex align="center" gap="2">
                  <Avatar size="1" fallback="AS" />
                  @alicesmith
                </Flex>
              </Button>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ maxWidth: 320 }}>
              <Flex gap="3">
                <Avatar
                  size="4"
                  fallback="AS"
                  radius="full"
                />
                <Flex direction="column" gap="2" style={{ flex: 1 }}>
                  <Box>
                    <Text size="3" weight="bold">Alice Smith</Text>
                    <Text size="2" style={{ color: 'var(--gray-11)' }}>@alicesmith</Text>
                  </Box>
                  <Text size="2">
                    UI/UX Designer creating beautiful and accessible digital experiences. Love minimalist design.
                  </Text>
                  <Flex gap="3" align="center">
                    <Flex align="center" gap="1">
                      <GlobeIcon width="14" height="14" />
                      <Text size="1" style={{ color: 'var(--gray-11)' }}>New York, NY</Text>
                    </Flex>
                    <Flex align="center" gap="1">
                      <CalendarIcon width="14" height="14" />
                      <Text size="1" style={{ color: 'var(--gray-11)' }}>Joined 2019</Text>
                    </Flex>
                  </Flex>
                  <Flex gap="2">
                    <Badge color="pink">Design</Badge>
                    <Badge color="orange">Figma</Badge>
                    <Badge color="cyan">Prototyping</Badge>
                  </Flex>
                </Flex>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>
        </Flex>
      </Box>

      {/* Enlaces con preview */}
      <Box>
        <Text size="3" weight="bold" mb="3">Enlaces con preview</Text>
        <Flex direction="column" gap="3">
          <HoverCard.Root>
            <HoverCard.Trigger>
              <RadixLink href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Link2Icon width="16" height="16" />
                Artículo: "Getting Started with React"
              </RadixLink>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ maxWidth: 350 }}>
              <Card style={{ padding: '12px' }}>
                <Text size="3" weight="bold" mb="2">Getting Started with React</Text>
                <Text size="2" style={{ color: 'var(--gray-11)' }} mb="3">
                  Una guía completa para comenzar con React desde cero. Aprende los conceptos fundamentales y construye tu primera aplicación.
                </Text>
                <Flex justify="between" align="center">
                  <Text size="1" style={{ color: 'var(--gray-11)' }}>5 min de lectura</Text>
                  <Flex gap="2" align="center">
                    <Flex align="center" gap="1">
                      <HeartIcon width="14" height="14" />
                      <Text size="1">24</Text>
                    </Flex>
                    <Flex align="center" gap="1">
                      <ChatBubbleIcon width="14" height="14" />
                      <Text size="1">8</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Card>
            </HoverCard.Content>
          </HoverCard.Root>

          <HoverCard.Root>
            <HoverCard.Trigger>
              <RadixLink href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Link2Icon width="16" height="16" />
                Tutorial: "Advanced TypeScript Patterns"
              </RadixLink>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ maxWidth: 350 }}>
              <Card style={{ padding: '12px' }}>
                <Text size="3" weight="bold" mb="2">Advanced TypeScript Patterns</Text>
                <Text size="2" style={{ color: 'var(--gray-11)' }} mb="3">
                  Explora patrones avanzados de TypeScript que te ayudarán a escribir código más robusto y mantenible.
                </Text>
                <Flex gap="2" mb="3">
                  <Badge color="blue">TypeScript</Badge>
                  <Badge color="green">Advanced</Badge>
                </Flex>
                <Flex justify="between" align="center">
                  <Text size="1" style={{ color: 'var(--gray-11)' }}>12 min de lectura</Text>
                  <Flex gap="2" align="center">
                    <Flex align="center" gap="1">
                      <StarIcon width="14" height="14" />
                      <Text size="1">4.8</Text>
                    </Flex>
                    <Flex align="center" gap="1">
                      <ChatBubbleIcon width="14" height="14" />
                      <Text size="1">15</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Card>
            </HoverCard.Content>
          </HoverCard.Root>
        </Flex>
      </Box>

      {/* Información de producto */}
      <Box>
        <Text size="3" weight="bold" mb="3">Información de producto</Text>
        <Flex gap="4" wrap="wrap">
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Card style={{ padding: '12px', cursor: 'pointer', minWidth: 150 }}>
                <Text size="2" weight="bold">MacBook Pro 14"</Text>
                <Text size="1" style={{ color: 'var(--gray-11)' }}>Desde $1,999</Text>
              </Card>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ maxWidth: 300 }}>
              <Flex direction="column" gap="3">
                <Box
                  style={{
                    width: '100%',
                    height: 120,
                    backgroundColor: 'var(--gray-3)',
                    borderRadius: 'var(--radius-2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Text size="1" style={{ color: 'var(--gray-11)' }}>Imagen del producto</Text>
                </Box>
                <Box>
                  <Text size="3" weight="bold" mb="1">MacBook Pro 14"</Text>
                  <Text size="2" style={{ color: 'var(--gray-11)' }} mb="3">
                    Chip M3 Pro, 18GB RAM, 512GB SSD
                  </Text>
                  <Flex justify="between" align="center">
                    <Text size="3" weight="bold" color="green">$1,999</Text>
                    <Button size="1">Ver detalles</Button>
                  </Flex>
                </Box>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>

          <HoverCard.Root>
            <HoverCard.Trigger>
              <Card style={{ padding: '12px', cursor: 'pointer', minWidth: 150 }}>
                <Text size="2" weight="bold">iPhone 15 Pro</Text>
                <Text size="1" style={{ color: 'var(--gray-11)' }}>Desde $999</Text>
              </Card>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ maxWidth: 300 }}>
              <Flex direction="column" gap="3">
                <Box
                  style={{
                    width: '100%',
                    height: 120,
                    backgroundColor: 'var(--gray-3)',
                    borderRadius: 'var(--radius-2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Text size="1" style={{ color: 'var(--gray-11)' }}>Imagen del producto</Text>
                </Box>
                <Box>
                  <Text size="3" weight="bold" mb="1">iPhone 15 Pro</Text>
                  <Text size="2" style={{ color: 'var(--gray-11)' }} mb="3">
                    Chip A17 Pro, Cámara de 48MP, Titanio
                  </Text>
                  <Flex gap="2" mb="2">
                    <Badge color="blue">128GB</Badge>
                    <Badge color="green">256GB</Badge>
                    <Badge color="orange">512GB</Badge>
                  </Flex>
                  <Flex justify="between" align="center">
                    <Text size="3" weight="bold" color="green">$999</Text>
                    <Button size="1">Ver opciones</Button>
                  </Flex>
                </Box>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>
        </Flex>
      </Box>

      {/* Diferentes posiciones */}
      <Box>
        <Text size="3" weight="bold" mb="3">Diferentes posiciones</Text>
        <Flex gap="4" align="center" justify="center" style={{ minHeight: 200 }}>
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Button variant="outline">Top</Button>
            </HoverCard.Trigger>
            <HoverCard.Content side="top" style={{ maxWidth: 200 }}>
              <Text size="2">Este HoverCard aparece arriba del trigger.</Text>
            </HoverCard.Content>
          </HoverCard.Root>

          <HoverCard.Root>
            <HoverCard.Trigger>
              <Button variant="outline">Right</Button>
            </HoverCard.Trigger>
            <HoverCard.Content side="right" style={{ maxWidth: 200 }}>
              <Text size="2">Este HoverCard aparece a la derecha del trigger.</Text>
            </HoverCard.Content>
          </HoverCard.Root>

          <HoverCard.Root>
            <HoverCard.Trigger>
              <Button variant="outline">Bottom</Button>
            </HoverCard.Trigger>
            <HoverCard.Content side="bottom" style={{ maxWidth: 200 }}>
              <Text size="2">Este HoverCard aparece abajo del trigger.</Text>
            </HoverCard.Content>
          </HoverCard.Root>

          <HoverCard.Root>
            <HoverCard.Trigger>
              <Button variant="outline">Left</Button>
            </HoverCard.Trigger>
            <HoverCard.Content side="left" style={{ maxWidth: 200 }}>
              <Text size="2">Este HoverCard aparece a la izquierda del trigger.</Text>
            </HoverCard.Content>
          </HoverCard.Root>
        </Flex>
      </Box>

      {/* Diferentes delays */}
      <Box>
        <Text size="3" weight="bold" mb="3">Diferentes delays</Text>
        <Flex gap="3">
          <HoverCard.Root openDelay={100}>
            <HoverCard.Trigger>
              <Button variant="outline">Delay corto (100ms)</Button>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ maxWidth: 250 }}>
              <Text size="2">
                Este HoverCard aparece rápidamente después de hacer hover.
              </Text>
            </HoverCard.Content>
          </HoverCard.Root>

          <HoverCard.Root openDelay={500}>
            <HoverCard.Trigger>
              <Button variant="outline">Delay normal (500ms)</Button>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ maxWidth: 250 }}>
              <Text size="2">
                Este HoverCard aparece con un delay normal.
              </Text>
            </HoverCard.Content>
          </HoverCard.Root>

          <HoverCard.Root openDelay={1000}>
            <HoverCard.Trigger>
              <Button variant="outline">Delay largo (1000ms)</Button>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ maxWidth: 250 }}>
              <Text size="2">
                Este HoverCard aparece después de un delay más largo.
              </Text>
            </HoverCard.Content>
          </HoverCard.Root>
        </Flex>
      </Box>
    </Flex>
  );
}
