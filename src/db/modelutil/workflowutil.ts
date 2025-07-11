//src\db\dbmodelutil.ts

import { EditableOption, EditableOptionId, Option } from "@/common/models";
//import { DbTables } from "@/db/dbcatalog";

import { Workflow } from "@/db/model/workflow";
import { Taskcategory } from "@/db/model/taskcategory";
import { Tasktype } from "@/db/model/tasktype";
import { Task } from "@/db/model/task";


export const getTasktypeAsOptions = (codelangs: Tasktype[]): Option[] => {
    const options: Option[] = [];
    for (const item of codelangs) {
        const option = new Option(item.id.toString(), item.tename, null);
        options.push(option);
    }
    return options;
}//end 

export const getWorkflowsAsOptions = (taskgroups: Workflow[]): Option[] => {
    const options: Option[] = [];
    for (const item of taskgroups) {
        const option = new Option(item.id.toString(), item.wwname, null);
        options.push(option);
    }
    return options;
}//end 

export const getTaskcategoriessAsOptions = (codelangs: Taskcategory[]): Option[] => {
    const options: Option[] = [];
    for (const item of codelangs) {
        const option = new Option(item.id.toString(), item.tpname, null);
        options.push(option);
    }
    return options;
}//end     

export const getTaskcatsAsEditableOptions = (collection: Taskcategory[]): EditableOptionId[] => {
    const options: EditableOptionId[] = [];
    for (let idx=0;idx<collection.length;idx++) {
        const option = new EditableOptionId(collection[idx].id,idx,collection[idx].tpname);
        options.push(option);
    }
    return options;
}//end     



/*
    const [clangs,setClangs] = useState<Option[]|null>(null);
    const [clangSelected,setClangSelected] = useState<string|null>(null);
    {clangSelected !== null &&
        <XInputSelect
                inline={true}
                label="Code Langs: "
                collection={clangs!}
                default={clangSelected}
                onchange={onchange}
                disabled={false} />  } 
*/


