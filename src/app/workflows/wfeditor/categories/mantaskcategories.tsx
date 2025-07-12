//src\app\workflows\wfeditor\pagecomp\mantaskgroups.tsx

import { Taskcategory } from "@/db/model/taskcategory";
import { Task } from "@/db/model/task";


interface CompProps {
    taskgroups: Taskcategory[];
    onsave?: () => void;
}
export default function ManWfTaskcategories({taskgroups,onsave}:CompProps) {

    return (
        <div>
            Manager Task Groups
        </div>
    );

}//end component