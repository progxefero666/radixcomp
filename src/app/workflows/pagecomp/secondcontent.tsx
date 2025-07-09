//src\app\workflows\pagecomp\secondcontent.tsx

import { Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { PanelTaskgroups } from "../groups/panelgroups";


interface CompProps {
    section:string;
    onedition?: () => void;
}
export const SecondContent = ({ section }: CompProps) => {

    const [activePanel, setActivePanel] = useState<string>("taskgroups");

    return (
        <Flex width="100%" direction="column" >
           {activePanel == "taskgroups" ? <PanelTaskgroups />: null}
        </Flex>
    );
	
}//end comp