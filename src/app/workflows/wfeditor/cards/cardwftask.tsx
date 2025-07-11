//src\app\workflows\wfeditor\cards\cardwftask.tsx

import { Task } from "@/db/model/task";


interface CompProps {
    task: Task;
    onsave?: () => void;
}
export default function CardWorkflowMain({task,onsave}:CompProps) {

    return (
        <div></div>
    );

}//end component