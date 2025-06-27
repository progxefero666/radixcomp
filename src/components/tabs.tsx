"use client";

import React, { useState } from "react";
import { Flex, Text, Box, Tabs as RadixTabs, Button, Card, TextField, TextArea, Badge } from "@radix-ui/themes";
import { PersonIcon, LockClosedIcon, GearIcon, BellIcon, QuestionMarkCircledIcon, FileTextIcon, ImageIcon, VideoIcon } from '@radix-ui/react-icons';

export default function TabsComponent() {
  const [accountData, setAccountData] = useState({
    name: "Juan Pérez",
    email: "juan@example.com",
    bio: "Desarrollador frontend especializado en React y TypeScript."
  });

  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: "es"
  });

  return (
    <Flex direction="column" gap="6">
      <Text size="2" as="p">
        A set of layered sections of content—known as tab panels—that are displayed one at a time.
      </Text>

      {/* Ejemplo básico */}
      <Box>
        <Text size="3" weight="bold" mb="3">Ejemplo básico</Text>
        <RadixTabs.Root defaultValue="tab1" style={{ width: 400 }}>
          <RadixTabs.List>
            <RadixTabs.Trigger value="tab1">Cuenta</RadixTabs.Trigger>
            <RadixTabs.Trigger value="tab2">Contraseña</RadixTabs.Trigger>
            <RadixTabs.Trigger value="tab3" disabled>Configuración</RadixTabs.Trigger>
          </RadixTabs.List>
          <Box pt="3">
            <RadixTabs.Content value="tab1">
              <Text size="2">Haz cambios a tu cuenta aquí. Haz clic en guardar cuando termines.</Text>
            </RadixTabs.Content>
            <RadixTabs.Content value="tab2">
              <Text size="2">Cambia tu contraseña aquí. Después de guardar, serás desconectado.</Text>
            </RadixTabs.Content>
            <RadixTabs.Content value="tab3">
              <Text size="2">Esta pestaña está deshabilitada.</Text>
            </RadixTabs.Content>
          </Box>
        </RadixTabs.Root>
      </Box>

      {/* Tabs con iconos */}
      <Box>
        <Text size="3" weight="bold" mb="3">Tabs con iconos</Text>
        <RadixTabs.Root defaultValue="profile" style={{ width: 500 }}>
          <RadixTabs.List>
            <RadixTabs.Trigger value="profile">
              <Flex align="center" gap="2">
                <PersonIcon width="16" height="16" />
                <Text>Perfil</Text>
              </Flex>
            </RadixTabs.Trigger>
            <RadixTabs.Trigger value="security">
              <Flex align="center" gap="2">
                <LockClosedIcon width="16" height="16" />
                <Text>Seguridad</Text>
              </Flex>
            </RadixTabs.Trigger>
            <RadixTabs.Trigger value="preferences">
              <Flex align="center" gap="2">
                <GearIcon width="16" height="16" />
                <Text>Preferencias</Text>
              </Flex>
            </RadixTabs.Trigger>
            <RadixTabs.Trigger value="notifications">
              <Flex align="center" gap="2">
                <BellIcon width="16" height="16" />
                <Text>Notificaciones</Text>
                <Badge color="red" size="1">3</Badge>
              </Flex>
            </RadixTabs.Trigger>
          </RadixTabs.List>
          <Box pt="4">
            <RadixTabs.Content value="profile">
              <Card style={{ padding: '16px' }}>
                <Flex direction="column" gap="3">
                  <Text size="3" weight="bold">Información del perfil</Text>
                  <Box>
                    <Text size="2" mb="1">Nombre completo</Text>
                    <TextField.Root
                      value={accountData.name}
                      onChange={(e) => setAccountData({...accountData, name: e.target.value})}
                    />
                  </Box>
                  <Box>
                    <Text size="2" mb="1">Email</Text>
                    <TextField.Root
                      value={accountData.email}
                      onChange={(e) => setAccountData({...accountData, email: e.target.value})}
                    />
                  </Box>
                  <Box>
                    <Text size="2" mb="1">Biografía</Text>
                    <TextArea
                      value={accountData.bio}
                      onChange={(e) => setAccountData({...accountData, bio: e.target.value})}
                      rows={3}
                    />
                  </Box>
                  <Button>Guardar cambios</Button>
                </Flex>
              </Card>
            </RadixTabs.Content>
            <RadixTabs.Content value="security">
              <Card style={{ padding: '16px' }}>
                <Flex direction="column" gap="3">
                  <Text size="3" weight="bold">Configuración de seguridad</Text>
                  <Box>
                    <Text size="2" mb="1">Contraseña actual</Text>
                    <TextField.Root type="password" placeholder="Ingresa tu contraseña actual" />
                  </Box>
                  <Box>
                    <Text size="2" mb="1">Nueva contraseña</Text>
                    <TextField.Root type="password" placeholder="Ingresa una nueva contraseña" />
                  </Box>
                  <Box>
                    <Text size="2" mb="1">Confirmar contraseña</Text>
                    <TextField.Root type="password" placeholder="Confirma tu nueva contraseña" />
                  </Box>
                  <Button>Cambiar contraseña</Button>
                </Flex>
              </Card>
            </RadixTabs.Content>
            <RadixTabs.Content value="preferences">
              <Card style={{ padding: '16px' }}>
                <Flex direction="column" gap="3">
                  <Text size="3" weight="bold">Preferencias de la aplicación</Text>
                  <Flex direction="column" gap="2">
                    <Text size="2">Tema: {settings.darkMode ? 'Oscuro' : 'Claro'}</Text>
                    <Text size="2">Idioma: {settings.language === 'es' ? 'Español' : 'English'}</Text>
                    <Text size="2">Notificaciones: {settings.notifications ? 'Habilitadas' : 'Deshabilitadas'}</Text>
                  </Flex>
                  <Button>Configurar</Button>
                </Flex>
              </Card>
            </RadixTabs.Content>
            <RadixTabs.Content value="notifications">
              <Card style={{ padding: '16px' }}>
                <Flex direction="column" gap="3">
                  <Text size="3" weight="bold">Centro de notificaciones</Text>
                  <Flex direction="column" gap="2">
                    <Flex justify="between" align="center" p="2" style={{ backgroundColor: 'var(--gray-a3)', borderRadius: 'var(--radius-2)' }}>
                      <Text size="2">Nueva actualización disponible</Text>
                      <Badge color="blue">Nuevo</Badge>
                    </Flex>
                    <Flex justify="between" align="center" p="2" style={{ backgroundColor: 'var(--gray-a3)', borderRadius: 'var(--radius-2)' }}>
                      <Text size="2">Tu perfil fue actualizado</Text>
                      <Badge color="green">Info</Badge>
                    </Flex>
                    <Flex justify="between" align="center" p="2" style={{ backgroundColor: 'var(--gray-a3)', borderRadius: 'var(--radius-2)' }}>
                      <Text size="2">Mantenimiento programado</Text>
                      <Badge color="orange">Aviso</Badge>
                    </Flex>
                  </Flex>
                  <Button variant="outline">Marcar todo como leído</Button>
                </Flex>
              </Card>
            </RadixTabs.Content>
          </Box>
        </RadixTabs.Root>
      </Box>

      {/* Tabs verticales (simulado) */}
      <Box>
        <Text size="3" weight="bold" mb="3">Layout vertical (usando Flex)</Text>
        <RadixTabs.Root defaultValue="dashboard" style={{ width: 600 }}>
          <Flex gap="4">
            <Box style={{ minWidth: 150 }}>
              <RadixTabs.List style={{ flexDirection: 'column', height: 'auto' }}>
                <RadixTabs.Trigger value="dashboard" style={{ width: '100%', justifyContent: 'flex-start' }}>
                  Dashboard
                </RadixTabs.Trigger>
                <RadixTabs.Trigger value="analytics" style={{ width: '100%', justifyContent: 'flex-start' }}>
                  Analíticas
                </RadixTabs.Trigger>
                <RadixTabs.Trigger value="reports" style={{ width: '100%', justifyContent: 'flex-start' }}>
                  Reportes
                </RadixTabs.Trigger>
                <RadixTabs.Trigger value="settings" style={{ width: '100%', justifyContent: 'flex-start' }}>
                  Configuración
                </RadixTabs.Trigger>
              </RadixTabs.List>
            </Box>
            <Box style={{ flex: 1 }}>
              <RadixTabs.Content value="dashboard">
                <Card style={{ padding: '20px', height: 200 }}>
                  <Text size="3" weight="bold" mb="3">Dashboard</Text>
                  <Text size="2">Vista general de todos los datos importantes.</Text>
                </Card>
              </RadixTabs.Content>
              <RadixTabs.Content value="analytics">
                <Card style={{ padding: '20px', height: 200 }}>
                  <Text size="3" weight="bold" mb="3">Analíticas</Text>
                  <Text size="2">Métricas detalladas y gráficos de rendimiento.</Text>
                </Card>
              </RadixTabs.Content>
              <RadixTabs.Content value="reports">
                <Card style={{ padding: '20px', height: 200 }}>
                  <Text size="3" weight="bold" mb="3">Reportes</Text>
                  <Text size="2">Genera y descarga reportes personalizados.</Text>
                </Card>
              </RadixTabs.Content>
              <RadixTabs.Content value="settings">
                <Card style={{ padding: '20px', height: 200 }}>
                  <Text size="3" weight="bold" mb="3">Configuración</Text>
                  <Text size="2">Ajusta las configuraciones del sistema.</Text>
                </Card>
              </RadixTabs.Content>
            </Box>
          </Flex>
        </RadixTabs.Root>
      </Box>

      {/* Tabs anidadas */}
      <Box>
        <Text size="3" weight="bold" mb="3">Tabs anidadas</Text>
        <RadixTabs.Root defaultValue="content" style={{ width: 600 }}>
          <RadixTabs.List>
            <RadixTabs.Trigger value="content">Contenido</RadixTabs.Trigger>
            <RadixTabs.Trigger value="media">Medios</RadixTabs.Trigger>
            <RadixTabs.Trigger value="help">Ayuda</RadixTabs.Trigger>
          </RadixTabs.List>
          <Box pt="4">
            <RadixTabs.Content value="content">
              <RadixTabs.Root defaultValue="articles" style={{ width: '100%' }}>
                <RadixTabs.List size="1">
                  <RadixTabs.Trigger value="articles">
                    <Flex align="center" gap="2">
                      <FileTextIcon width="14" height="14" />
                      <Text>Artículos</Text>
                    </Flex>
                  </RadixTabs.Trigger>
                  <RadixTabs.Trigger value="pages">Páginas</RadixTabs.Trigger>
                  <RadixTabs.Trigger value="drafts">Borradores</RadixTabs.Trigger>
                </RadixTabs.List>
                <Box pt="3">
                  <RadixTabs.Content value="articles">
                    <Card style={{ padding: '16px' }}>
                      <Text size="2">Lista de artículos publicados</Text>
                    </Card>
                  </RadixTabs.Content>
                  <RadixTabs.Content value="pages">
                    <Card style={{ padding: '16px' }}>
                      <Text size="2">Páginas estáticas del sitio</Text>
                    </Card>
                  </RadixTabs.Content>
                  <RadixTabs.Content value="drafts">
                    <Card style={{ padding: '16px' }}>
                      <Text size="2">Contenido en borrador</Text>
                    </Card>
                  </RadixTabs.Content>
                </Box>
              </RadixTabs.Root>
            </RadixTabs.Content>
            <RadixTabs.Content value="media">
              <RadixTabs.Root defaultValue="images" style={{ width: '100%' }}>
                <RadixTabs.List size="1">
                  <RadixTabs.Trigger value="images">
                    <Flex align="center" gap="2">
                      <ImageIcon width="14" height="14" />
                      <Text>Imágenes</Text>
                    </Flex>
                  </RadixTabs.Trigger>
                  <RadixTabs.Trigger value="videos">
                    <Flex align="center" gap="2">
                      <VideoIcon width="14" height="14" />
                      <Text>Videos</Text>
                    </Flex>
                  </RadixTabs.Trigger>
                  <RadixTabs.Trigger value="docs">Documentos</RadixTabs.Trigger>
                </RadixTabs.List>
                <Box pt="3">
                  <RadixTabs.Content value="images">
                    <Card style={{ padding: '16px' }}>
                      <Text size="2">Galería de imágenes</Text>
                    </Card>
                  </RadixTabs.Content>
                  <RadixTabs.Content value="videos">
                    <Card style={{ padding: '16px' }}>
                      <Text size="2">Biblioteca de videos</Text>
                    </Card>
                  </RadixTabs.Content>
                  <RadixTabs.Content value="docs">
                    <Card style={{ padding: '16px' }}>
                      <Text size="2">Documentos y archivos</Text>
                    </Card>
                  </RadixTabs.Content>
                </Box>
              </RadixTabs.Root>
            </RadixTabs.Content>
            <RadixTabs.Content value="help">
              <Card style={{ padding: '16px' }}>
                <Flex align="center" gap="2" mb="3">
                  <QuestionMarkCircledIcon width="18" height="18" />
                  <Text size="3" weight="bold">Centro de ayuda</Text>
                </Flex>
                <Text size="2">Encuentra respuestas a las preguntas más frecuentes.</Text>
              </Card>
            </RadixTabs.Content>
          </Box>
        </RadixTabs.Root>
      </Box>

      {/* Diferentes tamaños */}
      <Box>
        <Text size="3" weight="bold" mb="3">Diferentes tamaños</Text>
        <Flex direction="column" gap="4">
          <Box>
            <Text size="2" mb="2">Tamaño pequeño</Text>
            <RadixTabs.Root defaultValue="tab1">
              <RadixTabs.List size="1">
                <RadixTabs.Trigger value="tab1">Tab 1</RadixTabs.Trigger>
                <RadixTabs.Trigger value="tab2">Tab 2</RadixTabs.Trigger>
              </RadixTabs.List>
              <Box pt="2">
                <RadixTabs.Content value="tab1">
                  <Text size="1">Contenido del tab 1</Text>
                </RadixTabs.Content>
                <RadixTabs.Content value="tab2">
                  <Text size="1">Contenido del tab 2</Text>
                </RadixTabs.Content>
              </Box>
            </RadixTabs.Root>
          </Box>

          <Box>
            <Text size="2" mb="2">Tamaño mediano (por defecto)</Text>
            <RadixTabs.Root defaultValue="tab1">
              <RadixTabs.List size="2">
                <RadixTabs.Trigger value="tab1">Tab 1</RadixTabs.Trigger>
                <RadixTabs.Trigger value="tab2">Tab 2</RadixTabs.Trigger>
              </RadixTabs.List>
              <Box pt="3">
                <RadixTabs.Content value="tab1">
                  <Text size="2">Contenido del tab 1</Text>
                </RadixTabs.Content>
                <RadixTabs.Content value="tab2">
                  <Text size="2">Contenido del tab 2</Text>
                </RadixTabs.Content>
              </Box>
            </RadixTabs.Root>
          </Box>
        </Flex>
      </Box>
      
    </Flex>
  );
}
