import Layout from "@/components/layout/Layout";
import { Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <Layout>
      <Text>Welcome to the Radix Primitives Sandbox!</Text>
      <Text as="p" mt="2">
        Select a component category from the left sidebar to start exploring.
      </Text>
    </Layout>
  );
}
