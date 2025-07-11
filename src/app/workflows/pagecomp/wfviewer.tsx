//src\app\workflows\pagecomp\wfviewer.tsx

import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import { VIEWER_MODE } from "@/front/workflows/config";
import { Workflow } from "@/db/model/workflow";
import CardWorkflowPreview from "@/app/workflows/cards/cardwfpreview";

interface CompProps {
    workflow?: Workflow | null;
    mode?: string;
    onedition?: () => void;
}
export const WorkflowViewer = ({ workflow, mode: actpanel }: CompProps) => {
    const [mode, setMode] = useState<string>(VIEWER_MODE.DEFAULT);

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
            {mode == VIEWER_MODE.DEFAULT ? renderWorkflow() : null}
            {mode == VIEWER_MODE.JSON ? renderJson() : null}
            {mode == VIEWER_MODE.SQL ? renderSql() : null}
            {mode == VIEWER_MODE.PROMPT ? renderPrompt() : null}
        </Flex>
    );

}//end comp