"use client";

import React from "react";
import { Flex, Text, Button, Tooltip, IconButton, Badge, Avatar, Link as RadixLink, Box } from "@radix-ui/themes";
import { 
  PlusIcon, 
  InfoCircledIcon, 
  QuestionMarkCircledIcon, 
  GearIcon, 
  HeartIcon, 
  Share1Icon, 
  BookmarkIcon,
  CopyIcon,
  Pencil1Icon,
  TrashIcon,
  ExclamationTriangleIcon,
  CheckIcon,
  StarIcon,
  DownloadIcon
} from "@radix-ui/react-icons";

export default function TooltipComponent() {
  return (
    <Flex direction="column" gap="6">
      <Text size="2" as="p">
        A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
      </Text>

      {/* Tooltip básico */}
      <Box>
        <Text size="3" weight="bold" mb="3">Tooltip básico</Text>
        <Flex gap="3" align="center">
          <Tooltip content="Añadir a la biblioteca">
            <IconButton size="2">
              <PlusIcon />
            </IconButton>
          </Tooltip>

          <Tooltip content="Información adicional">
            <IconButton size="2" variant="outline">
              <InfoCircledIcon />
            </IconButton>
          </Tooltip>

          <Tooltip content="¿Necesitas ayuda?">
            <IconButton size="2" variant="soft">
              <QuestionMarkCircledIcon />
            </IconButton>
          </Tooltip>
        </Flex>
      </Box>

      {/* Diferentes posiciones */}
      <Box>
        <Text size="3" weight="bold" mb="3">Diferentes posiciones</Text>
        <Flex gap="4" align="center" justify="center" style={{ minHeight: 120 }}>
          <Tooltip content="Tooltip arriba" side="top">
            <Button size="1" variant="soft">Top</Button>
          </Tooltip>
          
          <Tooltip content="Tooltip a la derecha" side="right">
            <Button size="1" variant="soft">Right</Button>
          </Tooltip>
          
          <Tooltip content="Tooltip abajo" side="bottom">
            <Button size="1" variant="soft">Bottom</Button>
          </Tooltip>
          
          <Tooltip content="Tooltip a la izquierda" side="left">
            <Button size="1" variant="soft">Left</Button>
          </Tooltip>
        </Flex>
      </Box>

      {/* Tooltips con diferentes contenidos */}
      <Box>
        <Text size="3" weight="bold" mb="3">Diferentes contenidos</Text>
        <Flex gap="3" wrap="wrap">
          <Tooltip content="Clic para configurar">
            <IconButton size="2" variant="outline">
              <GearIcon />
            </IconButton>
          </Tooltip>

          <Tooltip content="Este artículo te gustará">
            <IconButton size="2" color="red" variant="soft">
              <HeartIcon />
            </IconButton>
          </Tooltip>

          <Tooltip content="Compartir con otros usuarios">
            <IconButton size="2" color="blue" variant="soft">
              <Share1Icon />
            </IconButton>
          </Tooltip>

          <Tooltip content="Guardar para más tarde">
            <IconButton size="2" color="yellow" variant="soft">
              <BookmarkIcon />
            </IconButton>
          </Tooltip>

          <Tooltip content="Copiar al portapapeles">
            <IconButton size="2" variant="outline">
              <CopyIcon />
            </IconButton>
          </Tooltip>
        </Flex>
      </Box>

      {/* Tooltips en botones de texto */}
      <Box>
        <Text size="3" weight="bold" mb="3">Botones con tooltips</Text>
        <Flex gap="3" wrap="wrap">
          <Tooltip content="Crear un nuevo documento">
            <Button size="2">
              <PlusIcon width="16" height="16" />
              Nuevo
            </Button>
          </Tooltip>

          <Tooltip content="Editar el documento actual">
            <Button size="2" variant="outline">
              <Pencil1Icon width="16" height="16" />
              Editar
            </Button>
          </Tooltip>

          <Tooltip content="¡Cuidado! Esta acción no se puede deshacer">
            <Button size="2" color="red" variant="soft">
              <TrashIcon width="16" height="16" />
              Eliminar
            </Button>
          </Tooltip>

          <Tooltip content="Descargar archivo">
            <Button size="2" color="green" variant="soft">
              <DownloadIcon width="16" height="16" />
              Descargar
            </Button>
          </Tooltip>
        </Flex>
      </Box>

      {/* Tooltips con diferentes delays */}
      <Box>
        <Text size="3" weight="bold" mb="3">Diferentes delays</Text>
        <Flex gap="3">
          <Tooltip content="Aparece inmediatamente" delayDuration={0}>
            <Button variant="outline">Sin delay</Button>
          </Tooltip>

          <Tooltip content="Aparece en 300ms" delayDuration={300}>
            <Button variant="outline">Delay corto</Button>
          </Tooltip>

          <Tooltip content="Aparece en 700ms (por defecto)" delayDuration={700}>
            <Button variant="outline">Delay normal</Button>
          </Tooltip>

          <Tooltip content="Aparece en 1500ms" delayDuration={1500}>
            <Button variant="outline">Delay largo</Button>
          </Tooltip>
        </Flex>
      </Box>

      {/* Tooltips en elementos de interfaz */}
      <Box>
        <Text size="3" weight="bold" mb="3">En elementos de interfaz</Text>
        <Flex direction="column" gap="4">
          <Flex gap="3" align="center">
            <Tooltip content="Usuario premium con acceso completo">
              <Avatar size="2" fallback="JP" />
            </Tooltip>
            
            <Tooltip content="Esta función está en beta">
              <Badge color="orange">Beta</Badge>
            </Tooltip>
            
            <Tooltip content="Artículo muy popular">
              <Badge color="yellow">
                <StarIcon width="12" height="12" />
                Popular
              </Badge>
            </Tooltip>
          </Flex>

          <Flex gap="3" align="center">
            <Tooltip content="Visitar el sitio web oficial">
              <RadixLink href="#" size="2">
                Radix UI
              </RadixLink>
            </Tooltip>
            
            <Text size="2">•</Text>
            
            <Tooltip content="Ver la documentación completa">
              <RadixLink href="#" size="2">
                Documentación
              </RadixLink>
            </Tooltip>
          </Flex>
        </Flex>
      </Box>

      {/* Tooltips informativos */}
      <Box>
        <Text size="3" weight="bold" mb="3">Tooltips informativos</Text>
        <Flex gap="4" wrap="wrap">
          <Tooltip content="Todo está funcionando correctamente">
            <Flex align="center" gap="2" p="2" style={{ backgroundColor: 'var(--green-a3)', borderRadius: 'var(--radius-2)' }}>
              <CheckIcon width="16" height="16" color="green" />
              <Text size="2">Sistema operativo</Text>
            </Flex>
          </Tooltip>

          <Tooltip content="Hay algunos problemas menores que requieren atención">
            <Flex align="center" gap="2" p="2" style={{ backgroundColor: 'var(--yellow-a3)', borderRadius: 'var(--radius-2)' }}>
              <ExclamationTriangleIcon width="16" height="16" color="orange" />
              <Text size="2">Advertencias</Text>
            </Flex>
          </Tooltip>

          <Tooltip content="Se requiere acción inmediata">
            <Flex align="center" gap="2" p="2" style={{ backgroundColor: 'var(--red-a3)', borderRadius: 'var(--radius-2)' }}>
              <ExclamationTriangleIcon width="16" height="16" color="red" />
              <Text size="2">Errores críticos</Text>
            </Flex>
          </Tooltip>
        </Flex>
      </Box>

      {/* Tooltips en navegación */}
      <Box>
        <Text size="3" weight="bold" mb="3">En elementos de navegación</Text>
        <Flex 
          gap="1" 
          p="2" 
          style={{ 
            backgroundColor: 'var(--gray-a3)', 
            borderRadius: 'var(--radius-3)',
            width: 'fit-content'
          }}
        >
          <Tooltip content="Ir al dashboard principal">
            <IconButton size="2" variant="ghost">
              <PlusIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip content="Ver configuraciones">
            <IconButton size="2" variant="ghost">
              <GearIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip content="Información y ayuda">
            <IconButton size="2" variant="ghost">
              <InfoCircledIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip content="Preguntas frecuentes">
            <IconButton size="2" variant="ghost">
              <QuestionMarkCircledIcon />
            </IconButton>
          </Tooltip>
        </Flex>
      </Box>

      {/* Tooltips con contenido largo */}
      <Box>
        <Text size="3" weight="bold" mb="3">Contenido largo</Text>
        <Flex gap="3">
          <Tooltip content="Este tooltip tiene un contenido más largo que explica en detalle lo que hace este botón y por qué es importante para el usuario.">
            <Button>Tooltip largo</Button>
          </Tooltip>

          <Tooltip content="Los tooltips pueden contener múltiples líneas de texto para proporcionar información detallada cuando sea necesario, pero se recomienda mantenerlos concisos.">
            <Button variant="outline">Información detallada</Button>
          </Tooltip>
        </Flex>
      </Box>

      {/* Tooltips deshabilitados */}
      <Box>
        <Text size="3" weight="bold" mb="3">En elementos deshabilitados</Text>
        <Flex gap="3">
          <Tooltip content="Esta función no está disponible en tu plan actual">
            <span>
              <Button disabled>
                Función premium
              </Button>
            </span>
          </Tooltip>

          <Tooltip content="Necesitas permisos de administrador para realizar esta acción">
            <span>
              <Button disabled variant="outline">
                Configuración avanzada
              </Button>
            </span>
          </Tooltip>
        </Flex>
        <Text size="1" mt="2" style={{ color: 'var(--gray-11)' }}>
          Nota: Los elementos deshabilitados necesitan estar envueltos en un span para que el tooltip funcione.
        </Text>
      </Box>
    </Flex>
  );
}
