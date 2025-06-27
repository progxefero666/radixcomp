"use client";

import Layout from "@/app_front/comp/layout";
import { Text } from "@radix-ui/themes";

/**
 * Application Main page --> Radix Primitives Sandbox
 * 
 */
export default function Home() {
    return (
        <Layout>
            <Text>Welcome to the Radix Primitives Sandbox!</Text>
            <Text as="p" mt="2">
                Select a component category from the left sidebar to start exploring.
            </Text>
        </Layout>
    );

}//end class
