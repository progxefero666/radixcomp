//src\app\workflows\wfeditor\pagecomp\mantaskgroups.tsx

import { Taskgroup } from "@/db/model/taskgroup";
import { Task } from "@/db/model/task";


interface CompProps {
    taskgroups: Taskgroup[];
    onsave?: () => void;
}
export default function ManWfTaskGroups({taskgroups,onsave}:CompProps) {

    return (
        <div>
            Manager Task Groups
        </div>
    );

}//end component