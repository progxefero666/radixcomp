//src\db\dbmodelutil.ts

import { Option } from "@/common/models";
import { Codelang } from "@/db/model/codelang";
import { parseCollection } from "@/front/parser/javascriptparser";
import { DbTables } from "@/db/dbcatalog";


export class DbModelUtil {


    public static getCodelangsOptions (codelangs:Codelang[]): Option[] {
        const options: Option[] = [];
        for (const item of codelangs) {
            const option = new Option(item.id.toString(),item.cgname,null,null,null);
            options.push(option);
        }
        return options;
    }//end 

}//end class DbModelUtil

