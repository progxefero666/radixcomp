"use client";

import React, { useState } from "react";
import { Flex, Text, ContextMenu, Box, Card, Avatar, Badge } from "@radix-ui/themes";
import {
    Pencil1Icon,
    CopyIcon,
    TrashIcon,
    Share1Icon,
    BookmarkIcon,
    ArchiveIcon,
    DotsVerticalIcon,
    PersonIcon,
    FileIcon,
    ImageIcon,
    StarIcon
} from "@radix-ui/react-icons";

export default function ContextMenuComponent() {
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [urlsChecked, setUrlsChecked] = useState(false);
    const [person, setPerson] = useState('pedro');

    return (
        <Flex direction="column" gap="6">
            <Text size="2" as="p">
                Displays a menu to the user —such as a set of actions or functions— triggered by a right-click.
            </Text>

            {/* Ejemplo básico */}
            <Box>
                <Text size="3" weight="bold" mb="3">Context Menu básico</Text>
                <ContextMenu.Root>
                    <ContextMenu.Trigger>
                        <Box
                            style={{
                                border: '2px dashed var(--gray-a7)',
                                borderRadius: 'var(--radius-3)',
                                padding: 'var(--space-5)',
                                textAlign: 'center',
                                color: 'var(--gray-11)',
                                userSelect: 'none',
                                minWidth: 200,
                                cursor: 'context-menu'
                            }}
                        >
                            <Text size="2">Haz clic derecho aquí</Text>
                        </Box>
                    </ContextMenu.Trigger>
                    <ContextMenu.Content size="1">
                        <ContextMenu.Item shortcut="⌘ E">
                            <Pencil1Icon width="14" height="14" />
                            Editar
                        </ContextMenu.Item>
                        <ContextMenu.Item shortcut="⌘ D">
                            <CopyIcon width="14" height="14" />
                            Duplicar
                        </ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item shortcut="⌘ N">
                            <ArchiveIcon width="14" height="14" />
                            Archivar
                        </ContextMenu.Item>

                        <ContextMenu.Sub>
                            <ContextMenu.SubTrigger>
                                <DotsVerticalIcon width="14" height="14" />
                                Más opciones
                            </ContextMenu.SubTrigger>
                            <ContextMenu.SubContent>
                                <ContextMenu.Item>Mover a proyecto…</ContextMenu.Item>
                                <ContextMenu.Item>Mover a carpeta…</ContextMenu.Item>
                                <ContextMenu.Separator />
                                <ContextMenu.Item>Opciones avanzadas…</ContextMenu.Item>
                            </ContextMenu.SubContent>
                        </ContextMenu.Sub>

                        <ContextMenu.Separator />
                        <ContextMenu.Item>
                            <Share1Icon width="14" height="14" />
                            Compartir
                        </ContextMenu.Item>
                        <ContextMenu.Item>
                            <BookmarkIcon width="14" height="14" />
                            Añadir a favoritos
                        </ContextMenu.Item>
                        <ContextMenu.Separator />

                        <ContextMenu.CheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
                            Mostrar marcadores
                            <div style={{ marginLeft: 'auto', color: 'var(--gray-a10)' }}>⌘ B</div>
                        </ContextMenu.CheckboxItem>
                        <ContextMenu.CheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
                            Mostrar URLs completas
                        </ContextMenu.CheckboxItem>
                        <ContextMenu.Separator />

                        <ContextMenu.Label>Personas</ContextMenu.Label>
                        <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
                            <ContextMenu.RadioItem value="pedro">
                                Pedro Duarte
                            </ContextMenu.RadioItem>
                            <ContextMenu.RadioItem value="colm">
                                Colm Tuite
                            </ContextMenu.RadioItem>
                        </ContextMenu.RadioGroup>

                        <ContextMenu.Separator />
                        <ContextMenu.Item color="red" shortcut="⌫">
                            <TrashIcon width="14" height="14" />
                            Eliminar
                        </ContextMenu.Item>
                    </ContextMenu.Content>
                </ContextMenu.Root>
            </Box>

            {/* Context menu en tarjetas */}
            <Box>
                <Text size="3" weight="bold" mb="3">En tarjetas de contenido</Text>
                <Flex gap="4" wrap="wrap">
                    <ContextMenu.Root>
                        <ContextMenu.Trigger>
                            <Card style={{ padding: '16px', cursor: 'context-menu', width: 200 }}>
                                <Flex align="center" gap="2" mb="2">
                                    <FileIcon width="16" height="16" />
                                    <Text size="2" weight="bold">Documento.pdf</Text>
                                </Flex>
                                <Text size="1" style={{ color: 'var(--gray-11)' }}>
                                    Modificado hace 2 horas
                                </Text>
                                <Text size="1" style={{ color: 'var(--gray-11)' }}>
                                    2.5 MB
                                </Text>
                            </Card>
                        </ContextMenu.Trigger>
                        <ContextMenu.Content>
                            <ContextMenu.Item>
                                <Pencil1Icon width="14" height="14" />
                                Abrir
                            </ContextMenu.Item>
                            <ContextMenu.Item>
                                <Share1Icon width="14" height="14" />
                                Compartir
                            </ContextMenu.Item>
                            <ContextMenu.Item>
                                <CopyIcon width="14" height="14" />
                                Copiar enlace
                            </ContextMenu.Item>
                            <ContextMenu.Separator />
                            <ContextMenu.Item>
                                <FileIcon width="14" height="14" />
                                Mover a carpeta
                            </ContextMenu.Item>
                            <ContextMenu.Separator />
                            <ContextMenu.Item color="red">
                                <TrashIcon width="14" height="14" />
                                Eliminar
                            </ContextMenu.Item>
                        </ContextMenu.Content>
                    </ContextMenu.Root>

                    <ContextMenu.Root>
                        <ContextMenu.Trigger>
                            <Card style={{ padding: '16px', cursor: 'context-menu', width: 200 }}>
                                <Flex align="center" gap="2" mb="2">
                                    <ImageIcon width="16" height="16" />
                                    <Text size="2" weight="bold">Imagen.jpg</Text>
                                </Flex>
                                <Text size="1" style={{ color: 'var(--gray-11)' }}>
                                    1920x1080 px
                                </Text>
                                <Text size="1" style={{ color: 'var(--gray-11)' }}>
                                    847 KB
                                </Text>
                            </Card>
                        </ContextMenu.Trigger>
                        <ContextMenu.Content>
                            <ContextMenu.Item>
                                <Pencil1Icon width="14" height="14" />
                                Ver imagen
                            </ContextMenu.Item>
                            <ContextMenu.Item>
                                <Pencil1Icon width="14" height="14" />
                                Editar
                            </ContextMenu.Item>
                            <ContextMenu.Separator />
                            <ContextMenu.Item>
                                <CopyIcon width="14" height="14" />
                                Copiar imagen
                            </ContextMenu.Item>
                            <ContextMenu.Item>
                                <Share1Icon width="14" height="14" />
                                Compartir
                            </ContextMenu.Item>
                            <ContextMenu.Separator />
                            <ContextMenu.Item>
                                <StarIcon width="14" height="14" />
                                Marcar como favorita
                            </ContextMenu.Item>
                            <ContextMenu.Separator />
                            <ContextMenu.Item color="red">
                                <TrashIcon width="14" height="14" />
                                Eliminar
                            </ContextMenu.Item>
                        </ContextMenu.Content>
                    </ContextMenu.Root>
                </Flex>
            </Box>

            {/* Context menu en perfiles de usuario */}
            <Box>
                <Text size="3" weight="bold" mb="3">En perfiles de usuario</Text>
                <Flex gap="3">
                    <ContextMenu.Root>
                        <ContextMenu.Trigger>
                            <Card style={{ padding: '12px', cursor: 'context-menu', width: 180 }}>
                                <Flex align="center" gap="2">
                                    <Avatar size="2" fallback="JD" />
                                    <Box>
                                        <Text size="2" weight="bold">Juan Pérez</Text>
                                        <Text size="1" style={{ color: 'var(--gray-11)' }}>Desarrollador</Text>
                                    </Box>
                                </Flex>
                            </Card>
                        </ContextMenu.Trigger>
                        <ContextMenu.Content>
                            <ContextMenu.Item>
                                <PersonIcon width="14" height="14" />
                                Ver perfil
                            </ContextMenu.Item>
                            <ContextMenu.Item>
                                <Share1Icon width="14" height="14" />
                                Enviar mensaje
                            </ContextMenu.Item>
                            <ContextMenu.Separator />
                            <ContextMenu.Item>
                                <BookmarkIcon width="14" height="14" />
                                Añadir a contactos
                            </ContextMenu.Item>
                            <ContextMenu.Item>
                                <Share1Icon width="14" height="14" />
                                Compartir perfil
                            </ContextMenu.Item>
                            <ContextMenu.Separator />
                            <ContextMenu.Item color="red">Bloquear usuario</ContextMenu.Item>
                        </ContextMenu.Content>
                    </ContextMenu.Root>
                </Flex>
            </Box>

            {/* Context menu con diferentes tipos de contenido */}
            <Box>
                <Text size="3" weight="bold" mb="3">Diferentes tipos de contenido</Text>
                <Flex direction="column" gap="3">
                    <ContextMenu.Root>
                        <ContextMenu.Trigger>
                            <Box
                                style={{
                                    padding: '16px',
                                    border: '1px solid var(--gray-a6)',
                                    borderRadius: 'var(--radius-3)',
                                    cursor: 'context-menu',
                                    backgroundColor: 'var(--gray-a2)'
                                }}
                            >
                                <Text size="2">
                                    Este es un párrafo de texto que puede ser seleccionado y tiene opciones específicas
                                    para texto en el menú contextual.
                                </Text>
                            </Box>
                        </ContextMenu.Trigger>
                        <ContextMenu.Content>
                            <ContextMenu.Item>
                                <CopyIcon width="14" height="14" />
                                Copiar texto
                            </ContextMenu.Item>
                            <ContextMenu.Item>
                                <Pencil1Icon width="14" height="14" />
                                Editar texto
                            </ContextMenu.Item>
                            <ContextMenu.Separator />
                            <ContextMenu.Item>Seleccionar todo</ContextMenu.Item>
                            <ContextMenu.Separator />
                            <ContextMenu.Sub>
                                <ContextMenu.SubTrigger>Formato</ContextMenu.SubTrigger>
                                <ContextMenu.SubContent>
                                    <ContextMenu.Item>Negrita</ContextMenu.Item>
                                    <ContextMenu.Item>Cursiva</ContextMenu.Item>
                                    <ContextMenu.Item>Subrayado</ContextMenu.Item>
                                    <ContextMenu.Separator />
                                    <ContextMenu.Item>Eliminar formato</ContextMenu.Item>
                                </ContextMenu.SubContent>
                            </ContextMenu.Sub>
                        </ContextMenu.Content>
                    </ContextMenu.Root>

                    <ContextMenu.Root>
                        <ContextMenu.Trigger>
                            <Flex gap="2" p="3" style={{ border: '1px solid var(--gray-a6)', borderRadius: 'var(--radius-3)', cursor: 'context-menu' }}>
                                <Badge color="blue">React</Badge>
                                <Badge color="green">TypeScript</Badge>
                                <Badge color="purple">Next.js</Badge>
                            </Flex>
                        </ContextMenu.Trigger>
                        <ContextMenu.Content>
                            <ContextMenu.Item>
                                <Pencil1Icon width="14" height="14" />
                                Editar etiquetas
                            </ContextMenu.Item>
                            <ContextMenu.Item>
                                <CopyIcon width="14" height="14" />
                                Copiar etiquetas
                            </ContextMenu.Item>
                            <ContextMenu.Separator />
                            <ContextMenu.Sub>
                                <ContextMenu.SubTrigger>Añadir etiqueta</ContextMenu.SubTrigger>
                                <ContextMenu.SubContent>
                                    <ContextMenu.Item>JavaScript</ContextMenu.Item>
                                    <ContextMenu.Item>CSS</ContextMenu.Item>
                                    <ContextMenu.Item>HTML</ContextMenu.Item>
                                    <ContextMenu.Item>Node.js</ContextMenu.Item>
                                </ContextMenu.SubContent>
                            </ContextMenu.Sub>
                            <ContextMenu.Separator />
                            <ContextMenu.Item color="red">
                                <TrashIcon width="14" height="14" />
                                Eliminar todas
                            </ContextMenu.Item>
                        </ContextMenu.Content>
                    </ContextMenu.Root>
                </Flex>
            </Box>

            {/* Context menu deshabilitado */}
            <Box>
                <Text size="3" weight="bold" mb="3">Estados deshabilitados</Text>
                <ContextMenu.Root>
                    <ContextMenu.Trigger>
                        <Box
                            style={{
                                border: '2px dashed var(--gray-a7)',
                                borderRadius: 'var(--radius-3)',
                                padding: 'var(--space-4)',
                                textAlign: 'center',
                                color: 'var(--gray-11)',
                                userSelect: 'none',
                                cursor: 'context-menu',
                                width: 200
                            }}
                        >
                            <Text size="2">Con opciones deshabilitadas</Text>
                        </Box>
                    </ContextMenu.Trigger>
                    <ContextMenu.Content>
                        <ContextMenu.Item>
                            <Pencil1Icon width="14" height="14" />
                            Opción habilitada
                        </ContextMenu.Item>
                        <ContextMenu.Item disabled>
                            <CopyIcon width="14" height="14" />
                            Opción deshabilitada
                        </ContextMenu.Item>
                        <ContextMenu.Item disabled>
                            <Share1Icon width="14" height="14" />
                            No disponible
                        </ContextMenu.Item>
                        <ContextMenu.Separator />
                        <ContextMenu.Item>
                            <BookmarkIcon width="14" height="14" />
                            Disponible
                        </ContextMenu.Item>
                        <ContextMenu.Item color="red" disabled>
                            <TrashIcon width="14" height="14" />
                            Eliminar (bloqueado)
                        </ContextMenu.Item>
                    </ContextMenu.Content>
                </ContextMenu.Root>
                <Text size="1" mt="2" style={{ color: 'var(--gray-11)' }}>
                    Algunas opciones pueden estar deshabilitadas según el contexto o permisos.
                </Text>
            </Box>
        </Flex>
    );
}
