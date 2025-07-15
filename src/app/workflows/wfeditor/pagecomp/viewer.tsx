//src\app\workflows\editor\[id]\pagecomp\secondcontent.tsx

import { Flex, Tabs, Box, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

import { Workflow } from "@/db/model/workflow";
import CardWorkflowPreview from "../../cards/cardwfpreview";


interface CompProps {
    workflow: Workflow;
}
export const WorkflowViewer = ({ workflow }: CompProps) => {

    if (!workflow) {
        return (
            <Flex width="100%" direction="column" px="2" pt="0" pb="2" >
                <p>No workflow selected</p>
            </Flex>
        )
    }
    const renderWorkflow = () => {
        return (
            <CardWorkflowPreview workflow={workflow} />
        )
    }

    const renderJson = () => {
        return (
            <CardWorkflowPreview workflow={workflow} />
        )
    }

    const renderPrompt = () => {
        return (
            <CardWorkflowPreview workflow={workflow} />
        )
    }

    const renderSql = () => {
        return (
            <CardWorkflowPreview workflow={workflow} />
        )
    }

    const renderGraph = () => {
        return (
            <CardWorkflowPreview workflow={workflow} />
        )
    }

    return (
        <Flex width="100%" direction="column" >
            <Tabs.Root defaultValue="account">
                <Tabs.List>
                    <Tabs.Trigger value="workflow">Workflow</Tabs.Trigger>
                    <Tabs.Trigger value="graph">Graph</Tabs.Trigger>
                    <Tabs.Trigger value="prompt">Prompt</Tabs.Trigger>
                    <Tabs.Trigger value="json">JSon</Tabs.Trigger>
                    <Tabs.Trigger value="sql">Sql</Tabs.Trigger>
                </Tabs.List>

                <Box pt="3">
                    <Tabs.Content value="workflow">
                        {renderWorkflow()}
                    </Tabs.Content>

                    <Tabs.Content value="graph">
                        {renderGraph()}
                    </Tabs.Content>

                    <Tabs.Content value="prompt">
                        {renderPrompt()}
                    </Tabs.Content>

                    <Tabs.Content value="json">
                        {renderJson()}
                    </Tabs.Content>

                    <Tabs.Content value="sql">
                        {renderSql()}
                    </Tabs.Content>
                </Box>
            </Tabs.Root>

        </Flex>
    );

}//end comp
