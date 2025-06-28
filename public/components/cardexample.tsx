import React from "react";
import { Box, Card, Text, Heading, Separator } from "@radix-ui/themes";

interface CardExampleProps {
    title: string;
    children: React.ReactNode;
    id?: string;
}
export default function CardExample({title,children,id }: CardExampleProps) {
    return (
        <Card id={id} mb="5" variant="surface" size="2">
            <Box p="3">
                <Heading size="3" mb="2" trim="start">
                    {title}
                </Heading>
                <Separator size="4" mb="3" />
                {children}
            </Box>
        </Card>
    );

}//end component
