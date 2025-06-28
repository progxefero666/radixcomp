"use client";

import React, { useState } from "react";
import { Flex, Text, Box, Button, IconButton, Separator, TextField, Badge, DropdownMenu } from "@radix-ui/themes";
import {
    FontBoldIcon,
    FontItalicIcon,
    UnderlineIcon,
    TextAlignLeftIcon,
    TextAlignCenterIcon,
    TextAlignRightIcon,
    StrikethroughIcon,
    CodeIcon,
    Link2Icon,
    ListBulletIcon,
    Pencil1Icon,
    TrashIcon,
    Share1Icon,
    BookmarkIcon,
    HeartIcon,
    ChatBubbleIcon,
    PlusIcon,
    MagnifyingGlassIcon,
    GearIcon,
    DotsVerticalIcon,
    PlayIcon,
    PauseIcon,
    StopIcon,
    SpeakerLoudIcon
} from '@radix-ui/react-icons';

export default function ToolbarComponent() {
    const [activeAlignment, setActiveAlignment] = useState<'left' | 'center' | 'right'>('left');
    const [activeFormats, setActiveFormats] = useState<Set<string>>(new Set());
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleFormat = (format: string) => {
        const newFormats = new Set(activeFormats);
        if (newFormats.has(format)) {
            newFormats.delete(format);
        } else {
            newFormats.add(format);
        }
        setActiveFormats(newFormats);
    };

    return (
        <Flex direction="column" gap="6">
            <Text size="2" as="p">
                Aunque Toolbar no está disponible en Radix UI Themes, puedes crear toolbars efectivas usando componentes Flex con Button e IconButton.
            </Text>

            {/* Toolbar básica */}
            <Box>
                <Text size="3" weight="bold" mb="3">Toolbar básica</Text>
                <Flex
                    align="center"
                    gap="1"
                    p="2"
                    style={{
                        backgroundColor: 'var(--gray-a3)',
                        borderRadius: 'var(--radius-3)',
                        border: '1px solid var(--gray-a6)'
                    }}
                >
                    <Button size="1" variant="ghost">Nuevo</Button>
                    <Button size="1" variant="ghost">Abrir</Button>
                    <Button size="1" variant="ghost">Guardar</Button>
                    <Separator orientation="vertical" />
                    <Button size="1" variant="ghost">Deshacer</Button>
                    <Button size="1" variant="ghost">Rehacer</Button>
                    <Separator orientation="vertical" />
                    <Button size="1" variant="ghost">Cortar</Button>
                    <Button size="1" variant="ghost">Copiar</Button>
                    <Button size="1" variant="ghost">Pegar</Button>
                </Flex>
            </Box>

            {/* Toolbar de editor de texto */}
            <Box>
                <Text size="3" weight="bold" mb="3">Editor de texto</Text>
                <Flex
                    align="center"
                    gap="1"
                    p="2"
                    style={{
                        backgroundColor: 'var(--gray-a3)',
                        borderRadius: 'var(--radius-3)',
                        border: '1px solid var(--gray-a6)'
                    }}
                >
                    <IconButton
                        size="1"
                        variant={activeFormats.has('bold') ? 'solid' : 'ghost'}
                        onClick={() => toggleFormat('bold')}
                    >
                        <FontBoldIcon />
                    </IconButton>
                    <IconButton
                        size="1"
                        variant={activeFormats.has('italic') ? 'solid' : 'ghost'}
                        onClick={() => toggleFormat('italic')}
                    >
                        <FontItalicIcon />
                    </IconButton>
                    <IconButton
                        size="1"
                        variant={activeFormats.has('underline') ? 'solid' : 'ghost'}
                        onClick={() => toggleFormat('underline')}
                    >
                        <UnderlineIcon />
                    </IconButton>
                    <IconButton
                        size="1"
                        variant={activeFormats.has('strikethrough') ? 'solid' : 'ghost'}
                        onClick={() => toggleFormat('strikethrough')}
                    >
                        <StrikethroughIcon />
                    </IconButton>

                    <Separator orientation="vertical" />

                    <IconButton
                        size="1"
                        variant={activeAlignment === 'left' ? 'solid' : 'ghost'}
                        onClick={() => setActiveAlignment('left')}
                    >
                        <TextAlignLeftIcon />
                    </IconButton>
                    <IconButton
                        size="1"
                        variant={activeAlignment === 'center' ? 'solid' : 'ghost'}
                        onClick={() => setActiveAlignment('center')}
                    >
                        <TextAlignCenterIcon />
                    </IconButton>
                    <IconButton
                        size="1"
                        variant={activeAlignment === 'right' ? 'solid' : 'ghost'}
                        onClick={() => setActiveAlignment('right')}
                    >
                        <TextAlignRightIcon />
                    </IconButton>

                    <Separator orientation="vertical" />

                    <IconButton size="1" variant="ghost">
                        <Link2Icon />
                    </IconButton>
                    <IconButton size="1" variant="ghost">
                        <ListBulletIcon />
                    </IconButton>
                    <IconButton size="1" variant="ghost">
                        <CodeIcon />
                    </IconButton>
                </Flex>
            </Box>

            {/* Toolbar con grupos y etiquetas */}
            <Box>
                <Text size="3" weight="bold" mb="3">Toolbar con grupos</Text>
                <Flex direction="column" gap="2">
                    <Flex
                        align="center"
                        justify="between"
                        p="2"
                        style={{
                            backgroundColor: 'var(--gray-a3)',
                            borderRadius: 'var(--radius-3)',
                            border: '1px solid var(--gray-a6)'
                        }}
                    >
                        <Flex align="center" gap="2">
                            <Text size="1" weight="bold" style={{ color: 'var(--gray-11)' }}>ARCHIVO</Text>
                            <Button size="1" variant="ghost">Nuevo</Button>
                            <Button size="1" variant="ghost">Abrir</Button>
                            <Button size="1" variant="ghost">Guardar</Button>

                            <Separator orientation="vertical" />

                            <Text size="1" weight="bold" style={{ color: 'var(--gray-11)' }}>EDITAR</Text>
                            <IconButton size="1" variant="ghost"><FontBoldIcon /></IconButton>
                            <IconButton size="1" variant="ghost"><FontItalicIcon /></IconButton>
                            <IconButton size="1" variant="ghost"><UnderlineIcon /></IconButton>
                        </Flex>

                        <Flex align="center" gap="2">
                            <Badge color="blue">v1.0</Badge>
                            <IconButton size="1" variant="ghost">
                                <GearIcon />
                            </IconButton>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>

            {/* Toolbar de aplicación */}
            <Box>
                <Text size="3" weight="bold" mb="3">Toolbar de aplicación</Text>
                <Flex
                    align="center"
                    justify="between"
                    p="3"
                    style={{
                        backgroundColor: 'var(--gray-1)',
                        borderRadius: 'var(--radius-3)',
                        border: '1px solid var(--gray-6)',
                        boxShadow: 'var(--shadow-2)'
                    }}
                >
                    <Flex align="center" gap="3">
                        <Text size="3" weight="bold">Mi Aplicación</Text>
                        <Separator orientation="vertical" />
                        <Button size="2" variant="ghost">Dashboard</Button>
                        <Button size="2" variant="ghost">Proyectos</Button>
                        <Button size="2" variant="ghost">Equipo</Button>
                    </Flex>

                    <Flex align="center" gap="2">
                        <TextField.Root size="1" placeholder="Buscar...">
                            <TextField.Slot>
                                <MagnifyingGlassIcon height="14" width="14" />
                            </TextField.Slot>
                        </TextField.Root>
                        <IconButton size="2" variant="ghost">
                            <ChatBubbleIcon />
                        </IconButton>
                        <IconButton size="2" variant="ghost">
                            <GearIcon />
                        </IconButton>
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <IconButton size="2" variant="ghost">
                                    <DotsVerticalIcon />
                                </IconButton>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item>Perfil</DropdownMenu.Item>
                                <DropdownMenu.Item>Configuración</DropdownMenu.Item>
                                <DropdownMenu.Separator />
                                <DropdownMenu.Item>Cerrar sesión</DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>
                    </Flex>
                </Flex>
            </Box>

            {/* Toolbar de medios */}
            <Box>
                <Text size="3" weight="bold" mb="3">Reproductor de medios</Text>
                <Flex
                    align="center"
                    gap="2"
                    p="3"
                    style={{
                        backgroundColor: 'var(--gray-2)',
                        borderRadius: 'var(--radius-4)',
                        border: '1px solid var(--gray-6)'
                    }}
                >
                    <IconButton
                        size="2"
                        variant="solid"
                        onClick={() => setIsPlaying(!isPlaying)}
                    >
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </IconButton>
                    <IconButton size="2" variant="ghost">
                        <StopIcon />
                    </IconButton>

                    <Separator orientation="vertical" />

                    <Flex align="center" gap="2" style={{ flex: 1 }}>
                        <Text size="2">0:00</Text>
                        <Box
                            style={{
                                flex: 1,
                                height: 4,
                                backgroundColor: 'var(--gray-a6)',
                                borderRadius: 2,
                                position: 'relative'
                            }}
                        >
                            <Box
                                style={{
                                    width: '30%',
                                    height: '100%',
                                    backgroundColor: 'var(--accent-9)',
                                    borderRadius: 2
                                }}
                            />
                        </Box>
                        <Text size="2">3:24</Text>
                    </Flex>

                    <Separator orientation="vertical" />

                    <IconButton size="2" variant="ghost">
                        <SpeakerLoudIcon />
                    </IconButton>
                </Flex>
            </Box>

            {/* Toolbar de acciones de post */}
            <Box>
                <Text size="3" weight="bold" mb="3">Acciones de post</Text>
                <Flex
                    align="center"
                    gap="1"
                    p="2"
                    style={{
                        backgroundColor: 'var(--gray-a2)',
                        borderRadius: 'var(--radius-3)',
                        border: '1px solid var(--gray-a5)'
                    }}
                >
                    <IconButton size="1" variant="ghost">
                        <HeartIcon />
                    </IconButton>
                    <Text size="1">24</Text>

                    <IconButton size="1" variant="ghost">
                        <ChatBubbleIcon />
                    </IconButton>
                    <Text size="1">8</Text>

                    <IconButton size="1" variant="ghost">
                        <Share1Icon />
                    </IconButton>

                    <Box style={{ flex: 1 }} />

                    <IconButton size="1" variant="ghost">
                        <BookmarkIcon />
                    </IconButton>

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <IconButton size="1" variant="ghost">
                                <DotsVerticalIcon />
                            </IconButton>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>
                                <Pencil1Icon width="14" height="14" />
                                Editar
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>
                                <Share1Icon width="14" height="14" />
                                Compartir
                            </DropdownMenu.Item>
                            <DropdownMenu.Separator />
                            <DropdownMenu.Item color="red">
                                <TrashIcon width="14" height="14" />
                                Eliminar
                            </DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Flex>
            </Box>

            {/* Toolbar vertical */}
            <Box>
                <Text size="3" weight="bold" mb="3">Toolbar vertical</Text>
                <Flex gap="4">
                    <Flex
                        direction="column"
                        gap="1"
                        p="2"
                        style={{
                            backgroundColor: 'var(--gray-a3)',
                            borderRadius: 'var(--radius-3)',
                            border: '1px solid var(--gray-a6)',
                            width: 'fit-content'
                        }}
                    >
                        <IconButton size="2" variant="ghost">
                            <PlusIcon />
                        </IconButton>
                        <IconButton size="2" variant="ghost">
                            <Pencil1Icon />
                        </IconButton>
                        <IconButton size="2" variant="ghost">
                            <TrashIcon />
                        </IconButton>
                        <Separator />
                        <IconButton size="2" variant="ghost">
                            <Share1Icon />
                        </IconButton>
                        <IconButton size="2" variant="ghost">
                            <BookmarkIcon />
                        </IconButton>
                    </Flex>

                    <Box
                        style={{
                            padding: '20px',
                            backgroundColor: 'var(--gray-a2)',
                            borderRadius: 'var(--radius-3)',
                            border: '1px solid var(--gray-a5)',
                            flex: 1
                        }}
                    >
                        <Text size="2">
                            Esta es el área de contenido principal. La toolbar vertical proporciona acciones rápidas sin ocupar espacio horizontal.
                        </Text>
                    </Box>
                </Flex>
            </Box>

            {/* Toolbar responsiva */}
            <Box>
                <Text size="3" weight="bold" mb="3">Toolbar responsiva</Text>
                <Flex
                    align="center"
                    gap="2"
                    p="2"
                    wrap="wrap"
                    style={{
                        backgroundColor: 'var(--gray-a3)',
                        borderRadius: 'var(--radius-3)',
                        border: '1px solid var(--gray-a6)'
                    }}
                >
                    <Button size="1" variant="ghost">Nuevo</Button>
                    <Button size="1" variant="ghost">Editar</Button>
                    <Button size="1" variant="ghost">Eliminar</Button>

                    <Separator orientation="vertical" />

                    <IconButton size="1" variant="ghost">
                        <FontBoldIcon />
                    </IconButton>
                    <IconButton size="1" variant="ghost">
                        <FontItalicIcon />
                    </IconButton>
                    <IconButton size="1" variant="ghost">
                        <UnderlineIcon />
                    </IconButton>

                    <Box style={{ flex: 1, minWidth: 100 }} />

                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <Button size="1" variant="ghost">
                                Más
                                <DotsVerticalIcon width="14" height="14" />
                            </Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <DropdownMenu.Item>Configurar</DropdownMenu.Item>
                            <DropdownMenu.Item>Exportar</DropdownMenu.Item>
                            <DropdownMenu.Item>Ayuda</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </Flex>
            </Box>
        </Flex>
    );
}
