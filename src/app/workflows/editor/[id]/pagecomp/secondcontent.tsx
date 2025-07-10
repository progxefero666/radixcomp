//src\app\workflows\editor\[id]\pagecomp\secondcontent.tsx

import { Flex, Tabs,Box, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

import { Workflow } from "@/db/model/workflow";


interface CompProps {
    workflow?: Workflow | null;
}
export const SecondContent = ({ workflow }: CompProps) => {

    const [ready, setReady] = useState<boolean>(true);

    useEffect(() => {
        /*
        if (ready) { return; }
        const init = async () => {
            setReady(true);
        };
        init();
        */

    }, []);

    if (!workflow) {
        return (
            <Flex width="100%" direction="column" px="2" pt="0" pb="2" >
                <p>No workflow selected</p>
            </Flex>
        )
    }

    return (
        <Flex width="100%" direction="column" >
            <Tabs.Root defaultValue="account">
                <Tabs.List>
                    <Tabs.Trigger value="graph">Graph</Tabs.Trigger>
                    <Tabs.Trigger value="prompt">Prompt</Tabs.Trigger>
                    <Tabs.Trigger value="json">JSon</Tabs.Trigger>
                    <Tabs.Trigger value="sql">Sql</Tabs.Trigger>
                </Tabs.List>

                <Box pt="3">
                    <Tabs.Content value="graph">
                        <Text size="2">graph content.</Text>
                    </Tabs.Content>

                    <Tabs.Content value="prompt">
                        <Text size="2">prompt content.</Text>
                    </Tabs.Content>

                    <Tabs.Content value="json">
                        <Text size="2">Json content.</Text>
                    </Tabs.Content>

                    <Tabs.Content value="sql">
                        <Text size="2">SqlContent.</Text>
                    </Tabs.Content>
                </Box>
            </Tabs.Root>

        </Flex>
    );

}//end comp

/*
       {currentPanel == UiSecondPanels.TASKGROUPS? <PanelTaskgroups />: null}
       {currentPanel == UiSecondPanels.WORKFLOW_PREVIEW? 
        <CardWorkflowPreview workflow={workflow} callback={callback} />: null}             
*/