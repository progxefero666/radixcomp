//src\app\workflows\wfeditor\pagecomp\editorheader.tsx

import React, { useState } from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { DB_ITEM_CMD} from "@/common/database/dbkernel";
import BarButtons from "@/radix/cbars/btbar";
import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";
import { BARCFG_SAVE_CLOSE } from "@/radix/appbars";
import { OpConstants } from "@/common/constants";



interface CompProps {
    onsave: () => void;
}

export function WorkflowEditorHeader({ onsave }: CompProps) {

    const [barbuttons, setBarbuttonsCfg] = useState<BarButtonsCfg>(BARCFG_SAVE_CLOSE);

    const onBarbuttonsClick = (operation: string) => {
        alert("Operation: " + operation);
        if (operation == DB_ITEM_CMD.UPDATE) {

        }
        else if (operation == OpConstants.OP_CLOSE) {

        }
    };

    return (
        <Flex direction="row" justify="end" px="3" py="1" >

            <BarButtons barconfig={barbuttons}
                onclick={onBarbuttonsClick} />

        </Flex>
    );

}//end component