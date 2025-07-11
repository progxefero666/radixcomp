//src\db\dbmodelutil.ts

import { Option } from "@/common/models";
import { Codelang } from "@/db/model/codelang";
import { parseCollection } from "@/front/parser/javascriptparser";
import { DbTables } from "@/db/dbcatalog";

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

export class CodelangUtil {

    public static getCodelangsAsOptions (codelangs:Codelang[]): Option[] {
        const options: Option[] = [];
        for (const item of codelangs) {
            const option = new Option(item.id.toString(),item.cgname,null,null,null);
            options.push(option);
        }
        return options;
    }//end 

}//end class DbModelUtil

