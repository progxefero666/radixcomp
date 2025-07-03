//src\app\testcomp\playground.tsx

"use client";

import React, { useEffect, useState } from "react";
import { Link, Flex, Text, Button, Box, Container, Grid } from "@radix-ui/themes";



import {
    createFormScope,
    Form,
    FormField,
    FormLabel,
    FormControl,
    FormValidityState,
    Root,
    Field,
    Label,
    Control,
    Message,
    ValidityState,
    Submit,
} from '@/radix/forms/form';

import {
    FormProps,
    FormFieldProps,
    FormLabelProps,
    FormControlProps,
    FormValidityStateProps,
    FormSubmitProps,
} from '@/radix/forms/form';
import { Sub } from "@radix-ui/react-context-menu";
import { FormMessage } from "@/radix/forms/formmsg";

export const layoutStyle = {
    background: 'rgb(7, 7, 7)',
    border: '2px solidrgb(98, 97, 98)',
    padding: 'var(--space-2)',
};


/**
 * Template - Page Header
 */
interface CompProps { mode?: string; }

export function TestPlayground({ mode }: CompProps) {
    const [formValues, setFormValues] = useState<{ [key: string]: string }>({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
    }, []);

    // Función para manejar el envío del formulario
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        setFormValues(data as { [key: string]: string });
        setSubmitted(true);
        alert("Formulario enviado con éxito");
        console.log("Datos del formulario:", data);
    };

    return (
        <Flex width="100%" direction="column" style={layoutStyle} >
            <Box mb="4">
                <Text size="5" weight="bold">Demostración de Tipos de Input</Text>
                <Text size="2" color="gray">Ejemplos de todos los tipos de FormControl disponibles</Text>
            </Box>

            {/* El componente Form recibe la función onSubmit */}
            <Form onSubmit={handleSubmit}>
                <Flex direction="column" gap="4" style={layoutStyle}>
s
                    <FormField name="text_input">
                        <FormLabel>Texto</FormLabel>
                        <FormControl type="text" required placeholder="Texto normal" />
                        <FormMessage match="valueMissing">Este campo es obligatorio</FormMessage>
                    </FormField>
                    
                    <FormField name="range_input">
                        <FormLabel>Rango (0-100)</FormLabel>
                        <FormControl type="range" min={0} max={100} step={5} defaultValue="50" />
                    </FormField>

                    {/* Botón de envío */}
                    <Box mt="4">
                        <Button type="submit">Enviar formulario</Button>
                    </Box>
                </Flex>
            </Form>

            {/* Mostrar los datos capturados */}
            {submitted && (
                <Box mt="4" p="3" style={{ background: '#e3e3e3', borderRadius: '4px' }}>
                    <Text weight="bold">Datos recibidos:</Text>
                    <pre style={{ marginTop: '8px' }}>
                        {JSON.stringify(formValues, null, 2)}
                    </pre>
                </Box>
            )}
        </Flex>
    );

}//end component

/*

                    
         
                    <FormField name="password_input">
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl type="password" required minLength={6} />
                        <FormMessage match="tooShort">La contraseña debe tener al menos 6 caracteres</FormMessage>
                    </FormField>
    
                    <FormField name="email_input">
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email" required />
                        <FormMessage match="typeMismatch">Por favor ingresa un email válido</FormMessage>
                    </FormField>
            
                    <FormField name="number_input">
                        <FormLabel>Número</FormLabel>
                        <FormControl type="number" min={1} max={100} step={1} />
                        <FormMessage match="rangeOverflow">El valor máximo es 100</FormMessage>
                    </FormField>
 
                    <FormField name="tel_input">
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl type="tel" pattern="[0-9]{9}" />
                        <FormMessage match="patternMismatch">Introduce un número de 9 dígitos</FormMessage>
                    </FormField>
       
                    <FormField name="url_input">
                        <FormLabel>URL</FormLabel>
                        <FormControl type="url" placeholder="https://ejemplo.com" />
                        <FormMessage match="typeMismatch">Introduce una URL válida</FormMessage>
                    </FormField>
      
                    <FormField name="search_input">
                        <FormLabel>Búsqueda</FormLabel>
                        <FormControl type="search" placeholder="Buscar..." />
                    </FormField>

                    <FormField name="datetime_input">
                        <FormLabel>Fecha y Hora</FormLabel>
                        <FormControl type="datetime-local" />
                    </FormField>
             
                    <FormField name="month_input">
                        <FormLabel>Mes</FormLabel>
                        <FormControl type="month" />
                    </FormField>

                    <FormField name="week_input">
                        <FormLabel>Semana</FormLabel>
                        <FormControl type="week" />
                    </FormField>
                    
           
                    <FormField name="color_input">
                        <FormLabel>Color</FormLabel>
                        <FormControl type="color" defaultValue="#ff0000" />
                    </FormField>
                    
          

                 
<FormField name="date_input">
    <FormLabel>Fecha</FormLabel>
    <FormControl type="date" />
</FormField>

<FormField name="time_input">
    <FormLabel>Hora</FormLabel>
    <FormControl type="time" />
</FormField>
*/