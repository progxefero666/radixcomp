//src\app\workflows\pagecomp\secondcontent.tsx

import { Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { PanelTaskgroups } from "@/app/workflows/pagecomp/panelgroups";
import { MOD_SECTIONS, VIEWER_MODE } from "@/front/workflows/config";
import CardWorkflowPreview from "@/app/workflows/cards/cardwfpreview";
import { Workflow } from "@/db/model/workflow";


interface CompProps {
    workflow?: Workflow|null;
    actpanel?: string;
    onedition?: () => void;
}
export const WorkflowViewer = ({workflow,actpanel}: CompProps) => {
    const [ready,setReady] = useState<boolean>(false);
    const currentPanel = actpanel ? actpanel : VIEWER_MODE.EMPTY;
   
    useEffect(() => {        
        if(ready) {return;}
        const init = async () => {     
            //if(section!=null && section == MOD_SECTIONS.WORKFLOWS) {}   
            setReady(true);
        };
        init();
        
    }, []);    

    const callback = (workflowId:number,action:string) => {
        //alert(action);
    }

    if(!workflow) {
        return (
            <Flex width="100%" direction="column" px="2" pt="0" pb="2" >
                <p>No workflow selected</p>
            </Flex>
        )    
    }

    return (
        <Flex width="100%" direction="column" >
           {currentPanel == VIEWER_MODE.TASKGROUPS? <PanelTaskgroups />: null}
           {currentPanel == VIEWER_MODE.WORKFLOW_PREVIEW? 
            <CardWorkflowPreview workflow={workflow} callback={callback} />: null}           
        </Flex>
    );
	 
}//end comp