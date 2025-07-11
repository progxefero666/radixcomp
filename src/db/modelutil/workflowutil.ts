//src\db\dbmodelutil.ts

import { Option } from "@/common/models";
import { Workflow } from "@/db/model/workflow";
import { Taskgroup } from "@/db/model/taskgroup";
import { Task } from "@/db/model/task";
import { parseCollection } from "@/front/parser/javascriptparser";
import { DbTables } from "@/db/dbcatalog";


export class WorkflowUtil {

    public static getTaskgroupsAsOptions (taskgroups:Taskgroup[]): Option[] {
        const options: Option[] = [];
        for (const item of taskgroups) {
            const option = new Option(item.id.toString(),item.tpname,null);
            options.push(option);
        }
        return options;
    }//end 

}//end class DbModelUtil

