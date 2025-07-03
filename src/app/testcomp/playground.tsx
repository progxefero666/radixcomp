//src\app\testcomp\playground.tsx

"use client";

import React, { useEffect, useState } from "react";
import { Link, Flex, Text, Button, Box, Container, Grid } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { renderHomeButton } from "@/radix/radixbuttons";

//import { Field,Label,Message,Form,Control, FormSubmit } from "@radix-ui/react-form";

import { Form} from "@radix-ui/react-form";

import { Sub } from "@radix-ui/react-context-menu";



export const layoutStyle = {
    background: '#c1c1c1',
    border: '2px solidrgb(98, 97, 98)',
    padding: 'var(--space-2)',
};

export const columnStyle = {
    borderColor: 'rgb(98, 97, 98)',
    background: '#ff00ff'
};

/**
 * Template - Page Header
 */
interface CompProps { mode?: string; }

export function TestPlayground({ mode }: CompProps) {

    useEffect(() => {
    }, []);

    
 

    return (
        <Flex width="100%" direction="column" style={layoutStyle} >

        <Form>

        </Form>
    

        </Flex>
    );

}//end component

/*
                       <Field name="username"  >
                <Label>Username</Label>
                <Control></Control>
                <Message></Message>
            </Field>
            <Field name="userpass"  >
                <Label>userpass</Label>
                <Control></Control>
                <Message></Message>
            </Field>            
            <FormSubmit>Submit</FormSubmit>
            <Form.Root>
                <Form.Field>
                    <Form.Label />
                    <Form.Control />
                    <Form.Message />
                    <Form.ValidityState />
                </Form.Field>

                <Form.Message />
                <Form.ValidityState />

                <Form.Submit />
            </Form.Root>
            
            <Grid columns="20% 60% 20%" gap="2">
                <Box >Column I</Box>
                <Box>Column Center</Box>
                <Box>Column R</Box>
            </Grid>
*/