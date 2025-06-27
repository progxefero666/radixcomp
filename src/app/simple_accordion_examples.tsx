"use client";

import React from "react";
import { Flex, Text, Box } from "@radix-ui/themes";
import SimpleAccordion, { AccordionItem } from "@/components/common/accordion";

export default function AccordionExamples() {
  const faqItems = [
    {
      id: "faq-1",
      question: "¿Qué es Radix UI?",
      answer: "Radix UI es una biblioteca de componentes de bajo nivel y sin estilos que proporciona los elementos básicos accesibles para crear sistemas de diseño de alta calidad."
    },
    {
      id: "faq-2", 
      question: "¿Es gratis usar Radix UI?",
      answer: "Sí, Radix UI es completamente gratuito y de código abierto. Puedes usarlo en proyectos comerciales sin ningún costo."
    },
    {
      id: "faq-3",
      question: "¿Necesito conocimientos de CSS?",
      answer: "Sí, Radix UI proporciona la funcionalidad sin estilos, por lo que necesitarás CSS o una biblioteca de estilos para darle apariencia a los componentes."
    }
  ];

  return (
    <Flex direction="column" gap="6">
      {/* Ejemplo 1: Lista con map */}
      <Box>
        <Text size="3" weight="bold" mb="3">FAQ - Lista de preguntas</Text>
        <SimpleAccordion type="single" defaultValue="faq-1" collapsible={true}>
          {faqItems.map((item) => (
            <AccordionItem 
              key={item.id}
              value={item.id} 
              title={item.question}
            >
              <Text size="2">{item.answer}</Text>
            </AccordionItem>
          ))}
        </SimpleAccordion>
      </Box>

      {/* Ejemplo 2: Contenido simple en 2 secciones */}
      <Box>
        <Text size="3" weight="bold" mb="3">Información básica</Text>
        <SimpleAccordion type="single" defaultValue="intro" collapsible={true}>
          <AccordionItem value="intro" title="Introducción">
            <Text size="2">
              Bienvenido a nuestra aplicación de demostración de componentes Radix UI. 
              Aquí puedes explorar diferentes componentes y ver cómo funcionan en la práctica.
            </Text>
          </AccordionItem>
          
          <AccordionItem value="features" title="Características principales">
            <Text size="2">
              • Componentes accesibles por defecto<br/>
              • Totalmente personalizables<br/>
              • Compatibles con TypeScript<br/>
              • Optimizados para rendimiento<br/>
              • Fáciles de usar e integrar
            </Text>
          </AccordionItem>
        </SimpleAccordion>
      </Box>
    </Flex>
  );
}
