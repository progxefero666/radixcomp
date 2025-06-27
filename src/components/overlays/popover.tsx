"use client";

import React, { useState } from "react";
import { Flex, Text, Button, Popover, IconButton, TextField, TextArea, Card, Badge, Slider, Switch, Box } from "@radix-ui/themes";
import { MixerHorizontalIcon, Cross2Icon, GearIcon, QuestionMarkCircledIcon, ColorWheelIcon, FontSizeIcon, Pencil1Icon, Share1Icon, BookmarkIcon } from "@radix-ui/react-icons";

export default function PopoverComponent() {
  const [settings, setSettings] = useState({
    width: 300,
    height: 200,
    fontSize: 14,
    autoSave: true,
    theme: 'light'
  });

  const [note, setNote] = useState("");

  return (
    <Flex direction="column" gap="6">
      <Text size="2" as="p">
        Displays rich content in a portal, triggered by a button.
      </Text>

      {/* Popover básico */}
      <Box>
        <Text size="3" weight="bold" mb="3">Popover básico</Text>
        <Popover.Root>
          <Popover.Trigger>
            <Button variant="soft" size="2">
              <MixerHorizontalIcon width="16" height="16" />
              Configuración
            </Button>
          </Popover.Trigger>
          <Popover.Content style={{ width: 360 }}>
            <Flex gap="3" direction="column">
              <Text size="2" weight="bold">Configuración del Popover</Text>
              <Text size="1" style={{ color: 'var(--gray-11)' }}>
                Este es contenido dentro del popover. Puedes poner cualquier cosa aquí, como formularios o configuraciones.
              </Text>
              <Box>
                <Text as="div" size="1" mb="1" weight="medium">Ancho</Text>
                <TextField.Root
                  value={settings.width.toString()}
                  onChange={(e) => setSettings({...settings, width: parseInt(e.target.value) || 300})}
                  placeholder="300px"
                />
              </Box>
              <Box>
                <Text as="div" size="1" mb="1" weight="medium">Alto</Text>
                <TextField.Root
                  value={settings.height.toString()}
                  onChange={(e) => setSettings({...settings, height: parseInt(e.target.value) || 200})}
                  placeholder="auto"
                />
              </Box>
            </Flex>
            <Popover.Close
              aria-label="Close"
              style={{ position: 'absolute', top: '8px', right: '8px' }}
            >
              <IconButton size="1" variant="ghost" color="gray">
                <Cross2Icon />
              </IconButton>
            </Popover.Close>
          </Popover.Content>
        </Popover.Root>
      </Box>

      {/* Popover con formulario */}
      <Box>
        <Text size="3" weight="bold" mb="3">Formulario de configuración</Text>
        <Popover.Root>
          <Popover.Trigger>
            <Button>
              <GearIcon width="16" height="16" />
              Configuración avanzada
            </Button>
          </Popover.Trigger>
          <Popover.Content style={{ width: 400 }}>
            <Flex direction="column" gap="4">
              <Text size="3" weight="bold">Configuración de la aplicación</Text>
              
              <Box>
                <Text as="div" size="2" mb="2" weight="medium">Tamaño de fuente</Text>
                <Slider
                  value={[settings.fontSize]}
                  onValueChange={(value) => setSettings({...settings, fontSize: value[0]})}
                  min={10}
                  max={24}
                  step={1}
                />
                <Text size="1" style={{ color: 'var(--gray-11)' }}>{settings.fontSize}px</Text>
              </Box>

              <Flex align="center" justify="between">
                <Text size="2">Guardado automático</Text>
                <Switch
                  checked={settings.autoSave}
                  onCheckedChange={(checked) => setSettings({...settings, autoSave: checked})}
                />
              </Flex>

              <Box>
                <Text as="div" size="2" mb="2" weight="medium">Tema</Text>
                <Flex gap="2">
                  <Button
                    size="1"
                    variant={settings.theme === 'light' ? 'solid' : 'outline'}
                    onClick={() => setSettings({...settings, theme: 'light'})}
                  >
                    Claro
                  </Button>
                  <Button
                    size="1"
                    variant={settings.theme === 'dark' ? 'solid' : 'outline'}
                    onClick={() => setSettings({...settings, theme: 'dark'})}
                  >
                    Oscuro
                  </Button>
                  <Button
                    size="1"
                    variant={settings.theme === 'auto' ? 'solid' : 'outline'}
                    onClick={() => setSettings({...settings, theme: 'auto'})}
                  >
                    Auto
                  </Button>
                </Flex>
              </Box>

              <Flex gap="2" justify="end">
                <Popover.Close>
                  <Button size="1" variant="soft" color="gray">
                    Cancelar
                  </Button>
                </Popover.Close>
                <Popover.Close>
                  <Button size="1">
                    Guardar
                  </Button>
                </Popover.Close>
              </Flex>
            </Flex>
          </Popover.Content>
        </Popover.Root>
      </Box>

      {/* Popover con información */}
      <Box>
        <Text size="3" weight="bold" mb="3">Información contextual</Text>
        <Flex gap="3">
          <Popover.Root>
            <Popover.Trigger>
              <Button variant="outline" size="2">
                <QuestionMarkCircledIcon width="16" height="16" />
                ¿Qué es esto?
              </Button>
            </Popover.Trigger>
            <Popover.Content style={{ maxWidth: 300 }}>
              <Card style={{ padding: '12px' }}>
                <Text size="2" weight="bold" mb="2">Información útil</Text>
                <Text size="2" mb="3">
                  Este componente muestra información contextual que ayuda a los usuarios a entender mejor la funcionalidad.
                </Text>
                <Flex gap="2">
                  <Badge color="blue">Tip</Badge>
                  <Badge color="green">Útil</Badge>
                </Flex>
              </Card>
            </Popover.Content>
          </Popover.Root>

          <Popover.Root>
            <Popover.Trigger>
              <Button variant="outline" size="2">
                <ColorWheelIcon width="16" height="16" />
                Colores
              </Button>
            </Popover.Trigger>
            <Popover.Content style={{ width: 280 }}>
              <Flex direction="column" gap="3">
                <Text size="2" weight="bold">Selector de color</Text>
                <Flex gap="2" wrap="wrap">
                  {['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan'].map((color) => (
                    <Box
                      key={color}
                      style={{
                        width: 32,
                        height: 32,
                        backgroundColor: `var(--${color}-9)`,
                        borderRadius: 'var(--radius-2)',
                        cursor: 'pointer',
                        border: '2px solid transparent'
                      }}
                    />
                  ))}
                </Flex>
                <Text size="1" style={{ color: 'var(--gray-11)' }}>
                  Selecciona un color de la paleta
                </Text>
              </Flex>
            </Popover.Content>
          </Popover.Root>
        </Flex>
      </Box>

      {/* Popover para notas rápidas */}
      <Box>
        <Text size="3" weight="bold" mb="3">Notas rápidas</Text>
        <Popover.Root>
          <Popover.Trigger>
            <Button variant="soft">
              <Pencil1Icon width="16" height="16" />
              Añadir nota
            </Button>
          </Popover.Trigger>
          <Popover.Content style={{ width: 350 }}>
            <Flex direction="column" gap="3">
              <Text size="2" weight="bold">Nueva nota</Text>
              <TextArea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Escribe tu nota aquí..."
                rows={4}
              />
              <Flex gap="2" justify="end">
                <Popover.Close>
                  <Button size="1" variant="soft" color="gray">
                    Cancelar
                  </Button>
                </Popover.Close>
                <Popover.Close>
                  <Button size="1" onClick={() => setNote("")}>
                    Guardar nota
                  </Button>
                </Popover.Close>
              </Flex>
            </Flex>
          </Popover.Content>
        </Popover.Root>
      </Box>

      {/* Popover con acciones rápidas */}
      <Box>
        <Text size="3" weight="bold" mb="3">Acciones rápidas</Text>
        <Flex gap="3">
          <Card style={{ padding: '16px', width: 200 }}>
            <Text size="2" weight="bold" mb="2">Documento importante</Text>
            <Text size="2" mb="3" style={{ color: 'var(--gray-11)' }}>
              Este es un documento que contiene información valiosa.
            </Text>
            <Popover.Root>
              <Popover.Trigger>
                <Button size="1" variant="outline">
                  Acciones
                </Button>
              </Popover.Trigger>
              <Popover.Content style={{ width: 200 }}>
                <Flex direction="column" gap="1">
                  <Button size="1" variant="ghost" style={{ justifyContent: 'flex-start' }}>
                    <Pencil1Icon width="14" height="14" />
                    Editar
                  </Button>
                  <Button size="1" variant="ghost" style={{ justifyContent: 'flex-start' }}>
                    <Share1Icon width="14" height="14" />
                    Compartir
                  </Button>
                  <Button size="1" variant="ghost" style={{ justifyContent: 'flex-start' }}>
                    <BookmarkIcon width="14" height="14" />
                    Guardar
                  </Button>
                  <Popover.Close>
                    <Button size="1" variant="ghost" color="red" style={{ width: '100%', justifyContent: 'flex-start' }}>
                      Eliminar
                    </Button>
                  </Popover.Close>
                </Flex>
              </Popover.Content>
            </Popover.Root>
          </Card>
        </Flex>
      </Box>

      {/* Diferentes posiciones */}
      <Box>
        <Text size="3" weight="bold" mb="3">Diferentes posiciones</Text>
        <Flex gap="4" align="center" justify="center" style={{ minHeight: 200 }}>
          <Popover.Root>
            <Popover.Trigger>
              <Button variant="outline">Top</Button>
            </Popover.Trigger>
            <Popover.Content side="top" style={{ maxWidth: 200 }}>
              <Text size="2">Popover posicionado arriba</Text>
            </Popover.Content>
          </Popover.Root>

          <Popover.Root>
            <Popover.Trigger>
              <Button variant="outline">Right</Button>
            </Popover.Trigger>
            <Popover.Content side="right" style={{ maxWidth: 200 }}>
              <Text size="2">Popover posicionado a la derecha</Text>
            </Popover.Content>
          </Popover.Root>

          <Popover.Root>
            <Popover.Trigger>
              <Button variant="outline">Bottom</Button>
            </Popover.Trigger>
            <Popover.Content side="bottom" style={{ maxWidth: 200 }}>
              <Text size="2">Popover posicionado abajo</Text>
            </Popover.Content>
          </Popover.Root>

          <Popover.Root>
            <Popover.Trigger>
              <Button variant="outline">Left</Button>
            </Popover.Trigger>
            <Popover.Content side="left" style={{ maxWidth: 200 }}>
              <Text size="2">Popover posicionado a la izquierda</Text>
            </Popover.Content>
          </Popover.Root>
        </Flex>
      </Box>

      {/* Popover controlado */}
      <Box>
        <Text size="3" weight="bold" mb="3">Popover controlado</Text>
        <Popover.Root>
          <Popover.Trigger>
            <Button>
              <FontSizeIcon width="16" height="16" />
              Configurar texto
            </Button>
          </Popover.Trigger>
          <Popover.Content style={{ width: 320 }}>
            <Flex direction="column" gap="4">
              <Text size="2" weight="bold">Configuración de texto</Text>
              
              <Box>
                <Text as="div" size="2" mb="2" weight="medium">Tamaño de fuente</Text>
                <Flex gap="2" align="center">
                  <Button
                    size="1"
                    variant="outline"
                    onClick={() => setSettings({...settings, fontSize: Math.max(10, settings.fontSize - 1)})}
                  >
                    -
                  </Button>
                  <Text size="2" style={{ minWidth: 40, textAlign: 'center' }}>
                    {settings.fontSize}px
                  </Text>
                  <Button
                    size="1"
                    variant="outline"
                    onClick={() => setSettings({...settings, fontSize: Math.min(24, settings.fontSize + 1)})}
                  >
                    +
                  </Button>
                </Flex>
              </Box>

              <Box>
                <Text as="div" size="2" mb="2" weight="medium">Vista previa</Text>
                <Card style={{ padding: '12px', backgroundColor: 'var(--gray-a3)' }}>
                  <Text size="2" style={{ fontSize: `${settings.fontSize}px` }}>
                    Este es un texto de ejemplo con el tamaño seleccionado.
                  </Text>
                </Card>
              </Box>

              <Flex gap="2" justify="end">
                <Button size="1" variant="soft" color="gray">
                  Restablecer
                </Button>
                <Popover.Close>
                  <Button size="1">
                    Aplicar
                  </Button>
                </Popover.Close>
              </Flex>
            </Flex>
          </Popover.Content>
        </Popover.Root>
      </Box>
    </Flex>
  );
}
