"use client";

import React from "react";
import { Flex, Text, ScrollArea as RadixScrollArea, Box, Card } from "@radix-ui/themes";

// Datos de ejemplo
const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
const LONG_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum, magna cursus bibendum vehicula, nulla libero tempor nunc, nec cursus magna quam eget ipsum. Sed auctor, libero eu ultricies consectetur, nulla nunc ultricies nunc, nec cursus magna quam eget ipsum. Pellentesque fermentum, magna cursus bibendum vehicula, nulla libero tempor nunc, nec cursus magna quam eget ipsum. Sed auctor, libero eu ultricies consectetur, nulla nunc ultricies nunc, nec cursus magna quam eget ipsum.`;

export default function ScrollAreaComponent() {
    return (
        <Flex direction="column" gap="6">
            <Text size="2" as="p">
                Augments native scroll functionality for custom, cross-browser styling.
            </Text>

            {/* Ejemplo básico - Lista de tags */}
            <Box>
                <Text size="3" weight="bold" mb="3">Lista de versiones</Text>
                <RadixScrollArea
                    style={{
                        width: 200,
                        height: 225,
                        borderRadius: 'var(--radius-3)',
                        border: '1px solid var(--gray-a6)',
                        padding: '15px 20px',
                        backgroundColor: 'var(--gray-a2)'
                    }}
                >
                    <Text size="2" weight="bold" mb="2">Tags</Text>
                    {TAGS.map((tag) => (
                        <Text
                            as="div"
                            size="1"
                            key={tag}
                            style={{
                                color: 'var(--gray-11)',
                                marginTop: tag === TAGS[0] ? undefined : 10,
                                borderTop: tag === TAGS[0] ? undefined : '1px solid var(--gray-a5)',
                                paddingTop: tag === TAGS[0] ? undefined : 10,
                            }}
                        >
                            {tag}
                        </Text>
                    ))}
                </RadixScrollArea>
            </Box>

            {/* Ejemplo con texto largo */}
            <Box>
                <Text size="3" weight="bold" mb="3">Texto largo con scroll</Text>
                <RadixScrollArea
                    style={{
                        width: 400,
                        height: 150,
                        borderRadius: 'var(--radius-3)',
                        border: '1px solid var(--gray-a6)',
                        padding: '15px 20px',
                        backgroundColor: 'var(--gray-a2)'
                    }}
                >
                    <Text size="2" style={{ lineHeight: 1.6 }}>{LONG_TEXT}</Text>
                </RadixScrollArea>
            </Box>

            {/* Ejemplo horizontal */}
            <Box>
                <Text size="3" weight="bold" mb="3">Scroll horizontal</Text>
                <RadixScrollArea
                    style={{
                        width: 300,
                        height: 80,
                        borderRadius: 'var(--radius-3)',
                        border: '1px solid var(--gray-a6)',
                        padding: '15px 20px',
                        backgroundColor: 'var(--gray-a2)'
                    }}
                >
                    <Flex gap="3" style={{ width: 600 }}>
                        {Array.from({ length: 10 }).map((_, i) => (
                            <Card key={i} style={{ minWidth: 120, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Text size="2">Item {i + 1}</Text>
                            </Card>
                        ))}
                    </Flex>
                </RadixScrollArea>
            </Box>

            {/* Ejemplo con diferentes tamaños */}
            <Flex gap="4" wrap="wrap">
                <Box>
                    <Text size="2" weight="bold" mb="2">Tamaño pequeño</Text>
                    <RadixScrollArea
                        style={{
                            width: 150,
                            height: 100,
                            borderRadius: 'var(--radius-2)',
                            border: '1px solid var(--gray-a6)',
                            padding: '10px',
                            backgroundColor: 'var(--gray-a2)'
                        }}
                    >
                        {TAGS.slice(0, 10).map((tag) => (
                            <Text as="div" size="1" key={tag} style={{ marginBottom: 5 }}>
                                {tag}
                            </Text>
                        ))}
                    </RadixScrollArea>
                </Box>

                <Box>
                    <Text size="2" weight="bold" mb="2">Tamaño mediano</Text>
                    <RadixScrollArea
                        style={{
                            width: 200,
                            height: 150,
                            borderRadius: 'var(--radius-3)',
                            border: '1px solid var(--gray-a6)',
                            padding: '12px',
                            backgroundColor: 'var(--gray-a2)'
                        }}
                    >
                        {TAGS.slice(0, 15).map((tag) => (
                            <Text as="div" size="2" key={tag} style={{ marginBottom: 8 }}>
                                {tag}
                            </Text>
                        ))}
                    </RadixScrollArea>
                </Box>

                <Box>
                    <Text size="2" weight="bold" mb="2">Tamaño grande</Text>
                    <RadixScrollArea
                        style={{
                            width: 250,
                            height: 200,
                            borderRadius: 'var(--radius-4)',
                            border: '1px solid var(--gray-a6)',
                            padding: '15px',
                            backgroundColor: 'var(--gray-a2)'
                        }}
                    >
                        {TAGS.map((tag) => (
                            <Text as="div" size="2" key={tag} style={{ marginBottom: 10, padding: '5px 8px', borderRadius: 'var(--radius-2)', backgroundColor: 'var(--gray-a3)' }}>
                                {tag}
                            </Text>
                        ))}
                    </RadixScrollArea>
                </Box>
            </Flex>

            {/* Ejemplo con contenido mixto */}
            <Box>
                <Text size="3" weight="bold" mb="3">Contenido mixto</Text>
                <RadixScrollArea
                    style={{
                        width: 350,
                        height: 250,
                        borderRadius: 'var(--radius-3)',
                        border: '1px solid var(--gray-a6)',
                        padding: '20px',
                        backgroundColor: 'var(--gray-a2)'
                    }}
                >
                    <Flex direction="column" gap="4">
                        <Box>
                            <Text size="3" weight="bold">Título principal</Text>
                            <Text size="2" style={{ color: 'var(--gray-11)' }}>Subtítulo descriptivo</Text>
                        </Box>

                        <Box>
                            <Text size="2" weight="bold" mb="2">Lista de elementos:</Text>
                            {Array.from({ length: 8 }).map((_, i) => (
                                <Card key={i} style={{ marginBottom: 8, padding: '8px 12px' }}>
                                    <Text size="2">Elemento {i + 1}</Text>
                                    <Text size="1" style={{ color: 'var(--gray-11)' }}>Descripción del elemento</Text>
                                </Card>
                            ))}
                        </Box>

                        <Box>
                            <Text size="2" weight="bold" mb="2">Texto adicional:</Text>
                            <Text size="2" style={{ lineHeight: 1.5 }}>{LONG_TEXT}</Text>
                        </Box>
                    </Flex>
                </RadixScrollArea>
            </Box>
        </Flex>
    );
}
