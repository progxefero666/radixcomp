//src\db\dbmodelutil.ts

import { Option } from "@/common/models";

import { Workflow } from "@/db/model/workflow";
import { Taskgroup } from "@/db/model/taskgroup";
import { DbTables } from "@/db/dbcatalog";
import { Tasktype } from "@/db/model/tasktype";

export class TasktypeUtil {

    public static getTasktypeAsOptions (codelangs:Tasktype[]): Option[] {
        const options: Option[] = [];
        for (const item of codelangs) {
            const option = new Option(item.id.toString(),item.tename,null,null,null);
            options.push(option);
        }
        return options;
    }//end 

}//end class

export class WorkflowUtil {

    public static getTaskgroupsAsOptions (taskgroups:Workflow[]): Option[] {
        const options: Option[] = [];
        for (const item of taskgroups) {
            const option = new Option(item.id.toString(),item.wwname,null);
            options.push(option);
        }
        return options;
    }//end 

}//end class DbModelUtil


export class TaskgroupUtil {

    public static getCodelangsAsOptions (codelangs:Taskgroup[]): Option[] {
        const options: Option[] = [];
        for (const item of codelangs) {
            const option = new Option(item.id.toString(),item.tpname,null,null,null);
            options.push(option);
        }
        return options;
    }//end 

}//end class DbModelUtil