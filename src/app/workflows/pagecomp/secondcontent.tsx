//src\app\workflows\pagecomp\secondcontent.tsx

import { Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { PanelTaskgroups } from "@/app/workflows/groups/panelgroups";
import { MOD_SECTIONS, UiSecondPanels } from "@/app/workflows/config";
import CardWorkflowPreview from "@/app/workflows/cards/cardwfpreview";
import { Workflow } from "@/db/model/workflow";


interface CompProps {
    workflow?: Workflow|null;
    section:string;
    actpanel?: string;
    onedition?: () => void;
}
export const SecondContent = ({workflow,section,actpanel}: CompProps) => {
    const [ready,setReady] = useState<boolean>(false);
    const currentPanel = actpanel ? actpanel : UiSecondPanels.EMPTY;
   
    useEffect(() => {        
        if(ready) {return;}
        const init = async () => {     
            if(section!=null && section == MOD_SECTIONS.WORKFLOWS) {
                if(actpanel== UiSecondPanels.WORKFLOW_PREVIEW && workflow!=null) {
                //await appRef.current?.loadWorkflow(workflowid);
                }
            }   
            setReady(true);
        };
        init();
        
    }, []);    

    const callback = (workflowId:number,action:string) => {
        alert(action);
    }

    return (
        <Flex width="100%" direction="column" >
           {currentPanel == UiSecondPanels.TASKGROUPS? <PanelTaskgroups />: null}
           {currentPanel == UiSecondPanels.WORKFLOW_PREVIEW? 
            <CardWorkflowPreview callback={callback} />
        : null}           
        </Flex>
    );
	 
}//end comp