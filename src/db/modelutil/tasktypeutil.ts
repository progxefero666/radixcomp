//src\db\dbmodelutil.ts

import { Option } from "@/common/models";
import { Tasktype } from "@/db/model/tasktype";
import { parseCollection } from "@/common/javascriptparser";
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
