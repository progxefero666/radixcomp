//src\app\workflows\pagecomp\wfviewer.tsx

import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import { AppWorkflowsConfig } from "@/front/appworkflows";
import { Workflow } from "@/db/model/workflow";
import CardWorkflowPreview from "@/app/workflows/cards/cardwfpreview";

interface CompProps {
    workflow?: Workflow | null;
    mode?: string;
    onedition?: () => void;
}
export const WorkflowViewer = ({ workflow, mode: actpanel }: CompProps) => {
    const [mode, setMode] = useState<string>(AppWorkflowsConfig.VIEW_DEFAULT);

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
    
    return (
        <Flex width="100%" direction="column" >
            {mode == AppWorkflowsConfig.VIEW_DEFAULT ? renderWorkflow() : null}
            {mode == AppWorkflowsConfig.VIEW_JSON ? renderJson() : null}
            {mode == AppWorkflowsConfig.VIEW_SQL ? renderSql() : null}
            {mode == AppWorkflowsConfig.VIEW_PROMPT ? renderPrompt() : null}
        </Flex>
    );

}//end comp