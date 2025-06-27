"use client";

import React, { useState } from "react";
import { Flex, Text, Button, Dialog, IconButton, TextField, TextArea, Card, Badge, Avatar, Box } from "@radix-ui/themes";
import { Cross2Icon, Pencil1Icon, TrashIcon, ExclamationTriangleIcon, CheckIcon, PersonIcon, GearIcon, InfoCircledIcon } from "@radix-ui/react-icons";

export default function DialogComponent() {
  const [profile, setProfile] = useState({
    name: "Pedro Duarte",
    email: "pedro@example.com",
    bio: "Frontend developer passionate about UI/UX"
  });

  const [settings, setSettings] = useState({
    notifications: true,
    autoSave: false,
    theme: "light"
  });

  return (
    <Flex direction="column" gap="6">
      <Text size="2" as="p">
        A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
      </Text>

      {/* Dialog básico */}
      <Box>
        <Text size="3" weight="bold" mb="3">Dialog básico</Text>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button size="2">Abrir Dialog</Button>
          </Dialog.Trigger>

          <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>Editar Perfil</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Haz cambios a tu perfil aquí. Haz clic en guardar cuando termines.
            </Dialog.Description>

            <Flex direction="column" gap="3">
              <Box>
                <Text as="div" size="2" mb="1" weight="bold">
                  Nombre
                </Text>
                <TextField.Root
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                />
              </Box>
              <Box>
                <Text as="div" size="2" mb="1" weight="bold">
                  Email
                </Text>
                <TextField.Root
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                />
              </Box>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray" size="2">
                  Cancelar
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button size="2">Guardar</Button>
              </Dialog.Close>
            </Flex>

            <Dialog.Close>
              <IconButton
                variant="ghost"
                color="gray"
                aria-label="Close"
                style={{ position: 'absolute', top: '10px', right: '10px' }}
              >
                <Cross2Icon />
              </IconButton>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Root>
      </Box>

      {/* Dialog de confirmación */}
      <Box>
        <Text size="3" weight="bold" mb="3">Dialog de confirmación</Text>
        <Flex gap="3">
          <Dialog.Root>
            <Dialog.Trigger>
              <Button color="red" variant="soft">
                <TrashIcon width="16" height="16" />
                Eliminar elemento
              </Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 400 }}>
              <Flex align="center" gap="3" mb="4">
                <ExclamationTriangleIcon width="24" height="24" color="red" />
                <Dialog.Title>¿Estás seguro?</Dialog.Title>
              </Flex>
              
              <Dialog.Description size="2" mb="4">
                Esta acción no se puede deshacer. Esto eliminará permanentemente el elemento y todos sus datos asociados.
              </Dialog.Description>

              <Flex gap="3" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray" size="2">
                    Cancelar
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button color="red" size="2">
                    Sí, eliminar
                  </Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger>
              <Button color="green" variant="soft">
                <CheckIcon width="16" height="16" />
                Confirmar acción
              </Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 400 }}>
              <Flex align="center" gap="3" mb="4">
                <CheckIcon width="24" height="24" color="green" />
                <Dialog.Title>Confirmar</Dialog.Title>
              </Flex>
              
              <Dialog.Description size="2" mb="4">
                ¿Estás seguro de que quieres proceder con esta operación?
              </Dialog.Description>

              <Flex gap="3" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray" size="2">
                    Cancelar
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button color="green" size="2">
                    Confirmar
                  </Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </Flex>
      </Box>

      {/* Dialog con formulario complejo */}
      <Box>
        <Text size="3" weight="bold" mb="3">Formulario complejo</Text>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button>
              <PersonIcon width="16" height="16" />
              Configurar perfil completo
            </Button>
          </Dialog.Trigger>

          <Dialog.Content style={{ maxWidth: 500 }}>
            <Dialog.Title>Configuración de Perfil</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Completa tu información de perfil para una mejor experiencia.
            </Dialog.Description>

            <Flex direction="column" gap="4">
              <Flex align="center" gap="3">
                <Avatar size="4" fallback="PD" />
                <Button size="1" variant="outline">Cambiar foto</Button>
              </Flex>

              <Flex direction="column" gap="3">
                <Box>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Nombre completo
                  </Text>
                  <TextField.Root
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                  />
                </Box>
                
                <Box>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Email
                  </Text>
                  <TextField.Root
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                  />
                </Box>

                <Box>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Biografía
                  </Text>
                  <TextArea
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    rows={3}
                    placeholder="Cuéntanos sobre ti..."
                  />
                </Box>

                <Box>
                  <Text as="div" size="2" mb="2" weight="bold">
                    Configuración
                  </Text>
                  <Flex direction="column" gap="2">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input
                        type="checkbox"
                        checked={settings.notifications}
                        onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
                      />
                      <Text size="2">Recibir notificaciones</Text>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input
                        type="checkbox"
                        checked={settings.autoSave}
                        onChange={(e) => setSettings({...settings, autoSave: e.target.checked})}
                      />
                      <Text size="2">Guardar automáticamente</Text>
                    </label>
                  </Flex>
                </Box>
              </Flex>
            </Flex>

            <Flex gap="3" mt="6" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray" size="2">
                  Cancelar
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button size="2">Guardar cambios</Button>
              </Dialog.Close>
            </Flex>

            <Dialog.Close>
              <IconButton
                variant="ghost"
                color="gray"
                aria-label="Close"
                style={{ position: 'absolute', top: '12px', right: '12px' }}
              >
                <Cross2Icon />
              </IconButton>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Root>
      </Box>

      {/* Diferentes estilos de dialog */}
      <Box>
        <Text size="3" weight="bold" mb="3">Diferentes estilos</Text>
        <Flex gap="3">
          <Dialog.Root>
            <Dialog.Trigger>
              <Button>Dialog Estándar</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 400 }}>
              <Dialog.Title>Dialog Estándar</Dialog.Title>
              <Dialog.Description size="2" mb="4">
                Este es un dialog estándar con el comportamiento modal por defecto.
              </Dialog.Description>
              
              <Text size="2" mb="4">
                Los dialogs en Radix UI Themes son modales por defecto, lo que significa que el contenido de fondo no es interactivo.
              </Text>

              <Flex gap="3" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray" size="2">
                    Cerrar
                  </Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger>
              <Button variant="outline">Dialog con Overlay</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 400 }}>
              <Dialog.Title>Con Overlay</Dialog.Title>
              <Dialog.Description size="2" mb="4">
                Este dialog incluye un overlay que oscurece el contenido de fondo.
              </Dialog.Description>
              
              <Text size="2" mb="4">
                El overlay ayuda a enfocar la atención del usuario en el contenido del dialog.
              </Text>

              <Flex gap="3" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray" size="2">
                    Cerrar
                  </Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </Flex>
      </Box>

      {/* Diferentes tamaños */}
      <Box>
        <Text size="3" weight="bold" mb="3">Diferentes tamaños</Text>
        <Flex gap="3" wrap="wrap">
          <Dialog.Root>
            <Dialog.Trigger>
              <Button size="1" variant="outline">Pequeño</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 300 }}>
              <Dialog.Title>Dialog Pequeño</Dialog.Title>
              <Dialog.Description size="1" mb="3">
                Este es un dialog pequeño para acciones rápidas.
              </Dialog.Description>
              
              <Flex gap="2" justify="end">
                <Dialog.Close>
                  <Button size="1" variant="soft" color="gray">
                    Cancelar
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button size="1">
                    OK
                  </Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger>
              <Button size="2" variant="outline">Mediano</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
              <Dialog.Title>Dialog Mediano</Dialog.Title>
              <Dialog.Description size="2" mb="4">
                Este es un dialog de tamaño mediano, ideal para la mayoría de casos de uso.
              </Dialog.Description>
              
              <Text size="2" mb="4">
                Contenido adicional para mostrar el tamaño del dialog.
              </Text>

              <Flex gap="3" justify="end">
                <Dialog.Close>
                  <Button size="2" variant="soft" color="gray">
                    Cancelar
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button size="2">
                    Continuar
                  </Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger>
              <Button size="3" variant="outline">Grande</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 600 }}>
              <Dialog.Title>Dialog Grande</Dialog.Title>
              <Dialog.Description size="2" mb="4">
                Este es un dialog grande para contenido más complejo.
              </Dialog.Description>
              
              <Card style={{ padding: '16px', marginBottom: '16px' }}>
                <Text size="2" weight="bold" mb="2">Contenido del card</Text>
                <Text size="2" mb="3">
                  Este dialog tiene más espacio para mostrar contenido complejo como formularios extensos, tablas, o múltiples secciones de información.
                </Text>
                <Flex gap="2">
                  <Badge color="blue">Etiqueta 1</Badge>
                  <Badge color="green">Etiqueta 2</Badge>
                  <Badge color="orange">Etiqueta 3</Badge>
                </Flex>
              </Card>

              <Flex gap="3" justify="end">
                <Dialog.Close>
                  <Button size="2" variant="soft" color="gray">
                    Cancelar
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button size="2">
                    Proceder
                  </Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>
        </Flex>
      </Box>

      {/* Dialog con información */}
      <Box>
        <Text size="3" weight="bold" mb="3">Dialog informativo</Text>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="outline">
              <InfoCircledIcon width="16" height="16" />
              Mostrar información
            </Button>
          </Dialog.Trigger>

          <Dialog.Content style={{ maxWidth: 500 }}>
            <Flex align="center" gap="3" mb="4">
              <InfoCircledIcon width="24" height="24" color="blue" />
              <Dialog.Title>Información del Sistema</Dialog.Title>
            </Flex>
            
            <Flex direction="column" gap="3">
              <Card style={{ padding: '12px' }}>
                <Text size="2" weight="bold" mb="2">Estado del servidor</Text>
                <Flex align="center" gap="2">
                  <Box style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--green-9)' }} />
                  <Text size="2">Operativo</Text>
                </Flex>
              </Card>

              <Card style={{ padding: '12px' }}>
                <Text size="2" weight="bold" mb="2">Última actualización</Text>
                <Text size="2" style={{ color: 'var(--gray-11)' }}>
                  15 de enero de 2024, 14:30 GMT
                </Text>
              </Card>

              <Card style={{ padding: '12px' }}>
                <Text size="2" weight="bold" mb="2">Versión</Text>
                <Badge>v2.1.0</Badge>
              </Card>
            </Flex>

            <Flex justify="end" mt="4">
              <Dialog.Close>
                <Button>Entendido</Button>
              </Dialog.Close>
            </Flex>

            <Dialog.Close>
              <IconButton
                variant="ghost"
                color="gray"
                aria-label="Close"
                style={{ position: 'absolute', top: '12px', right: '12px' }}
              >
                <Cross2Icon />
              </IconButton>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Root>
      </Box>
    </Flex>
  );
}
