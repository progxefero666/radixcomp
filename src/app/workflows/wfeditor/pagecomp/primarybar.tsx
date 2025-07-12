//src\app\workflows\wfeditor\pagecomp\primarybar.tsx

import { Taskcategory } from "@/db/model/taskcategory";
import { useRef } from "react";
import { ManagerTaskcategories } from "../categories/mantaskcats";
import React from "react";


interface CompProps {
    collection: Taskcategory[];
    onsave?: () => void;
}
export default function WorkflowPrimaryBar({collection: taskgroups,onsave}:CompProps) {
    
    const ref = React.useRef<ManagerTaskcategories>(null);
    return (
        <div>
            Manager Task Groups
        </div>
    );

}//end component