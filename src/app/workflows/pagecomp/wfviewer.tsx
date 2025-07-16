//src\app\workflows\pagecomp\wfviewer.tsx

import { Flex,Text,Box,Button } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";
import { AppWorkflowsConfig, AppWorkflowsReader } from "@/front/appworkflows";
import { Workflow } from "@/db/model/workflow";
import CardWorkflowPreview from "@/app/workflows/cards/cardwfpreview";
import { InfoNotdata } from "@/radix/data/infonotdata";

interface CompProps {
    workflowId: number;
    mode?: string;
    onedition?: () => void;
}
export const WorkflowViewer = ({ workflowId, mode: actpanel }: CompProps) => {
    
    let initialized: boolean = false;
    const [mode, setMode] = useState<string>(AppWorkflowsConfig.VIEW_DEFAULT);

    const workflow = useRef<Workflow>(null);

    useEffect(() => {
        if(initialized) {return;}         
        const init = async () => {
            workflow.current = await AppWorkflowsReader.read_workflow(workflowId);
            initialized = true;
        };
        init();
    }, []);
        
    if(!initialized){
        return(<InfoNotdata message="loading Workflow" />)
    } 
    const renderWorkflow = () => {
        return (
            <CardWorkflowPreview workflow={workflow.current!} />
        )
    }

    const renderJson = () => {
        return (
            <CardWorkflowPreview workflow={workflow.current!} />
        )
    }    

    const renderPrompt = () => {
        return (
            <CardWorkflowPreview workflow={workflow.current!} />
        )
    }

    const renderSql = () => {
        return (
            <CardWorkflowPreview workflow={workflow.current!} />
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