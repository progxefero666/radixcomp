//src\db\dbmodelutil.ts

import { Option } from "@/common/model/option";
import { Codelang } from "@/db/model/codelang";
import { DbTables } from "@/db/dbcatalog";


export const getCodelangsAsOptions = (codelangs: Codelang[]): Option[] =>{
    const options: Option[] = [];
    for (const item of codelangs) {
        const option = new Option(item.id!.toString(), item.name, null, null, null);
        options.push(option);
    }
    return options;
}//end 