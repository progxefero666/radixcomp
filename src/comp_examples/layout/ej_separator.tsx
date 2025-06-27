"use client";

import React from "react";
import { Flex, Text, Box, Separator as RadixSeparator, Card, Button, Badge } from "@radix-ui/themes";
import { StitchesLogoIcon, PersonIcon, GearIcon, FileTextIcon } from '@radix-ui/react-icons';

export default function SeparatorComponentExample() {
  return (
    <Flex direction="column" gap="6">
      <Text size="2" as="p">
        Visually or semantically separates content.
      </Text>

      {/* Ejemplo básico */}
      <Box>
        <Text size="3" weight="bold" mb="3">Separador básico</Text>
        <Box>
          <Text size="2" weight="bold">Radix Primitives</Text>
          <Text size="2" as="p">An open-source UI component library.</Text>
          <RadixSeparator my="3" size="4" />
          <Text size="2" as="p">Styled, accessible components for React.</Text>
        </Box>
      </Box>

      {/* Separadores verticales */}
      <Box>
        <Text size="3" weight="bold" mb="3">Separadores verticales en navegación</Text>
        <Flex gap="3" align="center">
          <Text size="2">Blog</Text>
          <RadixSeparator orientation="vertical" />
          <Text size="2">Docs</Text>
          <RadixSeparator orientation="vertical" />
          <Text size="2">Source</Text>
          <RadixSeparator orientation="vertical" />
          <Text size="2">About</Text>
        </Flex>
      </Box>

      {/* Diferentes tamaños */}
      <Box>
        <Text size="3" weight="bold" mb="3">Diferentes tamaños</Text>
        <Flex direction="column" gap="3">
          <Box>
            <Text size="2" mb="2">Tamaño 1</Text>
            <RadixSeparator size="1" />
          </Box>
          <Box>
            <Text size="2" mb="2">Tamaño 2</Text>
            <RadixSeparator size="2" />
          </Box>
          <Box>
            <Text size="2" mb="2">Tamaño 3</Text>
            <RadixSeparator size="3" />
          </Box>
          <Box>
            <Text size="2" mb="2">Tamaño 4</Text>
            <RadixSeparator size="4" />
          </Box>
        </Flex>
      </Box>

      {/* Separador decorativo */}
      <Box>
        <Text size="3" weight="bold" mb="3">Separador decorativo</Text>
        <Box>
          <Text size="2" as="p">Este separador es puramente decorativo.</Text>
          <RadixSeparator my="2" size="2" decorative />
          <Text size="2" as="p" style={{ color: 'var(--gray-11)' }}>
            No será anunciado por lectores de pantalla.
          </Text>
        </Box>
      </Box>

      {/* En tarjetas */}
      <Box>
        <Text size="3" weight="bold" mb="3">En tarjetas y contenedores</Text>
        <Flex gap="4" wrap="wrap">
          <Card style={{ padding: '16px', width: 200 }}>
            <Flex align="center" gap="2" mb="3">
              <PersonIcon />
              <Text size="2" weight="bold">Perfil</Text>
            </Flex>
            <Text size="2" mb="2">Nombre: Juan Pérez</Text>
            <Text size="2" mb="3">Email: juan@example.com</Text>
            <RadixSeparator my="2" />
            <Flex justify="end">
              <Button size="1">Editar</Button>
            </Flex>
          </Card>

          <Card style={{ padding: '16px', width: 200 }}>
            <Flex align="center" gap="2" mb="3">
              <GearIcon />
              <Text size="2" weight="bold">Configuración</Text>
            </Flex>
            <Text size="2" mb="2">Tema: Claro</Text>
            <Text size="2" mb="3">Idioma: Español</Text>
            <RadixSeparator my="2" />
            <Flex justify="end">
              <Button size="1">Cambiar</Button>
            </Flex>
          </Card>

          <Card style={{ padding: '16px', width: 200 }}>
            <Flex align="center" gap="2" mb="3">
              <FileTextIcon />
              <Text size="2" weight="bold">Documento</Text>
            </Flex>
            <Text size="2" mb="2">Archivo: documento.pdf</Text>
            <Text size="2" mb="3">Tamaño: 2.5 MB</Text>
            <RadixSeparator my="2" />
            <Flex justify="end">
              <Button size="1">Descargar</Button>
            </Flex>
          </Card>
        </Flex>
      </Box>

      {/* Lista con separadores */}
      <Box>
        <Text size="3" weight="bold" mb="3">Lista con separadores</Text>
        <Card style={{ padding: '16px', maxWidth: 300 }}>
          <Text size="2" weight="bold" mb="3">Menú de opciones</Text>
          <Flex direction="column">
            <Flex align="center" justify="between" py="2">
              <Text size="2">Dashboard</Text>
              <Badge color="blue">Nuevo</Badge>
            </Flex>
            <RadixSeparator />
            <Flex align="center" justify="between" py="2">
              <Text size="2">Usuarios</Text>
              <Text size="1" style={{ color: 'var(--gray-11)' }}>125</Text>
            </Flex>
            <RadixSeparator />
            <Flex align="center" justify="between" py="2">
              <Text size="2">Configuración</Text>
            </Flex>
            <RadixSeparator />
            <Flex align="center" justify="between" py="2">
              <Text size="2">Ayuda</Text>
            </Flex>
          </Flex>
        </Card>
      </Box>

      {/* Separadores en layout complejo */}
      <Box>
        <Text size="3" weight="bold" mb="3">Layout complejo</Text>
        <Card style={{ padding: '20px' }}>
          <Flex direction="column" gap="4">
            {/* Header */}
            <Flex align="center" justify="between">
              <Text size="4" weight="bold">Panel de Control</Text>
              <Badge color="green">Activo</Badge>
            </Flex>
            <RadixSeparator size="3" />
            
            {/* Stats */}
            <Flex gap="6">
              <Box>
                <Text size="1" style={{ color: 'var(--gray-11)' }}>USUARIOS</Text>
                <Text size="4" weight="bold">1,234</Text>
              </Box>
              <RadixSeparator orientation="vertical" style={{ height: 40 }} />
              <Box>
                <Text size="1" style={{ color: 'var(--gray-11)' }}>VENTAS</Text>
                <Text size="4" weight="bold">$12,345</Text>
              </Box>
              <RadixSeparator orientation="vertical" style={{ height: 40 }} />
              <Box>
                <Text size="1" style={{ color: 'var(--gray-11)' }}>PEDIDOS</Text>
                <Text size="4" weight="bold">456</Text>
              </Box>
            </Flex>
            
            <RadixSeparator size="2" />
            
            {/* Actions */}
            <Flex gap="2">
              <Button size="2">Ver reportes</Button>
              <Button size="2" variant="outline">Exportar datos</Button>
              <Button size="2" variant="ghost">Configurar</Button>
            </Flex>
          </Flex>
        </Card>
      </Box>

      {/* Combinación con otros elementos */}
      <Box>
        <Text size="3" weight="bold" mb="3">Combinación con iconos y elementos</Text>
        <Flex direction="column" gap="3">
          <Flex align="center" gap="3">
            <StitchesLogoIcon width="16" height="16" />
            <Text size="2">Inicio</Text>
            <RadixSeparator orientation="vertical" />
            <PersonIcon width="16" height="16" />
            <Text size="2">Perfil</Text>
            <RadixSeparator orientation="vertical" />
            <GearIcon width="16" height="16" />
            <Text size="2">Configuración</Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
