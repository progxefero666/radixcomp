//src\app\workflows\wfeditor\pagecomp\primarybar.tsx

import { Taskcategory } from "@/db/model/taskcategory";


interface CompProps {
    taskgroups: Taskcategory[];
    onsave?: () => void;
}
export default function WorkflowPrimaryBar({taskgroups,onsave}:CompProps) {

    return (
        <div>
            Manager Task Groups
        </div>
    );

}//end component