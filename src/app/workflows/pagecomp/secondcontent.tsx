//src\app\workflows\pagecomp\secondcontent.tsx

import { Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { PanelTaskgroups } from "@/app/workflows/groups/panelgroups";
import { UiSecondPanels } from "../config";


interface CompProps {
    workflowid?: number|null;
    section:string;
    actpanel?: string;
    onedition?: () => void;
}
export const SecondContent = ({workflowid,section,actpanel}: CompProps) => {

    const currentPanel = actpanel ? actpanel : UiSecondPanels.EMPTY;
    //const currentPanel = actpanel ? actpanel : UiSecondPanels.TASKGROUPS;

    return (
        <Flex width="100%" direction="column" >
           {currentPanel == UiSecondPanels.TASKGROUPS? <PanelTaskgroups />: null}
        </Flex>
    );
	
}//end comp