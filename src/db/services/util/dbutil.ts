//src\db\dbmodelutil.ts

import { Option } from "@/common/model/option";
import { Proglanguage } from "@/db/model/proglanguage";


export const getProglanguagesAsOptions = (codelangs: Proglanguage[]): Option[] =>{
    const options: Option[] = [];
    for (const item of codelangs) {
        const option = new Option(item.id, item.name);
        options.push(option);
    }
    return options;
}//end 